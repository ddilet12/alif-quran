// Mock course data — content slots (videoUrl, audioUrl, text, examples, quiz)
// are placeholders. Fill them in later or migrate to Lovable Cloud.

export type Level = "beginner" | "intermediate" | "advanced";

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

export type Lesson = {
  id: string;
  title: string;
  duration: string; // e.g. "12 мин"
  videoUrl?: string; // YouTube/Vimeo embed URL — fill later
  audioUrl?: string; // Audio pronunciation file URL — fill later
  textContent?: string; // Lesson body (markdown/plain)
  examples?: { arabic: string; transliteration: string; translation?: string }[];
  quiz?: QuizQuestion[];
  pdfUrl?: string; // Downloadable lesson PDF (учебник/пропись)
  pdfTitle?: string;
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: Level;
  duration: string;
  icon: string; // emoji for now
  color: "primary" | "emerald-deep" | "gold";
  modules: Module[];
};

export const LEVEL_LABEL: Record<Level, string> = {
  beginner: "Бастаушы",
  intermediate: "Орта",
  advanced: "Жоғары",
};

export const courses: Course[] = [
  {
    slug: "alippe",
    title: "Әліппе",
    subtitle: "Араб әріптері мен оқу",
    description:
      "0-ден бастап араб әріптерін танып, дұрыс дыбыстап, қарапайым буындарды оқуды үйренесіз.",
    level: "beginner",
    duration: "8 сабақ",
    icon: "📖",
    color: "primary",
    modules: [
      {
        id: "m1",
        title: "Әліппе — 8 сабақ",
        lessons: [
          { id: "l1", title: "1-сабақ. Араб әліпбиі: 1-бөлім", duration: "15 мин", pdfTitle: "1-сабақ. Араб әліпбиі: 1-бөлім" },
          { id: "l2", title: "2-сабақ. Араб әліпбиі: 2-бөлім", duration: "15 мин", pdfTitle: "2-сабақ. Араб әліпбиі: 2-бөлім" },
          { id: "l3", title: "3-сабақ. Қысқа дауыстылар (Харакаттар)", duration: "15 мин", pdfTitle: "3-сабақ. Харакаттар" },
          { id: "l4", title: "4-сабақ. Ұзын дауыстылар (Мадд)", duration: "15 мин", pdfTitle: "4-сабақ. Мадд" },
          { id: "l5", title: "5-сабақ. Сукун және Ташдид", duration: "15 мин", pdfTitle: "5-сабақ. Сукун және Ташдид" },
          { id: "l6", title: "6-сабақ. Танвин", duration: "15 мин", pdfTitle: "6-сабақ. Танвин" },
          { id: "l7", title: "7-сабақ. Буындарды оқу", duration: "20 мин", pdfTitle: "7-сабақ. Буындарды оқу" },
          { id: "l8", title: "8-сабақ. Сөздер мен қысқа аяттар", duration: "20 мин", pdfTitle: "8-сабақ. Сөздер мен қысқа аяттар" },
        ],
      },
    ],
  },
  {
    slug: "tajweed-basics",
    title: "Tajweed негіздері",
    subtitle: "Дұрыс оқу ережелері",
    description:
      "Құранды дұрыс, ережемен оқуды үйретемін. Тажуид ережелерін қадам-қадам меңгересіз.",
    level: "intermediate",
    duration: "8 апта",
    icon: "🎙️",
    color: "emerald-deep",
    modules: [
      {
        id: "m1",
        title: "Кіріспе және макхараждар",
        lessons: [
          { id: "l1", title: "Tajweed дегеніміз не?", duration: "10 мин" },
          { id: "l2", title: "Әріптердің шығу орындары", duration: "15 мин" },
        ],
      },
      {
        id: "m2",
        title: "Нун сакин және танвин ережелері",
        lessons: [
          { id: "l3", title: "Изхар", duration: "12 мин" },
          { id: "l4", title: "Идғам", duration: "12 мин" },
          { id: "l5", title: "Иқлаб", duration: "10 мин" },
          { id: "l6", title: "Ихфа", duration: "12 мин" },
        ],
      },
    ],
  },
  {
    slug: "grammar",
    title: "Араб грамматикасы",
    subtitle: "Базалық грамматика және сөздік",
    description:
      "Араб тілінің негізгі ережелері мен жиі қолданылатын сөздер. Құран мағынасын түсінуге дайындық.",
    level: "intermediate",
    duration: "12 апта",
    icon: "📚",
    color: "primary",
    modules: [
      {
        id: "m1",
        title: "Зат есім және артикль",
        lessons: [{ id: "l1", title: "Алиф-лам артиклі", duration: "12 мин" }],
      },
      {
        id: "m2",
        title: "Етістік",
        lessons: [{ id: "l2", title: "Етістіктің үш түрі", duration: "15 мин" }],
      },
    ],
  },
  {
    slug: "quran-reading",
    title: "Құран оқу",
    subtitle: "Tajweed-пен толық оқу",
    description:
      "Құранды басынан аяғына дейін Tajweed ережелерімен оқу практикасы. Жеке кері байланыс.",
    level: "advanced",
    duration: "Жеке",
    icon: "🕌",
    color: "gold",
    modules: [
      {
        id: "m1",
        title: "Қысқа сүрелер",
        lessons: [{ id: "l1", title: "Әл-Фатиха", duration: "20 мин" }],
      },
    ],
  },
  {
    slug: "tafsir",
    title: "Тафсир",
    subtitle: "Аяттардың мағынасы",
    description:
      "Құран аяттарының түсіндірмесі. Сүрелердің мағынасы мен тарихи контекстін терең үйрену.",
    level: "advanced",
    duration: "Үздіксіз",
    icon: "✨",
    color: "emerald-deep",
    modules: [
      {
        id: "m1",
        title: "Кіріспе",
        lessons: [{ id: "l1", title: "Тафсир дегеніміз не?", duration: "15 мин" }],
      },
    ],
  },
];

export const getCourseBySlug = (slug: string) => courses.find((c) => c.slug === slug);

export const getLesson = (courseSlug: string, lessonId: string) => {
  const course = getCourseBySlug(courseSlug);
  if (!course) return null;
  for (const m of course.modules) {
    const lesson = m.lessons.find((l) => l.id === lessonId);
    if (lesson) return { course, module: m, lesson };
  }
  return null;
};

export const getAllLessonsFlat = (course: Course) =>
  course.modules.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id })));

export const totalLessons = (course: Course) =>
  course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
