import { useEffect, useState } from "react";
import { Link } from "@/lib/router-compat";
import SiteLayout from "@/components/SiteLayout";
import LessonProgress from "@/components/lesson/LessonProgress";
import { courses, totalLessons } from "@/data/courses";
import { getCompletedLessons, getCourseProgress } from "@/lib/progress";
import { ArrowRight, BookOpen } from "lucide-react";

const Dashboard = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const update = () => setTick((t) => t + 1);
    window.addEventListener("progress-updated", update);
    return () => window.removeEventListener("progress-updated", update);
  }, []);

  const started = courses.filter((c) => getCompletedLessons(c.slug).length > 0);
  const all = courses;

  return (
    <SiteLayout key={tick}>
      <section className="py-12 sm:py-16 px-4 emerald-gradient">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
            Жеке кабинет
          </h1>
          <p className="text-primary-foreground/85">Курстарыңыздың прогресін бақылаңыз</p>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-5xl mx-auto">
          {started.length === 0 ? (
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">
                Сіз әлі сабақ бастамадыңыз
              </h2>
              <p className="text-muted-foreground mb-6">Каталогтан курс таңдап, бірінші сабақты ашыңыз.</p>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 gold-gradient text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                Курстарды көру <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Менің курстарым</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {started.map((c) => {
                    const total = totalLessons(c);
                    const progress = getCourseProgress(c.slug, total);
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
                            <p className="text-xs text-muted-foreground truncate">{c.subtitle}</p>
                          </div>
                        </div>
                        <LessonProgress value={progress} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Барлық курстар</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {all.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/courses/${c.slug}`}
                      className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors flex items-center gap-3"
                    >
                      <span className="text-xl">{c.icon}</span>
                      <span className="text-sm font-medium text-foreground truncate">{c.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Dashboard;
