'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import SiteHeader from '@/components/SiteHeader';
import { chapters, type Chapter, type Exercise } from '@/lib/chapters';
import { emptyProgress, readProgress, writeChapterProgress, type ChapterProgress } from '@/lib/progress';

function normalize(value: string) {
  return value.trim().toLocaleLowerCase('fr').replace(/\s+/g, '').replace(',', '.');
}

function isCorrect(exercise: Exercise, value: string) {
  if (exercise.kind === 'choice') return Number(value) === exercise.answer;
  return (exercise.answer as string[]).some((answer) => normalize(answer) === normalize(value));
}

export default function ChapterView({ chapter }: { chapter: Chapter }) {
  const [progress, setProgress] = useState<ChapterProgress>(emptyProgress());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, 'correct' | 'incorrect'>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readProgress()[chapter.slug] || emptyProgress();
    setProgress(stored);
    setReady(true);
  }, [chapter.slug]);

  const completed = progress.lessons.length + progress.exercises.length;
  const total = chapter.lessons.length + chapter.exercises.length;
  const percent = Math.round((completed / total) * 100);

  const chapterIndex = chapters.findIndex((item) => item.slug === chapter.slug);
  const previous = chapterIndex > 0 ? chapters[chapterIndex - 1] : undefined;
  const next = chapter.nextSlug ? chapters.find((item) => item.slug === chapter.nextSlug) : undefined;

  const cssVariables = {
    '--accent': chapter.accent,
    '--accent-light': chapter.accentLight,
  } as CSSProperties;

  const updateProgress = (nextProgress: ChapterProgress) => {
    setProgress(nextProgress);
    writeChapterProgress(chapter.slug, nextProgress);
  };

  const toggleLesson = (id: string) => {
    const done = progress.lessons.includes(id);
    updateProgress({
      ...progress,
      lessons: done ? progress.lessons.filter((item) => item !== id) : [...progress.lessons, id],
    });
  };

  const validate = (exercise: Exercise) => {
    const value = answers[exercise.id] || '';
    if (!value) return;
    const correct = isCorrect(exercise, value);
    setResults((current) => ({ ...current, [exercise.id]: correct ? 'correct' : 'incorrect' }));
    if (correct && !progress.exercises.includes(exercise.id)) {
      updateProgress({ ...progress, exercises: [...progress.exercises, exercise.id] });
    }
  };

  const clearResult = (exerciseId: string) => {
    setResults((current) => {
      const next = { ...current };
      delete next[exerciseId];
      return next;
    });
  };

  const codeChapter = chapter.slug === 'algorithmique';
  const progressLabel = useMemo(() => {
    if (!ready || completed === 0) return 'À commencer';
    if (completed === total) return 'Chapitre terminé';
    return `${completed} étape${completed > 1 ? 's' : ''} sur ${total}`;
  }, [ready, completed, total]);

  return (
    <div className="chapter" style={cssVariables}>
      <SiteHeader currentSlug={chapter.slug} />

      <main>
        <header className="chapter-cover">
          <div className="chapter-cover__topline">
            <Link href="/">Sommaire</Link><span>/</span><strong>Chapitre {chapter.number}</strong>
          </div>
          <div className="chapter-cover__grid">
            <div>
              <p className="chapter-label">Mathématiques · Première générale</p>
              <h1><span>{chapter.number}</span>{chapter.title}</h1>
              <p className="chapter-subtitle">{chapter.subtitle}</p>
              <p className="chapter-intro">{chapter.intro}</p>
              <a className="button button--accent" href="#cours">Commencer le cours</a>
            </div>
            <aside className="chapter-facts" aria-label="Repères du chapitre">
              <p className="chapter-facts__title">Repères du chapitre</p>
              <dl>
                <div><dt>Question</dt><dd>{chapter.question}</dd></div>
                <div><dt>Durée indicative</dt><dd>{chapter.duration}</dd></div>
                <div><dt>Notions</dt><dd>{chapter.program}</dd></div>
              </dl>
            </aside>
          </div>
        </header>

        <section className="objectives page-width" aria-labelledby="objectifs-title">
          <div>
            <p className="overline">Avant de commencer</p>
            <h2 id="objectifs-title">Objectifs et prérequis</h2>
          </div>
          <div className="objectives__columns">
            <div>
              <h3>À la fin du chapitre, je saurai…</h3>
              <ul className="check-list">
                {chapter.objectives.map((objective) => <li key={objective}>{objective}</li>)}
              </ul>
            </div>
            <div>
              <h3>Je vérifie mes bases</h3>
              <ul className="dash-list">
                {chapter.prerequisites.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <div className="chapter-progress page-width" aria-label="Progression dans le chapitre">
          <div>
            <span>Ma progression</span>
            <strong>{progressLabel}</strong>
          </div>
          <div className="progress-track"><i style={{ width: `${percent}%` }} /></div>
          <b>{percent} %</b>
        </div>

        <div className="textbook-layout page-width" id="cours">
          <aside className="contents-sidebar">
            <p>Dans ce chapitre</p>
            <ol>
              {chapter.lessons.map((lesson, index) => (
                <li key={lesson.id} className={progress.lessons.includes(lesson.id) ? 'is-done' : ''}>
                  <a href={`#${lesson.id}`}><span>{index + 1}</span>{lesson.title}</a>
                </li>
              ))}
            </ol>
            <a href="#exercices">Exercices corrigés</a>
            <a href="#mission">Mission</a>
          </aside>

          <div className="lessons">
            {chapter.lessons.map((lesson, index) => {
              const lessonDone = progress.lessons.includes(lesson.id);
              return (
                <article className="lesson" id={lesson.id} key={lesson.id}>
                  <header className="lesson__header">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div><p>{lesson.eyebrow}</p><h2>{lesson.title}</h2></div>
                  </header>
                  <p className="lesson__lead">{lesson.lead}</p>
                  <div className="lesson__body">
                    {lesson.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>

                  {lesson.definition && (
                    <aside className="definition-box">
                      <strong>{lesson.definition.term}</strong>
                      <p>{lesson.definition.text}</p>
                    </aside>
                  )}

                  {lesson.formulas && (
                    <div className={codeChapter ? 'formula-sheet formula-sheet--code' : 'formula-sheet'} aria-label={codeChapter ? 'Extrait de code' : 'Formules à retenir'}>
                      <span>{codeChapter ? 'Python' : 'À retenir'}</span>
                      {lesson.formulas.map((formula, formulaIndex) => (
                        <code key={`${formula}-${formulaIndex}`}>{formula || '\u00A0'}</code>
                      ))}
                    </div>
                  )}

                  {lesson.method && (
                    <div className="method-box">
                      <h3>Méthode</h3>
                      <ol>{lesson.method.map((step) => <li key={step}>{step}</li>)}</ol>
                    </div>
                  )}

                  {lesson.example && (
                    <section className="worked-example">
                      <div className="worked-example__label">Exemple résolu</div>
                      <h3>{lesson.example.title}</h3>
                      <p className="worked-example__statement">{lesson.example.statement}</p>
                      <ol>{lesson.example.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                      <p className="worked-example__result"><strong>Conclusion.</strong> {lesson.example.result}</p>
                    </section>
                  )}

                  {lesson.warning && <p className="warning-box"><strong>Attention.</strong> {lesson.warning}</p>}

                  <button
                    className={`lesson-complete ${lessonDone ? 'is-done' : ''}`}
                    type="button"
                    onClick={() => toggleLesson(lesson.id)}
                    aria-pressed={lessonDone}
                  >
                    <span aria-hidden="true">{lessonDone ? '✓' : ''}</span>
                    {lessonDone ? 'Leçon comprise' : 'Marquer cette leçon comme comprise'}
                  </button>
                </article>
              );
            })}

            <section className="practice" id="exercices">
              <header className="section-heading">
                <p className="overline">S’entraîner</p>
                <h2>Exercices autocorrigés</h2>
                <p>Réponds sans regarder le cours, puis utilise la correction pour comprendre ton erreur.</p>
              </header>

              <div className="exercise-list">
                {chapter.exercises.map((exercise, index) => {
                  const result = results[exercise.id];
                  const solved = progress.exercises.includes(exercise.id);
                  return (
                    <article className={`exercise ${result ? `is-${result}` : ''}`} key={exercise.id}>
                      <header>
                        <span>Exercice {index + 1}</span>
                        <b>{exercise.label}</b>
                        {solved && <em>Validé ✓</em>}
                      </header>
                      <p className="exercise__question">{exercise.question}</p>

                      {exercise.kind === 'choice' && exercise.options ? (
                        <div className="choice-list">
                          {exercise.options.map((option, optionIndex) => (
                            <label key={option}>
                              <input
                                type="radio"
                                name={`${chapter.slug}-${exercise.id}`}
                                value={optionIndex}
                                checked={answers[exercise.id] === String(optionIndex)}
                                onChange={(event) => {
                                  setAnswers((current) => ({ ...current, [exercise.id]: event.target.value }));
                                  clearResult(exercise.id);
                                }}
                              />
                              <span>{String.fromCharCode(65 + optionIndex)}</span>{option}
                            </label>
                          ))}
                        </div>
                      ) : (
                        <label className="short-answer">
                          <span>Réponse</span>
                          <input
                            type="text"
                            inputMode="decimal"
                            placeholder={exercise.placeholder}
                            value={answers[exercise.id] || ''}
                            onChange={(event) => {
                              setAnswers((current) => ({ ...current, [exercise.id]: event.target.value }));
                              clearResult(exercise.id);
                            }}
                            onKeyDown={(event) => { if (event.key === 'Enter') validate(exercise); }}
                          />
                        </label>
                      )}

                      <div className="exercise__actions">
                        <button type="button" onClick={() => validate(exercise)} disabled={!answers[exercise.id]}>Vérifier</button>
                        {!result && <details><summary>Un indice</summary><p>{exercise.hint}</p></details>}
                      </div>

                      {result && (
                        <div className="feedback" role="status">
                          <strong>{result === 'correct' ? 'Bonne réponse.' : 'Pas encore.'}</strong>
                          {result === 'incorrect' && <span> Relis l’indice, puis essaie à nouveau.</span>}
                          <details open={result === 'correct'}>
                            <summary>Voir la correction</summary>
                            <p>{exercise.correction}</p>
                          </details>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="mission" id="mission">
              <div className="mission__band"><span>Mission</span><strong>{chapter.mission.subject}</strong></div>
              <div className="mission__content">
                <p className="overline">Mobiliser le chapitre</p>
                <h2>{chapter.mission.title}</h2>
                <p className="mission__context">{chapter.mission.context}</p>
                <div className="mission__task"><strong>Travail demandé</strong><p>{chapter.mission.task}</p></div>
                <ol>{chapter.mission.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                <p className="mission__expected"><strong>Production attendue :</strong> {chapter.mission.expected}</p>
              </div>
            </section>

            <section className="recap">
              <div><p className="overline">L’essentiel</p><h2>Ce que je retiens</h2></div>
              <ol>{chapter.recap.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol>
            </section>
          </div>
        </div>

        <nav className="chapter-pagination page-width" aria-label="Passer d’un chapitre à l’autre">
          {previous ? <Link href={`/${previous.slug}`}><small>Chapitre précédent</small><strong>← {previous.shortTitle}</strong></Link> : <span />}
          {next ? <Link href={`/${next.slug}`} className="chapter-pagination__next"><small>Chapitre suivant</small><strong>{next.shortTitle} →</strong></Link> : <Link href="/" className="chapter-pagination__next"><small>Parcours terminé</small><strong>Retour au sommaire →</strong></Link>}
        </nav>
      </main>

      <footer className="site-footer">
        <div><strong>L’Atelier des Maths</strong><span>Manuel numérique · Première générale</span></div>
        <p>Les réponses et la progression restent enregistrées uniquement sur cet appareil.</p>
      </footer>
    </div>
  );
}
