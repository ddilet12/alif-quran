import { GraduationCap, BookOpen, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ұстаз туралы</h2>
        </div>
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 emerald-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Мен <span className="font-semibold text-primary">Нұр-Мүбарак Египет ислам мәдениеті университетінің</span> Исламтану факультетін бітірген маманмын. Ислам ғылымдарын терең оқып, қазіргі таңда онлайн форматта білім берумен айналысамын.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Мақсатым — дінді және Құран оқуын қарапайым, түсінікті түрде жеткізу.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <GraduationCap className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Исламтану маманы</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Онлайн оқыту</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Жүздеген оқушы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
