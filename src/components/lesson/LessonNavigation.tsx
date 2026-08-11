import { Link } from "@/lib/router-compat";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type Props = {
  prevHref?: string;
  nextHref?: string;
  onComplete: () => void;
  completed: boolean;
};

const LessonNavigation = ({ prevHref, nextHref, onComplete, completed }: Props) => (
  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between border-t border-border pt-6">
    {prevHref ? (
      <Link
        to={prevHref}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" /> Алдыңғы
      </Link>
    ) : (
      <span />
    )}

    <button
      type="button"
      onClick={onComplete}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
        completed
          ? "bg-primary/10 text-primary border border-primary/30"
          : "bg-primary text-primary-foreground hover:bg-primary/90"
      }`}
    >
      <CheckCircle2 className="w-4 h-4" />
      {completed ? "Аяқталды" : "Аяқталды деп белгілеу"}
    </button>

    {nextHref ? (
      <Link
        to={nextHref}
        className="inline-flex items-center justify-center gap-2 gold-gradient text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-semibold"
      >
        Келесі <ArrowRight className="w-4 h-4" />
      </Link>
    ) : (
      <span />
    )}
  </div>
);

export default LessonNavigation;
