import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCourseBySlug, getLesson } from "@/data/courses";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type Viewer = {
  id: string;
  email: string;
  fullName: string | null;
  phone: string | null;
  isAdmin: boolean;
};

/** courseSlug -> access expiry (ISO string) or null for no expiry. Only active access is listed. */
export type AccessMap = Record<string, string | null>;

const isActive = (expiresAt: string | null) => !expiresAt || new Date(expiresAt) > new Date();

// Everything below runs on the server with the student's own session, so the
// database's row-level security decides what they can read.
async function loadViewer() {
  const supabase = getSupabaseServerClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { supabase, viewer: null, access: {} as AccessMap };

  const [{ data: profile }, { data: enrollments }] = await Promise.all([
    supabase
      .from("profiles")
      .select("full_name, phone, is_admin")
      .eq("id", auth.user.id)
      .maybeSingle(),
    supabase.from("enrollments").select("course_slug, expires_at").eq("user_id", auth.user.id),
  ]);

  const access: AccessMap = {};
  for (const e of enrollments ?? [])
    if (isActive(e.expires_at)) access[e.course_slug] = e.expires_at;

  const viewer: Viewer = {
    id: auth.user.id,
    email: auth.user.email ?? "",
    fullName: profile?.full_name ?? null,
    phone: profile?.phone ?? null,
    isAdmin: profile?.is_admin ?? false,
  };
  return { supabase, viewer, access };
}

export const getViewer = createServerFn({ method: "GET" }).handler(async () => {
  const { viewer, access } = await loadViewer();
  return { viewer, access };
});

export type LessonPayload = {
  videoUrl?: string;
  textContent?: string;
  examples?: { arabic: string; transliteration: string; translation?: string; audioUrl?: string }[];
  quiz?: import("@/data/courses").QuizQuestion[];
  pdfs: { title: string; url: string | null }[];
};

export type LessonResult =
  | { status: "notfound" }
  | { status: "login" }
  | { status: "locked"; email: string }
  | { status: "ok"; content: LessonPayload; expiresAt: string | null };

const PDF_LINK_SECONDS = 600;

export const getLessonContent = createServerFn({ method: "GET" })
  .inputValidator(z.object({ courseSlug: z.string().max(64), lessonId: z.string().max(64) }))
  .handler(async ({ data }): Promise<LessonResult> => {
    if (!getLesson(data.courseSlug, data.lessonId)) return { status: "notfound" };

    const { supabase, viewer, access } = await loadViewer();
    if (!viewer) return { status: "login" };
    const hasAccess = viewer.isAdmin || data.courseSlug in access;
    if (!hasAccess) return { status: "locked", email: viewer.email };

    const { lessonContent } = await import("@/server/lessonContent");
    const content = lessonContent[`${data.courseSlug}/${data.lessonId}`] ?? {};

    const pdfs = await Promise.all(
      (content.pdfs ?? []).map(async (pdf) => {
        const { data: signed } = await supabase.storage
          .from("course-materials")
          .createSignedUrl(pdf.path, PDF_LINK_SECONDS);
        // No URL when the file hasn't been uploaded yet — the page shows "coming soon".
        return { title: pdf.title, url: signed?.signedUrl ?? null };
      }),
    );

    return {
      status: "ok",
      content: { ...content, pdfs },
      expiresAt: access[data.courseSlug] ?? null,
    };
  });

// ---------- Admin ----------

export type StudentRow = {
  id: string;
  email: string | null;
  fullName: string | null;
  phone: string | null;
  isAdmin: boolean;
  createdAt: string;
  enrollments: { courseSlug: string; expiresAt: string | null; grantedAt: string }[];
};

async function requireAdmin() {
  const ctx = await loadViewer();
  if (!ctx.viewer?.isAdmin) throw new Error("Рұқсат жоқ");
  return ctx;
}

export const adminListStudents = createServerFn({ method: "GET" })
  .inputValidator(z.object({ query: z.string().max(100) }))
  .handler(async ({ data }): Promise<StudentRow[]> => {
    const { supabase } = await requireAdmin();
    let q = supabase
      .from("profiles")
      .select(
        "id, email, full_name, phone, is_admin, created_at, enrollments!enrollments_user_id_fkey(course_slug, expires_at, granted_at)",
      )
      .order("created_at", { ascending: false })
      .limit(100);
    // Strip characters that have meaning in PostgREST filter syntax.
    const term = data.query.replace(/[,()*%\\]/g, " ").trim();
    if (term) q = q.or(`email.ilike.*${term}*,full_name.ilike.*${term}*,phone.ilike.*${term}*`);
    const { data: rows, error } = await q;
    if (error) throw new Error(error.message);
    return (rows ?? []).map((r) => ({
      id: r.id,
      email: r.email,
      fullName: r.full_name,
      phone: r.phone,
      isAdmin: r.is_admin,
      createdAt: r.created_at,
      enrollments: (r.enrollments ?? []).map((e) => ({
        courseSlug: e.course_slug,
        expiresAt: e.expires_at,
        grantedAt: e.granted_at,
      })),
    }));
  });

export const adminSetAccess = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({ userId: z.string().uuid(), courseSlug: z.string().max(64), grant: z.boolean() }),
  )
  .handler(async ({ data }) => {
    const { supabase, viewer } = await requireAdmin();
    const course = getCourseBySlug(data.courseSlug);
    if (!course) throw new Error("Курс табылмады");

    if (!data.grant) {
      const { error } = await supabase
        .from("enrollments")
        .delete()
        .eq("user_id", data.userId)
        .eq("course_slug", data.courseSlug);
      if (error) throw new Error(error.message);
      return { ok: true };
    }

    let expiresAt: string | null = null;
    if (course.accessDays) {
      // Paying again while access is still active extends it instead of losing the remaining days.
      const { data: existing } = await supabase
        .from("enrollments")
        .select("expires_at")
        .eq("user_id", data.userId)
        .eq("course_slug", data.courseSlug)
        .maybeSingle();
      const now = Date.now();
      const current = existing?.expires_at ? new Date(existing.expires_at).getTime() : 0;
      const from = Math.max(now, current);
      expiresAt = new Date(from + course.accessDays * 86_400_000).toISOString();
    }

    const { error } = await supabase.from("enrollments").upsert(
      {
        user_id: data.userId,
        course_slug: data.courseSlug,
        granted_at: new Date().toISOString(),
        expires_at: expiresAt,
        granted_by: viewer!.id,
      },
      { onConflict: "user_id,course_slug" },
    );
    if (error) throw new Error(error.message);
    return { ok: true };
  });
