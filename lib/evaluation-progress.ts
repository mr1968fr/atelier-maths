export const EVALUATION_KEY = 'atelier-maths-evaluations-v1';

export type EvaluationResult = {
  score: number;
  total: number;
  completedAt: string;
};

export type EvaluationStore = Record<string, EvaluationResult>;

export function evaluationId(chapterSlug: string, level: string) {
  return `${chapterSlug}-${level}`;
}

export function readEvaluationResults(): EvaluationStore {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(EVALUATION_KEY) || '{}') as EvaluationStore;
  } catch {
    return {};
  }
}

export function saveEvaluationResult(chapterSlug: string, level: string, result: EvaluationResult) {
  const store = readEvaluationResults();
  const id = evaluationId(chapterSlug, level);
  const previous = store[id];
  if (!previous || result.score >= previous.score) store[id] = result;
  window.localStorage.setItem(EVALUATION_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event('atelier-evaluation'));
}
