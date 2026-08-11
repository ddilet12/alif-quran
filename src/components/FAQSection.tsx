import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Әліппені мүлдем білмесем, оқуға бола ма?",
    a: "Иә. Курс нөлден бастайтындарға арналған. Араб әріптерін тануды алғашқы сабақтан бастап қадам-қадаммен үйренесіз.",
  },
  {
    q: "Оқу онлайн қалай өтеді?",
    a: "Видео сабақты көресіз, электронды материалмен танысасыз, тапсырманы орындап жібересіз. Ұстаз тексеріп, кері байланыс береді.",
  },
  {
    q: "Аптасына неше рет сабақ болады?",
    a: "Видео сабақтар мен материалдар үнемі қолжетімді, ал ұстазбен тікелей Zoom сабағы аптасына 2 рет өтеді.",
  },
  {
    q: "Zoom сабағы қалай өтеді?",
    a: "Ұстазбен бірге оқисыз, сұрақтарыңызға жауап аласыз және оқу барысындағы қателеріңізді бірге түзетесіз.",
  },
  {
    q: "Офлайн оқу бар ма?",
    a: "Иә. Офлайн форматта Әліппе курсы — 50 000 ₸. Ұстазбен тікелей сабақ, практикалық оқу және жеке кері байланыс.",
  },
  {
    q: "Әліппе курсының бағасы қанша?",
    a: "Онлайн Әліппе — 30 000 ₸, офлайн Әліппе — 50 000 ₸. Тәжуид — 40 000 ₸, Құран хатымы — айына 40 000 ₸.",
  },
  {
    q: "Тапсырмаларды кім тексереді?",
    a: "Тапсырмаларды ұстаздың өзі тексереді және әр оқушыға жеке кері байланыс береді.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Сұрақ-жауап</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Жиі қойылатын сұрақтар
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-4 sm:px-6"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
