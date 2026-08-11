import { Monitor, Users, Check } from "lucide-react";
import { waLink } from "@/lib/contact";

const formats = [
  {
    icon: Monitor,
    title: "Онлайн оқу",
    price: "50 000 ₸",
    items: [
      "Үйден оқу",
      "Видео сабақтар",
      "Электронды материалдар",
      "Тапсырмалар",
      "Zoom сабақтары",
      "Ұстазбен кері байланыс",
    ],
    cta: "Сабаққа жазылу",
  },
  {
    icon: Users,
    title: "Офлайн оқу",
    price: "50 000 ₸",
    note: "Әліппе",
    items: [
      "Ұстазбен тікелей сабақ",
      "Практикалық оқу",
      "Қателерді түзету",
      "Жеке кері байланыс",
    ],
    cta: "Сабаққа жазылу",
  },
];

const LearningFormatsSection = () => (
  <section id="formats" className="py-16 sm:py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">
          Оқу форматы
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
          Өзіңізге ыңғайлы форматты таңдаңыз
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {formats.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-colors flex flex-col"
          >
            <div className="w-12 h-12 emerald-gradient rounded-xl flex items-center justify-center mb-4">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{f.title}</h3>
            <div className="flex items-baseline gap-2 mb-5 flex-wrap">
              <span className="text-2xl font-bold text-primary">{f.price}</span>
              {f.note && <span className="text-sm text-muted-foreground">· {f.note}</span>}
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              {f.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(`Сәлеметсіз бе! ${f.title} форматы бойынша сабаққа жазылғым келеді.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gold-gradient text-accent-foreground px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {f.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LearningFormatsSection;
