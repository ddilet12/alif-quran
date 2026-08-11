import { createFileRoute } from "@tanstack/react-router";
import Teachers from "@/pages/Teachers";

export const Route = createFileRoute("/teachers")({
  component: Teachers,
  head: () => ({
    meta: [
      { title: "Ұстаздар — Alif to Quran" },
      {
        name: "description",
        content:
          "Тәжірибелі ұстаздарымызбен танысыңыз: біліктілігі, тәжірибесі және оқыту бағыттары.",
      },
      { property: "og:title", content: "Ұстаздар — Alif to Quran" },
      {
        property: "og:description",
        content: "Курсты жүргізетін тәжірибелі ұстаздар тобы.",
      },
    ],
  }),
});
