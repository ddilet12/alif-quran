// Paid lesson content. This module is only imported from server functions in
// src/lib/access.ts, so nothing here reaches the browser unless the student has
// access to the course.
//
// How to add content to a lesson:
// - videoUrl: an embed URL (Vimeo with domain restriction, Bunny Stream, etc.).
//   A plain YouTube link can be shared by anyone who gets it.
// - pdfs: upload the file in Supabase → Storage → bucket "course-materials"
//   into a folder named after the course slug (e.g. "alippe/lesson-1.pdf"),
//   then put that path here. Students get a link that expires after 10 minutes.

import type { QuizQuestion } from "@/data/courses";

export type LessonContent = {
  videoUrl?: string;
  textContent?: string;
  examples?: { arabic: string; transliteration: string; translation?: string; audioUrl?: string }[];
  quiz?: QuizQuestion[];
  /** Paths inside the private "course-materials" bucket. */
  pdfs?: { title: string; path: string }[];
};

const alippePdf = (n: number, title: string) => ({
  pdfs: [{ title, path: `alippe/lesson-${n}.pdf` }],
});

export const lessonContent: Record<string, LessonContent> = {
  "alippe/l1": alippePdf(1, "1-сабақ. Араб әліпбиі: 1-бөлім"),
  "alippe/l2": alippePdf(2, "2-сабақ. Араб әліпбиі: 2-бөлім"),
  "alippe/l3": alippePdf(3, "3-сабақ. Харакаттар"),
  "alippe/l4": alippePdf(4, "4-сабақ. Мадд"),
  "alippe/l5": alippePdf(5, "5-сабақ. Сукун және Ташдид"),
  "alippe/l6": alippePdf(6, "6-сабақ. Танвин"),
  "alippe/l7": alippePdf(7, "7-сабақ. Буындарды оқу"),
  "alippe/l8": alippePdf(8, "8-сабақ. Сөздер мен қысқа аяттар"),
};
