import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./config";

// Browser client. @supabase/ssr keeps the session in cookies, so the server
// functions in src/lib/access.ts can see who is signed in.
let client: SupabaseClient | undefined;

export const getSupabaseBrowserClient = () => {
  if (!client) client = createBrowserClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  return client;
};
