import heroBanner from "@/assets/hero-banner.jpg";
import { WHATSAPP_URL } from "@/lib/contact";

const HeroSection = () => (
  <section className="relative -mt-16 min-h-[100svh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBanner}
        alt="Араб әліппесі және Құран оқу курсы"
        width={1920}
        height={800}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 emerald-gradient opacity-85" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-12 sm:pt-20 sm:pb-16">
      <div className="inline-block mb-5 px-3 sm:px-4 py-1.5 rounded-full border border-gold/40 bg-primary/20 backdrop-blur-sm">
        <span className="text-gold text-xs sm:text-sm font-medium">
          🎓 Онлайн және офлайн оқу
        </span>
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-5 sm:mb-6 leading-tight">
        Араб әліппесін және Құран оқуын{" "}
        <span className="block sm:inline">
          <span className="text-gold">нөлден бастап</span> ұстазбен бірге үйреніңіз
        </span>
      </h1>
      <p className="text-base sm:text-xl text-primary-foreground/85 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed">
        Әліппе, Тәжуид және Құран хатымы — қадам-қадаммен, ұстаздың тексеруімен және Zoom
        сабақтарымен.
      </p>
      <p className="text-xs sm:text-sm text-primary-foreground/60 mb-8 sm:mb-10">
        Видео сабақтар + электронды материалдар + ұстаздың кері байланысы
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-gradient text-accent-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          Сабаққа жазылу
        </a>
        <a
          href="#structure"
          className="border-2 border-primary-foreground/40 text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
        >
          Бағдарламамен танысу
        </a>
      </div>
    </div>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
      <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
