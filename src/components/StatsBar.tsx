const stats = [
  { number: "200+", label: "Оқушы" },
  { number: "95%", label: "Аяқтау көрсеткіші" },
  { number: "4.9", label: "Орташа баға ⭐" },
  { number: "4", label: "Апта — нәтиже" },
];

const StatsBar = () => {
  return (
    <section className="py-12 px-4 emerald-gradient">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl md:text-4xl font-bold text-gold">{s.number}</div>
            <div className="text-primary-foreground/80 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
