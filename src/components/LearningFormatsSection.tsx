import { Monitor, Users, UserCheck } from "lucide-react";
import { waLink } from "@/lib/contact";

const formats = [
  {
    icon: Monitor,
    title: "Өз бетіңізше",
    desc: "Видеосабақтар, аудио, PDF-материалдар. Өз ыңғайыңызбен оқисыз.",
    cta: "Курсты ашу",
  },
  {
    icon: Users,
    title: "Топтық Zoom-сабақтар",
    desc: "Ұстазбен апта сайын тікелей сабақ. Сұрақ қойып, жауап аласыз.",
    cta: "Топқа жазылу",
  },
  {
    icon: UserCheck,
    title: "Жеке сабақтар",
    desc: "Тек сізге арналған бағдарлама. Жеке қарқын, жеке кері байланыс.",
    cta: "Жеке кеңес алу",
  },
];

const LearningFormatsSection = () => (
  <section id="formats" className="py-16 sm:py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">
          Оқу форматтары
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
          Өзіңізге ыңғайлы форматты таңдаңыз
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {formats.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-colors flex flex-col"
          >
            <div className="w-12 h-12 emerald-gradient rounded-xl flex items-center justify-center mb-4">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">{f.desc}</p>
            <a
              href={waLink(`Сәлеметсіз бе! ${f.title} туралы білгім келеді.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold text-sm hover:underline"
            >
              {f.cta} →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LearningFormatsSection;
