import { Link } from "@/lib/router-compat";
import { Award, ArrowRight } from "lucide-react";
import { teachers } from "@/data/teachers";

const TeachersSection = () => (
  <section id="teachers" className="py-16 sm:py-20 px-4 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">Ұстаздар</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
          Сізді кім оқытады
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
          Ислам ғылымы бойынша білімі мен тәжірибесі бар мамандар
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 emerald-gradient rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                {t.initials}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-foreground text-lg truncate">{t.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{t.title}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{t.bio}</p>
            <ul className="space-y-2 mb-2">
              {t.qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/teachers"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          Барлық ұстаздар <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default TeachersSection;
