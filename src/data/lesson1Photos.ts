// Files live in public/lesson1/ so they are served on any host (local, Vercel, Lovable).
export type LessonPhoto = { title: string; url: string };

// 1-сабақ — Кіріспе сабақ суреттері
export const lesson1Photos: LessonPhoto[] = [
  { title: "Араб алфавиті және жазылуы (1-бөлім)", url: "/lesson1/photo-1.jpeg" },
  { title: "Араб алфавиті және жазылуы (2-бөлім)", url: "/lesson1/photo-2.jpeg" },
  { title: "Харакаттар", url: "/lesson1/photo-3.jpeg" },
];
