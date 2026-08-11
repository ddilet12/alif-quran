import { Check } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const results = [
  { text: "Барлық араб әріптерін таниды", emoji: "🔤" },
  { text: "Дұрыс дыбыстайды — қатесіз", emoji: "🗣️" },
  { text: "Қарапайым буындар мен сөздерді оқи алады", emoji: "📖" },
  { text: "Құран оқуға алғашқы қадам жасайды", emoji: "📿" },
  { text: "Өз бетінше жалғастыра алатын білім алады", emoji: "🚀" },
  { text: "Тәжуид курсына көшуге дайын болады", emoji: "🎓" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">Трансформация</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          4 аптадан кейін сіз:
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Нәтижеге жетпесеңіз — ақшаңызды қайтарамыз
        </p>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {results.map((r, i) => (
            <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-5 text-left border border-border">
              <div className="w-12 h-12 bg-emerald-light rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                {r.emoji}
              </div>
              <span className="text-foreground font-medium">{r.text}</span>
            </div>
          ))}
        </div>
        {/* Mid-page CTA */}
        <div className="mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gold-gradient text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            📲 Осы нәтижеге жету
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
