import { createFileRoute } from "@tanstack/react-router";
import CourseDetail from "@/pages/CourseDetail";

export const Route = createFileRoute("/courses/$slug")({
  component: CourseDetail,
  head: () => ({
    meta: [
      { title: "Курс бағдарламасы — Alif to Quran" },
      {
        name: "description",
        content:
          "Курс сабақтарының тізімі, ұзақтығы және оқу материалдары туралы толық ақпарат.",
      },
      { property: "og:title", content: "Курс бағдарламасы — Alif to Quran" },
      {
        property: "og:description",
        content: "Курс сабақтары, материалдар және оқу жоспары.",
      },
    ],
  }),
});
