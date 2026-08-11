import { FileText, Download, Clock } from "lucide-react";

type Props = {
  pdfUrl?: string | undefined;
  pdfTitle?: string | undefined;
};

const LessonMaterials = ({ pdfUrl, pdfTitle }: Props) => {
  const title = pdfTitle || "Сабақ материалы (PDF)";

  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-4">Оқу материалы</h2>
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5 flex items-center gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl emerald-gradient flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">PDF · оқулық / пропись</p>
        </div>
        {pdfUrl ? (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 emerald-gradient text-primary-foreground px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold min-h-11"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Жүктеп алу</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-muted px-3 py-2 rounded-lg">
            <Clock className="w-3.5 h-3.5" />
            Жақында
          </span>
        )}
      </div>
    </div>
  );
};

export default LessonMaterials;
