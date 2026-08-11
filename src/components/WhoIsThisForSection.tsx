import { UserCheck } from "lucide-react";

const audiences = [
  { title: "Бастаушылар", desc: "Араб әріптерін мүлдем білмейтіндер — нөлден бастаймыз" },
  { title: "Қайта бастаушылар", desc: "Бұрын тырысқан, бірақ жүйесіз болғандықтан тастап кеткендер" },
  { title: "Ересектер мен жастар", desc: "Жасына қарамастан — 15-тен 60-қа дейін оқушыларымыз бар" },
  { title: "Құран оқуды армандайтындар", desc: "Дінін тереңірек түсінгісі, Құранды өзі оқығысы келетіндер" },
];

const WhoIsThisForSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">Мақсатты аудитория</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
          Бұл курс кімге арналған?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border text-left">
              <div className="w-12 h-12 bg-emerald-light rounded-xl flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
