import { Link } from "@/lib/router-compat";
import { Lock, PlayCircle } from "lucide-react";

const lessons = Array.from({ length: 12 }, (_, i) => ({
  n: i + 1,
  title: i === 0 ? "Кіріспе сабақ" : "Жақында",
  open: i === 0,
}));

const StructureSection = () => {
  return (
    <section id="structure" className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-gold text-sm font-medium uppercase tracking-wider">
            Оқу бағдарламасы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
            Әліппе бағдарламасы
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">12 сабақ</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.map((item) =>
            item.open ? (
              <Link
                key={item.n}
                to="/kirispe-sabaq"
                className="flex items-center gap-4 bg-card rounded-xl p-4 sm:p-5 border-2 border-primary hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 emerald-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-medium text-gold uppercase tracking-wider">
                    {item.n}-сабақ
                  </span>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                </div>
              </Link>
            ) : (
              <div
                key={item.n}
                className="flex items-center gap-4 bg-card rounded-xl p-4 sm:p-5 border border-border"
              >
                <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {item.n}-сабақ
                  </span>
                  <h3 className="text-base font-semibold text-muted-foreground">{item.title}</h3>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
