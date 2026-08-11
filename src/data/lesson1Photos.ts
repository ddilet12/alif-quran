import p1 from "@/assets/lesson1/photo-1.jpeg.asset.json";
import p2 from "@/assets/lesson1/photo-2.jpeg.asset.json";
import p3 from "@/assets/lesson1/photo-3.jpeg.asset.json";

export type LessonPhoto = { title: string; url: string };

// 1-сабақ — Кіріспе сабақ суреттері
export const lesson1Photos: LessonPhoto[] = [
  { title: "Араб алфавиті және жазылуы (1-бөлім)", url: p1.url },
  { title: "Араб алфавиті және жазылуы (2-бөлім)", url: p2.url },
  { title: "Харакаттар", url: p3.url },
];
