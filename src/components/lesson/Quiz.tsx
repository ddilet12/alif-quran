import { useState } from "react";
import { Check, X } from "lucide-react";
import type { QuizQuestion } from "@/data/courses";
import { cn } from "@/lib/utils";

type Props = { questions: QuizQuestion[]; onComplete?: (score: number) => void };

const Quiz = ({ questions, onComplete }: Props) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.filter((q) => answers[q.id] === q.correctIndex).length;

  const submit = () => {
    setSubmitted(true);
    onComplete?.(score);
  };

  if (questions.length === 0) {
    return (
      <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-4 text-center">
        Бұл сабақта тест әлі қосылмаған.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {questions.map((q, qi) => (
        <div key={q.id} className="bg-card border border-border rounded-xl p-4 sm:p-6">
          <p className="font-medium text-foreground mb-4">
            {qi + 1}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              const selected = answers[q.id] === i;
              const isCorrect = i === q.correctIndex;
              const showState = submitted && (selected || isCorrect);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={submitted}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center justify-between gap-3",
                    selected && !submitted && "border-primary bg-primary/5",
                    !selected && !submitted && "border-border hover:border-primary/40",
                    submitted && isCorrect && "border-primary bg-primary/10 text-foreground",
                    submitted && selected && !isCorrect && "border-destructive bg-destructive/10",
                    submitted && !selected && !isCorrect && "opacity-60",
                  )}
                >
                  <span>{opt}</span>
                  {showState && isCorrect && <Check className="w-4 h-4 text-primary" />}
                  {showState && selected && !isCorrect && <X className="w-4 h-4 text-destructive" />}
                </button>
              );
            })}
          </div>
          {submitted && q.explanation && (
            <p className="text-sm text-muted-foreground mt-3">{q.explanation}</p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          type="button"
          onClick={submit}
          disabled={Object.keys(answers).length < questions.length}
          className="w-full sm:w-auto gold-gradient text-accent-foreground px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          Тексеру
        </button>
      ) : (
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
          <p className="text-foreground font-semibold">
            Нәтиже: {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
