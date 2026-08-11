import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "@/lib/router-compat";
import SiteLayout from "@/components/SiteLayout";
import LessonPlayer from "@/components/lesson/LessonPlayer";
import AudioExample from "@/components/lesson/AudioExample";
import Quiz from "@/components/lesson/Quiz";
import LessonNavigation from "@/components/lesson/LessonNavigation";
import LessonProgress from "@/components/lesson/LessonProgress";
import LessonMaterials from "@/components/lesson/LessonMaterials";
import { getAllLessonsFlat, getCourseBySlug, getLesson } from "@/data/courses";
import {
  getCourseProgress,
  isLessonCompleted,
  markLessonCompleted,
} from "@/lib/progress";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

const Lesson = () => {
  const { courseSlug = "", lessonId = "" } = useParams();
  const data = getLesson(courseSlug, lessonId);
  const course = getCourseBySlug(courseSlug);

  const flat = useMemo(() => (course ? getAllLessonsFlat(course) : []), [course]);
  const idx = flat.findIndex((l) => l.id === lessonId);
  const prev = idx > 0 ? flat[idx - 1] : undefined;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined;

  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      setCompleted(isLessonCompleted(courseSlug, lessonId));
      if (course) setProgress(getCourseProgress(courseSlug, flat.length));
    };
    update();
    window.addEventListener("progress-updated", update);
    return () => window.removeEventListener("progress-updated", update);
  }, [courseSlug, lessonId, course, flat.length]);

  if (!data || !course) {
    return (
      <SiteLayout>
        <div className="max-w-3xl mx-auto py-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Сабақ табылмады</h1>
          <Link to="/courses" className="text-primary hover:underline">
            Каталогқа қайту
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const { lesson } = data;
  const examples = lesson.examples || [];
  const quiz = lesson.quiz || [];

  const handleComplete = () => markLessonCompleted(courseSlug, lessonId);

  return (
    <SiteLayout>
      <section className="py-6 sm:py-10 px-4 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/courses/${courseSlug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-3"
          >
            <ArrowLeft className="w-4 h-4" /> {course.title}
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{lesson.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">{lesson.duration}</p>
          <div className="mt-4 max-w-md">
            <LessonProgress value={progress} label="Курс прогресі" />
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <LessonMaterials pdfUrl={lesson.pdfUrl} pdfTitle={lesson.pdfTitle} />

          <LessonPlayer videoUrl={lesson.videoUrl} title={lesson.title} />

          <div className="prose prose-sm sm:prose-base max-w-none">
            {lesson.textContent ? (
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {lesson.textContent}
              </p>
            ) : (
              <div className="bg-muted/40 border border-dashed border-border rounded-xl p-5 text-sm text-muted-foreground text-center">
                Сабақтың мәтіндік материалы жақын арада қосылады.
              </div>
            )}
          </div>

          {examples.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Мысалдар</h2>
              <div className="space-y-3">
                {examples.map((ex, i) => (
                  <AudioExample key={i} {...ex} />
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Өзін-өзі тексеру</h2>
            <Quiz questions={quiz} />
          </div>

          <div className="bg-card border border-border rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Сұрағыңыз бар ма?</h3>
              <p className="text-sm text-muted-foreground">
                Тьюторға тікелей жазыңыз — жауап аласыз.
              </p>
            </div>
            <a
              href={waLink(`Сабақ: ${lesson.title}. Сұрағым бар:`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 emerald-gradient text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" /> Тьюторға жазу
            </a>
          </div>

          <LessonNavigation
            prevHref={prev ? `/lesson/${courseSlug}/${prev.id}` : undefined}
            nextHref={next ? `/lesson/${courseSlug}/${next.id}` : undefined}
            onComplete={handleComplete}
            completed={completed}
          />
        </div>
      </section>
    </SiteLayout>
  );
};

export default Lesson;
