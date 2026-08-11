export type Teacher = {
  id: string;
  name: string;
  title: string;
  bio: string;
  qualifications: string[];
  experience: string;
  initials: string;
};

export const teachers: Teacher[] = [
  {
    id: "main",
    name: "Бас ұстаз",
    title: "Исламтану маманы",
    bio: "Нұр-Мүбарак Египет ислам мәдениеті университетінің Исламтану факультетін бітірген маман. Ислам ғылымдарын терең оқып, қазіргі таңда онлайн форматта білім берумен айналысады.",
    qualifications: [
      "Нұр-Мүбарак университеті — Исламтану",
      "Tajweed бойынша сертификат",
      "Жүздеген оқушыны оқытқан тәжірибе",
    ],
    experience: "5+ жыл онлайн оқыту",
    initials: "БҰ",
  },
  {
    id: "tutor-1",
    name: "Көмекші тьютор",
    title: "Әліппе және Tajweed",
    bio: "Бастауыш деңгейдегі оқушылармен жұмыс істейді. Жеке кеңес береді, тапсырмаларды тексереді.",
    qualifications: ["Араб тілі мамандығы", "Балалармен жұмыс тәжірибесі"],
    experience: "3 жыл",
    initials: "КТ",
  },
];
