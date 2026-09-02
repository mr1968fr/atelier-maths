'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModeSession = '20min' | '1h' | '1h30';

type Detail = {
  h: string;
  p: string;
};

type Project = {
  topic: string;
  desc: string;
  livrable: string;
  difficulty: string;
  duration: string;
  specialite: string;
};

type Step = {
  number?: string;
  title: string;
  subtitle?: string;
  content?: string;
  details?: Detail[];
  hasLab?: boolean;
  hasLab2?: boolean;
  isProject?: boolean;
  intro?: string;
  projects?: Project[];
  deep?: { label: string; text: string }[];
};

type Question = {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
};

const LAB_XP = 150;

const LESSON_STEPS: Step[] = [
  {
    number: '01',
    title: 'Modéliser le réel',
    subtitle: 'Croissance linéaire ou exponentielle ?',
    content:
      "Une suite permet de décrire l'évolution d'une quantité au fil du temps. Le premier réflexe consiste à observer comment cette quantité évolue.",
    details: [
      {
        h: 'Suite arithmétique',
        p: "On ajoute toujours la même quantité. Exemple : +500 habitants chaque année.",
      },
      {
        h: 'Suite géométrique',
        p: "On multiplie toujours par le même nombre. Exemple : +5 % par an signifie × 1,05.",
      },
      {
        h: 'Vocabulaire',
        p: "Les valeurs u₀, u₁, u₂, ... sont les termes de la suite. Le nombre qui indique la position est l'indice.",
      },
    ],
    deep: [
      {
        label: 'À retenir',
        text: "La question essentielle est : ajoute-t-on une quantité constante ou multiplie-t-on par un coefficient constant ?",
      },
    ],
  },
  {
    number: '02',
    title: 'La suite arithmétique',
    subtitle: "L'évolution à pas constant",
    content:
      "Une suite arithmétique évolue toujours du même nombre. Ce nombre est appelé la raison r.",
    details: [
      {
        h: 'Relation de récurrence',
        p: 'uₙ₊₁ = uₙ + r',
      },
      {
        h: 'Formule explicite',
        p: 'uₙ = u₀ + n × r',
      },
      {
        h: 'Exemple',
        p: 'Si u₀ = 1 500 et r = 50, alors u₅ = 1 500 + 5 × 50 = 1 750.',
      },
    ],
    hasLab: true,
  },
  {
    number: '03',
    title: 'La suite géométrique',
    subtitle: 'La puissance des pourcentages',
    content:
      "Une suite géométrique évolue en multipliant toujours par le même coefficient q.",
    details: [
      {
        h: 'Coefficient multiplicateur',
        p: 'Une hausse de 5 % correspond à q = 1,05. Une baisse de 5 % correspond à q = 0,95.',
      },
      {
        h: 'Formule explicite',
        p: 'uₙ = u₀ × qⁿ',
      },
      {
        h: 'Vigilance',
        p: 'Ajouter 5 % puis encore 5 % ne donne pas +10 % exactement : on multiplie deux fois par 1,05.',
      },
    ],
    hasLab2: true,
    deep: [
      {
        label: 'Pour aller plus loin',
        text: "Les suites géométriques sont particulièrement adaptées aux phénomènes exprimés en pourcentage : inflation, intérêts, croissance d'une population ou évolution d'un chiffre d'affaires.",
      },
    ],
  },
  {
    number: 'MISSION',
    title: 'Atelier de modélisation',
    subtitle: 'Choisissez votre spécialité',
    isProject: true,
    intro:
      "Vous allez maintenant utiliser les suites pour étudier une situation proche de votre domaine. Chaque mission demande un livrable précis.",
    projects: [
      {
        specialite: 'SES',
        topic: "Inflation et pouvoir d'achat",
        desc:
          "Un salaire de 1 500 € augmente de 1,2 % par an tandis que les prix augmentent de 2 % par an.",
        livrable:
          'Identifier les suites, calculer les valeurs sur 5 ans et rédiger une conclusion sur le pouvoir d’achat.',
        difficulty: 'Avancé',
        duration: '25 min',
      },
      {
        specialite: 'SVT',
        topic: 'Croissance bactérienne',
        desc:
          'Une population commence avec 500 bactéries et augmente de 30 % chaque heure.',
        livrable:
          'Exprimer la suite, calculer la population après 8 h et déterminer quand elle dépasse 10 000 bactéries.',
        difficulty: 'Intermédiaire',
        duration: '20 min',
      },
      {
        specialite: 'HGGSP',
        topic: 'Évolution démographique',
        desc:
          'Une ville compte 50 000 habitants et perd 800 habitants chaque année.',
        livrable:
          'Construire le modèle arithmétique, calculer la population après 12 ans et interpréter les conséquences.',
        difficulty: 'Découverte',
        duration: '15 min',
      },
    ],
  },
];

const QUIZ_QUESTIONS: Question[] = [
  {
    q: 'Une quantité augmente chaque année de la même valeur. Quelle suite utiliser ?',
    options: ['Suite arithmétique', 'Suite géométrique', 'Aucune suite'],
    correct: 0,
    explanation:
      "Une variation constante correspond à une suite arithmétique.",
  },
  {
    q: 'Une quantité diminue de 10 %. Quel est le coefficient multiplicateur ?',
    options: ['0,10', '0,90', '1,10'],
    correct: 1,
    explanation:
      'Une baisse de 10 % correspond à 1 − 0,10 = 0,90.',
  },
  {
    q: 'On a u₀ = 100 et q = 2. Quelle est la valeur de u₃ ?',
    options: ['300', '600', '800'],
    correct: 2,
    explanation: 'u₃ = 100 × 2³ = 800.',
  },
  {
    q: 'La suite uₙ = 3n + 5 est de quel type ?',
    options: ['Arithmétique', 'Géométrique', 'Ni l’une ni l’autre'],
    correct: 0,
    explanation:
      'Elle est arithmétique car uₙ₊₁ − uₙ = 3 est constant.',
  },
  {
    q: 'Une suite géométrique possède q = 1,05. Que peut-on dire ?',
    options: ['Elle est décroissante', 'Elle est constante', 'Elle est croissante'],
    correct: 2,
    explanation:
      'Comme q > 1 et que les termes sont positifs, la suite est croissante.',
  },
];

export default function SuitesPage() {
  const [modeSession, setModeSession] =
    useState<ModeSession>('20min');

  const [view, setView] = useState<
    'home' | 'cours' | 'quiz' | 'resultat'
  >('home');

  const [step, setStep] = useState(0);
  const [openLesson, setOpenLesson] = useState(false);

  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] =
    useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);

  const [bonusXP, setBonusXP] = useState(0);

  const [lab1Ans, setLab1Ans] = useState<string | null>(null);
  const [lab2Ans, setLab2Ans] = useState<string | null>(null);

  const current = LESSON_STEPS[step];
  const question = QUIZ_QUESTIONS[quizIdx];
  const isLastStep = step === LESSON_STEPS.length - 1;
  const isLong = modeSession !== '20min';

  const totalXP = score * 100 + bonusXP;

  function restart() {
    setView('home');
    setStep(0);
    setOpenLesson(false);
    setQuizIdx(0);
    setSelectedAnswer(null);
    setIsLocked(false);
    setScore(0);
    setBonusXP(0);
    setLab1Ans(null);
    setLab2Ans(null);
  }

  function startChapter() {
    setView('cours');
    setStep(0);
    setOpenLesson(false);
  }

  function nextStep() {
    setOpenLesson(false);

    if (isLastStep) {
      setView('quiz');
      setQuizIdx(0);
      setSelectedAnswer(null);
      setIsLocked(false);
      return;
    }

    setStep((value) => value + 1);
  }

  function handleAnswer(index: number) {
    if (isLocked) return;

    setSelectedAnswer(index);
    setIsLocked(true);

    if (index === question.correct) {
      setScore((value) => value + 1);
    }
  }

  function nextQuestion() {
    if (quizIdx < QUIZ_QUESTIONS.length - 1) {
      setQuizIdx((value) => value + 1);
      setSelectedAnswer(null);
      setIsLocked(false);
    } else {
      setView('resultat');
    }
  }

  function handleLab1(answer: string) {
    if (lab1Ans) return;

    setLab1Ans(answer);

    if (answer === 'On ajoute (+ r)') {
      setBonusXP((value) => value + LAB_XP);
    }
  }

  function handleLab2(answer: string) {
    if (lab2Ans) return;

    setLab2Ans(answer);

    if (answer === '× 1,05') {
      setBonusXP((value) => value + LAB_XP);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm font-medium text-black/60 transition hover:text-black"
          >
            ← Chapitres
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-semibold tracking-wide md:block">
            L’ATELIER DES MATHS
          </div>

          <div className="flex items-center gap-2">
            {(['20min', '1h', '1h30'] as ModeSession[]).map(
              (mode) => (
                <button
                  key={mode}
                  onClick={() => setModeSession(mode)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    modeSession === mode
                      ? 'border-black bg-black text-white'
                      : 'border-black/15 bg-white hover:border-black/40'
                  }`}
                >
                  {mode}
                </button>
              )
            )}

            {view !== 'home' && (
              <div className="ml-2 rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">
                {totalXP} XP
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ACCUEIL DU CHAPITRE */}
      {view === 'home' && (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
              Tronc commun · Chapitre 01
            </p>

            <h1 className="text-6xl font-black tracking-[-0.05em] md:text-8xl">
              LES SUITES
            </h1>

            <p className="mt-8 max-w-2xl text-2xl leading-tight text-black/70 md:text-3xl">
              Comment prévoir l’évolution d’une population,
              d’un capital ou d’un phénomène ?
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/55">
              Les suites permettent de modéliser des évolutions
              réelles. Vous allez apprendre à reconnaître les deux
              modèles essentiels : arithmétique et géométrique.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={startChapter}
                className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80"
              >
                Commencer le chapitre →
              </button>

              <span className="text-sm text-black/45">
                Session {modeSession}
              </span>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">
            {[
              {
                label: 'SES',
                title: 'Inflation',
                text: 'Salaires, prix et pouvoir d’achat.',
              },
              {
                label: 'SVT',
                title: 'Croissance',
                text: 'Population bactérienne et évolution.',
              },
              {
                label: 'HGGSP',
                title: 'Démographie',
                text: 'Évolution de la population d’une ville.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                  {item.label}
                </p>

                <h2 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* COURS */}
      {view === 'cours' && (
        <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-black/40">
              <span>
                Étape {step + 1} / {LESSON_STEPS.length}
              </span>

              <span>{modeSession}</span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-black transition-all duration-500"
                style={{
                  width: `${((step + 1) / LESSON_STEPS.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <article className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm md:p-10">
            {current.number && (
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/35">
                {current.number}
              </p>
            )}

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              {current.title}
            </h1>

            {current.subtitle && (
              <p className="mt-3 text-xl text-black/55">
                {current.subtitle}
              </p>
            )}

            {/* MISSION */}
            {current.isProject ? (
              <div className="mt-10">
                <p className="max-w-3xl text-base leading-7 text-black/65">
                  {current.intro}
                </p>

                <div className="mt-8 grid gap-5">
                  {current.projects?.map((project) => (
                    <div
                      key={project.specialite}
                      className="rounded-3xl border border-black/10 bg-[#fafaf8] p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                            {project.specialite}
                          </p>

                          <h2 className="mt-2 text-2xl font-bold">
                            {project.topic}
                          </h2>
                        </div>

                        <div className="flex gap-2">
                          <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium">
                            {project.duration}
                          </span>

                          <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                            {project.difficulty}
                          </span>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-6 text-black/65">
                        {project.desc}
                      </p>

                      <div className="mt-5 border-t border-black/10 pt-5">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                          Livrable attendu
                        </p>

                        <p className="mt-2 text-sm font-medium leading-6">
                          {project.livrable}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
                  {current.content}
                </p>

                {current.details && (
                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {current.details.map((detail) => (
                      <div
                        key={detail.h}
                        className="rounded-2xl bg-[#f7f7f5] p-5"
                      >
                        <h2 className="font-bold">{detail.h}</h2>

                        <p className="mt-3 text-sm leading-6 text-black/60">
                          {detail.p}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {current.details && (
                  <button
                    onClick={() => setOpenLesson(!openLesson)}
                    className="mt-7 text-sm font-semibold underline underline-offset-4"
                  >
                    {openLesson
                      ? 'Réduire la notion'
                      : 'Approfondir la notion'}
                  </button>
                )}

                {openLesson && current.deep && (
                  <div className="mt-6 space-y-4">
                    {current.deep.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-black/10 bg-[#fafaf8] p-5"
                      >
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                          {item.label}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-black/65">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* MINI-LAB 1 */}
            {current.hasLab && (
              <div className="mt-10 rounded-3xl border border-black/10 bg-black p-6 text-white md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                      Mini-Lab
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      Comment évolue une suite arithmétique ?
                    </h2>
                  </div>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    +{LAB_XP} XP
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/65">
                  Pour passer d’un terme au suivant, que fait-on ?
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {['On ajoute (+ r)', 'On multiplie (× q)'].map(
                    (answer) => {
                      const correct =
                        answer === 'On ajoute (+ r)';
                      const selected = lab1Ans === answer;

                      return (
                        <button
                          key={answer}
                          disabled={!!lab1Ans}
                          onClick={() => handleLab1(answer)}
                          className={`rounded-2xl border p-4 text-left text-sm transition ${
                            selected
                              ? correct
                                ? 'border-white bg-white text-black'
                                : 'border-white/30 bg-white/10'
                              : 'border-white/15 hover:border-white/40'
                          }`}
                        >
                          {answer}
                        </button>
                      );
                    }
                  )}
                </div>

                {lab1Ans && (
                  <p className="mt-4 text-sm text-white/70">
                    {lab1Ans === 'On ajoute (+ r)'
                      ? 'Correct : une suite arithmétique ajoute toujours la même raison r.'
                      : 'Pas tout à fait : la multiplication par un coefficient constant caractérise une suite géométrique.'}
                  </p>
                )}
              </div>
            )}

            {/* MINI-LAB 2 */}
            {current.hasLab2 && (
              <div className="mt-10 rounded-3xl border border-black/10 bg-black p-6 text-white md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                      Mini-Lab
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      Une hausse de 5 %
                    </h2>
                  </div>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    +{LAB_XP} XP
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/65">
                  Quel coefficient multiplicateur correspond à une
                  hausse de 5 % ?
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {['× 1,05', '× 0,05', '+ 5'].map((answer) => {
                    const correct = answer === '× 1,05';
                    const selected = lab2Ans === answer;

                    return (
                      <button
                        key={answer}
                        disabled={!!lab2Ans}
                        onClick={() => handleLab2(answer)}
                        className={`rounded-2xl border p-4 text-left text-sm transition ${
                          selected
                            ? correct
                              ? 'border-white bg-white text-black'
                              : 'border-white/30 bg-white/10'
                            : 'border-white/15 hover:border-white/40'
                        }`}
                      >
                        {answer}
                      </button>
                    );
                  })}
                </div>

                {lab2Ans && (
                  <p className="mt-4 text-sm text-white/70">
                    {lab2Ans === '× 1,05'
                      ? 'Correct : 100 % + 5 % = 105 %, donc × 1,05.'
                      : 'Non : une hausse de 5 % correspond à un coefficient multiplicateur de 1,05.'}
                  </p>
                )}
              </div>
            )}

            {/* NOTE POUR LES SESSIONS LONGUES */}
            {isLong && current.deep && (
              <div className="mt-8 rounded-2xl border border-black/10 bg-[#fafaf8] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                  Pour aller plus loin
                </p>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  Cette partie permet d’approfondir la notion et de
                  consolider les méthodes attendues au BTS.
                </p>
              </div>
            )}

            {/* NAVIGATION */}
            <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
              <button
                disabled={step === 0}
                onClick={() => {
                  setOpenLesson(false);
                  setStep((value) => Math.max(0, value - 1));
                }}
                className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:border-black/30 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Précédent
              </button>

              <button
                onClick={nextStep}
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
              >
                {isLastStep
                  ? 'Passer au quiz →'
                  : 'Continuer →'}
              </button>
            </div>
          </article>
        </section>
      )}

      {/* QUIZ */}
      {view === 'quiz' && (
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Validation · Question {quizIdx + 1} /{' '}
              {QUIZ_QUESTIONS.length}
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Vérifie tes acquis
            </h1>

            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-black transition-all"
                style={{
                  width: `${
                    ((quizIdx + 1) /
                      QUIZ_QUESTIONS.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-xl font-bold leading-8 md:text-2xl">
              {question.q}
            </h2>

            <div className="mt-7 space-y-3">
              {question.options.map((option, index) => {
                const selected = selectedAnswer === index;
                const correct = index === question.correct;

                let className =
                  'border-black/10 bg-[#fafaf8] hover:border-black/30';

                if (isLocked && correct) {
                  className =
                    'border-black bg-black text-white';
                } else if (
                  isLocked &&
                  selected &&
                  !correct
                ) {
                  className =
                    'border-black/30 bg-black/5';
                }

                return (
                  <button
                    key={option}
                    disabled={isLocked}
                    onClick={() => handleAnswer(index)}
                    className={`w-full rounded-2xl border p-5 text-left text-sm font-medium transition ${className}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {isLocked && (
              <div className="mt-7 rounded-2xl bg-[#f7f7f5] p-5">
                <p className="text-sm font-semibold">
                  {selectedAnswer === question.correct
                    ? 'Bonne réponse.'
                    : 'À revoir.'}
                </p>

                <p className="mt-2 text-sm leading-6 text-black/60">
                  {question.explanation}
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-end">
              {isLocked && (
                <button
                  onClick={nextQuestion}
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
                >
                  {quizIdx === QUIZ_QUESTIONS.length - 1
                    ? 'Voir mon bilan →'
                    : 'Question suivante →'}
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* RÉSULTAT */}
      {view === 'resultat' && (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Chapitre terminé
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Bilan de fin de chapitre
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-black/55">
              Les Suites Numériques
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-black p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                Score
              </p>

              <p className="mt-5 text-6xl font-black">
                {score} / {QUIZ_QUESTIONS.length}
              </p>

              <p className="mt-4 text-sm text-white/55">
                {score === QUIZ_QUESTIONS.length
                  ? 'Chapitre parfaitement maîtrisé.'
                  : 'Les erreurs sont une étape normale de l’apprentissage.'}
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                XP gagné
              </p>

              <p className="mt-5 text-6xl font-black">
                {totalXP}
              </p>

              <p className="mt-4 text-sm text-black/50">
                Quiz : {score * 100} XP · Mini-Labs : {bonusXP} XP
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] border border-black/10 bg-white p-8">
            <h2 className="text-2xl font-bold">
              Compétences travaillées
            </h2>

            <div className="mt-6 grid gap-3 md:grid-cols-4">
              {[
                'Modélisation',
                'Calcul',
                'Pourcentages',
                'Interprétation',
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl bg-[#f7f7f5] p-4 text-sm font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] border border-black/10 bg-[#fafaf8] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Pourquoi c’est utile ?
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-black/65">
              Les suites servent à modéliser des phénomènes
              d’évolution : données économiques en SES, croissance
              biologique en SVT, phénomènes démographiques en HGGSP,
              mais aussi de nombreuses situations informatiques.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={restart}
              className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold transition hover:border-black/40"
            >
              Refaire le chapitre
            </button>

            <Link
              href="/"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Choisir un autre chapitre →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}