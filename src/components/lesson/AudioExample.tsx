import { Volume2 } from "lucide-react";

type Props = {
  arabic: string;
  transliteration: string;
  translation?: string;
  audioUrl?: string;
};

const AudioExample = ({ arabic, transliteration, translation, audioUrl }: Props) => (
  <div className="bg-card border border-border rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
    <div className="flex-1 min-w-0 w-full">
      <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-1 text-right" dir="rtl">
        {arabic}
      </div>
      <div className="text-sm text-muted-foreground italic">{transliteration}</div>
      {translation && <div className="text-sm text-foreground mt-1">{translation}</div>}
    </div>
    {audioUrl ? (
      <audio controls src={audioUrl} className="w-full sm:w-auto" />
    ) : (
      <button
        type="button"
        disabled
        className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-2 rounded-lg"
      >
        <Volume2 className="w-4 h-4" /> Аудио жоқ
      </button>
    )}
  </div>
);

export default AudioExample;
