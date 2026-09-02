'use client';

import { useState } from 'react';
import Link from 'next/link';

/* =========================================================
TYPES & CONFIGURATION
========================================================= */
type ModeSession = '20min' | '1h' | '1h30';
type Detail = { h: string; p: string };
type Project = {
  topic: string;
  spe: string;
  desc: string;
  livrable: string;
  difficulty: string;
  duration: string;
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
type Question = { q: string; options: string[]; correct: number; explanation: string };

const LAB_XP = 150;

/* =========================================================
LABORATOIRES
========================================================= */
const LAB1_OPTIONS = ['u(n) = u(0) + n × r', 'u(n) = u(0) × q^n'];
const LAB1_CORRECT = 'u(n) = u(0) + n × r';
const LAB1_FEEDBACK = "C'est bien la formule arithmétique : on ajoute n fois la raison r au terme initial.";

const LAB2_OPTIONS = ['× 1,05', '× 0,05', '+ 5'];
const LAB2_CORRECT = '× 1,05';
const LAB2_FEEDBACK = "Augmenter de 5 %, c'est multiplier par (1 + 5/100) = 1,05. C'est le coefficient multiplicateur.";

/* =========================================================
CONTENU DU PARCOURS
========================================================= */
const LESSON_STEPS: Step[] = [
  {
    number: '01',
    title: "Modéliser une évolution",
    subtitle: 'Croissance linéaire ou exponentielle',
    content: "En économie, en biologie ou en démographie, les grandeurs évoluent de deux façons : soit on ajoute toujours la même quantité, soit on multiplie toujours par le même facteur. Savoir distinguer les deux, c'est savoir prédire l'avenir.",
    details: [
      { h: 'Progression arithmétique', p: "On passe d'un terme au suivant en ajoutant toujours le même nombre r, appelé la raison. Représentation graphique : une droite." },
      { h: 'Progression géométrique', p: "On passe d'un terme au suivant en multipliant toujours par le même nombre q. Représentation graphique : une courbe qui s'emballe." },
      { h: 'Le réflexe à avoir', p: "Dès qu'un énoncé parle de pourcentage d'évolution, le modèle est géométrique. Dès qu'il parle d'une somme fixe ajoutée, il est arithmétique." },
      { h: 'Vocabulaire', p: 'suite • terme initial u(0) • raison r • raison q • rang n' },
    ],
    deep: [
      { label: 'Note prof — Parcours 1h+', text: "Projeter les deux courbes côte à côte. L'écart devient spectaculaire à partir de n = 15 : c'est le moment où les élèves comprennent viscéralement l'exponentielle." },
      { label: 'Pour aller plus loin', text: "Chercher trois phénomènes de l'actualité : un linéaire, un exponentiel. Justifier le choix du modèle pour chacun." },
    ],
  },
  {
    number: '02',
    title: 'La suite arithmétique',
    subtitle: 'Quand on ajoute toujours la même chose',
    hasLab: true,
    content: "La suite arithmétique modélise une évolution à pas constant. Sa formule explicite permet de calculer directement n'importe quel terme, sans passer par tous les précédents.",
    details: [
      { h: 'Formule de récurrence', p: "u(n+1) = u(n) + r. Chaque terme s'obtient en ajoutant r au précédent." },
      { h: 'Formule explicite', p: "u(n) = u(0) + n × r. Elle permet un calcul direct : pour connaître u(20), pas besoin de calculer les 19 premiers." },
      { h: 'Exemple chiffré', p: "Un loyer de 600 € augmente de 15 € par an. u(0) = 600 et r = 15. Dans 8 ans : u(8) = 600 + 8 × 15 = 720 €." },
      { h: 'Sens de variation', p: "Si r > 0 la suite est croissante. Si r < 0 elle est décroissante. Si r = 0 elle est constante." },
    ],
    deep: [
      { label: 'Note prof — Parcours 1h+', text: "Faire remarquer que u(n) = u(0) + n × r est l'équation d'une droite affine : ordonnée à l'origine u(0), coefficient directeur r. Lien direct avec le chapitre sur les fonctions affines." },
    ],
  },
  {
    number: '03',
    title: 'La suite géométrique',
    subtitle: 'La puissance des pourcentages',
    hasLab2: true,
    content: "C'est le modèle des intérêts bancaires, des populations et des épidémies. Toute évolution exprimée en pourcentage répété est une suite géométrique.",
    details: [
      { h: 'Coefficient multiplicateur', p: "Une hausse de t % correspond à q = 1 + t/100. Une baisse de t % correspond à q = 1 − t/100." },
      { h: 'Formule explicite', p: "u(n) = u(0) × q^n. La puissance n est ce qui fait que la croissance s'accélère de plus en plus vite." },
      { h: 'Erreur classique à éviter', p: "Augmenter de 5 % n'est pas multiplier par 0,05 ni ajouter 0,05. C'est multiplier par 1,05." },
      { h: 'Sens de variation', p: "Si q > 1 la suite croît. Si 0 < q < 1 elle décroît. Attention : une baisse de 20 % donne q = 0,8, jamais un nombre négatif." },
    ],
    deep: [
      { label: 'Note prof — Parcours 1h+', text: "Le piège des évolutions successives : une hausse de 20 % suivie d'une baisse de 20 % ne ramène pas au point de départ (× 1,2 × 0,8 = 0,96, soit −4 %). Excellent déclencheur de débat." },
      { label: 'Pour aller plus loin', text: "Calculer le taux d'évolution global équivalent à trois hausses successives de 3 %. Comparer avec 9 %." },
    ],
  },
  {
    number: '04',
    title: 'Atteindre un seuil',
    subtitle: 'Quand la question devient « à partir de quand ? »',
    content: "En pratique, on cherche rarement u(50). On cherche plutôt le rang à partir duquel une grandeur dépasse un seuil critique : population, dette, température, capital.",
    details: [
      { h: 'La question type', p: "« À partir de quelle année le capital dépasse-t-il 5 000 € ? » ou « Quand la population passe-t-elle sous 1 000 individus ? »" },
      { h: 'Méthode par tableau', p: "Calculer les termes successifs à la calculatrice ou au tableur jusqu'à franchir le seuil. C'est la méthode attendue en tronc commun." },
      { h: 'Méthode algorithmique', p: "Une boucle « tant que » : tant que u est inférieur au seuil, on calcule le terme suivant et on incrémente le compteur n." },
      { h: 'À retenir', p: "La réponse est toujours un rang n, donc un entier, qu'il faut ensuite traduire en année ou en durée dans le contexte de l'énoncé." },
    ],
    deep: [
      { label: 'Note prof — Parcours 1h30', text: "Occasion de réinvestir Python : cinq lignes suffisent pour la boucle de seuil. Lien direct avec l'algorithmique vue en seconde et avec l'épreuve Pix « Programmer »." },
    ],
  },
  {
    number: 'MISSION',
    title: 'Atelier de modélisation',
    subtitle: 'Choisissez le parcours de votre spécialité',
    isProject: true,
    intro: "Chaque mission part d'une situation réelle liée à l'une de vos spécialités. Choisissez celle qui vous parle le plus : les mathématiques y sont un outil au service de votre matière.",
    projects: [
      {
        topic: 'Intérêts composés et épargne',
        spe: 'SES · Sciences économiques',
        desc: "On place 2 000 € sur un livret rémunéré à 4 % par an, intérêts réinvestis chaque année. On veut savoir combien on possède au bout de 10 ans, puis à partir de quelle année le capital dépasse 3 000 €.",
        livrable: "Nature de la suite justifiée, valeurs de u(0) et q, expression de u(n), calcul de u(10) arrondi à l'euro, et rang du dépassement du seuil.",
        difficulty: 'Intermédiaire',
        duration: '20 min',
      },
      {
        topic: 'Croissance bactérienne',
        spe: 'SVT · Sciences de la vie',
        desc: "Une culture de 100 bactéries triple d'effectif toutes les heures dans des conditions optimales. On veut modéliser l'évolution sur une matinée et déterminer quand le seuil de 100 000 individus est franchi.",
        livrable: "Expression de u(n) en fonction de n, effectif après 6 heures, heure de franchissement du seuil, et une phrase sur les limites du modèle (ressources finies).",
        difficulty: 'Intermédiaire',
        duration: '20 min',
      },
      {
        topic: 'Transition démographique',
        spe: 'HGGSP · Histoire-géographie',
        desc: "Un pays de 12 millions d'habitants connaît une croissance démographique de 2,3 % par an. On veut estimer sa population en 2050 et comparer avec un pays voisin en décroissance de 0,4 % par an.",
        livrable: "Les deux modèles écrits, les deux projections chiffrées, et un court paragraphe d'interprétation géographique de l'écart obtenu.",
        difficulty: 'Avancé',
        duration: '25 min',
      },
      {
        topic: 'Loyer et pouvoir d\'achat',
        spe: 'Parcours général',
        desc: "Un loyer de 600 € augmente de 15 € chaque année, tandis qu'un salaire de 1 400 € augmente de 1,2 % par an. On veut comparer les deux évolutions sur 10 ans.",
        livrable: "Nature de chaque suite, valeur du loyer et du salaire à 10 ans, part du loyer dans le salaire au départ et à l'arrivée, conclusion sur le pouvoir d'achat.",
        difficulty: 'Découverte',
        duration: '15 min',
      },
    ],
    deep: [
      { label: 'Note prof — Parcours 1h30', text: "Répartir les missions selon les spécialités présentes dans le groupe. Prévoir une restitution croisée de 3 minutes par parcours : les élèves de SES expliquent les intérêts composés aux élèves de SVT, et réciproquement. Le livrable écrit sert de trace pour l'évaluation." },
    ],
  },
];

/* =========================================================
QUIZ
========================================================= */
const QUIZ_QUESTIONS: Question[] = [
  {
    q: 'La suite définie par u(n+1) = u(n) + 10 est :',
    options: ['Arithmétique de raison 10', 'Géométrique de raison 10', 'Constante'],
    correct: 0,
    explanation: "On ajoute toujours la même quantité (10) : c'est la définition d'une suite arithmétique de raison r = 10.",
  },
  {
    q: 'Multiplier une valeur par 1,20 correspond à :',
    options: ['Une hausse de 1,2 %', 'Une hausse de 20 %', 'Une baisse de 20 %'],
    correct: 1,
    explanation: '1,20 = 1 + 20/100. Le coefficient multiplicateur 1,20 traduit donc une augmentation de 20 %.',
  },
  {
    q: 'Si u(n) = 5 × 2^n, que vaut u(3) ?',
    options: ['30', '15', '40'],
    correct: 2,
    explanation: 'u(3) = 5 × 2³ = 5 × 8 = 40.',
  },
  {
    q: "Une suite géométrique de raison q = 0,8 est :",
    options: ['Croissante', 'Décroissante', 'Constante'],
    correct: 1,
    explanation: 'Comme 0 < q < 1, chaque terme vaut 80 % du précédent : la suite décroît. Cela correspond à une baisse de 20 % à chaque étape.',
  },
  {
    q: 'Un loyer modélisé par u(n) = 600 + 15n correspond à une croissance :',
    options: ['Linéaire', 'Exponentielle', 'Aléatoire'],
    correct: 0,
    explanation: "C'est une suite arithmétique de raison 15 : la représentation graphique est une droite, donc une croissance linéaire.",
  },
];

/* =========================================================
COMPOSANT PRINCIPAL
========================================================= */
export default function SuitesChapitre() {
  const [modeSession, setModeSession] = useState<ModeSession>('20min');
  const [view, setView] = useState<'home' | 'cours' | 'quiz' | 'resultat'>('home');
  const [step, setStep] = useState(0);
  const [openLesson, setOpenLesson] = useState(false);
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [bonusXP, setBonusXP] = useState(0);
  const [lab1Answer, setLab1Answer] = useState<string | null>(null);
  const [lab2Answer, setLab2Answer] = useState<string | null>(null);

  const current = LESSON_STEPS[step];
  const question = QUIZ_QUESTIONS[quizIdx];
  const isLastStep = step === LESSON_STEPS.length - 1;
  const isLastQuestion = quizIdx === QUIZ_QUESTIONS.length - 1;
  const isLong = modeSession === '1h' || modeSession === '1h30';
  const totalXP = score * 100 + bonusXP;

  const restart = () => {
    setView('home'); setStep(0); setOpenLesson(false); setQuizIdx(0);
    setSelectedAnswer(null); setIsLocked(false); setScore(0); setBonusXP(0);
    setLab1Answer(null); setLab2Answer(null);
  };

  const changeSessionMode = (m: ModeSession) => {
    setModeSession(m);
    restart();
  };

  const nextStep = () => {
    setOpenLesson(false);
    if (isLastStep) setView('quiz');
    else setStep((s) => s + 1);
  };

  const answerLab1 = (val: string) => {
    if (lab1Answer !== null) return;
    setLab1Answer(val);
    if (val === LAB1_CORRECT) setBonusXP((prev) => prev + LAB_XP);
  };

  const answerLab2 = (val: string) => {
    if (lab2Answer !== null) return;
    setLab2Answer(val);
    if (val === LAB2_CORRECT) setBonusXP((prev) => prev + LAB_XP);
  };

  const handleAnswer = (idx: number) => {
    if (isLocked) return;
    setSelectedAnswer(idx);
    setIsLocked(true);
    if (idx === question.correct) setScore((prev) => prev + 1);
  };

  const labClass = (val: string, answer: string | null, correct: string) => {
    if (answer === null) return 'bg-white border-slate-200 hover:border-emerald-500 hover:bg-emerald-50';
    if (val === correct) return 'bg-emerald-50 border-emerald-500 text-emerald-800';
    if (val === answer) return 'bg-red-50 border-red-400 text-red-800';
    return 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
  };

  const optionClass = (i: number) => {
    if (!isLocked) return 'bg-white border-slate-200 hover:border-emerald-500 hover:bg-emerald-50';
    if (i === question.correct) return 'bg-emerald-50 border-emerald-500 text-emerald-800';
    if (i === selectedAnswer) return 'bg-red-50 border-red-400 text-red-800';
    return 'bg-white opacity-40';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-emerald-200">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/chapitres" className="text-sm font-bold text-slate-500 hover:text-slate-900">← Chapitres</Link>
          <div className="hidden md:block text-center">
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600">Mathématiques · Tronc commun</div>
            <div className="text-sm font-black">PREMIÈRE</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1 bg-slate-100 rounded-lg p-1 border border-slate-200">
              {(['20min', '1h', '1h30'] as ModeSession[]).map((m) => (
                <button
                  key={m}
                  onClick={() => changeSessionMode(m)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${modeSession === m ? 'bg-slate-900 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-4">
              <span className="font-black text-emerald-700 tabular-nums">{totalXP} XP</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ACCUEIL */}
      {view === 'home' && (
        <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <section className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Chapitre 01
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">LES SUITES</h1>
            <div className="w-20 h-1 bg-emerald-500 mb-8" />
            <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed mb-6">
              Comment prévoir l'évolution d'un capital, d'une population ou d'un loyer ?
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
              Un même outil mathématique permet de modéliser l'épargne en SES, la croissance bactérienne en SVT
              et la transition démographique en HGGSP. Ce chapitre vous donne les clés.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setView('cours')} className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg">
                Commencer le chapitre →
              </button>
              <div className="px-6 py-4 border border-slate-200 rounded-xl bg-white text-sm">
                Séance : <strong>{modeSession}</strong>
              </div>
            </div>
          </section>

          <section className="mt-20 max-w-3xl">
            <h2 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">Au programme</h2>
            <div className="space-y-3">
              {LESSON_STEPS.slice(0, 4).map((s) => (
                <div key={s.number} className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-6">
                  <span className="text-2xl font-black text-slate-200">{s.number}</span>
                  <div>
                    <div className="font-bold">{s.title}</div>
                    <div className="text-xs text-slate-500">{s.subtitle}</div>
                  </div>
                </div>
              ))}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-center gap-6">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="font-bold text-emerald-900">Atelier de modélisation</div>
                  <div className="text-xs text-emerald-700">Un parcours au choix selon votre spécialité : SES, SVT, HGGSP</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* COURS */}
      {view === 'cours' && (
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-10">
            <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase">
              <span>{current.number === 'MISSION' ? 'Atelier final' : `Partie ${current.number}`}</span>
              <span>{step + 1}/{LESSON_STEPS.length}</span>
            </div>
            <div className="h-1 bg-slate-200 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${((step + 1) / LESSON_STEPS.length) * 100}%` }} />
            </div>
          </div>

          <article className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-8 md:p-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">{current.subtitle}</div>
              <h2 className="text-4xl font-black mb-8 tracking-tight">{current.title}</h2>

              {current.isProject ? (
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 border-l-4 border-emerald-500 pl-5 leading-relaxed">{current.intro}</p>
                  <div className="grid gap-5">
                    {current.projects?.map((p, i) => (
                      <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:border-emerald-400 transition">
                        <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                          <div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">{p.spe}</div>
                            <h3 className="font-black text-xl">{p.topic}</h3>
                          </div>
                          <span className="shrink-0 text-xs font-bold text-slate-400">{p.duration} · {p.difficulty}</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-5">{p.desc}</p>
                        <div className="pt-4 border-t border-slate-100">
                          <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Livrable attendu</div>
                          <p className="text-sm text-slate-600 leading-relaxed">{p.livrable}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed mb-10">{current.content}</p>
                  <button
                    onClick={() => setOpenLesson(!openLesson)}
                    className="w-full flex justify-between items-center border border-slate-200 rounded-xl px-6 py-5 font-bold hover:border-emerald-400 transition"
                  >
                    <span>{openLesson ? 'Masquer le cours détaillé' : 'Approfondir la notion'}</span>
                    <span className="text-slate-400">{openLesson ? '−' : '+'}</span>
                  </button>
                  {openLesson && (
                    <div className="mt-8 space-y-8 animate-in slide-in-from-top-2 duration-300">
                      {current.details?.map((d, i) => (
                        <div key={i} className="border-l-2 border-emerald-300 pl-6">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">{d.h}</h4>
                          <p className="text-slate-600 leading-relaxed">{d.p}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* LAB 1 */}
              {current.hasLab && (
                <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-7">
                  <div className="text-xs uppercase tracking-widest font-bold text-emerald-700 mb-3">Manipulation rapide</div>
                  <h3 className="font-black text-xl mb-3">Reconnaître la bonne formule</h3>
                  <p className="text-sm text-slate-600 mb-6">Laquelle de ces deux expressions correspond à une suite arithmétique ?</p>
                  <div className="flex flex-wrap gap-3">
                    {LAB1_OPTIONS.map((val) => (
                      <button
                        key={val}
                        disabled={lab1Answer !== null}
                        onClick={() => answerLab1(val)}
                        className={`px-5 py-3 rounded-lg border font-bold transition ${labClass(val, lab1Answer, LAB1_CORRECT)}`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  {lab1Answer !== null && (
                    <p className="mt-5 text-sm text-slate-700">
                      <strong>{lab1Answer === LAB1_CORRECT ? `Correct · +${LAB_XP} XP — ` : 'Pas exactement. '}</strong>
                      {LAB1_FEEDBACK}
                    </p>
                  )}
                </div>
              )}

              {/* LAB 2 */}
              {current.hasLab2 && (
                <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-7">
                  <div className="text-xs uppercase tracking-widest font-bold text-emerald-700 mb-3">Manipulation rapide</div>
                  <h3 className="font-black text-xl mb-3">Traduire un pourcentage</h3>
                  <p className="text-sm text-slate-600 mb-6">Pour modéliser une hausse de 5 %, par quoi multiplie-t-on ?</p>
                  <div className="flex flex-wrap gap-3">
                    {LAB2_OPTIONS.map((val) => (
                      <button
                        key={val}
                        disabled={lab2Answer !== null}
                        onClick={() => answerLab2(val)}
                        className={`px-5 py-3 rounded-lg border font-bold transition ${labClass(val, lab2Answer, LAB2_CORRECT)}`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  {lab2Answer !== null && (
                    <p className="mt-5 text-sm text-slate-700">
                      <strong>{lab2Answer === LAB2_CORRECT ? `Correct · +${LAB_XP} XP — ` : 'Pas exactement. '}</strong>
                      {LAB2_FEEDBACK}
                    </p>
                  )}
                </div>
              )}

              {/* NOTE PROFESSEUR */}
              {isLong && current.deep?.find((d) => d.label.includes('prof')) && (
                <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 mt-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🧑‍🏫</span>
                    <h4 className="text-amber-900 font-black text-xs uppercase tracking-widest">
                      Note professeur — Parcours {modeSession}
                    </h4>
                  </div>
                  <p className="text-sm text-amber-950 leading-relaxed">
                    {current.deep.find((d) => d.label.includes('prof'))?.text}
                  </p>
                </div>
              )}

              {/* EXTENSIONS ÉLÈVES */}
              {!current.isProject && isLong && (current.deep?.filter((d) => !d.label.includes('prof')).length ?? 0) > 0 && (
                <div className="mt-10 pt-10 border-t border-slate-100">
                  <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">Pour aller plus loin</div>
                  <div className="grid gap-4">
                    {current.deep?.filter((d) => !d.label.includes('prof')).map((ext, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <h5 className="font-bold mb-2">{ext.label}</h5>
                        <p className="text-sm text-slate-600 leading-relaxed">{ext.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 md:p-8 border-t border-slate-100 flex justify-between gap-4 bg-slate-50/50">
              <button
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 0}
                className="px-5 py-3 text-sm font-bold text-slate-500 disabled:opacity-20"
              >
                ← Précédent
              </button>
              <button
                onClick={nextStep}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-emerald-700 transition shadow-md"
              >
                {isLastStep ? 'Vérifier mes acquis →' : 'Continuer →'}
              </button>
            </div>
          </article>

          <div className="mt-8 border border-slate-200 rounded-xl bg-white p-5">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Séance sélectionnée</div>
            <p className="text-sm text-slate-600">
              {modeSession === '20min' && "Essentiel : notions clés, manipulations rapides et questionnaire de vérification."}
              {modeSession === '1h' && "Approfondissement : cours détaillé, manipulations, notes pédagogiques et pistes de réflexion."}
              {modeSession === '1h30' && "Complet : tout le contenu, plus l'atelier de modélisation différencié par spécialité avec livrable."}
            </p>
          </div>
        </main>
      )}

      {/* QUIZ */}
      {view === 'quiz' && (
        <main className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-600 mb-3">Vérification des acquis</div>
            <h1 className="text-4xl font-black">Question {quizIdx + 1} sur {QUIZ_QUESTIONS.length}</h1>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-black leading-tight mb-10">{question.q}</h2>
            <div className="grid gap-3">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  disabled={isLocked}
                  onClick={() => handleAnswer(i)}
                  className={`p-5 rounded-xl border text-left font-medium transition ${optionClass(i)}`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {isLocked && (
              <div className="mt-8 pt-8 border-t border-slate-100 animate-in slide-in-from-top-2">
                <div className="text-xs uppercase tracking-widest font-bold text-emerald-600 mb-3">Explication</div>
                <p className="text-slate-600 leading-relaxed mb-6">{question.explanation}</p>
                <button
                  onClick={() => {
                    if (isLastQuestion) setView('resultat');
                    else { setQuizIdx((q) => q + 1); setIsLocked(false); setSelectedAnswer(null); }
                  }}
                  className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-emerald-700 transition"
                >
                  {isLastQuestion ? 'Voir mon bilan →' : 'Question suivante →'}
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* RÉSULTAT */}
      {view === 'resultat' && (
        <main className="max-w-4xl mx-auto px-6 py-16 animate-in zoom-in duration-500">
          <section className="bg-white border-2 border-slate-200 rounded-[3rem] overflow-hidden shadow-sm">

            <div className="bg-slate-900 text-white p-12 md:p-14 text-center">
              <div className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-400 mb-4">Bilan de fin de chapitre</div>
              <h1 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">SUITES NUMÉRIQUES</h1>
              <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Questionnaire</div>
                  <div className="text-5xl font-black">{score}<span className="text-xl text-slate-500 ml-1">/{QUIZ_QUESTIONS.length}</span></div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Progression</div>
                  <div className="text-5xl font-black text-emerald-400">{totalXP}<span className="text-xl ml-1 text-slate-500">XP</span></div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-14">
              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-8 flex items-center gap-4">
                  <span className="h-px bg-slate-200 flex-1" /> Compétences abordées <span className="h-px bg-slate-200 flex-1" />
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { t: 'Modélisation', d: "Distinguer une croissance linéaire d'une croissance exponentielle." },
                    { t: 'Suites arithmétiques', d: 'Utiliser la raison r et la formule explicite u(n) = u(0) + n × r.' },
                    { t: 'Suites géométriques', d: 'Traduire un pourcentage en coefficient multiplicateur q.' },
                    { t: 'Recherche de seuil', d: 'Déterminer le rang à partir duquel une valeur est dépassée.' },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-emerald-500 font-bold text-lg">✓</span>
                      <div>
                        <div className="font-bold text-sm text-slate-900">{c.t}</div>
                        <div className="text-xs text-slate-500 leading-relaxed">{c.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RÉINVESTISSEMENT DANS LES SPÉCIALITÉS */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 mb-12">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-5">Réinvestissement dans vos spécialités</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3"><span className="text-emerald-600 font-bold shrink-0">SES</span><span>Intérêts composés, inflation, taux de croissance du PIB.</span></li>
                  <li className="flex gap-3"><span className="text-emerald-600 font-bold shrink-0">SVT</span><span>Dynamique des populations, décroissance radioactive, propagation épidémique.</span></li>
                  <li className="flex gap-3"><span className="text-emerald-600 font-bold shrink-0">HGGSP</span><span>Transition démographique, projections de population, indicateurs comparés.</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-[2rem] p-8 text-white text-center shadow-xl mb-12">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100 mb-3">Validation de séance</div>
                <p className="text-xl md:text-2xl font-bold leading-snug mb-6">
                  Présentez ce bilan à votre professeur pour valider votre parcours {modeSession}.
                </p>
                <div className="inline-flex items-center gap-3 bg-white/20 border border-white/30 rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest backdrop-blur-sm">
                  <span>✓ Chapitre Suites — {modeSession}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={restart} className="px-8 py-4 border-2 border-slate-200 rounded-xl font-bold text-slate-500 hover:border-slate-900 hover:text-slate-900 transition">
                  Refaire le chapitre
                </button>
                <Link href="/chapitres" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg">
                  Chapitre suivant →
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                Mathématiques Première — Tronc commun
              </p>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}