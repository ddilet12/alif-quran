import { useEffect, useState } from "react";
import { Link } from "@/lib/router-compat";
import SiteLayout from "@/components/SiteLayout";
import LessonProgress from "@/components/lesson/LessonProgress";
import { courses, formatPrice, totalLessons } from "@/data/courses";
import { getCourseProgress } from "@/lib/progress";
import { formatDate, hasCourseAccess, signOut, useViewer } from "@/lib/useViewer";
import { ArrowRight, BookOpen, Lock, LogIn, LogOut, ShieldCheck } from "lucide-react";

const Dashboard = () => {
  const { viewer, access } = useViewer();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const update = () => setTick((t) => t + 1);
    window.addEventListener("progress-updated", update);
    return () => window.removeEventListener("progress-updated", update);
  }, []);

  if (!viewer) {
    return (
      <SiteLayout>
        <section className="py-20 px-4">
          <div className="max-w-md mx-auto bg-card border border-border rounded-2xl p-8 text-center">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-xl font-bold text-foreground mb-2">Жеке кабинет</h1>
            <p className="text-muted-foreground mb-6">
              Курстарыңызды көру үшін кіріңіз немесе тіркеліңіз.
            </p>
            <Link
              to="/login?redirect=%2Fdashboard"
              className="inline-flex items-center gap-2 gold-gradient text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              <LogIn className="w-4 h-4" /> Кіру / Тіркелу
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const mine = courses.filter((c) => hasCourseAccess(viewer, access, c.slug));
  const others = courses.filter((c) => !hasCourseAccess(viewer, access, c.slug));

  return (
    <SiteLayout key={tick}>
      <section className="py-12 sm:py-16 px-4 emerald-gradient">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
              Жеке кабинет
            </h1>
            <p className="text-primary-foreground/85 truncate">
              {viewer.fullName ? `${viewer.fullName} · ` : ""}
              {viewer.email}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {viewer.isAdmin && (
              <Link
                to="/admin"
                className="inline-flex items-center gap-2 bg-card/15 text-primary-foreground border border-primary-foreground/30 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                <ShieldCheck className="w-4 h-4" /> Админ
              </Link>
            )}
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center gap-2 bg-card/15 text-primary-foreground border border-primary-foreground/30 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <LogOut className="w-4 h-4" /> Шығу
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Менің курстарым</h2>
            {mine.length === 0 ? (
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <p className="text-foreground font-semibold mb-1">Сізде әзірге ашық курс жоқ</p>
                <p className="text-sm text-muted-foreground mb-5">
                  Курсты таңдап, WhatsApp арқылы төлеңіз — ұстаз оны сіздің аккаунтыңызға ашады.
                </p>
                <Link
                  to="/kirispe-sabaq"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  Тегін кіріспе сабақты көру <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {mine.map((c) => {
                  const expiresAt = access[c.slug] ?? null;
                  return (
                    <Link
                      key={c.slug}
                      to={`/courses/${c.slug}`}
                      className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors block"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{c.icon}</span>
                        <div className="min-w-0">
                          <h3 className="font-bold text-foreground truncate">{c.title}</h3>
                          <p className="text-xs text-muted-foreground truncate">
                            {expiresAt ? `${formatDate(expiresAt)} дейін ашық` : "Мерзімсіз ашық"}
                          </p>
                        </div>
                      </div>
                      <LessonProgress value={getCourseProgress(c.slug, totalLessons(c))} />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {others.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Басқа курстар</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {others.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/courses/${c.slug}`}
                    className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors flex items-center gap-3"
                  >
                    <span className="text-xl">{c.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground truncate">{c.title}</p>
                      <p className="text-xs text-muted-foreground">{formatPrice(c)}</p>
                    </div>
                    <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Dashboard;
