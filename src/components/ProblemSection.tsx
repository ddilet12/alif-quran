import { AlertCircle } from "lucide-react";

const problems = [
  "Араб әріптерін мүлдем білмейсіз",
  "YouTube-тен өзіңіз үйренуге тырыстыңыз, бірақ жүйесіз",
  "Бір-екі рет бастадыңыз, бірақ тастап кеттіңіз",
  "Дұрыс дыбыстауды білмейсіз — қате оқып жүрмін бе деп қорқасыз",
  "Құран оқуды бастағыңыз келеді, бірақ неден бастау керектігін түсінбейсіз",
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">Таныс ба?</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Мына жағдайлар таныс болса — сіз дұрыс жердесіз
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Көпшілік Құран оқуды бастағысы келеді, бірақ дұрыс жол таба алмайды. Бұл — қалыпты жағдай.
        </p>
        <div className="space-y-4 text-left">
          {problems.map((p, i) => (
            <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border">
              <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{p}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-foreground font-semibold">
          Осы курс — <span className="text-primary">дәл осы мәселелерді</span> шешу үшін жасалды 👇
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
