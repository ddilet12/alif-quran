import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "@/pages/Dashboard";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Менің оқуым — Alif to Quran" },
      {
        name: "description",
        content:
          "Курстардағы жетістігіңізді бақылаңыз: аяқталған сабақтар, прогресс және сертификаттар.",
      },
      { property: "og:title", content: "Менің оқуым — Alif to Quran" },
      {
        property: "og:description",
        content: "Жеке оқу прогресіңіз бен сертификаттарыңыз.",
      },
    ],
  }),
});
