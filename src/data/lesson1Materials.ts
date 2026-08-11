import m1 from "@/assets/lesson1/material-1.pdf.asset.json";
import m2 from "@/assets/lesson1/material-2.pdf.asset.json";
import m3 from "@/assets/lesson1/material-3.pdf.asset.json";
import m4 from "@/assets/lesson1/material-4.pdf.asset.json";
import m5 from "@/assets/lesson1/material-5.pdf.asset.json";
import m6 from "@/assets/lesson1/material-6.pdf.asset.json";
import m7 from "@/assets/lesson1/material-7.pdf.asset.json";
import m8 from "@/assets/lesson1/material-8.pdf.asset.json";

export type LessonMaterial = { title: string; url: string };

// 1-сабақ — Кіріспе сабақ материалдары
export const lesson1Materials: LessonMaterial[] = [
  { title: "Әліппе — 1-материал", url: m1.url },
  { title: "Әліппе — 2-материал", url: m2.url },
  { title: "Әліппе — 3-материал", url: m3.url },
  { title: "Әліппе — 4-материал", url: m4.url },
  { title: "Әліппе — 5-материал", url: m5.url },
  { title: "Әліппе — 6-материал", url: m6.url },
  { title: "Әліппе — 7-материал", url: m7.url },
  { title: "Әліппе — 8-материал", url: m8.url },
];
