import { Progress } from "@/components/ui/progress";

type Props = { value: number; label?: string };

const LessonProgress = ({ value, label }: Props) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs text-muted-foreground">
      <span>{label || "Прогресс"}</span>
      <span>{value}%</span>
    </div>
    <Progress value={value} />
  </div>
);

export default LessonProgress;
