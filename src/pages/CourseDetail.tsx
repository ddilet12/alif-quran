import { useEffect, useState } from "react";
import { Link, useParams } from "@/lib/router-compat";
import SiteLayout from "@/components/SiteLayout";
import LessonProgress from "@/components/lesson/LessonProgress";
import { getCourseBySlug, LEVEL_LABEL, totalLessons } from "@/data/courses";
import { getCourseProgress, getCompletedLessons } from "@/lib/progress";
import { ArrowLeft, CheckCircle2, Circle, Clock, PlayCircle, Award } from "lucide-react";

const CourseDetail = () => {
  const { slug = "" } = useParams();
  const course = getCourseBySlug(slug);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const update = () => setCompleted(getCompletedLessons(slug));
    update();
    window.addEventListener("progress-updated", update);
    return () => window.removeEventListener("progress-updated", update);
  }, [slug]);

  if (!course) {
    return (
      <SiteLayout>
        <div className="max-w-3xl mx-auto py-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Курс табылмады</h1>
          <Link to="/courses" className="text-primary hover:underline">
            Каталогқа қайту
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const total = totalLessons(course);
  const progress = getCourseProgress(course.slug, total);
  const isComplete = progress === 100;

  return (
    <SiteLayout>
      <section className="py-10 sm:py-14 px-4 emerald-gradient">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Каталог
          </Link>
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl sm:text-5xl">{course.icon}</div>
            <div className="min-w-0">
              <span className="text-gold text-xs font-bold uppercase tracking-wider">
                {LEVEL_LABEL[course.level]}
              </span>
              <h1 className="text-2xl sm:text-4xl font-bold text-primary-foreground mt-1">
                {course.title}
              </h1>
              <p className="text-primary-foreground/80 mt-1">{course.subtitle}</p>
            </div>
          </div>
          <p className="text-primary-foreground/85 text-base sm:text-lg max-w-2xl">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-1">
              <PlayCircle className="w-4 h-4" /> {total} сабақ
            </span>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 mb-8">
            <LessonProgress value={progress} label="Курс прогресі" />
            {isComplete && (
              <Link
                to={`/certificate/${course.slug}`}
                className="mt-4 inline-flex items-center gap-2 gold-gradient text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold"
              >
                <Award className="w-4 h-4" /> Сертификатты алу
              </Link>
            )}
          </div>

          <div className="space-y-6">
            {course.modules.map((m, mi) => (
              <div key={m.id} className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="px-5 sm:px-6 py-4 bg-secondary border-b border-border">
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    Модуль {mi + 1}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{m.title}</h3>
                </div>
                <ul className="divide-y divide-border">
                  {m.lessons.map((l, li) => {
                    const done = completed.includes(l.id);
                    return (
                      <li key={l.id}>
                        <Link
                          to={`/lesson/${course.slug}/${l.id}`}
                          className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 hover:bg-secondary/50 transition-colors"
                        >
                          {done ? (
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                          <span className="text-xs text-muted-foreground tabular-nums w-6 flex-shrink-0">
                            {li + 1}.
                          </span>
                          <span className="text-foreground flex-1 min-w-0 truncate">{l.title}</span>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {l.duration}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default CourseDetail;
