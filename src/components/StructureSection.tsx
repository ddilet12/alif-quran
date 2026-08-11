const lessons = [
  { title: "Араб әліпбиі: 1-бөлім", desc: "Алғашқы әріптермен танысу және дыбыстау" },
  { title: "Араб әліпбиі: 2-бөлім", desc: "Қалған әріптерді меңгеру" },
  { title: "Қысқа дауыстылар (Харакаттар)", desc: "Фатха, кясра, дамма — оқу ережелері" },
  { title: "Ұзын дауыстылар (Мадд)", desc: "Созылыңқы дыбыстау ережелері" },
  { title: "Сукун және Ташдид", desc: "Дыбыссыз әріп пен екі еселенген әріп" },
  { title: "Танвин", desc: "Танвиндер және оларды оқу" },
  { title: "Буындарды оқу", desc: "Буындарды құрастыру және еркін оқу" },
  { title: "Сөздер мен қысқа аяттар", desc: "Толық сөздер мен қысқа аяттарды оқу" },
];

const StructureSection = () => {
  return (
    <section id="structure" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Курс құрылымы</h2>
          <p className="text-muted-foreground text-lg">Әліппе курсы — 8 сабақ, әр сабаққа PDF оқулық</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {lessons.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 emerald-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">{i + 1}</span>
              </div>
              <div>
                <span className="text-xs font-medium text-gold uppercase tracking-wider">{i + 1}-сабақ</span>
                <h3 className="text-base font-bold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
