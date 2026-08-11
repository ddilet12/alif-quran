import { Link } from "@/lib/router-compat";
import SiteLayout from "@/components/SiteLayout";
import { courses, LEVEL_LABEL, totalLessons, type Level } from "@/data/courses";
import { Clock, BookOpen, ArrowRight } from "lucide-react";

const levelStyle: Record<Level, string> = {
  beginner: "bg-primary/10 text-primary border-primary/30",
  intermediate: "bg-gold/10 text-gold border-gold/40",
  advanced: "bg-emerald-deep/10 text-emerald-deep border-emerald-deep/30",
};

const Courses = () => {
  const grouped: Record<Level, typeof courses> = {
    beginner: courses.filter((c) => c.level === "beginner"),
    intermediate: courses.filter((c) => c.level === "intermediate"),
    advanced: courses.filter((c) => c.level === "advanced"),
  };

  return (
    <SiteLayout>
      <section className="py-12 sm:py-16 px-4 emerald-gradient">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Курстар каталогы
          </h1>
          <p className="text-primary-foreground/85 text-base sm:text-lg max-w-2xl mx-auto">
            Бастаушыдан жоғары деңгейге дейін — қадам-қадам бағдарлама
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {(Object.keys(grouped) as Level[]).map((level) => (
            <div key={level}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full border ${levelStyle[level]}`}
                >
                  {LEVEL_LABEL[level]}
                </span>
                <div className="h-px bg-border flex-1" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {grouped[level].map((course) => (
                  <Link
                    key={course.slug}
                    to={`/courses/${course.slug}`}
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/40 transition-all group flex flex-col"
                  >
                    <div className="text-3xl mb-3">{course.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                    <p className="text-sm text-gold font-medium mb-2">{course.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> {totalLessons(course)} сабақ
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Курсты ашу <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Courses;
