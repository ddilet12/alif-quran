import { useRouteContext } from "@tanstack/react-router";
import type { AccessMap, Viewer } from "@/lib/access";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

/** The signed-in student (or null) and their active course access, loaded by the root route. */
export const useViewer = (): { viewer: Viewer | null; access: AccessMap } => {
  const ctx = useRouteContext({ strict: false }) as { viewer?: Viewer | null; access?: AccessMap };
  return { viewer: ctx.viewer ?? null, access: ctx.access ?? {} };
};

export const hasCourseAccess = (viewer: Viewer | null, access: AccessMap, slug: string) =>
  !!viewer && (viewer.isAdmin || slug in access);

/** Full reload so the server re-reads the session cookie everywhere. */
export const signOut = async () => {
  await getSupabaseBrowserClient().auth.signOut();
  window.location.href = "/";
};

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
};
