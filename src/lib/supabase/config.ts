// Public Supabase settings. The publishable key is meant to be shipped to the
// browser: what each visitor can read or change is enforced by row-level
// security in the database, not by keeping this key secret.
export const SUPABASE_URL =
  import.meta.env["VITE_SUPABASE_URL"] || "https://rdwxgsbxaojmlagemtqn.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
  "sb_publishable_n-eCpqz3DohPHmn8F--DFA_9BhH5_Ku";
