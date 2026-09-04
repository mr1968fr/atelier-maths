export type ExamQcmQuestion = {
  id: string;
  skill: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type WrittenQuestion = {
  prompt: string;
  points: number;
  correction: string;
};

export type WrittenExercise = {
  title: string;
  context: string;
  questions: WrittenQuestion[];
};

export type ExamTrack = {
  slug: 'specialite' | 'specifiques' | 'technologique';
  label: string;
  audience: string;
  description: string;
  accent: string;
  light: string;
  program: { title: string; items: string[] }[];
  priorities: string[];
  qcm: ExamQcmQuestion[];
  exercises: WrittenExercise[];
};

export type ExamModule = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  tracks: string[];
  intro: string;
  objectives: string[];
  sections: {
    title: string;
    lead: string;
    paragraphs: string[];
    formulas?: string[];
    method?: string[];
    example?: { statement: string; solution: string };
    warning?: string;
  }[];
};

const q = (id: string, skill: string, prompt: string, options: string[], correct: number, explanation: string): ExamQcmQuestion => ({
  id, skill, prompt, options, correct, explanation,
});

export const examModules: ExamModule[] = [
  {
    slug: 'automatismes', number: 'A', title: 'Automatismes sans calculatrice',
    subtitle: 'Calculer vite, juste et sans dépendre d’une machine', duration: '1 h 30',
    tracks: ['Spécialité maths', 'Mathématiques spécifiques', 'Voie technologique'],
    intro: 'La première partie de l’épreuve vérifie des réflexes construits depuis le collège et la Seconde. L’objectif n’est pas de réciter une astuce, mais de choisir rapidement une procédure fiable.',
    objectives: ['Calculer avec fractions, puissances et pourcentages', 'Résoudre mentalement des équations simples', 'Estimer un ordre de grandeur', 'Contrôler la cohérence d’un résultat'],
    sections: [
      {
        title: 'Fractions, décimaux et priorités', lead: 'Une écriture adaptée rend souvent le calcul immédiat.',
        paragraphs: ['Pour additionner des fractions, on choisit un dénominateur commun. Pour multiplier, on simplifie si possible avant d’effectuer les produits.', 'Les priorités restent les mêmes : parenthèses, puissances, multiplications et divisions, puis additions et soustractions.'],
        formulas: ['a/b + c/d = (ad + bc)/bd', '(a/b) × (c/d) = ac/bd', 'Diviser par a/b revient à multiplier par b/a.'],
        method: ['Repérer l’opération principale.', 'Simplifier les facteurs avant de multiplier.', 'Donner une forme exacte si elle est demandée.', 'Vérifier le signe et l’ordre de grandeur.'],
        example: { statement: 'Calculer 3/4 − 1/6.', solution: 'Le dénominateur commun est 12 : 3/4 = 9/12 et 1/6 = 2/12. Donc 3/4 − 1/6 = 7/12.' },
      },
      {
        title: 'Puissances et écriture scientifique', lead: 'On agit sur les exposants uniquement lorsque les bases sont identiques.',
        paragraphs: ['Dans un produit de puissances de même base, on additionne les exposants. Dans un quotient, on les soustrait. Une puissance de puissance conduit à multiplier les exposants.', 'L’écriture scientifique d’un nombre non nul est a × 10ⁿ avec 1 ≤ |a| < 10. Elle facilite les comparaisons et les ordres de grandeur.'],
        formulas: ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ / aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ'],
        example: { statement: 'Simplifier (10⁴ × 10⁻⁷) / 10⁻².', solution: 'L’exposant final vaut 4 − 7 − (−2) = −1. Le résultat est 10⁻¹ = 0,1.' },
        warning: 'On ne peut pas simplifier une somme en agissant seulement sur les exposants : 2³ + 2² ≠ 2⁵.'
      },
      {
        title: 'Proportions et évolutions', lead: 'Un pourcentage est toujours relatif à une valeur de référence.',
        paragraphs: ['Prendre t % d’une quantité revient à la multiplier par t/100. Une hausse de t % correspond au coefficient 1+t/100 ; une baisse au coefficient 1−t/100.', 'Deux évolutions successives se composent en multipliant leurs coefficients. Une hausse puis une baisse du même taux ne se compensent généralement pas.'],
        formulas: ['Part = proportion × total', 'Hausse de t % : × (1 + t/100)', 'Baisse de t % : × (1 − t/100)'],
        example: { statement: 'Un prix de 80 € baisse de 15 %.', solution: 'Le coefficient est 0,85. Le nouveau prix vaut 80 × 0,85 = 68 €.' },
      },
      {
        title: 'Équations, unités et contrôle', lead: 'Le résultat doit être compatible avec les données de départ.',
        paragraphs: ['Une équation du premier degré se résout en effectuant les mêmes opérations dans les deux membres. Pour x²=a, on distingue les cas selon le signe de a.', 'Les conversions d’unités et les estimations permettent de détecter une erreur avant de rendre la copie.'],
        formulas: ['ax + b = c ⟹ x = (c − b)/a si a ≠ 0', 'x² = a : deux solutions si a > 0, une si a = 0, aucune dans ℝ si a < 0'],
        method: ['Isoler le terme contenant l’inconnue.', 'Diviser par son coefficient.', 'Vérifier en remplaçant dans l’équation.', 'Ajouter l’unité dans la conclusion.'],
        example: { statement: 'Résoudre 7x + 4 = 5x + 10.', solution: '2x + 4 = 10, donc 2x = 6 et x = 3. Vérification : les deux membres valent 25.' },
      },
    ],
  },
  {
    slug: 'fonctions-second-degre', number: 'B', title: 'Fonctions et second degré',
    subtitle: 'Passer d’une formule à une courbe, puis à une conclusion', duration: '2 h',
    tracks: ['Spécialité maths', 'Mathématiques spécifiques', 'Voie technologique'],
    intro: 'Images, antécédents, droites et paraboles apparaissent dans les automatismes comme dans les exercices rédigés. Il faut savoir changer de représentation : formule, tableau, graphique et tableau de signes.',
    objectives: ['Calculer une image et rechercher un antécédent', 'Déterminer le coefficient directeur d’une droite', 'Reconnaître les formes d’un trinôme', 'Lire ou établir un signe et des variations'],
    sections: [
      {
        title: 'Images, antécédents et courbes', lead: 'Calculer une image et rechercher un antécédent sont deux tâches différentes.',
        paragraphs: ['L’image de a par f est le nombre f(a). Graphiquement, on part de a sur l’axe horizontal et on lit l’ordonnée de la courbe.', 'Un antécédent de b est une valeur x telle que f(x)=b. Une même valeur peut avoir aucun, un ou plusieurs antécédents.'],
        formulas: ['Image de a : f(a)', 'Antécédents de b : solutions de f(x) = b'],
        example: { statement: 'Pour f(x)=2x²−3, calculer l’image de −2.', solution: 'f(−2)=2×(−2)²−3=2×4−3=5.' },
      },
      {
        title: 'Fonctions affines et droites', lead: 'Le coefficient directeur mesure la variation verticale pour une unité horizontale.',
        paragraphs: ['Une fonction affine s’écrit f(x)=mx+p. Le nombre m est le coefficient directeur et p l’ordonnée à l’origine.', 'À partir de deux points A(xₐ;yₐ) et B(xᵦ;yᵦ), on calcule m par le quotient de la variation des ordonnées par celle des abscisses.'],
        formulas: ['f(x) = mx + p', 'm = (yᵦ − yₐ)/(xᵦ − xₐ), si xᵦ ≠ xₐ'],
        method: ['Calculer le coefficient directeur.', 'Utiliser les coordonnées d’un point pour déterminer p.', 'Écrire l’équation.', 'Vérifier avec le second point.'],
        example: { statement: 'Déterminer l’équation de la droite passant par A(1;2) et B(3;6).', solution: 'm=(6−2)/(3−1)=2. Avec A : 2=2×1+p, donc p=0. La droite a pour équation y=2x.' },
      },
      {
        title: 'Le trinôme du second degré', lead: 'Les trois formes d’un trinôme répondent à des questions différentes.',
        paragraphs: ['La forme développée ax²+bx+c facilite le calcul d’images. La forme factorisée a(x−x₁)(x−x₂) donne les racines et le signe. La forme canonique a(x−α)²+β donne le sommet et l’extremum.', 'En spécialité, le discriminant Δ=b²−4ac permet de déterminer le nombre de racines réelles. Dans les autres parcours, on exploite surtout les formes données, la courbe ou une factorisation accessible.'],
        formulas: ['Développée : ax² + bx + c', 'Factorisée : a(x − x₁)(x − x₂)', 'Canonique : a(x − α)² + β', 'Spécialité : Δ = b² − 4ac'],
        warning: 'Une racine est une valeur de x qui annule la fonction ; ce n’est pas l’ordonnée du sommet.'
      },
      {
        title: 'Signe, variations et dérivée', lead: 'Une réponse graphique doit s’appuyer sur les axes et l’intervalle demandés.',
        paragraphs: ['Le signe de f indique la position de la courbe par rapport à l’axe des abscisses. Les variations indiquent où la courbe monte ou descend.', 'Lorsque la dérivée est au programme du parcours, son signe permet de justifier les variations. Pour une parabole, le sommet fournit directement l’extremum.'],
        method: ['Identifier le domaine ou l’intervalle.', 'Repérer les zéros et les points critiques.', 'Étudier le signe demandé.', 'Reporter les valeurs importantes dans un tableau.'],
        example: { statement: 'Étudier le signe de f(x)=(x−2)(x−6).', solution: 'Les racines sont 2 et 6. Le coefficient dominant est positif : f est positive à l’extérieur de [2;6], nulle en 2 et 6, négative entre les deux.' },
      },
    ],
  },
  {
    slug: 'geometrie-analytique', number: 'C', title: 'Géométrie analytique',
    subtitle: 'Utiliser les coordonnées pour démontrer', duration: '1 h 45',
    tracks: ['Spécialité maths · parcours complet', 'Autres parcours · repérage et droites'],
    intro: 'La géométrie analytique transforme une figure en calculs contrôlables. Tous les élèves doivent maîtriser le repérage et les droites ; les vecteurs, normes et produits scalaires sont approfondis en spécialité.',
    objectives: ['Calculer des coordonnées et une distance', 'Déterminer une équation de droite', 'Utiliser des vecteurs', 'Mobiliser le produit scalaire en spécialité'],
    sections: [
      {
        title: 'Coordonnées et vecteurs', lead: 'Les coordonnées d’un vecteur décrivent un déplacement.',
        paragraphs: ['Pour A(xₐ;yₐ) et B(xᵦ;yᵦ), le vecteur AB a pour coordonnées (xᵦ−xₐ ; yᵦ−yₐ). Deux vecteurs sont égaux lorsqu’ils ont les mêmes coordonnées.', 'La colinéarité permet de reconnaître des directions parallèles et d’établir un alignement.'],
        formulas: ['AB⃗ = (xᵦ − xₐ ; yᵦ − yₐ)', 'u⃗(x;y) et v⃗(x′;y′) colinéaires ⇔ xy′ − yx′ = 0'],
        example: { statement: 'A(−1;2) et B(4;5). Calculer AB⃗.', solution: 'AB⃗=(4−(−1);5−2)=(5;3).' },
      },
      {
        title: 'Distance et norme', lead: 'La formule de distance vient du théorème de Pythagore.',
        paragraphs: ['Dans un repère orthonormé, la norme d’un vecteur (x;y) vaut √(x²+y²). La distance AB est la norme du vecteur AB.', 'Une valeur exacte avec une racine carrée est souvent préférable à un arrondi prématuré.'],
        formulas: ['‖u⃗(x;y)‖ = √(x² + y²)', 'AB = √[(xᵦ−xₐ)² + (yᵦ−yₐ)²]'],
        example: { statement: 'Calculer la distance entre A(1;−1) et B(4;3).', solution: 'AB=√[(4−1)²+(3−(−1))²]=√(9+16)=5.' },
      },
      {
        title: 'Équations de droites', lead: 'Une droite non verticale peut être décrite par y=mx+p.',
        paragraphs: ['Le coefficient directeur se calcule avec deux points distincts dont les abscisses diffèrent. Une droite verticale a une équation de la forme x=k.', 'Une équation cartésienne ax+by+c=0 convient à toutes les droites lorsque a et b ne sont pas tous deux nuls.'],
        formulas: ['Droite non verticale : y = mx + p', 'Forme cartésienne : ax + by + c = 0'],
        method: ['Observer si la droite est verticale.', 'Choisir deux points lisibles.', 'Calculer m puis p.', 'Vérifier l’équation sur les deux points.'],
      },
      {
        title: 'Produit scalaire · spécialité', lead: 'Le produit scalaire relie coordonnées, longueurs et angles.',
        paragraphs: ['Dans un repère orthonormé, le produit scalaire de u⃗(x;y) et v⃗(x′;y′) vaut xx′+yy′. Il est nul exactement lorsque deux vecteurs non nuls sont orthogonaux.', 'La forme avec le cosinus permet de travailler avec un angle et des longueurs.'],
        formulas: ['u⃗·v⃗ = xx′ + yy′', 'u⃗·v⃗ = ‖u⃗‖ ‖v⃗‖ cos(θ)', 'u⃗ ⟂ v⃗ ⇔ u⃗·v⃗ = 0'],
        example: { statement: 'u⃗=(2;−3) et v⃗=(3;2). Montrer qu’ils sont orthogonaux.', solution: 'u⃗·v⃗=2×3+(−3)×2=6−6=0. Les deux vecteurs non nuls sont orthogonaux.' },
      },
    ],
  },
];

export const examTracks: ExamTrack[] = [
  {
    slug: 'specialite', label: 'Voie générale · Spécialité mathématiques', audience: 'Pour les élèves qui suivent la spécialité maths en Première',
    description: 'Le parcours le plus étendu : automatismes, algèbre, analyse, probabilités et géométrie.',
    accent: '#315f84', light: '#e8eff5',
    program: [
      { title: 'Algèbre et analyse', items: ['Second degré', 'Suites numériques', 'Dérivation et variations', 'Fonction exponentielle'] },
      { title: 'Géométrie', items: ['Vecteurs et droites', 'Produit scalaire', 'Trigonométrie et cercle'] },
      { title: 'Probabilités et données', items: ['Probabilités conditionnelles', 'Indépendance', 'Variables aléatoires et statistiques'] },
    ],
    priorities: ['Automatismes de Seconde sans calculatrice', 'Justification des réponses', 'Passage entre formule, tableau et graphique', 'Gestion des 120 minutes'],
    qcm: [
      q('sq1', 'Calcul algébrique', 'Développer (2x − 3)².', ['4x² − 9', '4x² − 12x + 9', '2x² − 12x + 9', '4x² − 6x + 9'], 1, '(a−b)²=a²−2ab+b². Ici : 4x²−12x+9.'),
      q('sq2', 'Pourcentage', 'Dans une classe, 25 % des élèves représentent 8 personnes. Quel est l’effectif total ?', ['24', '30', '32', '40'], 2, '25 % correspond à un quart. Si un quart vaut 8, le total vaut 4×8=32.'),
      q('sq3', 'Puissances', 'Simplifier (10⁵ × 10⁻²) / 10⁴.', ['10⁻¹', '10¹', '10³', '10⁷'], 0, 'L’exposant vaut 5−2−4=−1.'),
      q('sq4', 'Second degré', 'Le trinôme x²−5x+6 se factorise en…', ['(x−1)(x−6)', '(x−2)(x−3)', '(x+2)(x+3)', '(x−5)(x+1)'], 1, '2+3=5 et 2×3=6 : x²−5x+6=(x−2)(x−3).'),
      q('sq5', 'Dérivation', 'Pour f(x)=x³−4x, combien vaut f′(2) ?', ['0', '4', '8', '12'], 2, 'f′(x)=3x²−4, donc f′(2)=12−4=8.'),
      q('sq6', 'Suites', 'u₀=3 et uₙ₊₁=2uₙ. Combien vaut u₃ ?', ['9', '12', '18', '24'], 3, 'Les termes sont 3, 6, 12 puis 24.'),
      q('sq7', 'Probabilités', 'P(A)=0,4 et P(B|A)=0,3. Combien vaut P(A∩B) ?', ['0,12', '0,3', '0,7', '1,2'], 0, 'P(A∩B)=P(A)×P(B|A)=0,4×0,3=0,12.'),
      q('sq8', 'Géométrie', 'Pour u⃗=(2;1) et v⃗=(−1;2), combien vaut u⃗·v⃗ ?', ['−4', '0', '3', '4'], 1, 'u⃗·v⃗=2×(−1)+1×2=0.'),
    ],
    exercises: [
      {
        title: 'Exercice 1 · Probabilités conditionnelles',
        context: 'Dans un lycée, 60 % des élèves viennent en transport en commun. Parmi eux, 30 % arrivent avant 8 h. Parmi les autres élèves, 70 % arrivent avant 8 h. On note T « venir en transport en commun » et A « arriver avant 8 h ».',
        questions: [
          { prompt: 'Construire l’arbre pondéré associé.', points: 1, correction: 'Premier niveau : P(T)=0,60 et P(T̄)=0,40. Depuis T : P(A|T)=0,30 et 0,70. Depuis T̄ : P(A|T̄)=0,70 et 0,30.' },
          { prompt: 'Calculer P(T∩A).', points: 1, correction: 'P(T∩A)=0,60×0,30=0,18.' },
          { prompt: 'Calculer P(A).', points: 1.5, correction: 'P(A)=0,60×0,30+0,40×0,70=0,18+0,28=0,46.' },
          { prompt: 'Calculer P(T|A) et interpréter.', points: 1.5, correction: 'P(T|A)=0,18/0,46=9/23≈0,391. Environ 39,1 % des élèves arrivés avant 8 h viennent en transport en commun.' },
        ],
      },
      {
        title: 'Exercice 2 · Fonction et optimisation',
        context: 'Sur [0;8], on considère f(x)=−x²+6x+7.',
        questions: [
          { prompt: 'Calculer f′(x).', points: 1, correction: 'f′(x)=−2x+6.' },
          { prompt: 'Étudier le signe de f′ sur [0;8].', points: 1.5, correction: 'f′(x)=0 pour x=3 ; elle est positive avant 3 et négative après 3.' },
          { prompt: 'Dresser le tableau de variations de f.', points: 1.5, correction: 'f croît de f(0)=7 à f(3)=16, puis décroît jusqu’à f(8)=−9.' },
          { prompt: 'Donner le maximum de f sur [0;8].', points: 1, correction: 'Le maximum est 16, atteint pour x=3.' },
        ],
      },
      {
        title: 'Exercice 3 · Géométrie analytique',
        context: 'Dans un repère orthonormé, A(1;2), B(5;4) et C(3;−2).',
        questions: [
          { prompt: 'Calculer les coordonnées de AB⃗ et AC⃗.', points: 1, correction: 'AB⃗=(4;2) et AC⃗=(2;−4).' },
          { prompt: 'Calculer AB⃗·AC⃗.', points: 1, correction: 'AB⃗·AC⃗=4×2+2×(−4)=0.' },
          { prompt: 'En déduire la nature du triangle ABC.', points: 1, correction: 'Les vecteurs AB⃗ et AC⃗ sont orthogonaux : le triangle est rectangle en A.' },
          { prompt: 'Calculer la longueur AB.', points: 1, correction: 'AB=√(4²+2²)=√20=2√5.' },
        ],
      },
    ],
  },
  {
    slug: 'specifiques', label: 'Voie générale · Mathématiques spécifiques', audience: 'Pour les élèves sans spécialité mathématiques',
    description: 'Un parcours centré sur les automatismes, l’information chiffrée, les fonctions, les suites et les données.',
    accent: '#8b5b2b', light: '#f6ecdf',
    program: [
      { title: 'Calcul et fonctions', items: ['Fractions et pourcentages', 'Équations simples', 'Fonctions et droites', 'Lecture graphique'] },
      { title: 'Évolutions', items: ['Suites arithmétiques', 'Suites géométriques', 'Taux d’évolution', 'Tableur et interprétation'] },
      { title: 'Données et hasard', items: ['Statistiques descriptives', 'Tableaux croisés', 'Probabilités conditionnelles', 'Indépendance'] },
    ],
    priorities: ['Calculs usuels sans calculatrice', 'Proportions et coefficients multiplicateurs', 'Lecture de tableaux et graphiques', 'Rédaction d’une conclusion contextualisée'],
    qcm: [
      q('gq1', 'Fractions', 'À quel décimal 3/5 est-il égal ?', ['0,3', '0,5', '0,6', '1,5'], 2, '3÷5=0,6.'),
      q('gq2', 'Pourcentage', 'Combien représentent 35 % de 200 ?', ['35', '70', '165', '235'], 1, '0,35×200=70.'),
      q('gq3', 'Équation', 'Résoudre 4x+3=19.', ['x=3', 'x=4', 'x=5', 'x=16'], 1, '4x=16, donc x=4.'),
      q('gq4', 'Évolutions', 'Un prix baisse de 12 %. Son coefficient multiplicateur est…', ['0,12', '0,88', '1,12', '1,88'], 1, '1−0,12=0,88.'),
      q('gq5', 'Fonctions', 'Pour f(x)=2x²−1, combien vaut f(−2) ?', ['−9', '−7', '7', '9'], 2, 'f(−2)=2×4−1=7.'),
      q('gq6', 'Droites', 'La droite passant par A(1;2) et B(3;6) a pour coefficient directeur…', ['1/2', '2', '3', '4'], 1, '(6−2)/(3−1)=4/2=2.'),
      q('gq7', 'Statistiques', 'Quelle est la médiane de 2 ; 3 ; 3 ; 7 ; 9 ?', ['3', '4', '4,8', '7'], 0, 'La valeur centrale de la série ordonnée est 3.'),
      q('gq8', 'Suites', 'Une somme de 500 € augmente de 20 € par an. Le modèle est…', ['arithmétique de raison 20', 'géométrique de raison 20', 'géométrique de raison 1,20', 'constant'], 0, 'On ajoute une même quantité 20 : la suite est arithmétique.'),
    ],
    exercises: [
      {
        title: 'Exercice 1 · Tableau et probabilités',
        context: 'Dans une association de 150 membres, 90 sont adultes. Parmi les adultes, 54 pratiquent une activité collective. Au total, 80 membres pratiquent une activité collective.',
        questions: [
          { prompt: 'Compléter un tableau croisant âge et type d’activité.', points: 2, correction: 'Adultes : 54 collectifs et 36 individuels. Jeunes : 26 collectifs et 34 individuels. Totaux : 80 collectifs, 70 individuels, 150.' },
          { prompt: 'Calculer la probabilité de choisir un adulte pratiquant une activité collective.', points: 1, correction: '54/150=9/25=0,36.' },
          { prompt: 'Sachant que la personne est adulte, calculer la probabilité qu’elle pratique une activité collective.', points: 1.5, correction: '54/90=3/5=0,60.' },
          { prompt: 'Les événements « adulte » et « activité collective » sont-ils indépendants ?', points: 1.5, correction: 'P(C)=80/150=8/15, différent de P(C|A)=3/5. Ils ne sont pas indépendants.' },
        ],
      },
      {
        title: 'Exercice 2 · Comparer deux placements',
        context: 'En 2026, deux placements partent de 10 000 €. Le placement A gagne 300 € par an. Le placement B augmente de 2,5 % par an.',
        questions: [
          { prompt: 'Définir les suites aₙ et bₙ et donner leur relation de récurrence.', points: 2, correction: 'a₀=b₀=10000 ; aₙ₊₁=aₙ+300 et bₙ₊₁=1,025bₙ.' },
          { prompt: 'Donner la nature et la raison de chaque suite.', points: 1.5, correction: 'a est arithmétique de raison 300 ; b est géométrique de raison 1,025.' },
          { prompt: 'Exprimer aₙ et bₙ en fonction de n.', points: 2, correction: 'aₙ=10000+300n et bₙ=10000×1,025ⁿ.' },
          { prompt: 'Comparer les deux placements après cinq ans.', points: 1.5, correction: 'a₅=11500. b₅=10000×1,025⁵≈11314. Le placement A est supérieur d’environ 186 € après cinq ans.' },
          { prompt: 'Expliquer une limite de cette comparaison.', points: 1, correction: 'Le modèle suppose que le gain et le taux restent constants et ne prend pas nécessairement en compte frais, fiscalité ou inflation.' },
        ],
      },
    ],
  },
  {
    slug: 'technologique', label: 'Voie technologique · Toutes séries', audience: 'Pour les élèves de Première technologique',
    description: 'Un parcours commun aux séries technologiques : calcul, analyse, suites, statistiques et probabilités.',
    accent: '#237365', light: '#e5f1ed',
    program: [
      { title: 'Automatismes', items: ['Calcul numérique', 'Proportions et évolutions', 'Équations', 'Unités et ordres de grandeur'] },
      { title: 'Analyse', items: ['Fonctions de référence', 'Second degré', 'Dérivation et variations', 'Suites et tableur'] },
      { title: 'Statistiques et probabilités', items: ['Moyennes pondérées', 'Tableaux et graphiques', 'Probabilités conditionnelles', 'Interprétation'] },
    ],
    priorities: ['Maîtrise des calculs professionnels usuels', 'Lecture graphique précise', 'Exploitation du tableur', 'Justification par une phrase et un calcul'],
    qcm: [
      q('tq1', 'Pourcentage', 'Un établissement de 600 élèves compte 15 % d’internes. Combien y a-t-il d’internes ?', ['40', '90', '510', '615'], 1, '0,15×600=90.'),
      q('tq2', 'Évolution', 'Une quantité augmente de 7 %. Elle est multipliée par…', ['0,07', '0,93', '1,07', '1,70'], 2, 'Une hausse de 7 % correspond à 1+0,07=1,07.'),
      q('tq3', 'Fractions', 'Calculer 3 × 5/6.', ['5/2', '8/6', '15/18', '18/5'], 0, '3×5/6=15/6=5/2.'),
      q('tq4', 'Équation', 'Quelle équation admet deux solutions réelles ?', ['x²=9', 'x²=−9', '2x=9', 'x+9=0'], 0, 'x²=9 possède les deux solutions −3 et 3.'),
      q('tq5', 'Fonctions', 'Pour f(x)=x(2x−5), combien vaut f(3) ?', ['3', '6', '9', '15'], 0, 'f(3)=3×(6−5)=3.'),
      q('tq6', 'Second degré', 'Les solutions de (x−1)(x−4)=0 sont…', ['−1 et −4', '1 et 4', '0 et 5', '3 uniquement'], 1, 'Un produit est nul lorsqu’un facteur est nul : x=1 ou x=4.'),
      q('tq7', 'Unités', 'Une machine produit 120 pièces en 4 minutes. Son rythme moyen est…', ['24 pièces/min', '30 pièces/min', '40 pièces/min', '480 pièces/min'], 1, '120÷4=30 pièces par minute.'),
      q('tq8', 'Moyenne pondérée', 'Notes : 10 coefficient 2 et 16 coefficient 1. Quelle moyenne ?', ['12', '13', '14', '26'], 0, '(2×10+1×16)/3=36/3=12.'),
    ],
    exercises: [
      {
        title: 'Exercice 1 · Fonction et variations',
        context: 'Sur [0;10], le bénéfice d’une production est modélisé par B(x)=−2x²+16x−10.',
        questions: [
          { prompt: 'Calculer B(0), B(4) et B(10).', points: 1.5, correction: 'B(0)=−10, B(4)=−32+64−10=22 et B(10)=−200+160−10=−50.' },
          { prompt: 'Calculer B′(x).', points: 1, correction: 'B′(x)=−4x+16.' },
          { prompt: 'Étudier le signe de B′ sur [0;10].', points: 1, correction: 'B′(x)=0 pour x=4 ; elle est positive avant 4 et négative après.' },
          { prompt: 'Déterminer le bénéfice maximal.', points: 1.5, correction: 'B croît puis décroît : le maximum est B(4)=22, atteint pour x=4.' },
        ],
      },
      {
        title: 'Exercice 2 · Deux tarifs',
        context: 'Un service coûte 180 € en 2026. Le tarif A augmente de 12 € par an. Le tarif B augmente de 5 % par an.',
        questions: [
          { prompt: 'Écrire les relations de récurrence des deux tarifs.', points: 1.5, correction: 'a₀=b₀=180 ; aₙ₊₁=aₙ+12 et bₙ₊₁=1,05bₙ.' },
          { prompt: 'Préciser la nature et la raison des deux suites.', points: 1, correction: 'a est arithmétique de raison 12 ; b est géométrique de raison 1,05.' },
          { prompt: 'Calculer les deux tarifs en 2029.', points: 1.5, correction: '2029 correspond à n=3. a₃=216 € et b₃=180×1,05³≈208,37 €.' },
          { prompt: 'Quelle formule de tableur calcule l’écart en ligne 2 si A2 et B2 contiennent les tarifs ?', points: 1, correction: '=A2-B2 calcule l’écart entre les deux tarifs.' },
        ],
      },
      {
        title: 'Exercice 3 · Données et probabilités',
        context: 'Parmi 300 appareils, 180 sont de catégorie A. On compte 24 retours en catégorie A et 18 dans les autres catégories.',
        questions: [
          { prompt: 'Construire le tableau d’effectifs complet.', points: 1, correction: 'A : 24 retours et 156 sans retour. Non-A : 18 retours et 102 sans retour. Totaux : 42 retours et 258 sans retour.' },
          { prompt: 'Calculer la probabilité qu’un appareil choisi ait été retourné.', points: 1, correction: '42/300=0,14, soit 14 %.' },
          { prompt: 'Calculer la probabilité de retour sachant que l’appareil est de catégorie A.', points: 1, correction: '24/180=2/15≈0,133.' },
          { prompt: 'Comparer ce taux à celui des autres catégories.', points: 1, correction: 'Pour les non-A : 18/120=0,15. Le taux de retour est légèrement plus élevé hors catégorie A.' },
        ],
      },
    ],
  },
];

export function getExamTrack(slug: string) {
  return examTracks.find((track) => track.slug === slug);
}

export function getExamModule(slug: string) {
  return examModules.find((module) => module.slug === slug);
}
