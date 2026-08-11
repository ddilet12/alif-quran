import { createFileRoute } from "@tanstack/react-router";
import Certificate from "@/pages/Certificate";

export const Route = createFileRoute("/certificate/$slug")({
  component: Certificate,
  head: () => ({
    meta: [
      { title: "Сертификат — Alif to Quran" },
      {
        name: "description",
        content:
          "Курсты сәтті аяқтағаныңыз туралы сертификатты қараңыз және жүктеп алыңыз.",
      },
      { property: "og:title", content: "Сертификат — Alif to Quran" },
      {
        property: "og:description",
        content: "Курсты аяқтағаны туралы жеке сертификат.",
      },
    ],
  }),
});
