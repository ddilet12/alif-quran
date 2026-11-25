import { createFileRoute } from "@tanstack/react-router";
import Lesson from "@/pages/Lesson";
import { getLessonContent } from "@/lib/access";

export const Route = createFileRoute("/lesson/$courseSlug/$lessonId")({
  // Runs on the server: paid content is only returned to students with access.
  loader: ({ params }) => getLessonContent({ data: params }),
  // Signed PDF links expire, so never reuse an old result.
  staleTime: 0,
  component: Lesson,
  head: () => ({
    meta: [
      { title: "Сабақ — Alif to Quran" },
      {
        name: "description",
        content: "Бейнесабақ, оқу материалдары және тест — сабақты аяқтап, келесі деңгейге өтіңіз.",
      },
      { property: "og:title", content: "Сабақ — Alif to Quran" },
      {
        property: "og:description",
        content: "Бейнесабақ, PDF материал және өзін-өзі тексеру тесті.",
      },
    ],
  }),
});
