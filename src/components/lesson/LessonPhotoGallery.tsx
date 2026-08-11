import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { LessonPhoto } from "@/data/lesson1Photos";

type Props = { photos: LessonPhoto[] };

const LessonPhotoGallery = ({ photos }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, prev, next]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.url}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group bg-card border border-border rounded-xl overflow-hidden text-left hover:shadow-md transition-shadow animate-in fade-in duration-500"
            aria-label={`${photo.title} — үлкейту`}
          >
            <img
              src={photo.url}
              alt={photo.title}
              loading="lazy"
              className="w-full h-auto object-contain bg-muted group-hover:opacity-90 transition-opacity"
            />
            <p className="text-xs sm:text-sm text-muted-foreground p-3 truncate">{photo.title}</p>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Жабу"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-card text-foreground flex items-center justify-center border border-border"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Алдыңғы"
            className="absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-card text-foreground flex items-center justify-center border border-border"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Келесі"
            className="absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-card text-foreground flex items-center justify-center border border-border"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <figure className="max-w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[openIndex]!.url}
              alt={photos[openIndex]!.title}
              className="max-h-[80vh] max-w-[88vw] w-auto h-auto object-contain rounded-xl"
            />
            <figcaption className="mt-3 text-center text-sm text-background">
              {photos[openIndex]!.title} ({openIndex + 1}/{photos.length})
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default LessonPhotoGallery;
