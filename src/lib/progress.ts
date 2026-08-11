// Lightweight progress tracking via localStorage.
// Easy to swap for Lovable Cloud later — keep the same API surface.

const KEY = "alif-progress-v1";

type ProgressMap = Record<string, string[]>; // courseSlug -> completed lessonIds

const read = (): ProgressMap => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
};

const write = (data: ProgressMap) => {
  localStorage.setItem(KEY, JSON.stringify(data));
  window.dispatchEvent(new Event("progress-updated"));
};

export const getCompletedLessons = (courseSlug: string): string[] => read()[courseSlug] || [];

export const isLessonCompleted = (courseSlug: string, lessonId: string) =>
  getCompletedLessons(courseSlug).includes(lessonId);

export const markLessonCompleted = (courseSlug: string, lessonId: string) => {
  const data = read();
  const list = new Set(data[courseSlug] || []);
  list.add(lessonId);
  data[courseSlug] = Array.from(list);
  write(data);
};

export const resetCourseProgress = (courseSlug: string) => {
  const data = read();
  delete data[courseSlug];
  write(data);
};

export const getCourseProgress = (courseSlug: string, totalLessons: number) => {
  const completed = getCompletedLessons(courseSlug).length;
  return totalLessons === 0 ? 0 : Math.round((completed / totalLessons) * 100);
};
