import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import EvaluationGrid from '@/components/EvaluationGrid';
import { chapters } from '@/lib/chapters';

export const metadata: Metadata = {
  title: 'Évaluations',
  description: 'Deux QCM par chapitre pour évaluer les acquis en mathématiques de Première.',
};

export default function EvaluationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <header className="evaluation-index__hero">
          <div className="page-width">
            <p className="overline">Évaluer ses acquis</p>
            <h1>Deux niveaux pour faire le point.</h1>
            <p>
              Commence par le parcours progressif pour vérifier les fondamentaux,
              puis passe au parcours exigeant pour mobiliser plusieurs compétences.
              La correction complète apparaît uniquement après validation.
            </p>
          </div>
        </header>

        <section className="evaluation-rules page-width" aria-label="Fonctionnement des évaluations">
          <div><span>1</span><p><strong>Une seule réponse</strong> par question.</p></div>
          <div><span>2</span><p><strong>Une note sur 20</strong> à la fin du QCM.</p></div>
          <div><span>3</span><p><strong>Une correction expliquée</strong> pour progresser.</p></div>
        </section>

        <section className="evaluation-index page-width">
          <header>
            <p className="overline">Les 12 QCM</p>
            <h2>Choisir un chapitre et un niveau</h2>
          </header>
          <EvaluationGrid chapters={chapters} />
        </section>
      </main>
      <footer className="site-footer">
        <div><strong>L’Atelier des Maths</strong><span>Évaluations · Première générale</span></div>
        <p>Le meilleur résultat est conservé uniquement sur cet appareil.</p>
      </footer>
    </>
  );
}
