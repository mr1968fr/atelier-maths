export const PROGRESS_KEY = 'atelier-maths-progress-v1';

export type ChapterProgress = {
  lessons: string[];
  exercises: string[];
};

export type ProgressStore = Record<string, ChapterProgress>;

export const emptyProgress = (): ChapterProgress => ({ lessons: [], exercises: [] });

export function readProgress(): ProgressStore {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(PROGRESS_KEY) || '{}') as ProgressStore;
  } catch {
    return {};
  }
}

export function writeChapterProgress(slug: string, progress: ChapterProgress) {
  const store = readProgress();
  store[slug] = progress;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event('atelier-progress'));
}
