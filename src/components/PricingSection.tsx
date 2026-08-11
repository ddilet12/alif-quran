import { Check, Shield } from "lucide-react";
import { waLink } from "@/lib/contact";

type Plan = {
  slug: string;
  name: string;
  price: string;
  unit: string;
  note: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    slug: "alippe",
    name: "Әліппе",
    price: "30 000",
    unit: "₸",
    note: "Бір реттік төлем · Мәңгілік қолжетімді",
    features: [
      "Араб әріптерін 0-ден үйрену",
      "Дайын видеосабақтар (4 апта)",
      "PDF тапсырмалар мен жаттығулар",
      "WhatsApp жеке чат",
      "Апталық жеке тексеру",
    ],
  },
  {
    slug: "tajweed",
    name: "Таджуид",
    price: "40 000",
    unit: "₸",
    note: "Бір реттік төлем · Толық курс",
    popular: true,
    features: [
      "Tajweed ережелерін толық меңгеру",
      "Дұрыс оқу практикасы",
      "Видео + аудио мысалдар",
      "Жеке кері байланыс",
      "Сертификат",
    ],
  },
  {
    slug: "khatym",
    name: "Хатым Құран",
    price: "40 000",
    unit: "₸ / ай",
    note: "Айлық төлем · Жеке бағдарлама",
    features: [
      "Құранды толық оқып шығу",
      "Ұстазбен жеке сабақтар",
      "Жеке қарқын мен кесте",
      "Tajweed-пен оқу практикасы",
      "Айлық прогресс есебі",
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-16 sm:py-20 px-4 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">Баға</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
          Курс таңдаңыз
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
          Деңгейіңізге сай курсты таңдап, бүгін бастаңыз
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((p) => (
          <div
            key={p.slug}
            className={`relative bg-card rounded-2xl p-6 sm:p-8 shadow-md flex flex-col ${
              p.popular
                ? "border-2 border-primary shadow-xl md:scale-[1.03]"
                : "border border-border"
            }`}
          >
            {p.popular && (
              <div className="absolute top-0 right-0 gold-gradient text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
                ⭐ Ең танымал
              </div>
            )}
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              {p.name}
            </span>
            <div className="mt-3 mb-2 flex items-baseline gap-2 flex-wrap">
              <span className="text-4xl sm:text-5xl font-bold text-foreground">{p.price}</span>
              <span className="text-muted-foreground text-sm">{p.unit}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">{p.note}</p>
            <ul className="space-y-3 text-left mb-8 flex-1">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm sm:text-base">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(`Сәлеметсіз бе! ${p.name} курсына жазылғым келеді.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full py-3.5 rounded-lg text-base font-semibold transition-opacity shadow-md text-center ${
                p.popular
                  ? "gold-gradient text-accent-foreground hover:opacity-90"
                  : "emerald-gradient text-primary-foreground hover:opacity-90"
              }`}
            >
              📲 Жазылу
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>7 күн ішінде ақша қайтару кепілдігі</span>
      </div>
    </div>
  </section>
);

export default PricingSection;
