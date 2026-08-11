import { PlayCircle } from "lucide-react";

type VideoPlayerProps = {
  /** Кейін бұл жерге видео сілтемесін қосу жеткілікті (mp4 немесе YouTube/Vimeo embed URL). */
  src?: string;
  title?: string;
  poster?: string;
};

const isEmbed = (src: string) => /youtube|youtu\.be|vimeo/.test(src);

const VideoPlayer = ({ src, title = "Видео сабақ", poster }: VideoPlayerProps) => {
  if (src && isEmbed(src)) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-black">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  if (src) {
    return (
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        className="w-full aspect-video rounded-2xl border border-border bg-black"
      />
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border emerald-gradient flex flex-col items-center justify-center text-center px-6">
      <PlayCircle className="w-14 h-14 sm:w-16 sm:h-16 text-gold mb-3" />
      <p className="text-primary-foreground font-semibold text-base sm:text-lg">{title}</p>
      <p className="text-primary-foreground/70 text-xs sm:text-sm mt-1">
        Видео жақында осы жерде қолжетімді болады
      </p>
    </div>
  );
};

export default VideoPlayer;
