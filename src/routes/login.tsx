import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import SiteLayout from "@/components/SiteLayout";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { useViewer } from "@/lib/useViewer";

// Only same-site paths, so a crafted link can't bounce students to another website.
const safeRedirect = (value: unknown) =>
  typeof value === "string" && value.startsWith("/") && !value.startsWith("//")
    ? value
    : "/dashboard";

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: safeRedirect(search["redirect"]),
  }),
  component: LoginPage,
  head: () => ({
    meta: [{ title: "Кіру — Alif to Quran" }, { name: "robots", content: "noindex" }],
  }),
});

const errorText = (message: string) => {
  const m = message.toLowerCase();
  if (m.includes("invalid login")) return "Email немесе құпия сөз қате.";
  if (m.includes("already registered") || m.includes("already been registered"))
    return "Бұл email бұрын тіркелген. «Кіру» бетінен кіріңіз.";
  if (m.includes("password")) return "Құпия сөз кемінде 6 таңбадан тұруы керек.";
  if (m.includes("email not confirmed")) return "Email расталмаған. Әкімшіге хабарласыңыз.";
  if (m.includes("rate limit")) return "Тым көп әрекет. Бірнеше минуттан кейін қайталаңыз.";
  return "Қате орын алды. Қайталап көріңіз.";
};

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function LoginPage() {
  const { redirect } = Route.useSearch();
  const { viewer } = useViewer();
  const [mode, setMode] = useState<"login" | "register">("register");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    setBusy(true);
    setError(null);
    const supabase = getSupabaseBrowserClient();
    try {
      if (mode === "register") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: String(form.get("full_name") || "").trim(),
              phone: String(form.get("phone") || "").trim(),
            },
          },
        });
        if (error) throw error;
        if (!data.session) {
          // Email confirmation is switched on in Supabase; sign-in will fail until it's confirmed.
          const { error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (signInError) throw signInError;
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      // Full reload so the server sees the new session cookie.
      window.location.href = redirect;
    } catch (err) {
      setError(errorText(err instanceof Error ? err.message : String(err)));
      setBusy(false);
    }
  };

  return (
    <SiteLayout>
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-md mx-auto">
          {viewer && (
            <div className="mb-6 rounded-xl border border-border bg-secondary p-4 text-sm text-foreground">
              Сіз {viewer.email} ретінде кірдіңіз.{" "}
              <a href={redirect} className="font-semibold text-primary hover:underline">
                Жалғастыру →
              </a>
            </div>
          )}

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-1 bg-secondary rounded-lg p-1 mb-6" role="tablist">
              {(["register", "login"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => {
                    setMode(m);
                    setError(null);
                  }}
                  className={`py-2 rounded-md text-sm font-semibold transition-colors ${
                    mode === m
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m === "register" ? "Тіркелу" : "Кіру"}
                </button>
              ))}
            </div>

            <h1 className="text-2xl font-bold text-foreground mb-1">
              {mode === "register" ? "Жаңа аккаунт" : "Қайта оралуыңызбен!"}
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              {mode === "register"
                ? "Тіркелгеннен кейін курсты сатып алып, сабақтарға кіре аласыз."
                : "Email мен құпия сөзіңізді енгізіңіз."}
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              {mode === "register" && (
                <>
                  <label className="block">
                    <span className="block text-sm font-medium text-foreground mb-1.5">
                      Аты-жөніңіз
                    </span>
                    <input
                      name="full_name"
                      required
                      maxLength={200}
                      autoComplete="name"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-foreground mb-1.5">
                      Телефон (WhatsApp)
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      maxLength={50}
                      autoComplete="tel"
                      placeholder="+7 7__ ___ __ __"
                      className={inputClass}
                    />
                  </label>
                </>
              )}
              <label className="block">
                <span className="block text-sm font-medium text-foreground mb-1.5">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-foreground mb-1.5">Құпия сөз</span>
                <input
                  name="password"
                  type="password"
                  required
                  minLength={6}
                  autoComplete={mode === "register" ? "new-password" : "current-password"}
                  className={inputClass}
                />
              </label>

              {error && (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={busy}
                className="w-full gold-gradient text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {busy ? "Күте тұрыңыз…" : mode === "register" ? "Тіркелу" : "Кіру"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
