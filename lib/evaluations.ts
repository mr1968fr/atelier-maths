export type QuizLevel = 'progressif' | 'exigeant';

export type QuizQuestion = {
  id: string;
  skill: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type Quiz = {
  chapterSlug: string;
  level: QuizLevel;
  title: string;
  description: string;
  duration: string;
  questions: QuizQuestion[];
};

const q = (
  id: string,
  skill: string,
  prompt: string,
  options: string[],
  correct: number,
  explanation: string,
): QuizQuestion => ({ id, skill, prompt, options, correct, explanation });

export const quizzes: Quiz[] = [
  {
    chapterSlug: 'suites', level: 'progressif', title: 'Suites · Parcours progressif',
    description: 'Vérifier les notations, reconnaître les deux modèles usuels et calculer des termes.', duration: '12 min',
    questions: [
      q('sp1', 'Notation', 'Dans la notation u₇, que représente le nombre 7 ?', ['La valeur du terme', 'Le rang du terme', 'La raison de la suite', 'Le nombre de termes'], 1, 'Dans u₇, u est le nom de la suite et 7 est le rang. La valeur u₇ doit être calculée ou donnée.'),
      q('sp2', 'Calcul explicite', 'La suite est définie par uₙ = 5n − 2. Combien vaut u₄ ?', ['12', '18', '20', '23'], 1, 'u₄ = 5 × 4 − 2 = 18.'),
      q('sp3', 'Suite arithmétique', 'Une suite arithmétique vérifie u₀ = 9 et r = 3. Quelle relation de récurrence est correcte ?', ['uₙ₊₁ = 3uₙ', 'uₙ₊₁ = uₙ + 3', 'uₙ₊₁ = uₙ + 9', 'uₙ₊₁ = 9uₙ + 3'], 1, 'Dans une suite arithmétique de raison r, on ajoute r : uₙ₊₁ = uₙ + r.'),
      q('sp4', 'Suite arithmétique', 'Si u₀ = 14 et uₙ = u₀ − 2n, combien vaut u₅ ?', ['4', '9', '12', '24'], 0, 'u₅ = 14 − 2 × 5 = 4.'),
      q('sp5', 'Pourcentage', 'Une quantité augmente de 6 % à chaque étape. Par quel nombre faut-il la multiplier ?', ['0,06', '0,94', '1,06', '1,6'], 2, 'Une hausse de 6 % correspond au coefficient 1 + 6/100 = 1,06.'),
      q('sp6', 'Suite géométrique', 'Une suite géométrique vérifie u₀ = 200 et q = 0,8. Combien vaut u₂ ?', ['128', '160', '200,8', '320'], 0, 'u₂ = 200 × 0,8² = 128.'),
      q('sp7', 'Reconnaître un modèle', 'Un stock diminue de 25 unités chaque semaine. Quel modèle convient ?', ['Arithmétique de raison −25', 'Géométrique de raison −25', 'Géométrique de raison 0,75', 'Arithmétique de raison 25'], 0, 'Une même diminution en valeur absolue correspond à une suite arithmétique de raison −25.'),
      q('sp8', 'Sens de variation', 'Une suite géométrique à termes positifs a pour raison 1,04. Elle est…', ['décroissante', 'constante', 'croissante', 'alternée'], 2, 'Pour des termes positifs, une raison supérieure à 1 donne une suite croissante.'),
    ],
  },
  {
    chapterSlug: 'suites', level: 'exigeant', title: 'Suites · Parcours exigeant',
    description: 'Choisir un modèle, articuler récurrence et formule explicite, puis interpréter une prévision.', duration: '20 min',
    questions: [
      q('se1', 'Identifier une raison', 'Une suite arithmétique vérifie u₃ = 17 et u₈ = 2. Quelle est sa raison ?', ['−5', '−3', '3', '15'], 1, 'Entre les rangs 3 et 8, il y a cinq pas. La variation est 2 − 17 = −15, donc r = −15/5 = −3.'),
      q('se2', 'Forme explicite', 'Une suite géométrique vérifie u₂ = 12 et q = 2. Quelle expression donne uₙ ?', ['12 × 2ⁿ', '12 × 2ⁿ⁻²', '12 + 2(n − 2)', '2 × 12ⁿ⁻²'], 1, 'À partir d’un terme uₚ, on a uₙ = uₚ × qⁿ⁻ᵖ. Ici uₙ = 12 × 2ⁿ⁻².'),
      q('se3', 'Évolution réciproque', 'Après une baisse de 20 %, quelle hausse permet de revenir exactement à la valeur initiale ?', ['20 %', '24 %', '25 %', '80 %'], 2, 'Après la baisse, la valeur vaut 0,8 fois l’ancienne. Pour revenir à 1, il faut multiplier par 1/0,8 = 1,25, soit une hausse de 25 %.'),
      q('se4', 'Comparer deux modèles', 'Aₙ = 100 + 15n et Bₙ = 100 × 1,1ⁿ. Quelle affirmation est correcte ?', ['A et B sont toutes deux arithmétiques', 'B augmente toujours de 10 unités', 'A est arithmétique et B géométrique', 'A est géométrique et B arithmétique'], 2, 'A augmente de 15 à chaque rang : elle est arithmétique. B est multipliée par 1,1 : elle est géométrique.'),
      q('se5', 'Algorithme de seuil', 'On exécute : u = 500, n = 0, puis tant que u < 1000, u = 1,2u et n = n + 1. Que représente n à la fin ?', ['Le nombre de termes inférieurs à 500', 'Le premier rang où u atteint ou dépasse 1000', 'La valeur finale de la suite', 'La raison de la suite'], 1, 'La boucle s’arrête dès que u ≥ 1000. Le compteur n donne donc le premier rang où le seuil est atteint ou dépassé.'),
      q('se6', 'Variation', 'On sait que uₙ₊₁ − uₙ = 4n − 12. À partir de quel rang entier n a-t-on uₙ₊₁ ≥ uₙ ?', ['n = 2', 'n = 3', 'n = 4', 'Jamais'], 1, 'uₙ₊₁ ≥ uₙ lorsque 4n − 12 ≥ 0, soit n ≥ 3.'),
      q('se7', 'Modélisation', 'Une population de 2 000 individus augmente de 4 % par an. Quelle valeur donne le modèle après dix augmentations ?', ['2 000 + 10 × 0,04', '2 000 × 1,04¹⁰', '2 000 × 0,96¹⁰', '2 000 + 10 × 4'], 1, 'Une hausse à taux constant est multiplicative : après dix augmentations, la valeur est 2 000 × 1,04¹⁰.'),
      q('se8', 'Esprit critique', 'Pourquoi faut-il être prudent en prolongeant une suite démographique sur cinquante ans ?', ['Parce qu’une suite ne peut pas dépasser 50 termes', 'Parce que la raison peut cesser d’être constante dans la réalité', 'Parce que les suites ne modélisent que les prix', 'Parce que u₅₀ est toujours négatif'], 1, 'Le modèle suppose que la loi d’évolution reste inchangée. Sur une longue durée, les conditions réelles peuvent évoluer.'),
    ],
  },
  {
    chapterSlug: 'derivation', level: 'progressif', title: 'Dérivation · Parcours progressif',
    description: 'Interpréter une pente, calculer des dérivées usuelles et lire les variations.', duration: '12 min',
    questions: [
      q('dp1', 'Interprétation', 'Graphiquement, que représente f′(a) ?', ['L’ordonnée du point', 'La pente de la tangente en a', 'L’aire sous la courbe', 'La plus grande valeur de f'], 1, 'Le nombre dérivé f′(a) est le coefficient directeur de la tangente à la courbe au point d’abscisse a.'),
      q('dp2', 'Dérivée usuelle', 'Quelle est la dérivée de f(x) = x³ ?', ['x²', '2x²', '3x²', '3x'], 2, 'La dérivée de xⁿ est nxⁿ⁻¹. Ainsi (x³)′ = 3x².'),
      q('dp3', 'Dérivée d’un polynôme', 'Quelle est la dérivée de f(x) = 4x² − 3x + 7 ?', ['8x − 3', '4x − 3', '8x + 7', '4x² − 3'], 0, 'On dérive terme à terme : (4x²)′ = 8x, (−3x)′ = −3 et 7′ = 0.'),
      q('dp4', 'Signe et variation', 'Si f′(x) > 0 sur un intervalle I, alors f est…', ['positive sur I', 'croissante sur I', 'nulle sur I', 'décroissante sur I'], 1, 'Une dérivée strictement positive indique que la fonction est strictement croissante.'),
      q('dp5', 'Tangente', 'La tangente à une courbe a pour pente −2. Lorsque x augmente de 1, son ordonnée…', ['augmente de 2', 'diminue de 2', 'est multipliée par −2', 'ne change pas'], 1, 'Une pente −2 signifie une variation de −2 en ordonnée pour une augmentation de 1 en abscisse.'),
      q('dp6', 'Point critique', 'Que peut indiquer une solution de f′(x) = 0 ?', ['Une tangente horizontale', 'Une asymptote verticale', 'Une absence de courbe', 'Une ordonnée forcément nulle'], 0, 'Lorsque f′(a) = 0, la tangente en a est horizontale. Le point peut être un extremum, mais ce n’est pas automatique.'),
      q('dp7', 'Exponentielle', 'Quelle est la dérivée de eˣ ?', ['xeˣ', 'eˣ', '1/x', '0'], 1, 'La fonction exponentielle est égale à sa dérivée.'),
      q('dp8', 'Minimum', 'C′ est négative avant 4 puis positive après 4. Que se passe-t-il en x = 4 ?', ['C atteint un maximum', 'C atteint un minimum', 'C vaut nécessairement 0', 'C n’est pas définie'], 1, 'La fonction décroît avant 4 puis croît après 4 : elle atteint donc un minimum en 4.'),
    ],
  },
  {
    chapterSlug: 'derivation', level: 'exigeant', title: 'Dérivation · Parcours exigeant',
    description: 'Combiner calcul, étude de signe, équation de tangente et optimisation.', duration: '20 min',
    questions: [
      q('de1', 'Produit', 'Si f(x) = (x² + 1)(3x − 2), quelle expression est f′(x) ?', ['2x × 3', '2x(3x − 2) + 3(x² + 1)', '2x(3x − 2)', '(x² + 1) × 3x'], 1, 'Avec u = x²+1 et v = 3x−2, (uv)′ = u′v + uv′ = 2x(3x−2)+3(x²+1).'),
      q('de2', 'Tangente', 'Pour f(x) = x² − 2x, quelle est l’équation de la tangente au point d’abscisse 3 ?', ['y = 4x − 9', 'y = 3x − 6', 'y = 4x + 3', 'y = 6x − 9'], 0, 'f′(x)=2x−2, donc f′(3)=4 et f(3)=3. La tangente est y=4(x−3)+3=4x−9.'),
      q('de3', 'Étude de signe', 'f′(x) = (x − 1)(x − 5), avec un coefficient dominant positif. Sur quel intervalle f est-elle décroissante ?', [']−∞ ; 1[', ']1 ; 5[', ']5 ; +∞[', 'Sur ℝ'], 1, 'Le produit de deux facteurs est négatif entre ses racines 1 et 5. Ainsi f décroît sur [1 ; 5].'),
      q('de4', 'Optimisation', 'Une aire est donnée par A(x) = −2x² + 24x sur [0 ; 12]. Pour quelle valeur de x est-elle maximale ?', ['x = 2', 'x = 6', 'x = 12', 'x = 24'], 1, 'A′(x)=−4x+24 s’annule en 6 et passe de positif à négatif : A atteint son maximum en x=6.'),
      q('de5', 'Nombre dérivé', 'On sait que f(2) = 5 et f′(2) = −3. Quelle est l’équation de la tangente en 2 ?', ['y = −3x + 11', 'y = −3x + 5', 'y = 5x − 13', 'y = 3x − 1'], 0, 'y=f′(2)(x−2)+f(2)=−3(x−2)+5=−3x+11.'),
      q('de6', 'Paramètre', 'Pour f(x) = x² + mx + 4, on veut une tangente horizontale en x = 3. Que vaut m ?', ['−6', '−3', '3', '6'], 0, 'f′(x)=2x+m. La condition f′(3)=0 donne 6+m=0, donc m=−6.'),
      q('de7', 'Lecture critique', 'Si f′(2) = 0, quelle conclusion est toujours vraie ?', ['f(2)=0', 'f admet un minimum en 2', 'La tangente est horizontale en 2', 'f est constante'], 2, 'L’annulation de la dérivée garantit une tangente horizontale. Il faut étudier le signe autour de 2 pour conclure à un extremum.'),
      q('de8', 'Modélisation', 'Un coût C est étudié sur [0 ; 10]. Pourquoi faut-il aussi calculer C aux bornes ?', ['Parce que C′ n’existe jamais aux bornes', 'Parce qu’un extremum global peut être atteint à une borne', 'Parce que les bornes annulent toujours C', 'Pour déterminer l’unité de C'], 1, 'Pour trouver un minimum ou maximum global sur un intervalle fermé, on compare les valeurs aux points critiques et aux bornes.'),
    ],
  },
  {
    chapterSlug: 'exponentielle', level: 'progressif', title: 'Exponentielle · Parcours progressif',
    description: 'Connaître les propriétés de eˣ, simplifier et reconnaître un modèle exponentiel.', duration: '12 min',
    questions: [
      q('ep1', 'Valeur remarquable', 'Combien vaut e⁰ ?', ['0', '1', 'e', '−1'], 1, 'Toute puissance non nulle d’exposant 0 vaut 1 ; en particulier e⁰ = 1.'),
      q('ep2', 'Signe', 'Pour un réel x, eˣ est toujours…', ['strictement positif', 'négatif', 'compris entre 0 et 1', 'entier'], 0, 'La fonction exponentielle prend uniquement des valeurs strictement positives.'),
      q('ep3', 'Produit', 'Comment simplifier e² × e⁵ ?', ['e¹⁰', 'e⁷', '2e⁵', 'e³'], 1, 'Dans un produit d’exponentielles de même base, on additionne les exposants : e²e⁵=e⁷.'),
      q('ep4', 'Quotient', 'Comment simplifier e⁸ / e³ ?', ['e²⁴', 'e¹¹', 'e⁵', 'e⁸/³'], 2, 'Dans un quotient, on soustrait les exposants : e⁸/e³=e⁸⁻³=e⁵.'),
      q('ep5', 'Dérivée', 'Quelle est la dérivée de f(x) = 3eˣ ?', ['3eˣ', 'e³ˣ', '3xeˣ', '3'], 0, 'Le coefficient 3 est conservé et (eˣ)′=eˣ.'),
      q('ep6', 'Équation', 'Résoudre e²ˣ = e⁶.', ['x = 2', 'x = 3', 'x = 4', 'x = 6'], 1, 'L’exponentielle est injective : 2x=6, donc x=3.'),
      q('ep7', 'Modèle', 'Dans f(t) = 500e⁰·²ᵗ, quelle est la valeur initiale ?', ['0,2', '1', '100', '500'], 3, 'À t=0, f(0)=500e⁰=500.'),
      q('ep8', 'Variation', 'La fonction f(t) = 8e⁻⁰·⁴ᵗ décrit…', ['une croissance', 'une décroissance', 'une fonction constante', 'des valeurs négatives'], 1, 'Le paramètre de t est négatif, le modèle est donc décroissant.'),
    ],
  },
  {
    chapterSlug: 'exponentielle', level: 'exigeant', title: 'Exponentielle · Parcours exigeant',
    description: 'Transformer des expressions, dériver des compositions simples et analyser un modèle.', duration: '20 min',
    questions: [
      q('ee1', 'Transformation', 'Quelle expression est égale à e²ˣ⁺³ ?', ['e²ˣ + e³', 'e²ˣ × e³', 'e⁵ˣ', '2eˣ + 3e'], 1, 'La propriété eᵃ⁺ᵇ=eᵃeᵇ donne e²ˣ⁺³=e²ˣ×e³.'),
      q('ee2', 'Équation', 'Résoudre e³ˣ⁻² = eˣ⁺⁴.', ['x = 1', 'x = 2', 'x = 3', 'x = 6'], 2, 'On égalise les exposants : 3x−2=x+4, donc 2x=6 et x=3.'),
      q('ee3', 'Dérivation composée', 'Quelle est la dérivée de f(x) = e⁻³ˣ⁺¹ ?', ['e⁻³ˣ⁺¹', '−3e⁻³ˣ⁺¹', '(−3x+1)e⁻³ˣ⁺¹', '3e⁻³ˣ⁺¹'], 1, 'Pour u(x)=−3x+1, u′=−3. Donc (eᵘ)′=u′eᵘ=−3e⁻³ˣ⁺¹.'),
      q('ee4', 'Signe de dérivée', 'f′(x) = (2x − 6)eˣ. Sur quel intervalle f est-elle décroissante ?', [']−∞ ; 0]', ']−∞ ; 3]', '[3 ; +∞[', 'Sur ℝ'], 1, 'Comme eˣ>0, le signe de f′ est celui de 2x−6, négatif pour x<3. f décroît jusqu’à 3.'),
      q('ee5', 'Comparaison', 'Quelle affirmation est vraie ?', ['e⁻² < e⁻¹', 'e⁻² > e⁻¹', 'e⁻² = e⁻¹', 'Les deux valeurs sont négatives'], 0, 'La fonction exponentielle est strictement croissante et −2<−1, donc e⁻²<e⁻¹.'),
      q('ee6', 'Paramètre', 'Dans C(t)=120eᵏᵗ, on observe une décroissance. Que sait-on sur k ?', ['k > 1', 'k > 0', 'k = 0', 'k < 0'], 3, 'Pour un modèle Aeᵏᵗ avec A positif, k<0 correspond à une décroissance.'),
      q('ee7', 'Seuil numérique', 'Une quantité vaut 100 × 1,5ⁿ. À quel premier rang dépasse-t-elle 300 ?', ['n = 2', 'n = 3', 'n = 4', 'n = 5'], 1, 'Au rang 2, elle vaut 225. Au rang 3, elle vaut 337,5 : le premier dépassement a lieu pour n=3.'),
      q('ee8', 'Programme de Première', 'Sans logarithme, comment estimer quand Aeᵏᵗ dépasse un seuil non remarquable ?', ['C’est impossible', 'Avec un tableau de valeurs ou un graphique', 'En remplaçant e par 1', 'En supprimant l’exposant'], 1, 'En Première, on peut encadrer le seuil numériquement à la calculatrice ou le lire graphiquement.'),
    ],
  },
  {
    chapterSlug: 'probabilites', level: 'progressif', title: 'Probabilités · Parcours progressif',
    description: 'Calculer une probabilité conditionnelle et exploiter un arbre pondéré.', duration: '12 min',
    questions: [
      q('pp1', 'Notation', 'Comment lit-on P(A | B) ?', ['Probabilité de B sachant A', 'Probabilité de A sachant B', 'Probabilité de A ou B', 'Probabilité contraire de A'], 1, 'P(A | B) se lit « probabilité de A sachant B ». B devient l’univers de référence.'),
      q('pp2', 'Conditionnement', 'Si P(A∩B)=0,12 et P(B)=0,30, combien vaut P(A | B) ?', ['0,04', '0,18', '0,4', '2,5'], 2, 'P(A|B)=P(A∩B)/P(B)=0,12/0,30=0,4.'),
      q('pp3', 'Arbre pondéré', 'À chaque nœud d’un arbre, la somme des probabilités des branches vaut…', ['0', '0,5', '1', '100'], 2, 'Les branches issues d’un nœud décrivent tous les cas possibles ; leurs probabilités totalisent 1.'),
      q('pp4', 'Intersection', 'Sur un chemin d’un arbre pondéré, les probabilités se…', ['multiplient', 'soustraient', 'moyennent', 'remplacent par 1'], 0, 'Un chemin représente une intersection : sa probabilité est le produit des probabilités des branches.'),
      q('pp5', 'Probabilités totales', 'Deux chemins incompatibles mènent à B avec les probabilités 0,18 et 0,07. Combien vaut P(B) ?', ['0,11', '0,126', '0,25', '1'], 2, 'On additionne les probabilités des chemins incompatibles : 0,18+0,07=0,25.'),
      q('pp6', 'Événement contraire', 'Si P(A)=0,35, combien vaut P(Ā) ?', ['0,35', '0,65', '1,35', '−0,35'], 1, 'P(Ā)=1−P(A)=0,65.'),
      q('pp7', 'Indépendance', 'A et B sont indépendants si…', ['P(A∩B)=0', 'P(A)=P(B)', 'P(A∩B)=P(A)P(B)', 'P(A∪B)=1'], 2, 'La relation P(A∩B)=P(A)×P(B) caractérise l’indépendance.'),
      q('pp8', 'Vocabulaire', 'Deux événements incompatibles…', ['se produisent toujours ensemble', 'ne peuvent pas se produire ensemble', 'ont toujours la même probabilité', 'sont toujours indépendants'], 1, 'Incompatibles signifie que leur intersection est vide : ils ne peuvent pas être réalisés simultanément.'),
    ],
  },
  {
    chapterSlug: 'probabilites', level: 'exigeant', title: 'Probabilités · Parcours exigeant',
    description: 'Recomposer plusieurs chemins, inverser un conditionnement et tester l’indépendance.', duration: '20 min',
    questions: [
      q('pe1', 'Arbre complet', 'P(A)=0,4, P(B|A)=0,7 et P(B|Ā)=0,2. Combien vaut P(B) ?', ['0,28', '0,40', '0,54', '0,90'], 1, 'P(B)=0,4×0,7+0,6×0,2=0,28+0,12=0,40.'),
      q('pe2', 'Condition inverse', 'Avec les données précédentes, combien vaut P(A | B) ?', ['0,28', '0,40', '0,70', '0,90'], 2, 'P(A∩B)=0,28 et P(B)=0,40. Donc P(A|B)=0,28/0,40=0,70.'),
      q('pe3', 'Test d’indépendance', 'P(A)=0,3, P(B)=0,5 et P(A∩B)=0,12. Que conclure ?', ['A et B sont indépendants', 'A et B ne sont pas indépendants', 'A et B sont incompatibles', 'P(A|B)=0,5'], 1, 'P(A)P(B)=0,15, différent de 0,12. Les événements ne sont donc pas indépendants.'),
      q('pe4', 'Tableau d’effectifs', 'Sur 200 élèves, 80 pratiquent un sport ; parmi eux, 30 jouent d’un instrument. Pour un sportif choisi au hasard, quelle est la probabilité de jouer d’un instrument ?', ['0,15', '0,375', '0,40', '0,55'], 1, 'L’univers conditionnel contient 80 sportifs. La proportion cherchée est 30/80=0,375.'),
      q('pe5', 'Dépistage', 'Une maladie rare touche 1 % de la population. Même avec un bon test, pourquoi un résultat positif peut-il être un faux positif ?', ['Parce que tous les tests sont aléatoires', 'Parce que les non-malades sont beaucoup plus nombreux', 'Parce que P(M)=P(T)', 'Parce qu’une probabilité peut dépasser 1'], 1, 'Lorsque la maladie est rare, le très grand nombre de non-malades peut produire davantage de faux positifs que de vrais positifs.'),
      q('pe6', 'Incompatibilité', 'Si A et B sont incompatibles et P(A)>0, P(B)>0, peuvent-ils être indépendants ?', ['Oui, toujours', 'Oui, si leurs probabilités sont égales', 'Non', 'Seulement si P(A)+P(B)=1'], 2, 'Incompatibilité donne P(A∩B)=0, tandis que P(A)P(B)>0. La relation d’indépendance est impossible.'),
      q('pe7', 'Compléter un arbre', 'On connaît P(A)=0,65. Quelle probabilité faut-il placer sur la branche Ā ?', ['0,35', '0,65', '1,65', '−0,65'], 0, 'A et Ā forment une partition : P(Ā)=1−0,65=0,35.'),
      q('pe8', 'Interprétation', 'P(M | T)=0,25 dans une étude de dépistage. Quelle phrase est correcte ?', ['25 % des malades ont un test positif', '25 % des personnes testées positives sont malades', 'Le test a 25 % de chances de fonctionner', '25 % de la population est malade'], 1, 'Le conditionnement « sachant T » restreint la référence aux personnes dont le test est positif.'),
    ],
  },
  {
    chapterSlug: 'statistiques', level: 'progressif', title: 'Statistiques · Parcours progressif',
    description: 'Calculer les indicateurs usuels et choisir une représentation adaptée.', duration: '12 min',
    questions: [
      q('stp1', 'Moyenne', 'Quelle est la moyenne de 6 ; 8 ; 10 ; 12 ?', ['8', '9', '10', '36'], 1, '(6+8+10+12)/4=36/4=9.'),
      q('stp2', 'Médiane', 'Quelle est la médiane de 2 ; 4 ; 7 ; 9 ; 15 ?', ['4', '7', '7,4', '9'], 1, 'Dans cette série ordonnée de cinq valeurs, la valeur centrale est 7.'),
      q('stp3', 'Étendue', 'Quelle est l’étendue de 3 ; 8 ; 11 ; 14 ?', ['3', '8', '11', '14'], 2, 'Étendue = maximum − minimum = 14−3=11.'),
      q('stp4', 'Quartiles', 'Que mesure l’écart interquartile Q₃ − Q₁ ?', ['La position de la moyenne', 'La dispersion de la moitié centrale', 'Le nombre total de données', 'La valeur maximale'], 1, 'L’intervalle [Q₁;Q₃] contient la moitié centrale de la série. Sa largeur mesure cette dispersion.'),
      q('stp5', 'Valeur extrême', 'Quel indicateur est généralement le plus sensible à une valeur très grande ?', ['La médiane', 'La moyenne', 'Le premier quartile', 'L’effectif'], 1, 'La moyenne utilise toutes les valeurs et peut être fortement déplacée par une valeur extrême.'),
      q('stp6', 'Écart type', 'Un écart type élevé indique que les données sont…', ['très concentrées autour de la moyenne', 'très dispersées autour de la moyenne', 'toutes négatives', 'nécessairement fausses'], 1, 'Plus l’écart type est élevé, plus les valeurs sont dispersées autour de leur moyenne.'),
      q('stp7', 'Représentation', 'Quelle représentation facilite la comparaison des quartiles de deux séries ?', ['Une boîte à moustaches', 'Un diagramme circulaire', 'Un arbre pondéré', 'Une courbe de fonction'], 0, 'La boîte à moustaches fait apparaître médiane, quartiles et valeurs extrêmes sur un même axe.'),
      q('stp8', 'Lecture graphique', 'Quel effet peut avoir un axe vertical qui commence à 98 au lieu de 0 ?', ['Changer les données', 'Amplifier visuellement les écarts', 'Changer la moyenne', 'Augmenter l’effectif'], 1, 'Les valeurs ne changent pas, mais un axe tronqué peut rendre de petits écarts visuellement impressionnants.'),
    ],
  },
  {
    chapterSlug: 'statistiques', level: 'exigeant', title: 'Statistiques · Parcours exigeant',
    description: 'Comparer des distributions, interpréter des indicateurs et exercer son esprit critique.', duration: '20 min',
    questions: [
      q('ste1', 'Moyenne pondérée', 'Une classe a 10 élèves notés 12 et 15 élèves notés 16. Quelle est la moyenne ?', ['14', '14,4', '14,5', '15'], 1, '(10×12+15×16)/25=(120+240)/25=14,4.'),
      q('ste2', 'Moyenne groupée', 'Un groupe de 20 personnes a une moyenne de 14, un autre de 30 personnes une moyenne de 11. Quelle est la moyenne globale ?', ['12', '12,2', '12,5', '25'], 1, '(20×14+30×11)/50=(280+330)/50=12,2.'),
      q('ste3', 'Comparer', 'Deux séries ont la même moyenne. La série A a σ=2 et la série B σ=7. Que peut-on dire ?', ['A est plus dispersée', 'B est plus dispersée', 'Les séries sont identiques', 'B a forcément une médiane plus grande'], 1, 'À moyenne identique, l’écart type 7 signale une dispersion plus forte que l’écart type 2.'),
      q('ste4', 'Robustesse', 'On ajoute une valeur extrêmement élevée à une série. Quel couple d’indicateurs résiste généralement le mieux ?', ['Moyenne et étendue', 'Médiane et écart interquartile', 'Moyenne et écart type', 'Maximum et étendue'], 1, 'Médiane et écart interquartile dépendent surtout de l’ordre et de la moitié centrale ; ils sont robustes aux valeurs extrêmes.'),
      q('ste5', 'Histogramme', 'Dans un histogramme dont les classes ont des largeurs différentes, qu’est-ce qui doit représenter l’effectif ?', ['La hauteur seule', 'La largeur seule', 'L’aire du rectangle', 'La couleur du rectangle'], 2, 'Avec des largeurs de classes inégales, c’est l’aire de chaque rectangle qui doit être proportionnelle à l’effectif.'),
      q('ste6', 'Causalité', 'Deux variables statistiques sont fortement corrélées. Quelle conclusion est justifiée ?', ['La première cause nécessairement la seconde', 'La seconde cause nécessairement la première', 'Un lien est observé, mais la causalité reste à établir', 'Les deux variables sont identiques'], 2, 'Une corrélation décrit une association. Elle ne suffit pas à prouver une relation de cause à effet.'),
      q('ste7', 'Interprétation', 'Une moyenne est 2 400 € et une médiane 1 750 €. Quelle explication est plausible ?', ['Quelques valeurs élevées tirent la moyenne vers le haut', 'Toutes les valeurs sont égales', 'La série ne contient que deux valeurs', 'La médiane est mal calculée par définition'], 0, 'Des revenus très élevés peuvent augmenter fortement la moyenne tout en laissant la médiane plus basse.'),
      q('ste8', 'Esprit critique', 'Une enquête annonce « 80 % sont favorables » sans préciser l’effectif. Quelle information manque en priorité ?', ['La couleur du graphique', 'La taille et la sélection de l’échantillon', 'La valeur de π', 'Le nom du tableur'], 1, 'Sans effectif ni méthode d’échantillonnage, on ne peut pas juger la précision ni la représentativité du résultat.'),
    ],
  },
  {
    chapterSlug: 'algorithmique', level: 'progressif', title: 'Algorithmique · Parcours progressif',
    description: 'Lire les instructions Python, distinguer conditions et boucles, puis prévoir un résultat.', duration: '12 min',
    questions: [
      q('ap1', 'Affectation', 'Après x = 5 puis x = x + 3, combien vaut x ?', ['3', '5', '8', '15'], 2, 'La seconde instruction utilise l’ancienne valeur 5 puis affecte 8 à x.'),
      q('ap2', 'Comparaison', 'Quel opérateur Python teste l’égalité de deux valeurs ?', ['=', '==', '!=', '=>'], 1, '= réalise une affectation ; == teste l’égalité.'),
      q('ap3', 'Types', 'Comment écrit-on le nombre décimal un et demi en Python ?', ['1,5', '1.5', '1/5', '1;5'], 1, 'Python utilise un point comme séparateur décimal : 1.5.'),
      q('ap4', 'Condition', 'Dans `if note >= 10:`, quand le bloc indenté est-il exécuté ?', ['Toujours', 'Lorsque note est au moins 10', 'Lorsque note est inférieure à 10', 'Seulement si note vaut 0'], 1, 'L’opérateur >= signifie « supérieur ou égal ». Le bloc s’exécute donc pour note ≥ 10.'),
      q('ap5', 'Range', 'Quelles valeurs parcourt range(1, 5) ?', ['1, 2, 3, 4', '1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '2, 3, 4, 5'], 0, 'La borne de droite est exclue : range(1,5) fournit 1, 2, 3 et 4.'),
      q('ap6', 'Boucle', 'Quelle boucle convient lorsque le nombre de répétitions est connu ?', ['if', 'for', 'while uniquement', 'return'], 1, 'La boucle for est adaptée à un parcours ou à un nombre de répétitions connu.'),
      q('ap7', 'Fonction', 'À quoi sert l’instruction return dans une fonction ?', ['À répéter la fonction', 'À renvoyer un résultat', 'À afficher obligatoirement du texte', 'À créer une boucle infinie'], 1, 'return arrête l’exécution de la fonction et renvoie une valeur au programme appelant.'),
      q('ap8', 'Puissance', 'En Python, comment écrit-on x au carré ?', ['x^2', 'x**2', '2x', 'x//2'], 1, 'L’opérateur de puissance est **. Ainsi x au carré s’écrit x**2.'),
    ],
  },
  {
    chapterSlug: 'algorithmique', level: 'exigeant', title: 'Algorithmique · Parcours exigeant',
    description: 'Tracer des programmes, contrôler les boucles et interpréter une simulation.', duration: '20 min',
    questions: [
      q('ae1', 'Tracer une boucle', 'Que vaut s après `s=0` puis `for k in range(1,4): s=s+k` ?', ['3', '4', '6', '10'], 2, 'k prend 1, 2 et 3. La somme finale vaut 0+1+2+3=6.'),
      q('ae2', 'Recherche de seuil', 'On initialise u=100, n=0 puis, tant que u<150, on fait u=1.1*u et n=n+1. Que représente n ?', ['La dernière valeur de u', 'Le premier nombre d’augmentations pour atteindre le seuil', 'Le taux en pourcentage', 'Toujours 0'], 1, 'n compte les passages dans la boucle. À la sortie, il donne le premier nombre d’augmentations nécessaires pour avoir u≥150.'),
      q('ae3', 'Boucle infinie', 'Quel défaut risque de rendre une boucle `while x < 10:` infinie ?', ['Utiliser une comparaison', 'Ne jamais modifier x dans la boucle', 'Indenter les instructions', 'Initialiser x avant la boucle'], 1, 'Si x reste inférieur à 10 et n’est jamais modifié, la condition demeure vraie indéfiniment.'),
      q('ae4', 'Fonction', 'Que renvoie `def f(x): return 2*x**2-3` pour x=−2 ?', ['−11', '1', '5', '11'], 2, 'f(−2)=2×(−2)²−3=2×4−3=5.'),
      q('ae5', 'Condition imbriquée', 'Avec x=7, que produit `if x%2==0: r="pair"` sinon `r="impair"` ?', ['pair', 'impair', '7', 'Une erreur'], 1, '7%2 vaut 1, donc le test d’égalité à 0 est faux et le bloc else affecte « impair ».'),
      q('ae6', 'Simulation', 'Quand le nombre de simulations augmente, la fréquence observée…', ['est garantie égale à la probabilité exacte', 'tend en général à se stabiliser près de la probabilité', 'devient toujours 1', 'cesse d’être aléatoire dès 100 essais'], 1, 'La fréquence tend à se rapprocher de la probabilité, tout en conservant des fluctuations aléatoires.'),
      q('ae7', 'Erreur de borne', 'Pour répéter exactement 10 fois avec `for k in range(...)`, quelle écriture convient ?', ['range(1,10)', 'range(10)', 'range(0,11)', 'range(10,20) uniquement'], 1, 'range(10) fournit dix valeurs, de 0 à 9, donc dix répétitions.'),
      q('ae8', 'Validité', 'Pourquoi tester une fonction sur un cas calculable à la main ?', ['Pour remplacer tous les tests', 'Pour vérifier que le code produit au moins un résultat attendu', 'Pour accélérer automatiquement Python', 'Pour supprimer les paramètres'], 1, 'Un cas de référence aide à repérer une erreur de formule, de borne ou d’affectation avant une utilisation plus large.'),
    ],
  },
];

export function getQuiz(chapterSlug: string, level: string) {
  return quizzes.find((quiz) => quiz.chapterSlug === chapterSlug && quiz.level === level);
}

export function getChapterQuizzes(chapterSlug: string) {
  return quizzes.filter((quiz) => quiz.chapterSlug === chapterSlug);
}
