import { BookOpen, Mic, BookMarked, Check } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { waLink } from "@/lib/contact";

const courses = [
  {
    icon: BookOpen,
    title: "Әліппе онлайн",
    subtitle: "0-ден бастау",
    description:
      "Араб әріптерін нөлден бастап үйреніп, Құран оқуға алғашқы қадам жасаңыз.",
    weeks: "12 сабақ",
    price: "50 000 ₸",
    color: "bg-primary",
    features: [
      "12 сабақ",
      "Видео сабақтар",
      "Электронды материалдар",
      "Тапсырмалар",
      "Ұстаздың кері байланысы",
      "Zoom арқылы сабақтар",
    ],
    cta: "Курс туралы толығырақ",
    to: "/courses/alippe",
    featured: true,
  },
  {
    icon: Mic,
    title: "Тәжуид",
    subtitle: "Дұрыс оқу",
    description: "Құранды дұрыс және ережеге сай оқуды үйреніңіз.",
    weeks: "8 апта",
    price: "50 000 ₸",
    color: "bg-emerald-deep",
    features: [],
    cta: "Толығырақ",
    to: "/courses/tajweed-basics",
  },
  {
    icon: BookMarked,
    title: "Құран хатымы",
    subtitle: "Ұстаз бақылауымен",
    description:
      "Ұстаздың бақылауымен Құран оқып, оқу барысындағы қателерді түзету.",
    weeks: "Жеке кесте",
    price: "50 000 ₸ / ай",
    color: "bg-gold",
    features: [],
    cta: "Толығырақ",
    to: "/courses/quran-reading",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-gold text-sm font-medium uppercase tracking-wider">
            Оқу бағдарламасы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Сабақтар</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Деңгейіңізге сай бағытты таңдаңыз
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow group ${
                course.featured ? "border-2 border-primary" : "border border-border"
              }`}
            >
              <div
                className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <course.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-gold uppercase tracking-wider">
                {course.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-2">{course.title}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-primary">{course.price}</span>
              </div>
              <p className="text-muted-foreground mb-5 leading-relaxed text-sm sm:text-base">
                {course.description}
              </p>
              {course.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center justify-between gap-3 border-t border-border pt-4 flex-wrap">
                <span className="text-sm text-muted-foreground">⏱ {course.weeks}</span>
                <Link
                  to={course.to}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {course.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={waLink("Сәлеметсіз бе! Сабаққа жазылғым келеді.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gold-gradient text-accent-foreground px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            Сабаққа жазылу
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
