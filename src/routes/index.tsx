import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Әліппе онлайн — Араб әліппесі және Құран оқу курсы" },
      {
        name: "description",
        content:
          "Араб әліппесін және Құран оқуды нөлден бастап ұстазбен үйреніңіз. Әліппе онлайн, Тәжуид және Құран хатымы курстары, Zoom сабақтары.",
      },
      { property: "og:title", content: "Әліппе онлайн — Араб әліппесі және Құран оқу курсы" },
      {
        property: "og:description",
        content:
          "Араб әріптерін үйрену, тәжуид онлайн және Құран оқу курсы — ұстаздың тексеруімен.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});
