import { createFileRoute } from "@tanstack/react-router";
import Courses from "@/pages/Courses";

export const Route = createFileRoute("/courses/")({
  component: Courses,
  head: () => ({
    meta: [
      { title: "Курстар — Alif to Quran" },
      {
        name: "description",
        content:
          "Әліппе, тәжуид және Құран оқу курстарының толық тізімі — деңгейіңізге сай бағдарлама таңдаңыз.",
      },
      { property: "og:title", content: "Курстар — Alif to Quran" },
      {
        property: "og:description",
        content: "Әліппеден Құранға дейінгі онлайн курстар тізімі.",
      },
    ],
  }),
});
