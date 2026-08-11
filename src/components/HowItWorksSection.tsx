const steps = [
  { n: "01", title: "Сабақты көресіз", desc: "Видеосабақты ыңғайлы уақытта қарайсыз." },
  { n: "02", title: "Материалмен танысасыз", desc: "PDF оқулық пен жұмыс дәптерін ашасыз." },
  { n: "03", title: "Тапсырманы орындайсыз", desc: "Жаттығуларды жазып, дауыстап оқисыз." },
  { n: "04", title: "Ұстаз тексереді", desc: "Тапсырмаңызды ұстаз тексеріп, пікір береді." },
  { n: "05", title: "Zoom арқылы бірге жұмыс жасайсыз", desc: "Қателерді тікелей сабақта түзетесіз." },
  { n: "06", title: "Келесі сабаққа өтесіз", desc: "Қадам-қадаммен алға жылжисыз." },
];

const HowItWorksSection = () => (
  <section id="how" className="py-16 sm:py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-gold text-sm font-medium uppercase tracking-wider">Оқу процесі</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
          Сабақ қалай өтеді?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((s) => (
          <div
            key={s.n}
            className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
          >
            <span className="text-2xl font-bold text-gold">{s.n}</span>
            <h3 className="text-base sm:text-lg font-bold text-foreground mt-2 mb-1.5">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
