// Files live in public/lesson1/ so they are served on any host (local, Vercel, Lovable).
export type LessonMaterial = { title: string; url: string };

// 1-сабақ — Кіріспе сабақ материалдары
export const lesson1Materials: LessonMaterial[] = Array.from({ length: 8 }, (_, i) => ({
  title: `Әліппе — ${i + 1}-материал`,
  url: `/lesson1/alippe-material-${i + 1}.pdf`,
}));
