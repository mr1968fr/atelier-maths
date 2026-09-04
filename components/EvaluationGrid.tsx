'use client';

import Link from 'next/link';
import { useEffect, useState, type CSSProperties } from 'react';
import type { Chapter } from '@/lib/chapters';
import { evaluationId, readEvaluationResults, type EvaluationStore } from '@/lib/evaluation-progress';

export default function EvaluationGrid({ chapters }: { chapters: Chapter[] }) {
  const [results, setResults] = useState<EvaluationStore>({});

  useEffect(() => {
    const refresh = () => setResults(readEvaluationResults());
    refresh();
    window.addEventListener('storage', refresh);
    window.addEventListener('atelier-evaluation', refresh);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('atelier-evaluation', refresh);
    };
  }, []);

  return (
    <div className="evaluation-grid">
      {chapters.map((chapter) => (
        <article key={chapter.slug} style={{ '--quiz-accent': chapter.accent, '--quiz-light': chapter.accentLight } as CSSProperties}>
          <header><span>{chapter.number}</span><div><small>Chapitre</small><h3>{chapter.shortTitle}</h3></div></header>
          <div className="evaluation-grid__levels">
            {(['progressif', 'exigeant'] as const).map((level) => {
              const result = results[evaluationId(chapter.slug, level)];
              const grade = result ? Math.round((result.score / result.total) * 20 * 10) / 10 : null;
              return (
                <Link href={`/evaluations/${chapter.slug}/${level}`} key={level}>
                  <div><strong>{level === 'progressif' ? 'Progressif' : 'Exigeant'}</strong><span>8 questions · {level === 'progressif' ? '12 min' : '20 min'}</span></div>
                  <b>{grade === null ? 'Commencer →' : `${grade}/20 →`}</b>
                </Link>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
