import { GraduationCap, BookOpen, Monitor } from "lucide-react";
import { waLink } from "@/lib/contact";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Ұстаз туралы</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Ұстазыңызбен танысыңыз
          </h2>
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-10 border border-border shadow-md">
          <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
            {/* Фото орны — сурет қосылған кезде осы жерге қойылады */}
            <div className="mx-auto md:mx-0 w-40 h-40 sm:w-52 sm:h-52 emerald-gradient rounded-2xl flex flex-col items-center justify-center text-primary-foreground">
              <span className="text-4xl font-bold">Z</span>
              <span className="text-sm mt-1 opacity-80">Zauren</span>
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl font-bold text-foreground mb-1">Zauren</h3>
              <p className="text-primary font-medium mb-5">Исламтану маманы, ұстаз</p>

              <p className="text-foreground/85 leading-relaxed mb-4">
                Zauren — <span className="font-semibold text-primary">Нұр-Мүбарак Египет ислам
                мәдениеті университетінің</span> түлегі. Факультеті — Исламтану.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                «Мақсатым — араб әліппесі мен Құран оқуын қарапайым әрі түсінікті түрде үйрету.
                Сабақтар қадам-қадаммен жүреді, әр оқушының қарқынына бейімделеді.»
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Нұр-Мүбарак университеті — Исламтану факультеті
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">Әліппе, Тәжуид, Құран хатымы</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Monitor className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">Онлайн және офлайн оқыту</p>
                </div>
              </div>

              <a
                href={waLink("Сәлеметсіз бе! Сабақ туралы сұрағым бар.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Байланысу
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
