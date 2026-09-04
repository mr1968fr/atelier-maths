export type Lesson = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  definition?: { term: string; text: string };
  formulas?: string[];
  method?: string[];
  example?: {
    title: string;
    statement: string;
    steps: string[];
    result: string;
  };
  warning?: string;
};

export type Exercise = {
  id: string;
  label: string;
  kind: 'choice' | 'input';
  question: string;
  options?: string[];
  answer: number | string[];
  placeholder?: string;
  hint: string;
  correction: string;
};

export type Chapter = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  question: string;
  intro: string;
  accent: string;
  accentLight: string;
  duration: string;
  program: string;
  objectives: string[];
  prerequisites: string[];
  lessons: Lesson[];
  exercises: Exercise[];
  mission: {
    subject: string;
    title: string;
    context: string;
    task: string;
    steps: string[];
    expected: string;
  };
  recap: string[];
  nextSlug?: string;
};

export const chapters: Chapter[] = [
  {
    slug: 'suites',
    number: '01',
    title: 'Suites numériques',
    shortTitle: 'Suites',
    subtitle: 'Décrire et prévoir une évolution étape par étape',
    question: 'Comment traduire une évolution discrète par des nombres ?',
    intro:
      'Un salaire annuel, une population relevée chaque mois ou un stock vérifié chaque semaine forment une suite de valeurs. Le langage des suites permet d’identifier le modèle, de calculer des termes et d’interpréter une tendance.',
    accent: '#9A4F32',
    accentLight: '#F6E9E3',
    duration: '1 h 20',
    program: 'Suites arithmétiques et géométriques · sens de variation · modélisation',
    objectives: [
      'Passer d’une situation à une suite',
      'Reconnaître un modèle arithmétique ou géométrique',
      'Calculer un terme et étudier une évolution',
      'Interpréter le résultat dans son contexte',
    ],
    prerequisites: ['Calculer un pourcentage', 'Utiliser une expression littérale', 'Lire un tableau de valeurs'],
    lessons: [
      {
        id: 'notion',
        eyebrow: '1. Repères',
        title: 'Une liste de nombres ordonnée',
        lead: 'Dans une suite, chaque valeur est repérée par un rang entier.',
        paragraphs: [
          'Une suite numérique est une fonction définie sur les entiers naturels. On note uₙ la valeur de la suite u au rang n. Le rang n n’est pas une unité : il indique une position, une année ou une étape.',
          'Une suite peut être donnée explicitement, lorsque uₙ se calcule directement à partir de n, ou par récurrence, lorsque chaque terme est obtenu à partir du précédent.',
        ],
        definition: {
          term: 'Vocabulaire',
          text: 'Dans uₙ, la lettre u désigne la suite, n est le rang et uₙ est le terme de rang n.',
        },
        formulas: ['Forme explicite : uₙ = f(n)', 'Forme par récurrence : uₙ₊₁ = f(uₙ)'],
        example: {
          title: 'Lire une définition explicite',
          statement: 'La suite est définie par uₙ = 3n + 2. Calculer u₀ et u₅.',
          steps: ['u₀ = 3 × 0 + 2 = 2', 'u₅ = 3 × 5 + 2 = 17'],
          result: 'Les termes demandés sont u₀ = 2 et u₅ = 17.',
        },
      },
      {
        id: 'arithmetique',
        eyebrow: '2. Modèle additif',
        title: 'Les suites arithmétiques',
        lead: 'On ajoute toujours la même quantité : la raison r.',
        paragraphs: [
          'Une suite est arithmétique lorsque la différence entre deux termes consécutifs est constante. Ce modèle convient aux évolutions où l’on gagne ou perd une même quantité à chaque étape.',
          'Le signe de r donne immédiatement le sens de variation : si r est positif, la suite est croissante ; s’il est négatif, elle est décroissante.',
        ],
        definition: {
          term: 'Suite arithmétique',
          text: 'La suite (uₙ) est arithmétique de raison r lorsque, pour tout n, uₙ₊₁ = uₙ + r.',
        },
        formulas: ['À partir de u₀ : uₙ = u₀ + nr', 'À partir de u₁ : uₙ = u₁ + (n − 1)r'],
        method: ['Repérer la variation en valeur absolue.', 'Identifier le premier terme et la raison.', 'Choisir la formule correspondant au rang initial.', 'Vérifier l’unité et interpréter.'],
        example: {
          title: 'Une ville qui perd des habitants',
          statement: 'Une ville compte 50 000 habitants en 2026 et en perd 800 par an. Estimer sa population en 2034.',
          steps: ['On pose u₀ = 50 000 et r = −800.', 'L’année 2034 correspond au rang 8.', 'u₈ = 50 000 + 8 × (−800) = 43 600.'],
          result: 'Selon ce modèle, la ville compterait 43 600 habitants en 2034.',
        },
      },
      {
        id: 'geometrique',
        eyebrow: '3. Modèle multiplicatif',
        title: 'Les suites géométriques',
        lead: 'On multiplie toujours par le même nombre : la raison q.',
        paragraphs: [
          'Une hausse de t % revient à multiplier par 1 + t/100. Une baisse de t % revient à multiplier par 1 − t/100. Une évolution à taux constant est donc modélisée par une suite géométrique.',
          'Lorsque les termes sont positifs, une raison q supérieure à 1 produit une croissance ; une raison comprise entre 0 et 1 produit une décroissance.',
        ],
        definition: {
          term: 'Suite géométrique',
          text: 'La suite (uₙ) est géométrique de raison q lorsque, pour tout n, uₙ₊₁ = q × uₙ.',
        },
        formulas: ['À partir de u₀ : uₙ = u₀ × qⁿ', 'Hausse de t % : q = 1 + t/100', 'Baisse de t % : q = 1 − t/100'],
        method: ['Transformer le taux en coefficient multiplicateur.', 'Identifier le rang correspondant à la date.', 'Calculer sans arrondir trop tôt.', 'Formuler une conclusion avec l’unité.'],
        example: {
          title: 'Évolution d’un salaire',
          statement: 'Un salaire mensuel de 1 500 € augmente de 1,2 % par an. Calculer sa valeur après cinq augmentations.',
          steps: ['Le coefficient multiplicateur vaut q = 1 + 1,2/100 = 1,012.', 'u₅ = 1 500 × 1,012⁵.', 'u₅ ≈ 1 591,46.'],
          result: 'Après cinq augmentations, le salaire est d’environ 1 591,46 €.',
        },
        warning: '« Augmenter de 2 % » ne signifie pas « ajouter 2 ». Il faut multiplier par 1,02.',
      },
      {
        id: 'variation',
        eyebrow: '4. Étudier',
        title: 'Prévoir et interpréter',
        lead: 'Le calcul n’est complet que lorsque le résultat répond à la question posée.',
        paragraphs: [
          'Pour étudier le sens de variation d’une suite, on peut comparer uₙ₊₁ et uₙ, ou étudier le signe de leur différence. Pour une suite géométrique positive, l’étude de la raison suffit souvent.',
          'Un modèle n’est pas la réalité : prolonger une tendance suppose que les mêmes conditions restent valables. Toute prévision doit donc être accompagnée de ses limites.',
        ],
        formulas: ['Si uₙ₊₁ − uₙ ≥ 0, alors (uₙ) est croissante.', 'Si uₙ₊₁ − uₙ ≤ 0, alors (uₙ) est décroissante.'],
        method: ['Nommer la grandeur et son unité.', 'Définir clairement le rang 0.', 'Justifier le modèle choisi.', 'Calculer puis confronter le résultat au contexte.'],
      },
    ],
    exercises: [
      {
        id: 's1', label: 'Automatisme', kind: 'input',
        question: 'On définit uₙ = 4n − 3. Quelle est la valeur de u₇ ?',
        answer: ['25'], placeholder: 'Ta réponse', hint: 'Remplace n par 7 dans l’expression.',
        correction: 'u₇ = 4 × 7 − 3 = 28 − 3 = 25.',
      },
      {
        id: 's2', label: 'Reconnaître', kind: 'choice',
        question: 'Une quantité augmente de 3 % par an. Quel modèle convient ?',
        options: ['Une suite arithmétique de raison 3', 'Une suite géométrique de raison 1,03', 'Une suite géométrique de raison 0,97'],
        answer: 1, hint: 'Une évolution en pourcentage est multiplicative.',
        correction: 'Une hausse de 3 % correspond au coefficient 1 + 3/100 = 1,03.',
      },
      {
        id: 's3', label: 'Calculer', kind: 'input',
        question: 'Une suite arithmétique vérifie u₀ = 12 et r = −2. Calculer u₆.',
        answer: ['0'], placeholder: 'Ta réponse', hint: 'Utilise uₙ = u₀ + nr.',
        correction: 'u₆ = 12 + 6 × (−2) = 0.',
      },
      {
        id: 's4', label: 'Raisonner', kind: 'choice',
        question: 'Une suite géométrique positive a pour raison q = 0,82. Que peut-on affirmer ?',
        options: ['Elle est croissante', 'Elle est constante', 'Elle est décroissante'],
        answer: 2, hint: 'Compare q à 1.',
        correction: 'Comme 0 < q < 1 et que les termes sont positifs, la suite est décroissante.',
      },
    ],
    mission: {
      subject: 'SES · Pouvoir d’achat',
      title: 'Salaire et inflation évoluent-ils au même rythme ?',
      context: 'Un salaire mensuel vaut 1 500 € en 2026. Il augmente de 1,2 % par an tandis que les prix augmentent de 2 % par an.',
      task: 'Comparer, sur cinq ans, l’indice du salaire et l’indice des prix, puis rédiger une conclusion argumentée.',
      steps: ['Définir deux suites géométriques.', 'Construire un tableau pour les rangs 0 à 5.', 'Comparer les coefficients et les valeurs finales.', 'Conclure sur le pouvoir d’achat dans les limites du modèle.'],
      expected: 'Un tableau d’évolution, les calculs lisibles et un paragraphe de conclusion de cinq lignes.',
    },
    recap: ['uₙ désigne le terme de rang n.', 'Arithmétique : on ajoute une raison r.', 'Géométrique : on multiplie par une raison q.', 'Un taux constant conduit à un modèle géométrique.', 'Une prévision doit être interprétée et nuancée.'],
    nextSlug: 'derivation',
  },
  {
    slug: 'derivation',
    number: '02',
    title: 'Dérivation',
    shortTitle: 'Dérivation',
    subtitle: 'Mesurer une variation et rechercher un optimum',
    question: 'À quelle vitesse une grandeur change-t-elle ?',
    intro:
      'La dérivée donne une information locale : elle mesure la pente d’une courbe en un point. Elle permet ensuite d’étudier les variations d’une fonction et de résoudre des problèmes d’optimisation.',
    accent: '#3976A8',
    accentLight: '#EAF2F8',
    duration: '1 h 30',
    program: 'Nombre dérivé · tangente · fonctions dérivées · variations · optimisation',
    objectives: ['Interpréter un nombre dérivé', 'Calculer une fonction dérivée', 'Relier signe de f′ et variations de f', 'Résoudre un problème d’optimisation'],
    prerequisites: ['Lire les coordonnées d’un point', 'Résoudre une équation', 'Étudier le signe d’une expression'],
    lessons: [
      {
        id: 'nombre-derive', eyebrow: '1. Comprendre', title: 'Du taux de variation au nombre dérivé',
        lead: 'Le nombre dérivé f′(a) mesure la variation instantanée de f au voisinage de a.',
        paragraphs: [
          'Entre deux points, le taux de variation mesure une pente moyenne. Lorsque le second point se rapproche du premier, cette pente tend, lorsqu’elle existe, vers le nombre dérivé.',
          'Graphiquement, f′(a) est le coefficient directeur de la tangente à la courbe de f au point d’abscisse a.',
        ],
        definition: { term: 'Nombre dérivé', text: 'f′(a) est le coefficient directeur de la tangente à la courbe représentative de f au point d’abscisse a.' },
        formulas: ['Taux de variation entre a et a + h : [f(a + h) − f(a)] / h', 'Tangente en a : y = f′(a)(x − a) + f(a)'],
        example: {
          title: 'Tangente à une parabole', statement: 'Pour f(x) = x², déterminer l’équation de la tangente au point d’abscisse 1.',
          steps: ['f′(x) = 2x, donc f′(1) = 2.', 'f(1) = 1.', 'y = 2(x − 1) + 1.'], result: 'La tangente a pour équation y = 2x − 1.',
        },
      },
      {
        id: 'calculer', eyebrow: '2. Calculer', title: 'Les dérivées usuelles',
        lead: 'Quelques formules permettent de dériver les fonctions rencontrées en Première.',
        paragraphs: [
          'La dérivée d’une somme est la somme des dérivées. Un coefficient constant peut être conservé devant la dérivée. Pour un produit de fonctions, on applique la formule dédiée.',
          'Le logarithme népérien n’est pas nécessaire ici : il est étudié en Terminale. On résout les problèmes de Première avec les outils du programme.',
        ],
        formulas: ['(x²)′ = 2x  ·  (x³)′ = 3x²  ·  (xⁿ)′ = nxⁿ⁻¹', '(ax + b)′ = a  ·  (1/x)′ = −1/x²', '(u + v)′ = u′ + v′  ·  (uv)′ = u′v + uv′', '(eˣ)′ = eˣ'],
        warning: 'La dérivée d’un produit n’est pas le produit des dérivées : (uv)′ = u′v + uv′.',
        example: {
          title: 'Dériver un polynôme', statement: 'Calculer la dérivée de f(x) = 3x³ − 5x² + 4x − 7.',
          steps: ['(3x³)′ = 9x²', '(−5x²)′ = −10x', '(4x)′ = 4 et (−7)′ = 0'], result: 'f′(x) = 9x² − 10x + 4.',
        },
      },
      {
        id: 'variations', eyebrow: '3. Étudier', title: 'Du signe de f′ aux variations de f',
        lead: 'La dérivée indique dans quel sens la fonction évolue.',
        paragraphs: [
          'Sur un intervalle, si f′ est positive, alors f est croissante. Si f′ est négative, f est décroissante. Les zéros de f′ signalent des points où la tangente est horizontale ; ils peuvent correspondre à un extremum.',
          'Un tableau de variations rassemble le domaine, le signe de f′ et le sens de variation de f. Les valeurs de f aux bornes et aux points critiques doivent y figurer.',
        ],
        formulas: ['f′(x) ≥ 0 sur I ⟹ f est croissante sur I', 'f′(x) ≤ 0 sur I ⟹ f est décroissante sur I'],
        method: ['Calculer f′.', 'Résoudre f′(x) = 0 et étudier le signe de f′.', 'Reporter les informations dans un tableau.', 'Calculer les valeurs utiles de f.'],
      },
      {
        id: 'optimiser', eyebrow: '4. Appliquer', title: 'Rechercher un maximum ou un minimum',
        lead: 'Optimiser consiste à déterminer la meilleure valeur possible sous des contraintes données.',
        paragraphs: [
          'Un problème d’optimisation commence par la définition d’une variable et de son intervalle de valeurs. On exprime ensuite la grandeur à optimiser comme une fonction de cette variable.',
          'La dérivation permet de repérer les extremums, mais la dernière étape reste une phrase de réponse adaptée au contexte.',
        ],
        method: ['Choisir la variable et préciser son domaine.', 'Écrire la fonction à optimiser.', 'Étudier ses variations.', 'Comparer les valeurs et interpréter le résultat.'],
        example: {
          title: 'Minimiser un temps de réponse', statement: 'On modélise un coût par C(x) = x² − 8x + 25 sur [0 ; 10].',
          steps: ['C′(x) = 2x − 8.', 'C′(x) = 0 pour x = 4.', 'C′ est négative avant 4 puis positive après 4.', 'C(4) = 9.'], result: 'Le coût minimal est 9, atteint pour x = 4.',
        },
      },
    ],
    exercises: [
      { id: 'd1', label: 'Automatisme', kind: 'input', question: 'Pour f(x) = x² + 3x, calculer f′(2).', answer: ['7'], placeholder: 'Ta réponse', hint: 'Commence par calculer f′(x).', correction: 'f′(x) = 2x + 3, donc f′(2) = 4 + 3 = 7.' },
      { id: 'd2', label: 'Formule', kind: 'choice', question: 'Quelle est la dérivée de f(x) = 4x³ − 2x + 5 ?', options: ['12x² − 2', '4x² − 2', '12x² + 5'], answer: 0, hint: 'La dérivée de x³ est 3x².', correction: 'On dérive terme à terme : f′(x) = 12x² − 2.' },
      { id: 'd3', label: 'Interpréter', kind: 'choice', question: 'Sur [0 ; 3], on sait que f′(x) < 0. Que peut-on conclure ?', options: ['f est négative', 'f est décroissante', 'f est croissante'], answer: 1, hint: 'Le signe de f et celui de f′ ne donnent pas la même information.', correction: 'Une dérivée négative sur un intervalle signifie que la fonction y est décroissante.' },
      { id: 'd4', label: 'Optimiser', kind: 'input', question: 'La fonction C(x) = x² − 6x + 11 atteint son minimum pour quelle valeur de x ?', answer: ['3'], placeholder: 'Valeur de x', hint: 'Résous C′(x) = 0.', correction: 'C′(x) = 2x − 6. Elle s’annule en x = 3 et change de signe de − vers + : le minimum est atteint pour x = 3.' },
    ],
    mission: {
      subject: 'Sciences numériques · Optimisation', title: 'Trouver le réglage le plus efficace',
      context: 'Le temps de traitement d’un serveur est modélisé, pour x dans [1 ; 12], par T(x) = 0,5x² − 6x + 25, où x est un paramètre de répartition de charge.',
      task: 'Déterminer le réglage qui minimise le temps de traitement et présenter la démarche à une équipe technique.',
      steps: ['Préciser l’intervalle d’étude.', 'Calculer T′ et étudier son signe.', 'Construire le tableau de variations.', 'Donner le réglage et le temps minimal avec une phrase.'],
      expected: 'Une résolution complète, un tableau de variations et une recommandation de deux phrases.',
    },
    recap: ['f′(a) est la pente de la tangente en a.', 'Le signe de f′ donne les variations de f.', 'On dérive une somme terme à terme.', 'Pour optimiser, on étudie la fonction sur son domaine.', 'La conclusion doit répondre au problème concret.'],
    nextSlug: 'exponentielle',
  },
  {
    slug: 'exponentielle',
    number: '03',
    title: 'Fonction exponentielle',
    shortTitle: 'Exponentielle',
    subtitle: 'Comprendre les croissances et décroissances continues',
    question: 'Que se passe-t-il lorsqu’une évolution est proportionnelle à la quantité présente ?',
    intro: 'Population, capital, concentration ou volume de données : certains phénomènes croissent d’autant plus vite que leur niveau est déjà élevé. La fonction exponentielle fournit un modèle continu pour les étudier.',
    accent: '#6B5A9C', accentLight: '#F0EDF8', duration: '1 h 20',
    program: 'Définition de exp · propriétés algébriques · dérivée · équations simples · modélisation',
    objectives: ['Connaître les propriétés de eˣ', 'Transformer une expression exponentielle', 'Étudier une fonction avec eˣ', 'Modéliser une évolution continue'],
    prerequisites: ['Règles sur les puissances', 'Calcul de dérivées', 'Lecture graphique et calculatrice'],
    lessons: [
      {
        id: 'definition', eyebrow: '1. Définir', title: 'Une fonction égale à sa dérivée',
        lead: 'La fonction exponentielle est caractérisée par une propriété remarquable.',
        paragraphs: ['Il existe une unique fonction, notée exp, définie et dérivable sur ℝ, qui est égale à sa dérivée et vaut 1 en 0. On note aussi exp(x) = eˣ.', 'Comme sa dérivée est elle-même strictement positive, la fonction exponentielle est strictement croissante sur ℝ.'],
        definition: { term: 'Fonction exponentielle', text: 'exp′ = exp et exp(0) = 1. Pour tout réel x, eˣ > 0.' },
        formulas: ['e⁰ = 1', '(eˣ)′ = eˣ', 'eˣ > 0 pour tout x ∈ ℝ'],
      },
      {
        id: 'proprietes', eyebrow: '2. Calculer', title: 'Les règles de calcul',
        lead: 'Les propriétés des puissances restent valables pour des exposants réels.',
        paragraphs: ['La propriété fondamentale transforme une somme à l’exposant en produit. Elle permet de simplifier les expressions et de comparer des valeurs.', 'L’exponentielle est injective : deux exponentielles sont égales exactement lorsque leurs exposants sont égaux.'],
        formulas: ['eᵃ × eᵇ = eᵃ⁺ᵇ', 'eᵃ / eᵇ = eᵃ⁻ᵇ', '(eᵃ)ᵇ = eᵃᵇ', 'eᵃ = eᵇ ⇔ a = b'],
        warning: 'On ne distribue pas l’exponentielle sur une somme : eᵃ⁺ᵇ = eᵃ × eᵇ, et non eᵃ + eᵇ.',
        example: { title: 'Résoudre sans logarithme', statement: 'Résoudre e²ˣ⁻¹ = e⁵.', steps: ['Les deux membres sont des exponentielles.', 'On égalise les exposants : 2x − 1 = 5.', '2x = 6, donc x = 3.'], result: 'L’unique solution est x = 3.' },
      },
      {
        id: 'deriver', eyebrow: '3. Étudier', title: 'Dériver une fonction exponentielle',
        lead: 'La dérivée de eᵘ s’obtient avec la dérivée de l’exposant.',
        paragraphs: ['Pour une fonction u dérivable, la dérivée de x ↦ eᵘ⁽ˣ⁾ est u′(x)eᵘ⁽ˣ⁾. Comme le facteur exponentiel est toujours positif, le signe de la dérivée dépend souvent de u′.', 'Cette propriété permet d’étudier des fonctions qui combinent un polynôme et une exponentielle.'],
        formulas: ['(eᵘ)′ = u′eᵘ', 'Si f(x) = eᵏˣ, alors f′(x) = keᵏˣ'],
        example: { title: 'Croissance ou décroissance', statement: 'Étudier les variations de f(x) = 4e⁻⁰·³ˣ.', steps: ['f′(x) = 4 × (−0,3)e⁻⁰·³ˣ = −1,2e⁻⁰·³ˣ.', 'e⁻⁰·³ˣ est toujours positif.', 'Ainsi f′(x) < 0 pour tout x.'], result: 'La fonction f est strictement décroissante sur ℝ.' },
      },
      {
        id: 'modeliser', eyebrow: '4. Modéliser', title: 'Décrire une évolution continue',
        lead: 'Un modèle exponentiel peut prendre la forme f(t) = Aeᵏᵗ.',
        paragraphs: ['Le nombre A représente la valeur initiale, car f(0) = A. Le signe de k indique le type d’évolution : croissance si k > 0, décroissance si k < 0.', 'En Première, un seuil qui ne se résout pas par égalité simple peut être estimé graphiquement, avec un tableau de valeurs ou à la calculatrice. Le logarithme sera introduit en Terminale.'],
        formulas: ['f(t) = Aeᵏᵗ', 'A = f(0)', 'k > 0 : croissance  ·  k < 0 : décroissance'],
        method: ['Identifier la valeur initiale.', 'Repérer le paramètre de croissance ou décroissance.', 'Calculer la valeur demandée.', 'Comparer au seuil et interpréter.'],
      },
    ],
    exercises: [
      { id: 'e1', label: 'Propriété', kind: 'choice', question: 'Comment simplifier e³ × e⁻⁵ ?', options: ['e⁻²', 'e⁻¹⁵', 'e⁸'], answer: 0, hint: 'Dans un produit, on additionne les exposants.', correction: 'e³ × e⁻⁵ = e³⁺⁽⁻⁵⁾ = e⁻².' },
      { id: 'e2', label: 'Équation', kind: 'input', question: 'Résoudre e³ˣ = e¹². Quelle est la valeur de x ?', answer: ['4'], placeholder: 'x =', hint: 'L’exponentielle est injective.', correction: 'e³ˣ = e¹² équivaut à 3x = 12, donc x = 4.' },
      { id: 'e3', label: 'Dérivée', kind: 'choice', question: 'Quelle est la dérivée de f(x) = e⁵ˣ ?', options: ['e⁵ˣ', '5e⁵ˣ', 'xe⁵ˣ'], answer: 1, hint: 'Il faut multiplier par la dérivée de 5x.', correction: 'Avec u(x) = 5x, u′(x) = 5 ; ainsi f′(x) = 5e⁵ˣ.' },
      { id: 'e4', label: 'Interpréter', kind: 'choice', question: 'Dans f(t) = 800e⁻⁰·²ᵗ, que signifie le signe de −0,2 ?', options: ['La quantité croît', 'La quantité décroît', 'La quantité vaut −0,2 au départ'], answer: 1, hint: 'Observe le signe du paramètre k.', correction: 'Le paramètre k est négatif : le modèle décrit une décroissance. La valeur initiale est 800.' },
    ],
    mission: {
      subject: 'SVT · Concentration', title: 'Suivre l’élimination d’une substance',
      context: 'La concentration d’une substance dans le sang est modélisée par C(t) = 80e⁻⁰·²⁵ᵗ, en mg/L, t heures après l’administration.',
      task: 'Étudier l’évolution sur huit heures et estimer à la calculatrice le moment où la concentration passe sous 20 mg/L.',
      steps: ['Donner et interpréter C(0).', 'Justifier le sens de variation.', 'Construire un tableau de valeurs avec un pas d’une heure.', 'Encadrer le premier instant où C(t) < 20.'],
      expected: 'Un tableau, un encadrement du seuil et une conclusion avec les unités.',
    },
    recap: ['e⁰ = 1 et eˣ est toujours positif.', 'eᵃeᵇ = eᵃ⁺ᵇ.', 'La dérivée de eᵘ est u′eᵘ.', 'Aeᵏᵗ modélise croissance ou décroissance.', 'En Première, les seuils peuvent être estimés numériquement.'],
    nextSlug: 'probabilites',
  },
  {
    slug: 'probabilites',
    number: '04', title: 'Probabilités conditionnelles', shortTitle: 'Probabilités',
    subtitle: 'Raisonner lorsque l’information disponible change',
    question: 'Comment calculer une probabilité lorsque l’on connaît déjà une information ?',
    intro: 'Un test positif, un tirage précédent ou l’appartenance à un groupe modifie l’univers de référence. Les probabilités conditionnelles donnent un cadre précis à ce raisonnement et évitent les conclusions intuitives trompeuses.',
    accent: '#237765', accentLight: '#E6F2EE', duration: '1 h 30',
    program: 'Probabilité conditionnelle · arbres pondérés · probabilités totales · indépendance',
    objectives: ['Calculer une probabilité conditionnelle', 'Construire et lire un arbre pondéré', 'Utiliser la formule des probabilités totales', 'Tester l’indépendance de deux événements'],
    prerequisites: ['Fractions et pourcentages', 'Vocabulaire des événements', 'Intersection et réunion'],
    lessons: [
      {
        id: 'conditionnelle', eyebrow: '1. Changer de référence', title: 'La probabilité conditionnelle',
        lead: 'Sachant que B est réalisé, on ne considère plus que les issues de B.',
        paragraphs: ['La notation Pᴮ(A), également écrite P(A | B), se lit « probabilité de A sachant B ». Le dénominateur P(B) correspond au nouvel univers de référence.', 'Dans un tableau d’effectifs, on se limite à la ligne ou à la colonne correspondant à B avant de calculer la proportion de A.'],
        definition: { term: 'Probabilité conditionnelle', text: 'Si P(B) ≠ 0, alors Pᴮ(A) = P(A ∩ B) / P(B).' },
        formulas: ['Pᴮ(A) = P(A ∩ B) / P(B)', 'Donc P(A ∩ B) = P(B) × Pᴮ(A)'],
        example: { title: 'Lecture d’un effectif', statement: 'Dans une classe, 18 élèves étudient l’espagnol ; parmi eux, 12 sont demi-pensionnaires. On choisit un élève étudiant l’espagnol.', steps: ['Le nouvel effectif de référence est 18.', '12 élèves vérifient aussi la condition « demi-pensionnaire ».', 'P(D | E) = 12/18 = 2/3.'], result: 'La probabilité cherchée est 2/3, soit environ 66,7 %.' },
      },
      {
        id: 'arbres', eyebrow: '2. Organiser', title: 'Les arbres pondérés',
        lead: 'Un arbre représente des expériences successives ou un découpage de la population.',
        paragraphs: ['À chaque nœud, la somme des probabilités des branches issues de ce nœud vaut 1. La probabilité d’un chemin s’obtient en multipliant les probabilités rencontrées.', 'Les probabilités du second niveau sont conditionnelles : une branche partant de A porte par exemple Pᴬ(B).'],
        formulas: ['Sur un chemin : P(A ∩ B) = P(A) × Pᴬ(B)', 'À chaque nœud : somme des branches = 1'],
        method: ['Définir clairement les événements.', 'Placer les probabilités du premier niveau.', 'Compléter chaque paire de branches à 1.', 'Multiplier le long d’un chemin.'],
        warning: 'On additionne des chemins incompatibles, mais on multiplie les probabilités le long d’un même chemin.',
      },
      {
        id: 'totales', eyebrow: '3. Recomposer', title: 'La formule des probabilités totales',
        lead: 'Un événement peut être atteint par plusieurs chemins incompatibles.',
        paragraphs: ['Si A et son contraire Ā forment une partition de l’univers, alors l’événement B est la réunion disjointe de A ∩ B et Ā ∩ B.', 'Dans un arbre, on additionne donc les probabilités de tous les chemins qui aboutissent à B.'],
        formulas: ['P(B) = P(A ∩ B) + P(Ā ∩ B)', 'P(B) = P(A)Pᴬ(B) + P(Ā)Pᴬ̄(B)'],
        example: { title: 'Fiabilité d’un test', statement: 'Une maladie touche 2 % d’une population. Le test est positif chez 95 % des malades et 4 % des non-malades.', steps: ['P(M ∩ T) = 0,02 × 0,95 = 0,019.', 'P(M̄ ∩ T) = 0,98 × 0,04 = 0,0392.', 'P(T) = 0,019 + 0,0392 = 0,0582.'], result: 'La probabilité qu’un test soit positif est 0,0582, soit 5,82 %.' },
      },
      {
        id: 'independance', eyebrow: '4. Comparer', title: 'L’indépendance',
        lead: 'Deux événements sont indépendants si connaître l’un ne change pas la probabilité de l’autre.',
        paragraphs: ['A et B sont indépendants lorsque Pᴬ(B) = P(B), sous réserve que P(A) soit non nulle. Une caractérisation souvent plus pratique est P(A ∩ B) = P(A)P(B).', 'Indépendants ne signifie pas incompatibles. Deux événements incompatibles de probabilités non nulles ne peuvent pas être indépendants.'],
        definition: { term: 'Indépendance', text: 'A et B sont indépendants si P(A ∩ B) = P(A) × P(B).' },
        warning: '« Incompatibles » signifie qu’ils ne peuvent pas se produire ensemble. « Indépendants » signifie que l’un n’influence pas la probabilité de l’autre.',
      },
    ],
    exercises: [
      { id: 'p1', label: 'Calcul direct', kind: 'input', question: 'On sait que P(A ∩ B) = 0,18 et P(B) = 0,30. Calculer P(A | B).', answer: ['0.6', '0,6', '60%', '60 %'], placeholder: 'Probabilité', hint: 'Divise P(A ∩ B) par P(B).', correction: 'P(A | B) = 0,18 / 0,30 = 0,6, soit 60 %.' },
      { id: 'p2', label: 'Arbre', kind: 'choice', question: 'Sur un même chemin d’un arbre pondéré, comment calcule-t-on la probabilité ?', options: ['On additionne les branches', 'On multiplie les branches', 'On prend la plus grande branche'], answer: 1, hint: 'Un chemin représente une intersection.', correction: 'La probabilité d’un chemin est le produit des probabilités portées par ses branches.' },
      { id: 'p3', label: 'Probabilités totales', kind: 'input', question: 'P(A)=0,4, P(B|A)=0,7 et P(B|Ā)=0,2. Calculer P(B).', answer: ['0.4', '0,4', '40%', '40 %'], placeholder: 'Probabilité', hint: 'P(Ā)=0,6 puis additionne les deux chemins menant à B.', correction: 'P(B)=0,4×0,7 + 0,6×0,2 = 0,28 + 0,12 = 0,4.' },
      { id: 'p4', label: 'Indépendance', kind: 'choice', question: 'P(A)=0,5, P(B)=0,4 et P(A∩B)=0,2. Les événements sont-ils indépendants ?', options: ['Oui', 'Non', 'On ne peut pas savoir'], answer: 0, hint: 'Compare P(A∩B) et P(A)P(B).', correction: 'P(A)P(B)=0,5×0,4=0,2=P(A∩B). Les événements sont indépendants.' },
    ],
    mission: {
      subject: 'SVT · Santé publique', title: 'Un test positif suffit-il pour conclure ?',
      context: 'Une affection concerne 1 % d’une population. Un test est positif pour 98 % des personnes atteintes et pour 3 % des personnes non atteintes.',
      task: 'Calculer la probabilité qu’une personne soit réellement atteinte sachant que son test est positif, puis expliquer le résultat sans dramatiser ni minimiser.',
      steps: ['Construire un arbre pondéré.', 'Calculer les deux chemins menant à un test positif.', 'Déterminer P(T), puis P(M | T).', 'Rédiger une explication distinguant dépistage et diagnostic.'],
      expected: 'Un arbre, les calculs et un paragraphe d’interprétation accessible à un non-spécialiste.',
    },
    recap: ['Conditionner revient à changer d’univers de référence.', 'La probabilité d’un chemin est un produit.', 'Plusieurs chemins incompatibles s’additionnent.', 'P(A ∩ B) = P(A) × P(B | A).', 'Indépendance et incompatibilité sont deux notions différentes.'],
    nextSlug: 'statistiques',
  },
  {
    slug: 'statistiques', number: '05', title: 'Statistiques et données', shortTitle: 'Statistiques',
    subtitle: 'Résumer des données sans perdre leur sens',
    question: 'Comment décrire une série de données et comparer deux distributions ?',
    intro: 'Une moyenne seule raconte rarement toute l’histoire. L’analyse statistique associe des indicateurs de position, des mesures de dispersion et des représentations adaptées afin de décrire les données avec honnêteté.',
    accent: '#B06C19', accentLight: '#F8EEDC', duration: '1 h 15',
    program: 'Indicateurs de position · dispersion · représentations · lecture critique de données',
    objectives: ['Calculer moyenne, médiane et quartiles', 'Mesurer la dispersion', 'Comparer deux séries', 'Porter un regard critique sur un graphique'],
    prerequisites: ['Proportions et pourcentages', 'Calculatrice en mode statistique', 'Lecture d’axes gradués'],
    lessons: [
      {
        id: 'position', eyebrow: '1. Situer', title: 'Les indicateurs de position',
        lead: 'Moyenne et médiane ne répondent pas exactement à la même question.',
        paragraphs: ['La moyenne prend en compte toutes les valeurs et leurs effectifs. Elle est sensible aux valeurs extrêmes. La médiane partage la série ordonnée en deux groupes d’effectifs comparables.', 'Les quartiles Q₁ et Q₃ repèrent respectivement les seuils d’au moins 25 % et 75 % des données. Ils se déterminent sur la série ordonnée.'],
        definition: { term: 'Moyenne pondérée', text: 'Pour des valeurs xᵢ d’effectifs nᵢ, la moyenne est la somme nᵢxᵢ divisée par l’effectif total N.' },
        formulas: ['x̄ = (n₁x₁ + n₂x₂ + … + nₖxₖ) / N', 'Médiane : partage la série ordonnée en deux moitiés'],
        example: { title: 'Une valeur extrême', statement: 'Série : 10 ; 11 ; 11 ; 12 ; 46.', steps: ['Moyenne = (10+11+11+12+46)/5 = 18.', 'La valeur centrale est 11 : médiane = 11.', 'La valeur 46 tire fortement la moyenne vers le haut.'], result: 'Ici, la médiane décrit mieux une valeur « typique » que la moyenne.' },
      },
      {
        id: 'dispersion', eyebrow: '2. Disperser', title: 'Étendue, écart interquartile et écart type',
        lead: 'Deux séries peuvent avoir la même moyenne et être pourtant très différentes.',
        paragraphs: ['L’étendue utilise uniquement les valeurs minimale et maximale. L’écart interquartile Q₃ − Q₁ décrit la dispersion de la moitié centrale des données et résiste mieux aux valeurs extrêmes.', 'L’écart type tient compte de toutes les valeurs. Plus il est grand, plus les données sont dispersées autour de la moyenne. Son unité est la même que celle des données.'],
        formulas: ['Étendue = maximum − minimum', 'Écart interquartile = Q₃ − Q₁', 'σ = √[(Σ nᵢ(xᵢ − x̄)²) / N]'],
        warning: 'Un écart type n’a de sens qu’avec son contexte, son unité et, généralement, la moyenne de la série.',
      },
      {
        id: 'representer', eyebrow: '3. Représenter', title: 'Choisir le bon graphique',
        lead: 'La nature des données détermine la représentation pertinente.',
        paragraphs: ['Un diagramme en barres convient à des catégories ou à des valeurs discrètes. Un histogramme représente une variable quantitative regroupée en classes : lorsque les largeurs diffèrent, c’est l’aire des rectangles qui traduit l’effectif.', 'Une boîte à moustaches facilite la comparaison des médianes, quartiles et étendues de plusieurs séries. Elle ne montre cependant pas tous les détails de la distribution.'],
        method: ['Identifier la nature de la variable.', 'Vérifier unités, source et effectif.', 'Choisir des axes et une échelle lisibles.', 'Ajouter un titre informatif et une légende.'],
      },
      {
        id: 'critique', eyebrow: '4. Interpréter', title: 'Lire les données avec recul',
        lead: 'Un graphique exact peut malgré tout orienter la lecture.',
        paragraphs: ['Un axe vertical tronqué amplifie visuellement les écarts. Des classes mal choisies peuvent masquer une structure. Un pourcentage sans effectif ni population de référence est difficile à interpréter.', 'Décrire les données ne permet pas, à lui seul, d’établir une cause. Une corrélation observée doit conduire à formuler des hypothèses, pas à affirmer automatiquement un lien causal.'],
        method: ['Qui produit les données et dans quel but ?', 'Quelle population a été observée ?', 'Les axes et unités sont-ils explicites ?', 'La conclusion dépasse-t-elle ce que montrent les données ?'],
      },
    ],
    exercises: [
      { id: 'st1', label: 'Moyenne', kind: 'input', question: 'Calculer la moyenne de 8 ; 10 ; 10 ; 12.', answer: ['10'], placeholder: 'Moyenne', hint: 'Additionne les quatre valeurs puis divise par 4.', correction: '(8 + 10 + 10 + 12) / 4 = 40 / 4 = 10.' },
      { id: 'st2', label: 'Médiane', kind: 'input', question: 'Quelle est la médiane de la série ordonnée 3 ; 5 ; 7 ; 9 ; 20 ?', answer: ['7'], placeholder: 'Médiane', hint: 'Repère la valeur centrale.', correction: 'La série contient cinq valeurs. La troisième, 7, est la médiane.' },
      { id: 'st3', label: 'Dispersion', kind: 'choice', question: 'Quel indicateur est le moins sensible à une valeur extrême ?', options: ['L’étendue', 'L’écart interquartile', 'La moyenne'], answer: 1, hint: 'Il repose sur la moitié centrale des données.', correction: 'L’écart interquartile Q₃−Q₁ décrit la moitié centrale et est peu affecté par une valeur extrême.' },
      { id: 'st4', label: 'Lecture critique', kind: 'choice', question: 'Un axe vertical commence à 98 au lieu de 0. Quel peut être l’effet ?', options: ['Les écarts paraissent plus grands', 'Les données deviennent fausses', 'La moyenne change'], answer: 0, hint: 'Les valeurs restent identiques, mais leur perception visuelle change.', correction: 'Un axe tronqué peut amplifier visuellement de petits écarts, même si les données affichées sont exactes.' },
    ],
    mission: {
      subject: 'HGGSP · Données publiques', title: 'Comparer deux territoires sans tromper le lecteur',
      context: 'Deux communes publient des temps de trajet domicile–lycée. La commune A a une moyenne de 24 min et une médiane de 18 min ; la commune B a une moyenne de 23 min et une médiane de 22 min. Les données détaillées sont disponibles sous forme de séries.',
      task: 'Calculer les indicateurs utiles, choisir une représentation et rédiger une comparaison qui distingue niveau moyen et dispersion.',
      steps: ['Ordonner et contrôler les données.', 'Calculer médiane, quartiles, moyenne et étendue.', 'Construire deux boîtes à moustaches sur le même axe.', 'Rédiger une conclusion nuancée.'],
      expected: 'Les calculs, une représentation commune et un commentaire de huit lignes maximum.',
    },
    recap: ['La moyenne utilise toutes les valeurs.', 'La médiane résiste mieux aux valeurs extrêmes.', 'La dispersion complète les indicateurs de position.', 'Le graphique dépend de la nature des données.', 'Source, effectif, échelle et causalité doivent être examinés.'],
    nextSlug: 'algorithmique',
  },
  {
    slug: 'algorithmique', number: '06', title: 'Algorithmique et Python', shortTitle: 'Algorithmique',
    subtitle: 'Traduire un raisonnement en instructions précises',
    question: 'Comment faire exécuter une méthode mathématique par une machine ?',
    intro: 'Un algorithme décrit une suite finie d’instructions non ambiguës. Avec Python, on peut automatiser un calcul, simuler une expérience aléatoire ou rechercher le premier rang où un seuil est dépassé.',
    accent: '#355F8A', accentLight: '#E8EFF5', duration: '1 h 25',
    program: 'Variables · conditions · boucles · fonctions · simulation et recherche de seuil',
    objectives: ['Lire et compléter un programme Python', 'Choisir entre condition et boucle', 'Écrire une fonction simple', 'Simuler et interpréter un résultat'],
    prerequisites: ['Calcul littéral', 'Suites et probabilités', 'Utilisation élémentaire de Python'],
    lessons: [
      {
        id: 'variables', eyebrow: '1. Stocker', title: 'Variables, affectations et types',
        lead: 'Une variable associe un nom à une valeur qui peut évoluer pendant l’exécution.',
        paragraphs: ['En Python, le symbole = réalise une affectation : il calcule la partie droite puis range le résultat dans la variable de gauche. Ce n’est pas une égalité mathématique.', 'Les types usuels sont int pour les entiers, float pour les nombres décimaux, bool pour les booléens et str pour le texte.'],
        definition: { term: 'Affectation', text: 'Après l’instruction x = x + 1, la nouvelle valeur de x est l’ancienne valeur augmentée de 1.' },
        formulas: ['x = 5', 'x = x + 1  # x vaut maintenant 6', 'taux = 0.03'],
        warning: 'En Python, les décimaux utilisent un point : on écrit 1.5 et non 1,5.',
      },
      {
        id: 'conditions', eyebrow: '2. Décider', title: 'Les instructions conditionnelles',
        lead: 'Une condition permet d’exécuter des instructions seulement dans certains cas.',
        paragraphs: ['Le bloc if est exécuté lorsque la condition est vraie. On peut ajouter elif pour tester un autre cas et else pour traiter tous les cas restants.', 'L’indentation délimite les blocs : elle fait partie de la syntaxe du langage. Les comparaisons utilisent ==, <, >, <= et >=.'],
        formulas: ['if note >= 10:', '    resultat = "admis"', 'else:', '    resultat = "à consolider"'],
        method: ['Énoncer les cas en français.', 'Traduire chaque test avec un opérateur de comparaison.', 'Indenter les instructions concernées.', 'Tester les valeurs limites.'],
      },
      {
        id: 'boucles', eyebrow: '3. Répéter', title: 'Boucles for et while',
        lead: 'Une boucle évite de recopier une même instruction.',
        paragraphs: ['La boucle for convient lorsque le nombre de répétitions est connu. range(a, b) fournit les entiers de a inclus à b exclu.', 'La boucle while répète un bloc tant qu’une condition reste vraie. Elle est adaptée à une recherche de seuil, à condition que les variables de la condition soient modifiées dans la boucle.'],
        formulas: ['for n in range(5):  # n prend 0, 1, 2, 3, 4', 'while u <= seuil:', '    u = u * 1.08', '    n = n + 1'],
        warning: 'Dans une boucle while, oublier de modifier la condition peut provoquer une boucle infinie.',
        example: { title: 'Rechercher un seuil', statement: 'Une audience de 1 000 augmente de 8 % par heure. Chercher quand elle dépasse 2 000.', steps: ['Initialiser u = 1000 et n = 0.', 'Tant que u <= 2000, remplacer u par 1.08*u.', 'À chaque tour, augmenter n de 1.', 'À la sortie, n est le premier rang recherché.'], result: 'Le programme renvoie n = 10 : le seuil est dépassé après dix heures.' },
      },
      {
        id: 'fonctions', eyebrow: '4. Réutiliser', title: 'Fonctions et simulations',
        lead: 'Une fonction regroupe une méthode, reçoit des paramètres et renvoie un résultat.',
        paragraphs: ['Le mot-clé def définit une fonction. Une instruction return arrête la fonction et renvoie une valeur utilisable ailleurs dans le programme.', 'La simulation répète une expérience aléatoire avec un générateur pseudo-aléatoire. La fréquence observée approche une probabilité lorsque le nombre d’essais augmente, sans jamais constituer une preuve exacte.'],
        formulas: ['def terme(n):', '    return 500 * 1.3**n', '', 'from random import random', 'succes = random() < 0.4'],
        method: ['Préciser les entrées.', 'Décomposer la méthode.', 'Choisir la valeur renvoyée.', 'Tester sur un cas dont le résultat est connu.'],
      },
    ],
    exercises: [
      { id: 'a1', label: 'Tracer', kind: 'input', question: 'Après x = 4 puis x = 2*x + 1, quelle est la valeur de x ?', answer: ['9'], placeholder: 'Valeur de x', hint: 'Utilise l’ancienne valeur de x dans la seconde instruction.', correction: 'La seconde instruction calcule 2 × 4 + 1, puis affecte 9 à x.' },
      { id: 'a2', label: 'Boucle for', kind: 'choice', question: 'Combien de valeurs parcourt range(2, 7) ?', options: ['5 valeurs', '6 valeurs', '7 valeurs'], answer: 0, hint: 'La borne de droite est exclue.', correction: 'range(2, 7) parcourt 2, 3, 4, 5 et 6 : cinq valeurs.' },
      { id: 'a3', label: 'Choisir', kind: 'choice', question: 'Quelle boucle convient le mieux pour chercher le premier rang où u dépasse 10 000 ?', options: ['Une boucle while', 'Une condition if seule', 'Aucune boucle'], answer: 0, hint: 'Le nombre de répétitions n’est pas connu à l’avance.', correction: 'Une boucle while permet de répéter le calcul tant que u ne dépasse pas le seuil.' },
      { id: 'a4', label: 'Lire un programme', kind: 'input', question: 'Que renvoie f(3) si def f(x): return x**2 - 1 ?', answer: ['8'], placeholder: 'Résultat', hint: '**2 signifie « au carré ».', correction: 'f(3) = 3² − 1 = 9 − 1 = 8.' },
    ],
    mission: {
      subject: 'Maths · Simulation', title: 'Estimer une probabilité par répétition',
      context: 'Un jeu consiste à lancer deux dés équilibrés et à gagner lorsque la somme est au moins égale à 10.',
      task: 'Écrire une fonction Python qui simule n parties, renvoie la fréquence de victoire, puis comparer plusieurs valeurs de n au calcul exact.',
      steps: ['Écrire une fonction qui simule deux dés.', 'Répéter n fois avec une boucle.', 'Compter les succès et renvoyer succes/n.', 'Comparer pour n = 100, 1 000 et 10 000, puis calculer la probabilité exacte.'],
      expected: 'Le code commenté, trois résultats de simulation et une explication de l’écart avec la valeur exacte.',
    },
    recap: ['= affecte une valeur ; == compare deux valeurs.', 'if choisit, for répète un nombre connu de fois.', 'while convient à une recherche de seuil.', 'Une fonction reçoit des paramètres et peut renvoyer une valeur.', 'Une simulation estime une probabilité, elle ne la démontre pas.'],
  },
];

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
