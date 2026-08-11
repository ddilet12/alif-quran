import { Link, useParams } from "@/lib/router-compat";
import SiteLayout from "@/components/SiteLayout";
import { getCourseBySlug, totalLessons } from "@/data/courses";
import { getCourseProgress } from "@/lib/progress";
import { Award, ArrowLeft } from "lucide-react";

const Certificate = () => {
  const { slug = "" } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <SiteLayout>
        <div className="max-w-3xl mx-auto py-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Курс табылмады</h1>
          <Link to="/courses" className="text-primary hover:underline">
            Каталог
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const progress = getCourseProgress(course.slug, totalLessons(course));
  const earned = progress === 100;

  return (
    <SiteLayout>
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> {course.title}
          </Link>

          {earned ? (
            <div className="bg-card border-2 border-gold rounded-2xl p-8 sm:p-12 text-center shadow-xl">
              <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-accent-foreground" />
              </div>
              <p className="text-sm uppercase tracking-widest text-gold font-bold mb-2">
                Сертификат
              </p>
              <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
                Құттықтаймыз!
              </h1>
              <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                Сіз <span className="font-semibold text-foreground">«{course.title}»</span> курсын
                толық аяқтадыңыз.
              </p>
              <div className="border-t border-border pt-6 mt-6 text-sm text-muted-foreground">
                <p>Берілген күні: {new Date().toLocaleDateString("kk-KZ")}</p>
                <p className="mt-1">Әліппе онлайн курсы</p>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="mt-8 gold-gradient text-accent-foreground px-6 py-3 rounded-lg font-semibold"
              >
                Сертификатты басып шығару
              </button>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
              <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Сертификат әлі дайын емес
              </h1>
              <p className="text-muted-foreground mb-6">
                Сертификат алу үшін барлық сабақтарды аяқтаңыз. Қазіргі прогрес: {progress}%
              </p>
              <Link
                to={`/courses/${course.slug}`}
                className="inline-flex items-center gap-2 emerald-gradient text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                Курсқа қайту
              </Link>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Certificate;
