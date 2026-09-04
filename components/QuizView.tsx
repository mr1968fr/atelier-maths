'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import SiteHeader from '@/components/SiteHeader';
import type { Chapter } from '@/lib/chapters';
import type { Quiz } from '@/lib/evaluations';
import { evaluationId, readEvaluationResults, saveEvaluationResult, type EvaluationResult } from '@/lib/evaluation-progress';

export default function QuizView({ chapter, quiz }: { chapter: Chapter; quiz: Quiz }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() => quiz.questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [attempt, setAttempt] = useState<EvaluationResult | null>(null);
  const [best, setBest] = useState<EvaluationResult | null>(null);

  useEffect(() => {
    const stored = readEvaluationResults()[evaluationId(quiz.chapterSlug, quiz.level)];
    setBest(stored || null);
  }, [quiz.chapterSlug, quiz.level]);

  const answered = answers.filter((answer) => answer !== null).length;
  const question = quiz.questions[current];
  const score = useMemo(
    () => quiz.questions.reduce((total, item, index) => total + (answers[index] === item.correct ? 1 : 0), 0),
    [answers, quiz.questions],
  );
  const grade = Math.round((score / quiz.questions.length) * 200) / 10;
  const bestGrade = best ? Math.round((best.score / best.total) * 200) / 10 : null;

  const submit = () => {
    if (answered !== quiz.questions.length) return;
    const result = { score, total: quiz.questions.length, completedAt: new Date().toISOString() };
    setAttempt(result);
    setSubmitted(true);
    saveEvaluationResult(quiz.chapterSlug, quiz.level, result);
    const stored = readEvaluationResults()[evaluationId(quiz.chapterSlug, quiz.level)];
    setBest(stored || result);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setAnswers(quiz.questions.map(() => null));
    setCurrent(0);
    setSubmitted(false);
    setAttempt(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const appreciation = grade >= 16
    ? { title: 'Très bonne maîtrise', text: 'Les notions essentielles et les raisonnements sont solides.' }
    : grade >= 12
      ? { title: 'Acquis satisfaisants', text: 'Quelques points restent à consolider à l’aide des corrections.' }
      : grade >= 8
        ? { title: 'En cours d’acquisition', text: 'Relis les leçons indiquées dans les corrections avant une nouvelle tentative.' }
        : { title: 'À reprendre', text: 'Reprends les définitions et les exemples résolus, puis essaie le QCM progressif.' };

  const style = { '--accent': chapter.accent, '--accent-light': chapter.accentLight } as CSSProperties;

  if (submitted && attempt) {
    return (
      <div className="quiz-page" style={style}>
        <SiteHeader />
        <main>
          <section className="quiz-result page-width">
            <div className="quiz-result__score">
              <p className="overline">Résultat · Niveau {quiz.level}</p>
              <div><strong>{grade}</strong><span>/20</span></div>
              <h1>{appreciation.title}</h1>
              <p>{appreciation.text}</p>
              {bestGrade !== null && <small>Meilleur résultat enregistré : {bestGrade}/20</small>}
            </div>
            <div className="quiz-result__summary">
              <div><strong>{score}</strong><span>bonnes réponses</span></div>
              <div><strong>{quiz.questions.length - score}</strong><span>points à revoir</span></div>
              <div><strong>{Math.round((score / quiz.questions.length) * 100)} %</strong><span>de réussite</span></div>
            </div>
          </section>

          <section className="quiz-correction page-width">
            <header><p className="overline">Correction détaillée</p><h2>Comprendre chaque réponse</h2></header>
            <div className="quiz-correction__list">
              {quiz.questions.map((item, index) => {
                const correct = answers[index] === item.correct;
                return (
                  <article className={correct ? 'is-correct' : 'is-wrong'} key={item.id}>
                    <div className="quiz-correction__number">{correct ? '✓' : '×'}</div>
                    <div>
                      <span>Question {index + 1} · {item.skill}</span>
                      <h3>{item.prompt}</h3>
                      {!correct && <p className="your-answer"><strong>Ta réponse :</strong> {answers[index] === null ? 'Aucune réponse' : item.options[answers[index]!]}</p>}
                      <p className="right-answer"><strong>Réponse correcte :</strong> {item.options[item.correct]}</p>
                      <p className="explanation">{item.explanation}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="quiz-result__actions">
              <button type="button" onClick={restart}>Refaire cette évaluation</button>
              <Link href={`/${chapter.slug}`}>Revoir le chapitre</Link>
              <Link href="/evaluations">Toutes les évaluations</Link>
            </div>
          </section>
        </main>
        <footer className="site-footer"><div><strong>L’Atelier des Maths</strong><span>Évaluation corrigée</span></div></footer>
      </div>
    );
  }

  return (
    <div className="quiz-page" style={style}>
      <SiteHeader />
      <main>
        <header className="quiz-header">
          <div className="page-width quiz-header__grid">
            <div>
              <div className="quiz-header__breadcrumb"><Link href="/evaluations">Évaluations</Link><span>/</span><strong>{chapter.shortTitle}</strong></div>
              <p className="overline">Niveau {quiz.level}</p>
              <h1>{quiz.title}</h1>
              <p>{quiz.description}</p>
            </div>
            <dl>
              <div><dt>Format</dt><dd>{quiz.questions.length} questions</dd></div>
              <div><dt>Temps conseillé</dt><dd>{quiz.duration}</dd></div>
              <div><dt>Barème</dt><dd>Note sur 20</dd></div>
              {bestGrade !== null && <div><dt>Meilleur résultat</dt><dd>{bestGrade}/20</dd></div>}
            </dl>
          </div>
        </header>

        <section className="quiz-workspace page-width">
          <aside className="quiz-map">
            <div><span>Progression</span><strong>{answered}/{quiz.questions.length}</strong></div>
            <div className="quiz-map__track"><i style={{ width: `${(answered / quiz.questions.length) * 100}%` }} /></div>
            <nav aria-label="Questions du QCM">
              {quiz.questions.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={`${current === index ? 'is-current' : ''} ${answers[index] !== null ? 'is-answered' : ''}`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Question ${index + 1}${answers[index] !== null ? ', répondue' : ''}`}
                >{index + 1}</button>
              ))}
            </nav>
            <p>La correction sera disponible après la validation des huit réponses.</p>
          </aside>

          <article className="quiz-question">
            <header><span>Question {current + 1} sur {quiz.questions.length}</span><strong>{question.skill}</strong></header>
            <h2>{question.prompt}</h2>
            <div className="quiz-options">
              {question.options.map((option, optionIndex) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={question.id}
                    checked={answers[current] === optionIndex}
                    onChange={() => setAnswers((values) => values.map((value, index) => index === current ? optionIndex : value))}
                  />
                  <span>{String.fromCharCode(65 + optionIndex)}</span>
                  <strong>{option}</strong>
                </label>
              ))}
            </div>

            <footer className="quiz-question__footer">
              <button type="button" className="quiz-previous" onClick={() => setCurrent((value) => Math.max(0, value - 1))} disabled={current === 0}>← Précédente</button>
              {current < quiz.questions.length - 1 ? (
                <button type="button" className="quiz-next" onClick={() => setCurrent((value) => Math.min(quiz.questions.length - 1, value + 1))}>Suivante →</button>
              ) : (
                <button type="button" className="quiz-submit" onClick={submit} disabled={answered !== quiz.questions.length}>Valider le QCM</button>
              )}
            </footer>
            {current === quiz.questions.length - 1 && answered !== quiz.questions.length && (
              <p className="quiz-missing">Il reste {quiz.questions.length - answered} question{quiz.questions.length - answered > 1 ? 's' : ''} sans réponse.</p>
            )}
          </article>
        </section>
      </main>
    </div>
  );
}
