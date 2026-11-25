import { FileText, Download, Clock } from "lucide-react";

type Props = {
  pdfs: { title: string; url: string | null }[];
};

const LessonMaterials = ({ pdfs }: Props) => {
  if (pdfs.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-4">Оқу материалы</h2>
      <div className="space-y-3">
        {pdfs.map((pdf) => (
          <div
            key={pdf.title}
            className="bg-card border border-border rounded-xl p-4 sm:p-5 flex items-center gap-4"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl emerald-gradient flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">{pdf.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">PDF · оқулық / пропись</p>
            </div>
            {pdf.url ? (
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 emerald-gradient text-primary-foreground px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold min-h-11"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Ашу</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-muted px-3 py-2 rounded-lg">
                <Clock className="w-3.5 h-3.5" />
                Жақында
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonMaterials;
