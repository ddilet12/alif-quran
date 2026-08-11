import { Video } from "lucide-react";

const ZoomSection = () => (
  <section id="zoom" className="py-14 sm:py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
        <div className="w-14 h-14 emerald-gradient rounded-xl flex items-center justify-center flex-shrink-0">
          <Video className="w-7 h-7 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
            Ұстазбен тікелей сабақ
          </h2>
          <p className="text-gold font-semibold text-base sm:text-lg mb-2">
            Онлайн және офлайн — аптасына 2 рет Zoom арқылы
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Қай форматты таңдасаңыз да, сабаққа Zoom арқылы қосыла аласыз. Сабақ барысында
            сұрақтарға жауап алып, оқу барысындағы қателеріңізді ұстазбен бірге түзетесіз.
          </p>

        </div>
      </div>
    </div>
  </section>
);

export default ZoomSection;
