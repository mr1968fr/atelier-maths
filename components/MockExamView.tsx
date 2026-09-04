'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import SiteHeader from '@/components/SiteHeader';
import type { ExamTrack } from '@/lib/exam';

const MOCK_KEY = 'atelier-maths-sujets-blancs-v1';

type Phase = 'intro' | 'qcm' | 'written' | 'results';

export default function MockExamView({ track }: { track: ExamTrack }) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [seconds, setSeconds] = useState(120 * 60);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() => track.qcm.map(() => null));
  const [selfChecked, setSelfChecked] = useState<Record<string, boolean>>({});
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    try {
      const store = JSON.parse(window.localStorage.getItem(MOCK_KEY) || '{}');
      setBest(typeof store[track.slug] === 'number' ? store[track.slug] : null);
    } catch { setBest(null); }
  }, [track.slug]);

  useEffect(() => {
    if (phase === 'intro' || phase === 'results') return;
    const timer = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          window.clearInterval(timer);
          setPhase('results');
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const qcmScore = useMemo(() => track.qcm.reduce((score, question, index) => score + (answers[index] === question.correct ? 1 : 0), 0), [answers, track.qcm]);
  const qcmPoints = Math.round((qcmScore / track.qcm.length) * 60) / 10;
  const writtenPoints = track.exercises.reduce((sum, exercise, exerciseIndex) => sum + exercise.questions.reduce((questionSum, question, questionIndex) => questionSum + (selfChecked[`${exerciseIndex}-${questionIndex}`] ? question.points : 0), 0), 0);
  const total = Math.round((qcmPoints + writtenPoints) * 10) / 10;
  const answered = answers.filter((answer) => answer !== null).length;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const style = { '--accent': track.accent, '--accent-light': track.light } as CSSProperties;

  useEffect(() => {
    if (phase !== 'results') return;
    try {
      const store = JSON.parse(window.localStorage.getItem(MOCK_KEY) || '{}');
      if (typeof store[track.slug] !== 'number' || total > store[track.slug]) {
        store[track.slug] = total;
        window.localStorage.setItem(MOCK_KEY, JSON.stringify(store));
        setBest(total);
      }
    } catch { /* La copie reste utilisable sans stockage local. */ }
  }, [phase, total, track.slug]);

  const restart = () => {
    setPhase('intro'); setSeconds(120 * 60); setCurrent(0);
    setAnswers(track.qcm.map(() => null)); setSelfChecked({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timer = <div className={`mock-timer ${seconds < 15 * 60 ? 'is-low' : ''}`}><span>Temps restant</span><strong>{String(minutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}</strong></div>;

  if (phase === 'intro') {
    return (
      <div className="mock" style={style}>
        <SiteHeader />
        <main>
          <header className="mock-intro">
            <div className="page-width">
              <div className="mock-intro__crumb"><Link href={`/epreuve-anticipee/${track.slug}`}>{track.label}</Link><span>/</span><strong>Sujet blanc</strong></div>
              <p className="overline">Mise en situation</p>
              <h1>Sujet blanc<br />Épreuve anticipée</h1>
              <p>{track.audience}. Ce sujet original reprend la structure officielle et doit être traité sans calculatrice.</p>
            </div>
          </header>
          <section className="mock-instructions page-width">
            <div><p className="overline">Avant de commencer</p><h2>Installe-toi comme le jour de l’épreuve.</h2><ul><li>Prévois deux heures sans interruption.</li><li>Prends des feuilles, un brouillon et de quoi écrire.</li><li>N’utilise ni calculatrice ni téléphone.</li><li>Rédige la deuxième partie sur papier.</li></ul></div>
            <aside><p>Barème</p><div><span>Partie 1</span><strong>QCM · 6 points</strong></div><div><span>Partie 2</span><strong>{track.exercises.length} exercices · 14 points</strong></div><div><span>Durée</span><strong>120 minutes</strong></div><button type="button" onClick={() => setPhase('qcm')}>Démarrer le chronomètre →</button></aside>
          </section>
        </main>
      </div>
    );
  }

  if (phase === 'qcm') {
    const question = track.qcm[current];
    return (
      <div className="mock" style={style}>
        <SiteHeader />
        <main className="mock-session page-width">
          <header><div><p className="overline">Partie 1 · Automatismes</p><h1>Question {current + 1} sur {track.qcm.length}</h1></div>{timer}</header>
          <div className="mock-session__layout">
            <aside><p>Questions</p><nav>{track.qcm.map((item, index) => <button type="button" key={item.id} onClick={() => setCurrent(index)} className={`${current === index ? 'is-current' : ''} ${answers[index] !== null ? 'is-answered' : ''}`}>{index + 1}</button>)}</nav><small>{answered}/{track.qcm.length} réponses</small></aside>
            <article className="mock-qcm">
              <span>{question.skill}</span><h2>{question.prompt}</h2>
              <div>{question.options.map((option, optionIndex) => <label key={option}><input type="radio" name={question.id} checked={answers[current] === optionIndex} onChange={() => setAnswers((values) => values.map((value, index) => index === current ? optionIndex : value))}/><b>{String.fromCharCode(65 + optionIndex)}</b><strong>{option}</strong></label>)}</div>
              <footer><button type="button" onClick={() => setCurrent(Math.max(0,current-1))} disabled={current===0}>← Précédente</button>{current < track.qcm.length-1 ? <button type="button" onClick={() => setCurrent(Math.min(track.qcm.length-1,current+1))}>Suivante →</button> : <button type="button" onClick={() => setPhase('written')} disabled={answered !== track.qcm.length}>Passer aux exercices →</button>}</footer>
              {current === track.qcm.length-1 && answered !== track.qcm.length && <p>Réponds aux {track.qcm.length-answered} question{track.qcm.length-answered>1?'s':''} restante{track.qcm.length-answered>1?'s':''} avant de continuer.</p>}
            </article>
          </div>
        </main>
      </div>
    );
  }

  if (phase === 'written') {
    return (
      <div className="mock" style={style}>
        <SiteHeader />
        <main className="mock-written page-width">
          <header><div><p className="overline">Partie 2 · Exercices</p><h1>Raisonner et rédiger</h1><p>Travaille sur ta copie. Les zones de notes sont facultatives et ne remplacent pas une rédaction complète.</p></div>{timer}</header>
          <div className="mock-written__exercises">
            {track.exercises.map((exercise, exerciseIndex) => <article key={exercise.title}><header><span>Exercice {exerciseIndex+1}</span><strong>{exercise.questions.reduce((sum,item)=>sum+item.points,0)} points</strong></header><h2>{exercise.title.replace(/^Exercice \d+ · /,'')}</h2><p>{exercise.context}</p><ol>{exercise.questions.map((question, questionIndex) => <li key={question.prompt}><div><span>{questionIndex+1}.</span><p>{question.prompt}</p><strong>{question.points} pt{question.points>1?'s':''}</strong></div><textarea aria-label={`Notes pour la question ${questionIndex+1}`} placeholder="Notes facultatives…" /></li>)}</ol></article>)}
          </div>
          <div className="mock-finish"><p>Assure-toi d’avoir rédigé et justifié chaque réponse avant d’ouvrir la correction.</p><button type="button" onClick={() => {setPhase('results'); window.scrollTo({top:0,behavior:'smooth'});}}>Terminer et ouvrir la correction</button></div>
        </main>
      </div>
    );
  }

  return (
    <div className="mock" style={style}>
      <SiteHeader />
      <main>
        <section className="mock-result page-width">
          <div><p className="overline">Résultat provisoire</p><div><strong>{total}</strong><span>/20</span></div><h1>{total >= 16 ? 'Très bonne maîtrise' : total >= 12 ? 'Résultat solide' : total >= 8 ? 'Encore quelques efforts' : 'Des bases à reprendre'}</h1><p>La note évolue lorsque tu coches les critères réussis dans la correction de la partie 2.</p>{best !== null && <small>Meilleur résultat enregistré : {best}/20</small>}</div>
          <aside><div><span>QCM</span><strong>{qcmPoints}/6</strong></div><div><span>Exercices</span><strong>{writtenPoints}/14</strong></div><div><span>Temps utilisé</span><strong>{120-minutes} min</strong></div></aside>
        </section>

        <section className="mock-correction page-width">
          <header><p className="overline">Correction · Partie 1</p><h2>Automatismes</h2><p>{qcmScore} bonne{qcmScore>1?'s':''} réponse{qcmScore>1?'s':''} sur {track.qcm.length}. Chaque question a le même poids dans les 6 points.</p></header>
          <div className="mock-correction__qcm">{track.qcm.map((question,index)=>{const right=answers[index]===question.correct;return <article className={right?'is-right':'is-wrong'} key={question.id}><span>{right?'✓':'×'}</span><div><small>Question {index+1} · {question.skill}</small><h3>{question.prompt}</h3>{!right&&<p><strong>Ta réponse :</strong> {answers[index]===null?'Aucune':question.options[answers[index]!]}</p>}<p><strong>Réponse :</strong> {question.options[question.correct]}</p><div>{question.explanation}</div></div></article>})}</div>

          <header className="mock-correction__part2"><p className="overline">Correction · Partie 2</p><h2>Exercices rédigés</h2><p>Pour chaque question, coche « réussi » uniquement si ta démarche, tes calculs et ta conclusion sont corrects.</p></header>
          <div className="mock-correction__written">{track.exercises.map((exercise,exerciseIndex)=><article key={exercise.title}><h3>{exercise.title}</h3><p>{exercise.context}</p><ol>{exercise.questions.map((question,questionIndex)=>{const id=`${exerciseIndex}-${questionIndex}`;return <li key={question.prompt}><div><span>{questionIndex+1}.</span><p>{question.prompt}</p><strong>{question.points} pt{question.points>1?'s':''}</strong></div><div className="mock-correction__answer">{question.correction}</div><label><input type="checkbox" checked={Boolean(selfChecked[id])} onChange={(event)=>setSelfChecked((values)=>({...values,[id]:event.target.checked}))}/><span>Ma réponse est complète et justifiée</span></label></li>})}</ol></article>)}</div>

          <div className="mock-result-actions"><button type="button" onClick={restart}>Refaire ce sujet</button><Link href={`/epreuve-anticipee/${track.slug}`}>Retour au parcours</Link><Link href="/epreuve-anticipee">Changer de parcours</Link></div>
        </section>
      </main>
      <footer className="site-footer"><div><strong>L’Atelier des Maths</strong><span>Sujet blanc · {track.label}</span></div></footer>
    </div>
  );
}
