import { createFileRoute } from "@tanstack/react-router";
import Lesson from "@/pages/Lesson";

export const Route = createFileRoute("/lesson/$courseSlug/$lessonId")({
  component: Lesson,
  head: () => ({
    meta: [
      { title: "Сабақ — Alif to Quran" },
      {
        name: "description",
        content:
          "Бейнесабақ, оқу материалдары және тест — сабақты аяқтап, келесі деңгейге өтіңіз.",
      },
      { property: "og:title", content: "Сабақ — Alif to Quran" },
      {
        property: "og:description",
        content: "Бейнесабақ, PDF материал және өзін-өзі тексеру тесті.",
      },
    ],
  }),
});
