import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import CourseGrid from '@/components/CourseGrid';
import { chapters } from '@/lib/chapters';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="home-hero__edition">
            <span>Édition numérique</span>
            <strong>2026</strong>
          </div>
          <div className="home-hero__content">
            <p className="overline">Mathématiques · Première générale</p>
            <h1>Le cours, les méthodes,<br /><em>la pratique.</em></h1>
            <p>
              Un manuel numérique pour comprendre les notions du programme,
              s’entraîner avec une correction immédiate et utiliser les mathématiques
              dans des situations concrètes.
            </p>
            <div className="home-hero__actions">
              <a className="button button--paper" href="#sommaire">Voir le sommaire</a>
              <Link className="text-link" href="/suites">Commencer au chapitre 1 →</Link>
            </div>
          </div>
          <div className="home-hero__figure" aria-hidden="true">
            <svg viewBox="0 0 380 310" role="img">
              <g fill="none" stroke="currentColor">
                <path d="M24 270H356M48 292V24" strokeWidth="2" />
                <path d="M48 244 C90 242 117 235 145 215 C188 184 209 126 253 78 C277 52 304 38 344 31" strokeWidth="5" />
                <path d="M48 246 C115 236 156 214 202 170 C245 129 280 89 344 49" strokeWidth="1.5" strokeDasharray="7 7" opacity=".5" />
                <circle cx="202" cy="170" r="6" fill="currentColor" stroke="none" />
                <path d="M202 170L202 270M202 170L48 170" strokeWidth="1" strokeDasharray="4 5" opacity=".55" />
              </g>
              <text x="210" y="192" fill="currentColor">variation</text>
              <text x="314" y="291" fill="currentColor">x</text>
              <text x="29" y="38" fill="currentColor">y</text>
            </svg>
          </div>
        </section>

        <section className="manual-promise page-width" aria-label="Présentation du manuel">
          <div><span>01</span><strong>Comprendre</strong><p>Un cours structuré, des définitions précises et des exemples résolus.</p></div>
          <div><span>02</span><strong>S’entraîner</strong><p>Des questions courtes avec indice et correction détaillée.</p></div>
          <div><span>03</span><strong>Mobiliser</strong><p>Une mission liée aux sciences, aux données ou aux sciences sociales.</p></div>
        </section>

        <section className="exam-home-promo page-width">
          <div>
            <p className="overline">Nouveau · Épreuve anticipée</p>
            <h2>Préparer les maths de fin de Première.</h2>
            <p>Trois parcours adaptés : spécialité mathématiques, mathématiques spécifiques et voie technologique. Retrouve les automatismes sans calculatrice, les cours ciblés et des sujets blancs.</p>
          </div>
          <dl><div><dt>2 h</dt><dd>sans calculatrice</dd></div><div><dt>6 pts</dt><dd>QCM</dd></div><div><dt>14 pts</dt><dd>exercices</dd></div></dl>
          <Link href="/epreuve-anticipee">Découvrir la préparation →</Link>
        </section>

        <section className="toc-section page-width" id="sommaire">
          <header className="toc-section__header">
            <div><p className="overline">Sommaire</p><h2>Six chapitres, un même parcours.</h2></div>
            <p>Chaque chapitre associe cours, méthodes, automatismes et problème d’application. La progression est conservée sur cet appareil.</p>
          </header>
          <CourseGrid chapters={chapters} />
        </section>

        <section className="evaluation-promo page-width">
          <div>
            <p className="overline">Évaluations</p>
            <h2>Prêt à vérifier tes acquis ?</h2>
            <p>Pour chaque chapitre, choisis un QCM progressif ou un QCM exigeant. Tu obtiendras une note sur 20 et une correction détaillée à la fin.</p>
          </div>
          <div className="evaluation-promo__levels">
            <span><strong>Progressif</strong>Fondamentaux · 12 min</span>
            <span><strong>Exigeant</strong>Raisonnement · 20 min</span>
          </div>
          <Link className="button button--ink" href="/evaluations">Voir les 12 QCM →</Link>
        </section>

        <section className="how-section" id="mode-emploi">
          <div className="page-width how-section__grid">
            <div>
              <p className="overline">Mode d’emploi</p>
              <h2>Travailler comme avec un manuel,<br />avec les outils du numérique.</h2>
            </div>
            <ol>
              <li><span>1</span><div><strong>Lire une leçon</strong><p>Repère les définitions, les formules et la méthode. Reproduis les exemples sur papier.</p></div></li>
              <li><span>2</span><div><strong>Tester sa compréhension</strong><p>Réponds aux exercices sans regarder la correction, puis analyse chaque erreur.</p></div></li>
              <li><span>3</span><div><strong>Résoudre la mission</strong><p>Rédige une solution complète : modèle, calculs, unités et conclusion.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="teacher-note page-width">
          <div className="teacher-note__margin">À propos</div>
          <div>
            <p className="overline">Une ligne éditoriale claire</p>
            <h2>Des mathématiques écrites pour la classe.</h2>
            <p>
              Les chapitres suivent le vocabulaire et les attendus de Première. Les outils de Terminale
              ne sont pas utilisés avant leur introduction : par exemple, les seuils exponentiels sont
              estimés graphiquement ou numériquement, sans faire intervenir prématurément le logarithme.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer site-footer--home">
        <div><strong>L’Atelier des Maths</strong><span>Manuel numérique · Première générale</span></div>
        <nav aria-label="Pied de page">
          <a href="#sommaire">Sommaire</a><Link href="/epreuve-anticipee">Épreuve anticipée</Link><Link href="/evaluations">Évaluations</Link><Link href="/suites">Commencer</Link>
        </nav>
      </footer>
    </>
  );
}
