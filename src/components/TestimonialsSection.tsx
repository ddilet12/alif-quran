import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Айгүл",
    role: "Үй шаруасы, 34 жас",
    text: "Бұрын араб әріптерін мүлдем білмейтінмін. 4 аптада оқуды үйрендім! Балаларыма да үйретіп жатырмын. Рахмет!",
  },
  {
    name: "Бекзат",
    role: "Кәсіпкер, 42 жас",
    text: "Ұстаздың түсіндіруі өте қарапайым және түсінікті. 3 рет бастап тастап кетіп едім, бұл жолы аяғына дейін өттім.",
  },
  {
    name: "Мадина",
    role: "Студент, 22 жас",
    text: "Онлайн формат маған өте ыңғайлы болды. Кез-келген уақытта қарай аламын. Енді Таджуид курсына көшіп жатырмын!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Оқушылар айтады</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Нәтижеге жеткендердің пікірі
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
