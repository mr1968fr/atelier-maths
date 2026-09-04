import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import { examModules, examTracks } from '@/lib/exam';

export const metadata: Metadata = {
  title: 'Épreuve anticipée de mathématiques',
  description: 'Préparer l’épreuve anticipée de mathématiques de Première : trois parcours, cours ciblés et sujets blancs.',
};

export default function ExamHubPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <header className="exam-hero">
          <div className="page-width exam-hero__grid">
            <div>
              <p className="overline">Première · Épreuve anticipée</p>
              <h1>Deux heures pour montrer ce que tu sais faire.</h1>
              <p>Automatismes, raisonnement et rédaction : prépare chaque partie de l’épreuve avec un parcours adapté au programme réellement suivi en classe.</p>
              <a className="button button--paper" href="#choisir-parcours">Choisir mon parcours</a>
            </div>
            <aside>
              <p>Format officiel</p>
              <dl>
                <div><dt>Durée</dt><dd>2 heures</dd></div>
                <div><dt>Calculatrice</dt><dd>Non autorisée</dd></div>
                <div><dt>Partie 1</dt><dd>QCM · 6 points</dd></div>
                <div><dt>Partie 2</dt><dd>Exercices · 14 points</dd></div>
                <div><dt>Coefficient</dt><dd>2</dd></div>
              </dl>
            </aside>
          </div>
        </header>

        <section className="exam-structure page-width">
          <article><span>01</span><div><p className="overline">Première partie</p><h2>Automatismes</h2><p>Un QCM sans justification pour vérifier les calculs et réflexes fondamentaux.</p></div><strong>6 points</strong></article>
          <article><span>02</span><div><p className="overline">Deuxième partie</p><h2>Raisonnement</h2><p>Deux ou trois exercices indépendants à résoudre et à rédiger avec précision.</p></div><strong>14 points</strong></article>
        </section>

        <section className="track-choice page-width" id="choisir-parcours">
          <header><p className="overline">Trois sujets différents</p><h2>Quel programme suis-tu ?</h2><p>L’épreuve n’est pas identique pour tous les élèves. Choisis le parcours correspondant à ton inscription.</p></header>
          <div className="track-choice__grid">
            {examTracks.map((track) => (
              <article key={track.slug} style={{ '--track-accent': track.accent, '--track-light': track.light } as React.CSSProperties}>
                <span>{track.slug === 'specialite' ? '01' : track.slug === 'specifiques' ? '02' : '03'}</span>
                <h3>{track.label}</h3>
                <p>{track.audience}</p>
                <small>{track.description}</small>
                <Link href={`/epreuve-anticipee/${track.slug}`}>Ouvrir ce parcours →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="exam-modules">
          <div className="page-width">
            <header><p className="overline">Cours transversaux</p><h2>Les notions à sécuriser</h2></header>
            <div className="exam-modules__list">
              {examModules.map((module) => (
                <article key={module.slug}>
                  <span>{module.number}</span>
                  <div><h3>{module.title}</h3><p>{module.subtitle}</p><small>{module.tracks.join(' · ')}</small></div>
                  <Link href={`/epreuve-anticipee/cours/${module.slug}`}>Étudier →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="official-note page-width">
          <div><p className="overline">Références</p><h2>Un parcours aligné sur les textes officiels.</h2></div>
          <div><p>Le format présenté correspond à la définition nationale : une épreuve écrite de deux heures, sans calculatrice, composée d’un QCM sur 6 points et de deux ou trois exercices sur 14 points.</p>
            <nav><a href="https://eduscol.education.gouv.fr/5688/epreuve-anticipee-de-mathematiques-aux-baccalaureats-general-et-technologique">Consulter la page Éduscol ↗</a><a href="https://www.education.gouv.fr/bo/2025/Hebdo24/MENE2515469N">Consulter le Bulletin officiel ↗</a></nav>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div><strong>L’Atelier des Maths</strong><span>Préparation à l’épreuve anticipée</span></div><p>Trois parcours conformes au programme suivi.</p></footer>
    </>
  );
}
