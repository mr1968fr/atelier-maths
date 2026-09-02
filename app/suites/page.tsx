'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModeSession = '20min' | '1h' | '1h30';
type View = 'home' | 'cours' | 'quiz' | 'resultat';

type Project = {
  title: string;
  description: string;
  deliverable: string;
  difficulty: string;
  duration: string;
};

type Step = {
  number: string;
  title: string;
  subtitle: string;
  content: string;
  example: string;
  takeaway: string;
};

type Question = {
  question: string;
  answers: string[];
  correct: number;
  explanation: string;
};

const ACCENT = '#C65D3A';
const ACCENT_LIGHT = '#F7E9E3';
const INK = '#242424';
const MUTED = '#6B625D';
const PAPER = '#FBF9F6';

const LAB_XP = 150;

const steps: Step[] = [
  {
    number: '01',
    title: 'Je comprends : observer une évolution',
    subtitle: 'Une suite décrit une quantité qui change',
    content:
      'Une suite permet de représenter une quantité qui évolue étape après étape : une population, un salaire, une dette, un stock ou encore une audience.',
    example:
      'Exemple : une population compte 1 000 individus au départ et augmente de 50 chaque année.\n\nu₀ = 1 000\nu₁ = 1 050\nu₂ = 1 100\nu₃ = 1 150',
    takeaway:
      'Une suite transforme une évolution réelle en une succession de valeurs que l’on peut calculer, comparer et prévoir.',
  },
  {
    number: '02',
    title: 'Je fais avec toi : reconnaître le modèle',
    subtitle: 'Ajouter ou multiplier ? C’est la question essentielle.',
    content:
      'Pour choisir le bon modèle, observe ce qui se passe d’un terme au suivant. Si on ajoute toujours la même quantité, la suite est arithmétique. Si on multiplie toujours par le même nombre, elle est géométrique.',
    example:
      'Même ajout :\n500 → 525 → 550 → 575\n\nOn ajoute toujours 25 : suite arithmétique.\n\nMême multiplication :\n1 000 → 1 050 → 1 102,50\n\nOn multiplie toujours par 1,05 : suite géométrique.',
    takeaway:
      'Réflexe à retenir : + la même quantité → arithmétique ; × le même coefficient → géométrique.',
  },
  {
    number: '03',
    title: 'Je m’entraîne : traduire une évolution',
    subtitle: 'Passer d’une situation réelle à une formule',
    content:
      'Une fois le modèle identifié, on peut écrire une relation de récurrence ou une formule explicite. Les pourcentages conduisent généralement à une suite géométrique.',
    example:
      'Hausse de 5 % :\ncoefficient multiplicateur = 1 + 0,05 = 1,05\n\nDonc :\nuₙ₊₁ = 1,05 × uₙ\n\net, si u₀ est connu :\nuₙ = u₀ × 1,05ⁿ',
    takeaway:
      'Une hausse de 5 % correspond à × 1,05. Une baisse de 5 % correspond à × 0,95.',
  },
  {
    number: '04',
    title: 'Je réalise : modéliser une situation réelle',
    subtitle: 'Choisir, calculer et interpréter',
    content:
      'Tu vas maintenant utiliser les suites dans une situation issue d’une autre spécialité. Le but n’est plus seulement de calculer : il faut choisir un modèle, l’utiliser et interpréter le résultat.',
    example:
      'Méthode :\n1. Identifier ce qui évolue.\n2. Déterminer s’il s’agit d’un ajout ou d’une multiplication.\n3. Construire le modèle.\n4. Calculer.\n5. Interpréter le résultat dans le contexte.',
    takeaway:
      'La compétence essentielle : reconnaître le modèle mathématique adapté puis donner du sens au résultat.',
  },
];

const projects: Project[] = [
  {
    title: 'SES',
    description:
      'Un salaire commence à 1 500 € et augmente de 1,2 % par an. On étudie son évolution sur cinq ans et on la compare à une inflation de 2 %.',
    deliverable:
      'Un tableau d’évolution et une courte conclusion sur le pouvoir d’achat.',
    difficulty: 'Avancé',
    duration: '25 min',
  },
  {
    title: 'SVT',
    description:
      'Une population bactérienne compte 500 bactéries et augmente de 30 % par heure. On cherche à savoir quand elle dépasse 10 000 individus.',
    deliverable:
      'Le modèle, le calcul du seuil et une interprétation biologique.',
    difficulty: 'Intermédiaire',
    duration: '20 min',
  },
  {
    title: 'HGGSP',
    description:
      'Une ville compte 50 000 habitants et perd en moyenne 800 habitants par an. On étudie cette évolution sur douze ans.',
    deliverable:
      'Une représentation de l’évolution et une analyse de la tendance.',
    difficulty: 'Découverte',
    duration: '15 min',
  },
];

const questions: Question[] = [
  {
    question:
      'Une quantité augmente de 25 chaque année. Quel modèle est le plus adapté ?',
    answers: ['Une suite arithmétique', 'Une suite géométrique', 'Aucun modèle'],
    correct: 0,
    explanation:
      'On ajoute toujours la même quantité : la suite est arithmétique.',
  },
  {
    question: 'Une quantité diminue de 10 %. Par quel nombre la multiplie-t-on ?',
    answers: ['0,10', '0,90', '1,10'],
    correct: 1,
    explanation:
      'Diminuer de 10 % revient à conserver 90 %, donc à multiplier par 0,90.',
  },
  {
    question: 'On a u₀ = 100 et une suite géométrique de raison 2. Que vaut u₃ ?',
    answers: ['300', '600', '800'],
    correct: 2,
    explanation: '100 × 2 × 2 × 2 = 800.',
  },
  {
    question: 'La suite définie par uₙ = 3n + 5 est :',
    answers: [
      'Arithmétique de raison 3',
      'Géométrique de raison 3',
      'Ni arithmétique ni géométrique',
    ],
    correct: 0,
    explanation:
      'On ajoute 3 lorsque n augmente de 1 : la suite est arithmétique.',
  },
  {
    question: 'Une suite géométrique a pour raison q = 1,05. Elle est :',
    answers: ['Décroissante', 'Constante', 'Croissante'],
    correct: 2,
    explanation:
      'Comme q > 1 et que les termes sont positifs, la suite est croissante.',
  },
];

export default function SuitesPage() {
  const [modeSession, setModeSession] = useState<ModeSession>('1h');
  const [view, setView] = useState<View>('home');
  const [step, setStep] = useState(0);
  const [openLesson, setOpenLesson] = useState(0);

  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const [bonusXP, setBonusXP] = useState(0);
  const [lab1Ans, setLab1Ans] = useState('');
  const [lab2Ans, setLab2Ans] = useState('');

  const totalXP = score * 100 + bonusXP;

  function startChapter() {
    setView('cours');
    setStep(0);
    setOpenLesson(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goNext() {
    if (step < steps.length - 1) {
      setStep(step + 1);
      setOpenLesson(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('quiz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function goPrevious() {
    if (step > 0) {
      setStep(step - 1);
      setOpenLesson(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function answerQuiz(index: number) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === questions[quizIdx].correct) {
      setScore((s) => s + 1);
    }
  }

  function nextQuestion() {
    if (quizIdx < questions.length - 1) {
      setQuizIdx((q) => q + 1);
      setSelectedAnswer(null);
    } else {
      setView('resultat');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function checkLab1(value: string) {
    setLab1Ans(value);

    if (value === 'arithmetique') {
      setBonusXP((xp) => (xp < LAB_XP ? xp + LAB_XP : xp));
    }
  }

  function checkLab2(value: string) {
    setLab2Ans(value);

    if (value === '1.05') {
      setBonusXP((xp) => (xp < LAB_XP * 2 ? xp + LAB_XP : xp));
    }
  }

  function restart() {
    setView('home');
    setStep(0);
    setOpenLesson(0);
    setQuizIdx(0);
    setSelectedAnswer(null);
    setScore(0);
    setBonusXP(0);
    setLab1Ans('');
    setLab2Ans('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: PAPER,
        color: INK,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* NAVIGATION */}
      <header
        style={{
          height: 68,
          borderBottom: '1px solid #E6E0DB',
          background: 'rgba(251,249,246,0.96)',
          position: 'sticky',
          top: 0,
          zIndex: 20,
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            height: '100%',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: INK,
              fontWeight: 800,
              fontSize: 17,
              letterSpacing: '-0.02em',
            }}
          >
            L&apos;Atelier des Maths
          </Link>

          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: MUTED,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            ← Chapitres
          </Link>
        </div>
      </header>

      {/* HOME */}
      {view === 'home' && (
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '54px 24px 80px' }}>
          {/* INTRO */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.6fr) minmax(280px, 0.8fr)',
              gap: 48,
              alignItems: 'end',
              marginBottom: 54,
            }}
          >
            <div>
              <div
                style={{
                  color: ACCENT,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  marginBottom: 18,
                }}
              >
                CHAPITRE 01 · PREMIÈRE
              </div>

              <h1
                style={{
                  fontSize: 'clamp(46px, 7vw, 82px)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.065em',
                  margin: 0,
                  fontWeight: 850,
                }}
              >
                LES
                <br />
                SUITES
              </h1>

              <p
                style={{
                  marginTop: 26,
                  marginBottom: 0,
                  maxWidth: 660,
                  fontSize: 21,
                  lineHeight: 1.45,
                  color: MUTED,
                }}
              >
                Comprendre comment une quantité évolue,
                <br />
                puis utiliser les maths pour prévoir cette évolution.
              </p>
            </div>

            <div
              style={{
                borderLeft: `4px solid ${ACCENT}`,
                paddingLeft: 22,
                paddingBottom: 5,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: MUTED,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 10,
                }}
              >
                La question du chapitre
              </div>

              <div
                style={{
                  fontSize: 24,
                  lineHeight: 1.3,
                  fontWeight: 750,
                }}
              >
                « Comment décrire et prévoir une évolution ? »
              </div>
            </div>
          </section>

          {/* SESSION */}
          <section
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 12,
              padding: '18px 0',
              borderTop: '1px solid #DED7D1',
              borderBottom: '1px solid #DED7D1',
              marginBottom: 56,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: MUTED,
                marginRight: 10,
              }}
            >
              CHOISIS TON TEMPS
            </span>

            {[
              ['20min', '20 min · essentiel'],
              ['1h', '1 h · parcours complet'],
              ['1h30', '1 h 30 · approfondissement'],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setModeSession(value as ModeSession)}
                style={{
                  border:
                    modeSession === value
                      ? `1.5px solid ${ACCENT}`
                      : '1px solid #D9D1CA',
                  background:
                    modeSession === value ? ACCENT_LIGHT : 'transparent',
                  color: modeSession === value ? ACCENT : INK,
                  padding: '10px 15px',
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                {label}
              </button>
            ))}
          </section>

          {/* START */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 280px',
              gap: 40,
              marginBottom: 72,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: ACCENT,
                  marginBottom: 12,
                }}
              >
                AVANT DE COMMENCER
              </div>

              <h2
                style={{
                  fontSize: 34,
                  letterSpacing: '-0.035em',
                  margin: '0 0 14px',
                }}
              >
                Une suite, c&apos;est une évolution racontée par les nombres.
              </h2>

              <p
                style={{
                  color: MUTED,
                  fontSize: 16,
                  lineHeight: 1.7,
                  maxWidth: 760,
                  margin: 0,
                }}
              >
                Salaires, populations, prix, stocks, audiences : beaucoup de
                phénomènes évoluent étape après étape. Les suites permettent
                de construire un modèle simple pour comprendre cette évolution
                et faire des prévisions.
              </p>

              <button
                onClick={startChapter}
                style={{
                  marginTop: 28,
                  border: 'none',
                  background: ACCENT,
                  color: 'white',
                  padding: '14px 22px',
                  borderRadius: 8,
                  fontWeight: 800,
                  fontSize: 15,
                  cursor: 'pointer',
                  boxShadow: '0 5px 16px rgba(198,93,58,0.18)',
                }}
              >
                Commencer le chapitre →
              </button>
            </div>

            <aside
              style={{
                borderTop: `3px solid ${ACCENT}`,
                paddingTop: 16,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: MUTED,
                  marginBottom: 15,
                }}
              >
                AU PROGRAMME
              </div>

              {[
                'Observer une évolution',
                'Suites arithmétiques',
                'Suites géométriques',
                'Applications',
                'Quiz & bilan',
              ].map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    gap: 12,
                    padding: '10px 0',
                    borderBottom:
                      index === 4 ? 'none' : '1px solid #E9E3DE',
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      color: ACCENT,
                      fontWeight: 800,
                      minWidth: 22,
                    }}
                  >
                    0{index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </aside>
          </section>

          {/* HISTORY + OTHER SPECIALTY */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
              marginBottom: 70,
            }}
          >
            <article
              style={{
                background: '#F1ECE7',
                padding: '28px 30px',
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontSize: 12,
                  fontWeight: 850,
                  letterSpacing: '0.08em',
                  marginBottom: 10,
                }}
              >
                PETITE HISTOIRE
              </div>

              <h3
                style={{
                  margin: '0 0 12px',
                  fontSize: 22,
                  letterSpacing: '-0.025em',
                }}
              >
                Prévoir l&apos;avenir avec une suite
              </h3>

              <p
                style={{
                  margin: 0,
                  color: MUTED,
                  lineHeight: 1.65,
                  fontSize: 15,
                }}
              >
                Depuis longtemps, les mathématiciens cherchent à décrire des
                phénomènes qui évoluent dans le temps. Les suites sont devenues
                un outil essentiel pour passer d&apos;une observation à une
                prévision : population, finances, astronomie ou informatique.
              </p>
            </article>

            <article
              style={{
                padding: '28px 30px',
                borderRadius: 12,
                border: '1px solid #DED7D1',
                background: 'white',
              }}
            >
              <div
                style={{
                  color: '#47745A',
                  fontSize: 12,
                  fontWeight: 850,
                  letterSpacing: '0.08em',
                  marginBottom: 10,
                }}
              >
                MATHS × AUTRE SPÉCIALITÉ
              </div>

              <h3
                style={{
                  margin: '0 0 12px',
                  fontSize: 22,
                  letterSpacing: '-0.025em',
                }}
              >
                Les maths deviennent un outil.
              </h3>

              <p
                style={{
                  margin: 0,
                  color: MUTED,
                  lineHeight: 1.65,
                  fontSize: 15,
                }}
              >
                En SES, une suite peut modéliser un salaire. En SVT, elle peut
                décrire une population. En HGGSP, elle peut représenter une
                évolution démographique. Le modèle change, mais la démarche
                mathématique reste la même.
              </p>
            </article>
          </section>

          {/* MISSIONS PREVIEW */}
          <section>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                gap: 20,
                marginBottom: 24,
              }}
            >
              <div>
                <div
                  style={{
                    color: ACCENT,
                    fontSize: 12,
                    fontWeight: 850,
                    letterSpacing: '0.08em',
                    marginBottom: 7,
                  }}
                >
                  TROIS FAÇONS D&apos;UTILISER LES SUITES
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: 30,
                    letterSpacing: '-0.035em',
                  }}
                >
                  À toi de choisir le terrain.
                </h2>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 18,
              }}
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  style={{
                    background: 'white',
                    border: '1px solid #E2DBD5',
                    borderRadius: 10,
                    padding: 22,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 900,
                      color: ACCENT,
                      letterSpacing: '0.08em',
                      marginBottom: 14,
                    }}
                  >
                    {project.title}
                  </div>

                  <h3
                    style={{
                      fontSize: 19,
                      margin: '0 0 10px',
                    }}
                  >
                    Mission {project.title}
                  </h3>

                  <p
                    style={{
                      color: MUTED,
                      fontSize: 14,
                      lineHeight: 1.55,
                      minHeight: 110,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      marginTop: 18,
                      padding: '14px 16px',
                      background: '#FBF8F5',
                      borderRadius: 7,
                      fontSize: 12,
                      color: MUTED,
                      lineHeight: 1.6,
                    }}
                  >
                    <strong style={{ color: INK }}>Ta démarche</strong>
                    <div style={{ marginTop: 5 }}>
                      01 · Identifier → 02 · Choisir le modèle → 03 · Calculer → 04 · Interpréter
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 12,
                      paddingTop: 15,
                      borderTop: '1px solid #ECE6E0',
                      fontSize: 12,
                      color: MUTED,
                    }}
                  >
                    <strong style={{ color: INK }}>Livrable :</strong>{' '}
                    {project.deliverable}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* COURSE */}
      {view === 'cours' && (
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '42px 24px 80px' }}>
          {/* COURSE HEADER */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 280px',
              gap: 40,
              alignItems: 'end',
              marginBottom: 48,
            }}
          >
            <div>
              <div
                style={{
                  color: ACCENT,
                  fontSize: 12,
                  fontWeight: 850,
                  letterSpacing: '0.1em',
                  marginBottom: 12,
                }}
              >
                CHAPITRE 01 · PARCOURS
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: 46,
                  letterSpacing: '-0.05em',
                }}
              >
                Les suites
              </h1>

              <p
                style={{
                  color: MUTED,
                  fontSize: 17,
                  marginTop: 12,
                  lineHeight: 1.6,
                }}
              >
                Étape {step + 1} sur {steps.length}
              </p>
            </div>

            <div>
              <div
                style={{
                  height: 6,
                  background: '#E7E0DA',
                  borderRadius: 99,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${((step + 1) / steps.length) * 100}%`,
                    height: '100%',
                    background: ACCENT,
                    transition: 'width 0.25s ease',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 9,
                  fontSize: 12,
                  color: MUTED,
                }}
              >
                <span>Début</span>
                <span>{Math.round(((step + 1) / steps.length) * 100)} %</span>
              </div>
            </div>
          </section>

          {/* STEP */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: '100px minmax(0, 1fr)',
              gap: 30,
              marginBottom: 54,
            }}
          >
            <div
              style={{
                color: ACCENT,
                fontSize: 44,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.05em',
              }}
            >
              {steps[step].number}
            </div>

            <div>
              <div
                style={{
                  color: MUTED,
                  fontSize: 13,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: 8,
                }}
              >
                {steps[step].subtitle}
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: 36,
                  letterSpacing: '-0.045em',
                }}
              >
                {steps[step].title}
              </h2>

              <p
                style={{
                  maxWidth: 800,
                  marginTop: 22,
                  fontSize: 18,
                  lineHeight: 1.75,
                }}
              >
                {steps[step].content}
              </p>

              <div
                style={{
                  marginTop: 28,
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.4fr) minmax(240px, 0.6fr)',
                  gap: 20,
                }}
              >
                <div
                  style={{
                    background: 'white',
                    border: '1px solid #E1DAD4',
                    borderRadius: 10,
                    padding: '22px 24px',
                  }}
                >
                  <div
                    style={{
                      color: ACCENT,
                      fontSize: 11,
                      fontWeight: 900,
                      letterSpacing: '0.09em',
                      marginBottom: 10,
                    }}
                  >
                    EXEMPLE
                  </div>

                  <div
                    style={{
                      whiteSpace: 'pre-line',
                      lineHeight: 1.7,
                      fontSize: 15,
                    }}
                  >
                    {steps[step].example}
                  </div>
                </div>

                <div
                  style={{
                    background: ACCENT_LIGHT,
                    borderRadius: 10,
                    padding: '22px 24px',
                  }}
                >
                  <div
                    style={{
                      color: ACCENT,
                      fontSize: 11,
                      fontWeight: 900,
                      letterSpacing: '0.09em',
                      marginBottom: 10,
                    }}
                  >
                    À RETENIR
                  </div>

                  <div
                    style={{
                      lineHeight: 1.65,
                      fontWeight: 650,
                      fontSize: 14,
                    }}
                  >
                    {steps[step].takeaway}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HISTORY */}
          {step === 0 && (
            <section
              style={{
                marginLeft: 130,
                marginBottom: 42,
                padding: '20px 24px',
                borderLeft: `3px solid ${ACCENT}`,
                background: '#F3EEE9',
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                PETITE HISTOIRE
              </div>

              <p
                style={{
                  margin: 0,
                  color: MUTED,
                  lineHeight: 1.6,
                  fontSize: 14,
                }}
              >
                Une des forces des suites est leur capacité à transformer une
                évolution observée en prévision. C&apos;est exactement ce qui
                intéresse aujourd&apos;hui les économistes, les biologistes et
                les analystes de données.
              </p>
            </section>
          )}

          {/* MINI LABS */}
          {step === 1 && (
            <section
              style={{
                marginLeft: 130,
                marginBottom: 42,
                padding: '26px 28px',
                background: '#EEF3F7',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 20,
                  alignItems: 'start',
                }}
              >
                <div>
                  <div
                    style={{
                      color: '#3D6785',
                      fontSize: 11,
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                    }}
                  >
                    MINI-LAB 01
                  </div>

                  <h3
                    style={{
                      margin: '7px 0 8px',
                      fontSize: 21,
                    }}
                  >
                    Reconnaître une évolution à pas constant
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: MUTED,
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    Une population passe de 1 000 à 1 150 puis à 1 300.
                    Observe les écarts entre les valeurs avant de choisir le modèle.
                  </p>
                </div>

                <div
                  style={{
                    whiteSpace: 'nowrap',
                    fontWeight: 900,
                    color: '#3D6785',
                  }}
                >
                  +150 XP
                </div>
              </div>

              <div
                style={{
                  marginTop: 18,
                  padding: '14px 16px',
                  background: 'white',
                  borderLeft: `3px solid #3D6785`,
                  borderRadius: 6,
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: MUTED,
                }}
              >
                <strong style={{ color: INK }}>Étape 1 · Observe :</strong>{' '}
                calcule 1 150 − 1 000 puis 1 300 − 1 150.
                <br />
                <strong style={{ color: INK }}>Étape 2 · Compare :</strong>{' '}
                les deux résultats sont-ils identiques ?
                <br />
                <strong style={{ color: INK }}>Étape 3 · Choisis :</strong>{' '}
                si on ajoute toujours la même quantité, quel modèle faut-il utiliser ?
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                {[
                  ['arithmetique', 'Arithmétique'],
                  ['geometrique', 'Géométrique'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => checkLab1(value)}
                    style={{
                      border: '1px solid #CAD7E0',
                      background:
                        lab1Ans === value ? '#DCE9F0' : 'white',
                      borderRadius: 7,
                      padding: '9px 14px',
                      cursor: 'pointer',
                      fontWeight: 700,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {lab1Ans && (
                <p
                  style={{
                    margin: '14px 0 0',
                    fontSize: 13,
                    fontWeight: 700,
                    color:
                      lab1Ans === 'arithmetique' ? '#47745A' : '#9A4937',
                  }}
                >
                  {lab1Ans === 'arithmetique'
                    ? '✓ Correct : on ajoute toujours 150.'
                    : 'À revoir : ici, on ajoute une quantité constante.'}
                </p>
              )}
            </section>
          )}

          {step === 2 && (
            <section
              style={{
                marginLeft: 130,
                marginBottom: 42,
                padding: '26px 28px',
                background: '#F3EEE5',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 20,
                  alignItems: 'start',
                }}
              >
                <div>
                  <div
                    style={{
                      color: '#8A6840',
                      fontSize: 11,
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                    }}
                  >
                    MINI-LAB 02
                  </div>

                  <h3
                    style={{
                      margin: '7px 0 8px',
                      fontSize: 21,
                    }}
                  >
                    Traduire une hausse de 5 %
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: MUTED,
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    Quel coefficient multiplicateur correspond à une hausse
                    de 5 % ?
                  </p>
                </div>

                <div
                  style={{
                    whiteSpace: 'nowrap',
                    fontWeight: 900,
                    color: '#8A6840',
                  }}
                >
                  +150 XP
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                {['0.95', '1.05', '5'].map((value) => (
                  <button
                    key={value}
                    onClick={() => checkLab2(value)}
                    style={{
                      border: '1px solid #D8CCBA',
                      background:
                        lab2Ans === value ? '#EDE1CF' : 'white',
                      borderRadius: 7,
                      padding: '9px 14px',
                      cursor: 'pointer',
                      fontWeight: 700,
                    }}
                  >
                    {value}
                  </button>
                ))}
              </div>

              {lab2Ans && (
                <p
                  style={{
                    margin: '14px 0 0',
                    fontSize: 13,
                    fontWeight: 700,
                    color: lab2Ans === '1.05' ? '#47745A' : '#9A4937',
                  }}
                >
                  {lab2Ans === '1.05'
                    ? '✓ Correct : +5 % correspond à × 1,05.'
                    : 'À revoir : une hausse de 5 % correspond à 1 + 0,05.'}
                </p>
              )}
            </section>
          )}

          {/* MISSIONS */}
          {step === 3 && (
            <section
              style={{
                marginLeft: 130,
                marginBottom: 44,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  marginBottom: 7,
                }}
              >
                MISSION · MATHS × AUTRE SPÉCIALITÉ
              </div>

              <h3
                style={{
                  margin: '0 0 20px',
                  fontSize: 25,
                  letterSpacing: '-0.03em',
                }}
              >
                Choisis ton terrain d&apos;application
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 16,
                }}
              >
                {projects.map((project) => (
                  <article
                    key={project.title}
                    style={{
                      background: 'white',
                      border: '1px solid #DED7D1',
                      borderRadius: 10,
                      padding: 20,
                    }}
                  >
                    <div
                      style={{
                        color: ACCENT,
                        fontWeight: 900,
                        fontSize: 12,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {project.title}
                    </div>

                    <h4
                      style={{
                        fontSize: 18,
                        margin: '8px 0 9px',
                      }}
                    >
                      Mission {project.title}
                    </h4>

                    <p
                      style={{
                        color: MUTED,
                        fontSize: 13,
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      style={{
                        marginTop: 16,
                        padding: '13px 14px',
                        background: '#FBF8F5',
                        borderRadius: 7,
                        fontSize: 12,
                        color: MUTED,
                        lineHeight: 1.6,
                      }}
                    >
                      <strong style={{ color: INK }}>Ta démarche</strong>
                      <div style={{ marginTop: 5 }}>
                        01 · Identifier → 02 · Choisir le modèle → 03 · Calculer → 04 · Interpréter
                      </div>
                    </div>

                    <div
                      style={{
                        marginTop: 12,
                        paddingTop: 13,
                        borderTop: '1px solid #ECE6E0',
                        fontSize: 12,
                        lineHeight: 1.5,
                      }}
                    >
                      <strong>Livrable</strong>
                      <br />
                      {project.deliverable}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        gap: 7,
                        marginTop: 14,
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          background: '#F1ECE7',
                          padding: '5px 8px',
                          borderRadius: 5,
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {project.difficulty}
                      </span>

                      <span
                        style={{
                          background: '#F1ECE7',
                          padding: '5px 8px',
                          borderRadius: 5,
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {project.duration}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* NAVIGATION */}
          <section
            style={{
              marginLeft: 130,
              paddingTop: 22,
              borderTop: '1px solid #DED7D1',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <button
              onClick={goPrevious}
              disabled={step === 0}
              style={{
                border: 'none',
                background: 'transparent',
                color: step === 0 ? '#B8B0AA' : MUTED,
                fontWeight: 700,
                cursor: step === 0 ? 'default' : 'pointer',
                padding: '10px 0',
              }}
            >
              ← Étape précédente
            </button>

            <button
              onClick={goNext}
              style={{
                border: 'none',
                background: ACCENT,
                color: 'white',
                padding: '12px 19px',
                borderRadius: 7,
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              {step === steps.length - 1
                ? 'Passer au quiz →'
                : 'Continuer →'}
            </button>
          </section>
        </div>
      )}

      {/* QUIZ */}
      {view === 'quiz' && (
        <div style={{ maxWidth: 850, margin: '0 auto', padding: '70px 24px 100px' }}>
          <div
            style={{
              color: ACCENT,
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            VALIDATION · QUESTION {quizIdx + 1}/{questions.length}
          </div>

          <h1
            style={{
              fontSize: 42,
              letterSpacing: '-0.05em',
              margin: '0 0 14px',
            }}
          >
            Vérifions ce que tu as compris.
          </h1>

          <p
            style={{
              margin: '0 0 34px',
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.65,
              maxWidth: 650,
            }}
          >
            Cette validation vérifie trois compétences essentielles :
            <strong style={{ color: INK }}> reconnaître</strong> le modèle,
            <strong style={{ color: INK }}> calculer</strong> avec une suite
            et <strong style={{ color: INK }}>interpréter</strong> le résultat.
          </p>

          <div
            style={{
              height: 5,
              background: '#E5DED8',
              borderRadius: 99,
              marginBottom: 42,
            }}
          >
            <div
              style={{
                width: `${((quizIdx + 1) / questions.length) * 100}%`,
                height: '100%',
                background: ACCENT,
                borderRadius: 99,
              }}
            />
          </div>

          <h2
            style={{
              fontSize: 25,
              lineHeight: 1.4,
              marginBottom: 25,
            }}
          >
            {questions[quizIdx].question}
          </h2>

          <div style={{ display: 'grid', gap: 10 }}>
            {questions[quizIdx].answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === questions[quizIdx].correct;

              let background = 'white';
              let border = '#DED7D1';

              if (selectedAnswer !== null && isCorrect) {
                background = '#E6F0E9';
                border = '#78A285';
              } else if (isSelected && !isCorrect) {
                background = '#F8E8E4';
                border = '#C87968';
              }

              return (
                <button
                  key={answer}
                  onClick={() => answerQuiz(index)}
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${border}`,
                    background,
                    borderRadius: 9,
                    padding: '17px 18px',
                    cursor: selectedAnswer === null ? 'pointer' : 'default',
                    fontSize: 15,
                    lineHeight: 1.45,
                  }}
                >
                  <strong style={{ marginRight: 12 }}>
                    {String.fromCharCode(65 + index)}.
                  </strong>
                  {answer}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div
              style={{
                marginTop: 28,
                padding: '20px 22px',
                background:
                  selectedAnswer === questions[quizIdx].correct
                    ? '#EAF2EC'
                    : '#F5ECE8',
                borderRadius: 9,
              }}
            >
              <strong>
                {selectedAnswer === questions[quizIdx].correct
                  ? '✓ Bonne réponse'
                  : 'À revoir'}
              </strong>

              <p
                style={{
                  margin: '7px 0 0',
                  lineHeight: 1.6,
                  color: MUTED,
                  fontSize: 14,
                }}
              >
                {questions[quizIdx].explanation}
              </p>
            </div>
          )}

          {selectedAnswer !== null && (
            <div style={{ textAlign: 'right', marginTop: 24 }}>
              <button
                onClick={nextQuestion}
                style={{
                  border: 'none',
                  background: ACCENT,
                  color: 'white',
                  padding: '12px 20px',
                  borderRadius: 7,
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                {quizIdx === questions.length - 1
                  ? 'Voir mon bilan →'
                  : 'Question suivante →'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* RESULT */}
      {view === 'resultat' && (
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '70px 24px 100px' }}>
          <div
            style={{
              color: ACCENT,
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            CHAPITRE 01 · BILAN
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 52,
              letterSpacing: '-0.06em',
            }}
          >
            Les suites
            <br />
            terminées.
          </h1>

          <div
            style={{
              marginTop: 38,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 14,
            }}
          >
            <div
              style={{
                background: 'white',
                border: '1px solid #DED7D1',
                borderRadius: 10,
                padding: 24,
              }}
            >
              <div
                style={{
                  color: MUTED,
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                }}
              >
                QUIZ
              </div>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  marginTop: 8,
                }}
              >
                {score}/{questions.length}
              </div>
            </div>

            <div
              style={{
                background: ACCENT_LIGHT,
                borderRadius: 10,
                padding: 24,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                }}
              >
                XP GAGNÉS
              </div>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  marginTop: 8,
                  color: ACCENT,
                }}
              >
                {totalXP}
              </div>

              <div
                style={{
                  marginTop: 5,
                  fontSize: 12,
                  color: MUTED,
                }}
              >
                Quiz × 100 + Mini-Labs
              </div>
            </div>

            <div
              style={{
                background: '#EEF3EF',
                borderRadius: 10,
                padding: 24,
              }}
            >
              <div
                style={{
                  color: '#47745A',
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                }}
              >
                BONUS MINI-LABS
              </div>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  marginTop: 8,
                  color: '#47745A',
                }}
              >
                +{bonusXP}
              </div>
            </div>
          </div>

          <section
            style={{
              marginTop: 38,
              paddingTop: 30,
              borderTop: '1px solid #DED7D1',
            }}
          >
            <h2
              style={{
                fontSize: 25,
                margin: '0 0 18px',
              }}
            >
              Ce que tu sais maintenant faire
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
              }}
            >
              {[
                'Reconnaître une évolution arithmétique',
                'Reconnaître une évolution géométrique',
                'Traduire une hausse ou une baisse en coefficient',
                'Construire un modèle simple',
                'Interpréter une suite dans une situation réelle',
                'Relier les maths à une autre spécialité',
              ].map((skill) => (
                <div
                  key={skill}
                  style={{
                    padding: '13px 15px',
                    background: 'white',
                    border: '1px solid #E3DDD7',
                    borderRadius: 7,
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      color: '#47745A',
                      fontWeight: 900,
                      marginRight: 8,
                    }}
                  >
                    ✓
                  </span>
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              marginTop: 42,
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={restart}
              style={{
                border: `1px solid ${ACCENT}`,
                background: 'white',
                color: ACCENT,
                padding: '12px 18px',
                borderRadius: 7,
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Refaire le chapitre
            </button>

            <Link
              href="/"
              style={{
                display: 'inline-block',
                background: ACCENT,
                color: 'white',
                textDecoration: 'none',
                padding: '12px 18px',
                borderRadius: 7,
                fontWeight: 800,
              }}
            >
              Choisir un autre chapitre →
            </Link>
          </section>
        </div>
      )}

      {/* RESPONSIVE */}
      <style jsx global>{`
        @media (max-width: 850px) {
          section[style*='grid-template-columns'],
          article[style*='grid-template-columns'] {
            grid-template-columns: 1fr !important;
          }

          main {
            overflow-x: hidden;
          }
        }

        @media (max-width: 650px) {
          h1 {
            font-size: 44px !important;
          }

          h2 {
            font-size: 28px !important;
          }

          section[style*='margin-left: 130px'] {
            margin-left: 0 !important;
          }

          div[style*='grid-template-columns: 100px'] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}