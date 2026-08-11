import { Check } from "lucide-react";

const items = [
  "Видео сабақтар",
  "Электронды материалдар",
  "Жаттығулар",
  "Үй тапсырмасы",
  "Ұстаздың тексеруі",
  "Кері байланыс",
  "Zoom сабақтары",
  "Оқу барысында қолдау",
];

const IncludedSection = () => (
  <section id="included" className="py-16 sm:py-20 px-4 bg-secondary">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">Курс құрамы</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Оқуға не кіреді?</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-emerald-light flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-primary" />
            </span>
            <span className="text-sm font-medium text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IncludedSection;
