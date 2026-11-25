import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import SiteLayout from "@/components/SiteLayout";
import { Link } from "@/lib/router-compat";
import { adminListStudents, adminSetAccess, type StudentRow } from "@/lib/access";
import { courses } from "@/data/courses";
import { formatDate, useViewer } from "@/lib/useViewer";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [{ title: "Админ — Alif to Quran" }, { name: "robots", content: "noindex" }],
  }),
});

const isActive = (expiresAt: string | null) => !expiresAt || new Date(expiresAt) > new Date();

function AdminPage() {
  const { viewer } = useViewer();

  if (!viewer?.isAdmin) {
    return (
      <SiteLayout>
        <section className="py-20 px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-3">Рұқсат жоқ</h1>
          <p className="text-muted-foreground mb-6">Бұл бет тек әкімшіге арналған.</p>
          <Link
            to={viewer ? "/dashboard" : "/login?redirect=%2Fadmin"}
            className="text-primary font-semibold hover:underline"
          >
            {viewer ? "Кабинетке оралу" : "Кіру"}
          </Link>
        </section>
      </SiteLayout>
    );
  }

  return <StudentsAdmin />;
}

function StudentsAdmin() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setQuery(input.trim()), 300);
    return () => clearTimeout(t);
  }, [input]);

  const listStudents = useServerFn(adminListStudents);
  const setAccess = useServerFn(adminSetAccess);
  const queryClient = useQueryClient();

  const students = useQuery({
    queryKey: ["admin-students", query],
    queryFn: () => listStudents({ data: { query } }),
  });

  const mutation = useMutation({
    mutationFn: (v: { userId: string; courseSlug: string; grant: boolean }) =>
      setAccess({ data: v }),
    onSuccess: (_r, v) => {
      const title = courses.find((c) => c.slug === v.courseSlug)?.title;
      toast.success(v.grant ? `«${title}» ашылды` : `«${title}» жабылды`);
      queryClient.invalidateQueries({ queryKey: ["admin-students"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Қате"),
  });

  return (
    <SiteLayout>
      <section className="py-10 sm:py-14 px-4 bg-secondary border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-primary" /> Оқушылар
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Төлем түскеннен кейін оқушыны тауып, курсты ашыңыз.
          </p>
          <label className="relative block mt-6 max-w-md">
            <span className="sr-only">Іздеу</span>
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Email, аты немесе телефон"
              className="w-full rounded-lg border border-input bg-background pl-9 pr-3.5 py-2.5 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {students.isLoading && <p className="text-sm text-muted-foreground">Жүктелуде…</p>}
          {students.isError && (
            <p className="text-sm text-destructive">
              {students.error instanceof Error ? students.error.message : "Қате"}
            </p>
          )}
          {students.data?.length === 0 && (
            <p className="text-sm text-muted-foreground">Оқушы табылмады.</p>
          )}
          {students.data?.map((s) => (
            <StudentCard
              key={s.id}
              student={s}
              busy={mutation.isPending}
              onToggle={(courseSlug, grant) => mutation.mutate({ userId: s.id, courseSlug, grant })}
            />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function StudentCard({
  student,
  busy,
  onToggle,
}: {
  student: StudentRow;
  busy: boolean;
  onToggle: (courseSlug: string, grant: boolean) => void;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 justify-between">
        <div className="min-w-0">
          <p className="font-semibold text-foreground truncate">
            {student.fullName || "—"}
            {student.isAdmin && (
              <span className="ml-2 text-xs font-bold text-gold uppercase">админ</span>
            )}
          </p>
          <p className="text-sm text-muted-foreground truncate">{student.email}</p>
          {student.phone && (
            <a
              href={`https://wa.me/${student.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {student.phone}
            </a>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Тіркелген: {formatDate(student.createdAt)}
          </p>
        </div>
      </div>

      <div className="mt-4 grid sm:grid-cols-3 gap-2">
        {courses.map((c) => {
          const e = student.enrollments.find((x) => x.courseSlug === c.slug);
          const active = !!e && isActive(e.expiresAt);
          return (
            <div
              key={c.slug}
              className={`rounded-lg border p-3 flex flex-col gap-2 ${
                active ? "border-primary/40 bg-primary/5" : "border-border"
              }`}
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{c.title}</p>
                <p className="text-xs text-muted-foreground">
                  {active
                    ? e!.expiresAt
                      ? `${formatDate(e!.expiresAt)} дейін`
                      : "Мерзімсіз"
                    : e
                      ? `Мерзімі өтті (${formatDate(e.expiresAt!)})`
                      : "Жабық"}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={busy || (active && !c.accessDays)}
                  onClick={() => onToggle(c.slug, true)}
                  className="flex-1 emerald-gradient text-primary-foreground px-3 py-2 rounded-md text-xs font-semibold disabled:opacity-60"
                >
                  {active ? (c.accessDays ? `+${c.accessDays} күн` : "Ашық") : "Ашу"}
                </button>
                {e && (
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => {
                      if (
                        window.confirm(`«${c.title}» курсын ${student.email} үшін жабу керек пе?`)
                      ) {
                        onToggle(c.slug, false);
                      }
                    }}
                    className="px-3 py-2 rounded-md text-xs font-semibold border border-border text-muted-foreground hover:text-destructive hover:border-destructive/40 disabled:opacity-60"
                  >
                    Жабу
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
