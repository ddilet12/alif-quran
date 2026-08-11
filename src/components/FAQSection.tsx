import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Мен мүлдем білмеймін, бастай аламын ба?",
    a: "Иә! Курс нөлден бастауға арналған. Ешқандай алдын ала білім қажет емес — барлығын қадам-қадам үйретеміз.",
  },
  {
    q: "Курс қанша уақыт жүреді?",
    a: "Әліппе курсы 4 апта. Күніне 20-30 минут уақытыңыз жеткілікті.",
  },
  {
    q: "Видеосабақтар қашан болады?",
    a: "Видеосабақтар дайын, кез-келген уақытта көре аласыз. Сабақтар 24/7 қолжетімді.",
  },
  {
    q: "Сабақ бере алмасам, ақшамды қайтара аласыз ба?",
    a: "Иә! Алғашқы 7 күн ішінде курс сізге сәйкес болмаса — ақшаңызды толық қайтарамыз. Тәуекел жоқ.",
  },
  {
    q: "Тексеру қалай жүреді?",
    a: "Апта сайын тапсырма жібересіз, мен тексеріп, жеке пікір беремін. WhatsApp/Telegram арқылы байланысасыз.",
  },
  {
    q: "Басқа курстардан (Таджуид, Хатым) айырмашылығы не?",
    a: "Әліппе — бастаушыларға. Әріптерді үйренесіз. Таджуид — ережемен оқу. Хатым — толық Құранды оқып шығу. Деңгейіңізге қарай таңдайсыз.",
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
              className="bg-card border border-border rounded-xl px-6"
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
