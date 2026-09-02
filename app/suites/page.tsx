'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModeSession = '20min' | '1h' | '1h30';
type View = 'home' | 'cours' | 'quiz' | 'resultat';

type Project = {
  specialite: string;
  topic: string;
  desc: string;
  livrable: string;
  difficulty: string;
  duration: string;
};

type Step = {
  number?: string;
  label?: string;
  title: string;
  subtitle?: string;
  content?: string;
  details?: { h: string; p: string }[];
  history?: string;
  otherSpec?: { label: string; text: string }[];
  lab?: {
    title: string;
    question: string;
    answers: string[];
    correct: string;
    explanation: string;
  };
  projects?: Project[];
};

type Question = {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
};

const ACCENT = '#C65D3A';
const LAB_XP = 150;

const STEPS: Step[] = [
  {
    number: '01',
    label: 'DÉCOUVRIR',
    title: 'Modéliser le réel',
    subtitle: 'Prévoir ce qui va se passer',
    content:
      "Une suite permet de décrire l'évolution d'une quantité étape après étape. Population, salaire, capital, nombre de bactéries : dès qu'une quantité évolue régulièrement, les suites deviennent un outil puissant.",
    details: [
      {
        h: 'Ajouter',
        p: 'On ajoute toujours la même quantité : suite arithmétique.',
      },
      {
        h: 'Multiplier',
        p: 'On multiplie toujours par le même coefficient : suite géométrique.',
      },
      {
        h: 'Prévoir',
        p: 'Une fois le modèle identifié, on peut calculer les valeurs futures.',
      },
    ],
    history:
      "Les suites ne sont pas nées avec les ordinateurs. Les mathématiciens les utilisent depuis des siècles pour étudier les intérêts, les populations et les phénomènes qui évoluent étape par étape.",
    otherSpec: [
      {
        label: 'SES',
        text: 'Évolution des salaires, inflation, intérêts.',
      },
      {
        label: 'SVT',
        text: 'Croissance d’une population ou d’une culture.',
      },
      {
        label: 'HGGSP',
        text: 'Évolution démographique et données historiques.',
      },
    ],
  },
  {
    number: '02',
    label: 'COMPRENDRE',
    title: 'La suite arithmétique',
    subtitle: "L'évolution à pas constant",
    content:
      'Une suite arithmétique évolue toujours de la même quantité. Cette quantité est appelée la raison r.',
    details: [
      {
        h: 'Relation',
        p: 'uₙ₊₁ = uₙ + r',
      },
      {
        h: 'Formule',
        p: 'uₙ = u₀ + n × r',
      },
      {
        h: 'Exemple',
        p: '1 500 puis 1 550 puis 1 600 : la raison est 50.',
      },
    ],
    history:
      'Ce type de progression apparaît naturellement dès que l’on compte des augmentations ou des diminutions régulières : population, distance parcourue à vitesse constante, économies réalisées chaque semaine...',
    lab: {
      title: 'Mini-Lab · Trouver le modèle',
      question: 'Pour passer d’un terme au suivant, que fait-on ?',
      answers: ['On ajoute (+ r)', 'On multiplie (× q)'],
      correct: 'On ajoute (+ r)',
      explanation:
        'Correct : une suite arithmétique ajoute toujours la même raison r.',
    },
  },
  {
    number: '03',
    label: 'COMPRENDRE',
    title: 'La suite géométrique',
    subtitle: 'Quand les pourcentages entrent en jeu',
    content:
      'Une suite géométrique évolue en multipliant toujours par le même coefficient q. Elle est particulièrement utile lorsqu’une situation est décrite en pourcentage.',
    details: [
      {
        h: 'Coefficient',
        p: 'Hausse de 5 % → q = 1,05.',
      },
      {
        h: 'Formule',
        p: 'uₙ = u₀ × qⁿ',
      },
      {
        h: 'Attention',
        p: 'Deux hausses de 5 % ne donnent pas exactement une hausse de 10 %.',
      },
    ],
    history:
      'Les progressions géométriques sont notamment liées aux problèmes d’intérêts composés : un phénomène ancien, mais toujours présent dans la finance et l’économie actuelles.',
    otherSpec: [
      {
        label: 'SES',
        text: 'Inflation, intérêts composés, croissance économique.',
      },
      {
        label: 'SVT',
        text: 'Croissance exponentielle d’une population.',
      },
      {
        label: 'HGGSP',
        text: 'Croissance démographique et diffusion d’un phénomène.',
      },
    ],
    lab: {
      title: 'Mini-Lab · Les pourcentages',
      question: 'Quel coefficient correspond à une hausse de 5 % ?',
      answers: ['× 1,05', '× 0,05', '+ 5'],
      correct: '× 1,05',
      explanation:
        'Correct : 100 % + 5 % = 105 %, donc le coefficient multiplicateur est 1,05.',
    },
  },
  {
    number: '04',
    label: 'MISSION',
    title: 'Les maths rencontrent ta spécialité',
    subtitle: 'À toi de choisir ton terrain',
    content:
      'Tu connais peut-être déjà ces situations grâce à une autre spécialité. Ici, les mathématiques deviennent l’outil qui permet de les modéliser.',
    projects: [
      {
        specialite: 'SES',
        topic: 'Inflation et pouvoir d’achat',
        desc:
          'Un salaire de 1 500 € augmente de 1,2 % par an tandis que les prix augmentent de 2 % par an.',
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
          'Construire le modèle arithmétique, calculer la population après 12 ans et interpréter le résultat.',
        difficulty: 'Découverte',
        duration: '15 min',
      },
    ],
  },
];

const QUESTIONS: Question[] = [
  {
    q: 'Une quantité augmente chaque année de la même valeur. Quelle suite utiliser ?',
    options: ['Suite arithmétique', 'Suite géométrique', 'Aucune suite'],
    correct: 0,
    explanation:
      'Une variation constante correspond à une suite arithmétique.',
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
  const [mode, setMode] = useState<ModeSession>('20min');
  const [view, setView] = useState<View>('home');
  const [step, setStep] = useState(0);

  const [labAnswers, setLabAnswers] = useState<Record<number, string>>(
    {}
  );

  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);

  const current = STEPS[step];
  const question = QUESTIONS[quizIndex];
  const lastStep = step === STEPS.length - 1;

  const bonusXP = Object.entries(labAnswers).reduce(
    (total, [index, answer]) =>
      answer === STEPS[Number(index)].lab?.correct
        ? total + LAB_XP
        : total,
    0
  );

  const totalXP = score * 100 + bonusXP;

  function start() {
    setView('cours');
    setStep(0);
  }

  function chooseLab(answer: string) {
    if (!current.lab || labAnswers[step]) return;

    setLabAnswers((old) => ({
      ...old,
      [step]: answer,
    }));
  }

  function nextStep() {
    if (lastStep) {
      setView('quiz');
      setQuizIndex(0);
      setSelected(null);
      setLocked(false);
      return;
    }

    setStep((value) => value + 1);
  }

  function answerQuiz(index: number) {
    if (locked) return;

    setSelected(index);
    setLocked(true);

    if (index === question.correct) {
      setScore((value) => value + 1);
    }
  }

  function nextQuestion() {
    if (quizIndex < QUESTIONS.length - 1) {
      setQuizIndex((value) => value + 1);
      setSelected(null);
      setLocked(false);
    } else {
      setView('resultat');
    }
  }

  function restart() {
    setView('home');
    setStep(0);
    setLabAnswers({});
    setQuizIndex(0);
    setSelected(null);
    setLocked(false);
    setScore(0);
  }

  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#29221F]">
      {/* NAVIGATION */}
      <nav
        className="sticky top-0 z-50 border-b bg-[#FFF9F5]/95 backdrop-blur"
        style={{ borderColor: `${ACCENT}30` }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm font-semibold transition hover:opacity-60"
            style={{ color: ACCENT }}
          >
            ← Chapitres
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-black tracking-[0.15em] md:block">
            L’ATELIER DES MATHS
          </div>

          <div className="flex items-center gap-2">
            {(['20min', '1h', '1h30'] as ModeSession[]).map((item) => (
              <button
                key={item}
                onClick={() => setMode(item)}
                className="rounded-full border px-3 py-1.5 text-xs font-bold transition"
                style={{
                  borderColor:
                    mode === item ? ACCENT : '#29221F20',
                  background:
                    mode === item ? ACCENT : 'white',
                  color: mode === item ? 'white' : '#29221F',
                }}
              >
                {item}
              </button>
            ))}

            {view !== 'home' && (
              <div
                className="ml-2 rounded-full px-3 py-1.5 text-xs font-black text-white"
                style={{ backgroundColor: ACCENT }}
              >
                {totalXP} XP
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ACCUEIL */}
      {view === 'home' && (
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr]">
            <div
              className="rounded-[2.5rem] p-8 md:p-12"
              style={{ backgroundColor: '#F4D5C7' }}
            >
              <p
                className="text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Chapitre 01 · Tronc commun
              </p>

              <h1 className="mt-5 text-6xl font-black tracking-[-0.06em] md:text-8xl">
                LES
                <br />
                <span style={{ color: ACCENT }}>SUITES</span>
              </h1>

              <p className="mt-8 max-w-2xl text-2xl font-semibold leading-tight md:text-3xl">
                Comment prévoir l’évolution d’une population, d’un
                salaire ou d’un capital ?
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-[#29221F]/65">
                Une notion de maths devient beaucoup plus intéressante
                lorsqu’elle permet de comprendre quelque chose que tu
                connais déjà.
              </p>

              <button
                onClick={start}
                className="mt-8 rounded-full px-7 py-4 text-sm font-black text-white transition hover:scale-[1.02]"
                style={{ backgroundColor: ACCENT }}
              >
                Commencer le chapitre →
              </button>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <p
                  className="text-xs font-black uppercase tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  L’idée
                </p>
                <h2 className="mt-3 text-2xl font-black">
                  Observer l’évolution
                </h2>
                <p className="mt-3 text-sm leading-6 text-black/55">
                  Ajouter une quantité ou multiplier par un coefficient :
                  c’est toute la différence.
                </p>
              </div>

              <div
                className="rounded-[2rem] p-7 text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/65">
                  Dans ta spécialité
                </p>
                <p className="mt-3 text-xl font-bold">
                  SES · SVT · HGGSP
                </p>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Les suites permettent de modéliser des phénomènes
                  que tu rencontres déjà.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#29221F15] bg-[#FFFDFB] p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-black/40">
                  Ton défi
                </p>
                <p className="mt-3 text-lg font-bold">
                  Comprendre · Modéliser · Prévoir
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['🟠', 'Suite arithmétique', 'On ajoute toujours la même quantité.'],
              ['🔴', 'Suite géométrique', 'On multiplie toujours par le même coefficient.'],
              ['🌍', 'Application', 'On utilise le modèle pour comprendre le réel.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-[#29221F10] bg-white p-6"
              >
                <span className="text-2xl">{icon}</span>
                <h2 className="mt-4 font-black">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* COURS */}
      {view === 'cours' && (
        <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Les Suites · {current.label}
              </p>
              <p className="mt-2 text-sm text-black/45">
                Étape {step + 1} sur {STEPS.length} · Session {mode}
              </p>
            </div>

            <div className="hidden text-right md:block">
              <p className="text-xs font-bold text-black/40">PROGRESSION</p>
              <p className="mt-1 text-lg font-black">
                {Math.round(((step + 1) / STEPS.length) * 100)} %
              </p>
            </div>
          </div>

          <div className="mb-8 h-2 overflow-hidden rounded-full bg-[#29221F12]">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${((step + 1) / STEPS.length) * 100}%`,
                backgroundColor: ACCENT,
              }}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
            <article className="rounded-[2.5rem] bg-white p-7 shadow-sm md:p-10">
              <div className="flex items-start justify-between">
                <span
                  className="rounded-full px-4 py-2 text-xs font-black text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  {current.number || 'MISSION'}
                </span>

                {step === 0 && (
                  <span className="text-3xl">📖</span>
                )}
              </div>

              <h1 className="mt-7 text-4xl font-black tracking-tight md:text-6xl">
                {current.title}
              </h1>

              {current.subtitle && (
                <p
                  className="mt-3 text-xl font-semibold"
                  style={{ color: ACCENT }}
                >
                  {current.subtitle}
                </p>
              )}

              {current.content && (
                <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
                  {current.content}
                </p>
              )}

              {current.details && (
                <div className="mt-9 grid gap-4 md:grid-cols-3">
                  {current.details.map((detail, index) => (
                    <div
                      key={detail.h}
                      className="rounded-3xl p-5"
                      style={{
                        backgroundColor:
                          index === 0
                            ? '#F8E5DC'
                            : index === 1
                              ? '#F4F0E8'
                              : '#EAF0EA',
                      }}
                    >
                      <p
                        className="text-xs font-black uppercase tracking-wider"
                        style={{ color: ACCENT }}
                      >
                        {detail.h}
                      </p>
                      <p className="mt-3 text-sm font-semibold leading-6">
                        {detail.p}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {current.history && (
                <div
                  className="mt-8 rounded-3xl border-l-4 p-6"
                  style={{
                    borderColor: ACCENT,
                    backgroundColor: '#FFF5EF',
                  }}
                >
                  <p
                    className="text-xs font-black uppercase tracking-[0.15em]"
                    style={{ color: ACCENT }}
                  >
                    🕰️ Petite histoire
                  </p>
                  <p className="mt-3 text-sm leading-7 text-black/65">
                    {current.history}
                  </p>
                </div>
              )}

              {current.otherSpec && (
                <div className="mt-8">
                  <p
                    className="text-xs font-black uppercase tracking-[0.18em]"
                    style={{ color: ACCENT }}
                  >
                    🔎 Maths × autre spécialité
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {current.otherSpec.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-3xl border border-black/10 p-5"
                      >
                        <p className="text-lg font-black">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-black/55">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {current.lab && (
                <div
                  className="mt-9 rounded-[2rem] p-6 text-white md:p-7"
                  style={{ backgroundColor: '#342722' }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">
                        {current.lab.title}
                      </p>
                      <h2 className="mt-2 text-xl font-black">
                        {current.lab.question}
                      </h2>
                    </div>

                    <span
                      className="rounded-full px-3 py-1 text-xs font-black"
                      style={{ backgroundColor: ACCENT }}
                    >
                      +{LAB_XP} XP
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {current.lab.answers.map((answer) => {
                      const chosen = labAnswers[step] === answer;
                      const correct = answer === current.lab?.correct;

                      return (
                        <button
                          key={answer}
                          disabled={!!labAnswers[step]}
                          onClick={() => chooseLab(answer)}
                          className={`rounded-2xl border p-4 text-left text-sm font-bold transition ${
                            chosen && correct
                              ? 'bg-white text-black'
                              : chosen
                                ? 'bg-white/10'
                                : 'border-white/15 hover:border-white/40'
                          }`}
                        >
                          {answer}
                        </button>
                      );
                    })}
                  </div>

                  {labAnswers[step] && (
                    <p className="mt-5 text-sm leading-6 text-white/65">
                      {labAnswers[step] === current.lab.correct
                        ? current.lab.explanation
                        : 'Ce n’est pas le bon modèle. Observe bien la différence entre « ajouter » et « multiplier ». '}
                    </p>
                  )}
                </div>
              )}

              {current.projects && (
                <div className="mt-8 space-y-4">
                  {current.projects.map((project) => (
                    <div
                      key={project.specialite}
                      className="rounded-[2rem] border border-black/10 bg-[#FFFDFB] p-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <span
                            className="text-xs font-black uppercase tracking-[0.18em]"
                            style={{ color: ACCENT }}
                          >
                            {project.specialite}
                          </span>

                          <h2 className="mt-2 text-2xl font-black">
                            {project.topic}
                          </h2>
                        </div>

                        <div className="flex gap-2">
                          <span className="rounded-full bg-[#F4E8E2] px-3 py-1 text-xs font-bold">
                            {project.duration}
                          </span>
                          <span
                            className="rounded-full px-3 py-1 text-xs font-bold text-white"
                            style={{ backgroundColor: ACCENT }}
                          >
                            {project.difficulty}
                          </span>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-6 text-black/60">
                        {project.desc}
                      </p>

                      <div className="mt-5 rounded-2xl bg-[#F8F3EF] p-4">
                        <p
                          className="text-xs font-black uppercase tracking-wider"
                          style={{ color: ACCENT }}
                        >
                          Livrable attendu
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-6">
                          {project.livrable}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
                <button
                  disabled={step === 0}
                  onClick={() => setStep((v) => Math.max(0, v - 1))}
                  className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-bold disabled:opacity-25"
                >
                  ← Précédent
                </button>

                <button
                  onClick={nextStep}
                  className="rounded-full px-6 py-3 text-sm font-black text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  {lastStep ? 'Passer au quiz →' : 'Continuer →'}
                </button>
              </div>
            </article>

            {/* COLONNE LATÉRALE */}
            <aside className="space-y-4">
              <div
                className="rounded-[2rem] p-6 text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <p className="text-xs font-black uppercase tracking-wider text-white/60">
                  Le réflexe
                </p>
                <p className="mt-3 text-xl font-black">
                  Ajouter ou multiplier ?
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  C’est la première question à te poser face à une
                  situation d’évolution.
                </p>
              </div>

              <div className="rounded-[2rem] border border-black/10 bg-white p-6">
                <p className="text-xs font-black uppercase tracking-wider text-black/40">
                  À retenir
                </p>
                <p className="mt-3 text-sm font-semibold leading-6">
                  Arithmétique → + r
                  <br />
                  Géométrique → × q
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#F0E9DF] p-6">
                <p className="text-xs font-black uppercase tracking-wider text-black/40">
                  Ta spécialité
                </p>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Les applications ne sont pas des exercices
                  « décoratifs » : elles montrent pourquoi les maths
                  sont utiles.
                </p>
              </div>
            </aside>
          </div>
        </section>
      )}

      {/* QUIZ */}
      {view === 'quiz' && (
        <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Validation · Question {quizIndex + 1} / {QUESTIONS.length}
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
              Le défi final
            </h1>

            <p className="mt-4 text-black/50">
              Montre que tu sais reconnaître et utiliser les deux
              modèles.
            </p>
          </div>

          <div className="mt-10 rounded-[2.5rem] bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-xl font-black leading-8 md:text-2xl">
              {question.q}
            </h2>

            <div className="mt-7 space-y-3">
              {question.options.map((option, index) => {
                const correct = index === question.correct;
                const chosen = selected === index;

                return (
                  <button
                    key={option}
                    disabled={locked}
                    onClick={() => answerQuiz(index)}
                    className={`w-full rounded-2xl border p-5 text-left text-sm font-bold transition ${
                      locked && correct
                        ? 'border-transparent text-white'
                        : locked && chosen
                          ? 'border-black/20 bg-[#F4E8E2]'
                          : 'border-black/10 bg-[#FFFDFB] hover:border-black/30'
                    }`}
                    style={
                      locked && correct
                        ? { backgroundColor: ACCENT }
                        : undefined
                    }
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {locked && (
              <div className="mt-7 rounded-3xl bg-[#F8F3EF] p-5">
                <p
                  className="font-black"
                  style={{ color: ACCENT }}
                >
                  {selected === question.correct
                    ? '✓ Bonne réponse'
                    : 'À revoir'}
                </p>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {question.explanation}
                </p>
              </div>
            )}

            {locked && (
              <div className="mt-7 flex justify-end">
                <button
                  onClick={nextQuestion}
                  className="rounded-full px-6 py-3 text-sm font-black text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  {quizIndex === QUESTIONS.length - 1
                    ? 'Voir mon bilan →'
                    : 'Question suivante →'}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* RÉSULTAT */}
      {view === 'resultat' && (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Chapitre terminé
            </p>

            <h1 className="mt-4 text-5xl font-black md:text-7xl">
              Bien joué !
            </h1>

            <p className="mt-4 text-black/50">
              Tu viens de terminer le chapitre Les Suites.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div
              className="rounded-[2.5rem] p-8 text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <p className="text-xs font-black uppercase tracking-wider text-white/60">
                Score
              </p>
              <p className="mt-4 text-6xl font-black">
                {score} / {QUESTIONS.length}
              </p>
              <p className="mt-3 text-sm text-white/70">
                {score === QUESTIONS.length
                  ? 'Toutes les notions essentielles sont maîtrisées.'
                  : 'Les erreurs permettent de savoir ce qu’il faut encore travailler.'}
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm">
              <p
                className="text-xs font-black uppercase tracking-wider"
                style={{ color: ACCENT }}
              >
                XP gagné
              </p>

              <p className="mt-4 text-6xl font-black">
                {totalXP}
              </p>

              <p className="mt-3 text-sm text-black/50">
                Quiz : {score * 100} XP · Mini-Labs : {bonusXP} XP
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[2.5rem] bg-white p-8 shadow-sm">
            <p
              className="text-xs font-black uppercase tracking-wider"
              style={{ color: ACCENT }}
            >
              Ce que tu sais maintenant faire
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-4">
              {[
                'Identifier un modèle',
                'Calculer un terme',
                'Utiliser un coefficient',
                'Interpréter un résultat',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#F8F3EF] p-4 text-sm font-bold"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-6 rounded-[2.5rem] p-8"
            style={{ backgroundColor: '#F4D5C7' }}
          >
            <p
              className="text-xs font-black uppercase tracking-wider"
              style={{ color: ACCENT }}
            >
              🌍 Et dans ta spécialité ?
            </p>

            <p className="mt-4 max-w-3xl text-base font-semibold leading-7">
              Les suites permettent de modéliser l’inflation en SES,
              la croissance d’une population en SVT ou l’évolution
              démographique en HGGSP.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={restart}
              className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-black"
            >
              Refaire le chapitre
            </button>

            <Link
              href="/"
              className="rounded-full px-6 py-3 text-sm font-black text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Choisir un autre chapitre →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}