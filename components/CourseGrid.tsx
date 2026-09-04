'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Chapter } from '@/lib/chapters';
import { readProgress, type ProgressStore } from '@/lib/progress';

export default function CourseGrid({ chapters }: { chapters: Chapter[] }) {
  const [store, setStore] = useState<ProgressStore>({});

  useEffect(() => {
    const refresh = () => setStore(readProgress());
    refresh();
    window.addEventListener('storage', refresh);
    window.addEventListener('atelier-progress', refresh);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('atelier-progress', refresh);
    };
  }, []);

  return (
    <div className="course-list">
      {chapters.map((chapter) => {
        const progress = store[chapter.slug] || { lessons: [], exercises: [] };
        const total = chapter.lessons.length + chapter.exercises.length;
        const done = progress.lessons.length + progress.exercises.length;
        const percent = Math.round((done / total) * 100);

        return (
          <article className="course-row" key={chapter.slug} style={{ '--row-accent': chapter.accent } as React.CSSProperties}>
            <div className="course-row__number">{chapter.number}</div>
            <div className="course-row__main">
              <p>{chapter.program}</p>
              <h3>{chapter.title}</h3>
              <span>{chapter.subtitle}</span>
            </div>
            <div className="course-row__progress" aria-label={`Progression : ${percent} %`}>
              <span>{done ? `${percent} % terminé` : chapter.duration}</span>
              <div><i style={{ width: `${percent}%`, background: chapter.accent }} /></div>
            </div>
            <Link href={`/${chapter.slug}`} aria-label={`Ouvrir le chapitre ${chapter.title}`}>
              {done ? 'Continuer' : 'Ouvrir'} <span aria-hidden="true">→</span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
