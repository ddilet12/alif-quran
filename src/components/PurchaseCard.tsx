import { Lock, LogIn, MessageCircle } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { waLink } from "@/lib/contact";
import { formatPrice, type Course } from "@/data/courses";

type Props = {
  course: Course;
  /** Signed-in student's email; when missing the card asks them to sign in first. */
  email?: string | null | undefined;
  /** Where to come back after signing in. */
  returnTo: string;
  heading?: string;
};

const PurchaseCard = ({
  course,
  email,
  returnTo,
  heading = "Бұл сабақ ақылы курсқа кіреді",
}: Props) => {
  const message =
    `Сәлеметсіз бе! «${course.title}» курсын сатып алғым келеді (${formatPrice(course)}).` +
    (email ? `\nСайттағы email: ${email}` : "");

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 text-center shadow-sm">
      <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
        <Lock className="w-6 h-6 text-primary" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{heading}</h2>
      <p className="text-muted-foreground mb-1">
        «{course.title}» —{" "}
        <span className="font-semibold text-foreground">{formatPrice(course)}</span>
      </p>
      {course.accessDays && (
        <p className="text-sm text-muted-foreground">
          Төлемнен кейін {course.accessDays} күнге ашылады.
        </p>
      )}

      {email ? (
        <>
          <ol className="text-left text-sm text-foreground/85 max-w-md mx-auto mt-6 mb-6 space-y-2 list-decimal pl-5">
            <li>WhatsApp-қа жазыңыз — төлем реквизиттерін жібереміз.</li>
            <li>Kaspi арқылы төлеңіз.</li>
            <li>Ұстаз курсты сіздің аккаунтыңызға ашады ({email}).</li>
          </ol>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 gold-gradient text-accent-foreground px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp-қа жазу
          </a>
        </>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mt-6 mb-6 max-w-md mx-auto">
            Курсты сатып алу үшін алдымен тіркеліңіз — төлемнен кейін курс сіздің аккаунтыңызға
            ашылады.
          </p>
          <Link
            to={`/login?redirect=${encodeURIComponent(returnTo)}`}
            className="inline-flex items-center justify-center gap-2 emerald-gradient text-primary-foreground px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            <LogIn className="w-5 h-5" /> Кіру / Тіркелу
          </Link>
        </>
      )}
    </div>
  );
};

export default PurchaseCard;
