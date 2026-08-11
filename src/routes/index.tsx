import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alif to Quran — Құранды нөлден оқуды үйрену" },
      {
        name: "description",
        content:
          "Әліппеден Құранға дейін: тәжуид негіздері, тәжірибелі ұстаздар және онлайн курстар. Бүгін бастаңыз.",
      },
      { property: "og:title", content: "Alif to Quran — Құранды оқуды үйрену" },
      {
        property: "og:description",
        content:
          "Әліппеден Құранға дейінгі онлайн курс: тәжуид, дұрыс оқу, тәжірибелі ұстаздар.",
      },
    ],
  }),
});
