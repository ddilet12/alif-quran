import { Link } from "@/lib/router-compat";
import { PlayCircle, ArrowRight } from "lucide-react";

const IntroLessonSection = () => (
  <section id="intro-lesson" className="py-14 sm:py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
            <PlayCircle className="w-7 h-7 text-accent-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-xs font-medium text-gold uppercase tracking-wider">
              1-сабақ · Ашық
            </span>
            <h2 className="text-2xl font-bold text-foreground mt-1 mb-2">Кіріспе сабақ</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Оқу форматы және алғашқы қадамдармен танысыңыз.
            </p>
          </div>
          <Link
            to="/kirispe-sabaq"
            className="inline-flex items-center justify-center gap-2 gold-gradient text-accent-foreground px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md whitespace-nowrap"
          >
            Сабақты бастау <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default IntroLessonSection;
