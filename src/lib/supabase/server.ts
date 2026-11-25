import { createServerClient } from "@supabase/ssr";
import { getCookies, setCookie } from "@tanstack/react-start/server";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./config";

// Server-side client bound to the current request's cookies. Queries run as the
// signed-in student, so database row-level security applies to everything.
// Only call this inside server functions / server handlers.
export const getSupabaseServerClient = () =>
  createServerClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    cookies: {
      getAll: () => Object.entries(getCookies()).map(([name, value]) => ({ name, value })),
      setAll: (cookies) => {
        for (const { name, value, options } of cookies) setCookie(name, value, options);
      },
    },
  });
