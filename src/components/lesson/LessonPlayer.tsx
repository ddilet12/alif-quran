import { PlayCircle } from "lucide-react";

type Props = { videoUrl?: string; title: string };

const LessonPlayer = ({ videoUrl, title }: Props) => {
  if (videoUrl) {
    return (
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted shadow-md">
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="aspect-video w-full rounded-xl bg-secondary border border-dashed border-border flex flex-col items-center justify-center text-center p-6">
      <PlayCircle className="w-16 h-16 text-muted-foreground mb-3" />
      <p className="text-sm text-muted-foreground">Видеосабақ жақын арада қосылады</p>
    </div>
  );
};

export default LessonPlayer;
