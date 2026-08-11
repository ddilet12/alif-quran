import SiteLayout from "@/components/SiteLayout";
import { teachers } from "@/data/teachers";
import { Award, GraduationCap } from "lucide-react";
import { waLink } from "@/lib/contact";

const Teachers = () => (
  <SiteLayout>
    <section className="py-12 sm:py-16 px-4 emerald-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">
          Біздің ұстаздар
        </h1>
        <p className="text-primary-foreground/85 text-base sm:text-lg max-w-2xl mx-auto">
          Ислам ғылымы мен араб тілі бойынша білікті мамандар
        </p>
      </div>
    </section>

    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-20 h-20 emerald-gradient rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl flex-shrink-0 mx-auto sm:mx-0">
                {t.initials}
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">{t.name}</h2>
                <p className="text-sm text-gold font-medium mb-1">{t.title}</p>
                <p className="text-xs text-muted-foreground inline-flex items-center gap-1 mb-4">
                  <GraduationCap className="w-3.5 h-3.5" /> {t.experience}
                </p>
                <p className="text-foreground/85 leading-relaxed mb-4">{t.bio}</p>
                <ul className="space-y-2">
                  {t.qualifications.map((q, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground justify-center sm:justify-start"
                    >
                      <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Сәлеметсіз бе! ${t.name}-ға сұрақ қойғым келеді.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  Хабарласу →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Teachers;
