import { BookOpen, Mic, BookMarked } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { WHATSAPP_URL } from "@/lib/contact";

const courses = [
  {
    icon: BookOpen,
    title: "Әліппе",
    subtitle: "0-ден бастау",
    description: "Араб әріптерін танып, дұрыс дыбыстап, қарапайым буындарды оқуды үйренесіз.",
    weeks: "4 апта",
    price: "30 000 ₸",
    color: "bg-primary",
  },
  {
    icon: Mic,
    title: "Таджуид",
    subtitle: "Дұрыс оқу",
    description: "Құранды дұрыс, ережемен оқуды үйретемін. Тәжуид ережелерін толық меңгересіз.",
    weeks: "8 апта",
    price: "40 000 ₸",
    color: "bg-emerald-deep",
  },
  {
    icon: BookMarked,
    title: "Хатым Құран",
    subtitle: "Толық Құран оқу",
    description: "Құранды басынан аяғына дейін толық оқып шығу. Жеке бағдарлама.",
    weeks: "Жеке",
    price: "40 000 ₸ / ай",
    color: "bg-gold",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Курстар</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-6">
            Сіздің деңгейіңізге сай курс таңдаңыз
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
          >
            Толық каталогты ашу →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border group"
            >
              <div className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <course.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-gold uppercase tracking-wider">{course.subtitle}</span>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-2">{course.title}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-primary">{course.price}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">{course.description}</p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">⏱ {course.weeks}</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Жазылу →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
