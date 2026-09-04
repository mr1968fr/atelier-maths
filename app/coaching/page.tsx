import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import CoachingForm from '@/components/CoachingForm';

export const metadata: Metadata = {
  title: 'Cours et coaching en mathématiques',
  description: 'Accompagnement en petits groupes pour préparer l’épreuve anticipée de mathématiques en Première.',
};

const tracks = [
  {
    number: '01',
    title: 'Spécialité mathématiques',
    text: 'Approfondir l’algèbre, l’analyse, les probabilités et la géométrie avec des exercices adaptés au sujet de spécialité.',
  },
  {
    number: '02',
    title: 'Mathématiques spécifiques',
    text: 'Consolider les automatismes, les évolutions, les fonctions et l’interprétation des données sans surcharge inutile.',
  },
  {
    number: '03',
    title: 'Voie technologique',
    text: 'Travailler les fonctions, les suites, les statistiques et les probabilités dans des situations concrètes.',
  },
];

const weeks = [
  ['1', 'Diagnostic', 'Identifier les acquis, les automatismes fragiles et les priorités.'],
  ['2', 'Calcul sans calculatrice', 'Fractions, puissances, pourcentages et équations.'],
  ['3', 'Fonctions', 'Images, antécédents, droites et second degré.'],
  ['4', 'Évolutions', 'Suites, coefficients multiplicateurs et recherche de seuil.'],
  ['5', 'Données et hasard', 'Statistiques, tableaux et probabilités conditionnelles.'],
  ['6', 'Parcours ciblé', 'Une séance adaptée au programme réellement suivi.'],
  ['7', 'Sujet blanc', 'Deux heures en conditions proches de l’épreuve.'],
  ['8', 'Correction et bilan', 'Comprendre les erreurs et construire la suite des révisions.'],
];

export default function CoachingPage() {
  return (
    <>
      <SiteHeader />
      <main className="coaching">
        <header className="coaching-hero">
          <div className="page-width coaching-hero__grid">
            <div>
              <p className="overline">Cours en ligne · Première</p>
              <h1>Des maths en petit groupe, avec un objectif clair.</h1>
              <p>
                Huit semaines pour consolider les automatismes, apprendre à rédiger
                et préparer l’épreuve anticipée sans calculatrice.
              </p>
              <div>
                <a className="button button--paper" href="#preinscription">Se préinscrire</a>
                <Link href="/epreuve-anticipee">Découvrir l’épreuve →</Link>
              </div>
            </div>
            <aside>
              <p>Cycle d’accompagnement</p>
              <div><strong>8</strong><span>semaines</span></div>
              <dl>
                <div><dt>Format</dt><dd>Visioconférence</dd></div>
                <div><dt>Groupe</dt><dd>4 à 6 élèves</dd></div>
                <div><dt>Rythme</dt><dd>1 h 30 par semaine</dd></div>
                <div><dt>Public</dt><dd>Première générale et technologique</dd></div>
              </dl>
            </aside>
          </div>
        </header>

        <section className="coaching-proof page-width" aria-label="Principes de l’accompagnement">
          <div><span>01</span><strong>Comprendre</strong><p>Reprendre les notions avec des explications précises et sans jargon inutile.</p></div>
          <div><span>02</span><strong>S’entraîner</strong><p>Installer des automatismes par des exercices courts et réguliers.</p></div>
          <div><span>03</span><strong>Se préparer</strong><p>Apprendre à gérer le temps, rédiger et travailler sans calculatrice.</p></div>
        </section>

        <section className="coaching-method page-width">
          <div>
            <p className="overline">L’accompagnement</p>
            <h2>Un cours ne s’arrête pas à l’heure de visioconférence.</h2>
            <p>Chaque élève reçoit une feuille de route simple sur le manuel numérique. Le travail effectué entre deux séances sert de point de départ au cours suivant.</p>
          </div>
          <ol>
            <li><span>1</span><div><strong>Un diagnostic initial</strong><p>Un QCM et un échange permettent de constituer des groupes cohérents.</p></div></li>
            <li><span>2</span><div><strong>Une séance structurée</strong><p>Automatismes, correction, cours, exercices et plan de travail.</p></div></li>
            <li><span>3</span><div><strong>Un entraînement entre les cours</strong><p>Des QCM et exercices ciblés, directement accessibles sur le site.</p></div></li>
            <li><span>4</span><div><strong>Un bilan concret</strong><p>Un sujet blanc et une synthèse des acquis en fin de cycle.</p></div></li>
          </ol>
        </section>

        <section className="coaching-tracks">
          <div className="page-width">
            <header><p className="overline">Des groupes homogènes</p><h2>Trois programmes, trois parcours.</h2><p>Les élèves sont regroupés selon l’enseignement qu’ils suivent. Les contenus et sujets ne sont pas mélangés.</p></header>
            <div>
              {tracks.map((track) => (
                <article key={track.number}>
                  <span>{track.number}</span>
                  <h3>{track.title}</h3>
                  <p>{track.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="coaching-session page-width">
          <div><p className="overline">Une séance de 1 h 30</p><h2>Un rythme stable, chaque semaine.</h2></div>
          <div className="coaching-session__timeline">
            <div><span>10 min</span><strong>Automatismes</strong></div>
            <div><span>20 min</span><strong>Correction</strong></div>
            <div><span>25 min</span><strong>Cours et méthode</strong></div>
            <div><span>25 min</span><strong>Exercices</strong></div>
            <div><span>10 min</span><strong>Feuille de route</strong></div>
          </div>
        </section>

        <section className="coaching-program">
          <div className="page-width">
            <header><p className="overline">Le cycle pilote</p><h2>Huit semaines pour progresser.</h2></header>
            <div className="coaching-program__list">
              {weeks.map(([number, title, text]) => (
                <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="coaching-offer page-width">
          <div className="coaching-offer__main">
            <p className="overline">Formule de lancement</p>
            <h2>Cycle Première · 8 semaines</h2>
            <ul>
              <li>8 séances de 1 h 30 en visioconférence</li>
              <li>Groupe limité à 6 élèves</li>
              <li>Diagnostic et constitution du groupe</li>
              <li>Accès au manuel et aux QCM</li>
              <li>Sujet blanc et correction</li>
              <li>Bilan individuel de fin de cycle</li>
            </ul>
          </div>
          <aside>
            <span>Tarif</span>
            <strong>Sur demande</strong>
            <p>Le tarif et les dates sont communiqués avant toute confirmation d’inscription.</p>
            <a href="#preinscription">Demander les informations →</a>
          </aside>
        </section>

        <section className="coaching-faq page-width">
          <header><p className="overline">Questions fréquentes</p><h2>Avant de rejoindre un groupe</h2></header>
          <div>
            <details><summary>À qui s’adresse cet accompagnement ?</summary><p>Aux élèves de Première générale ou technologique qui souhaitent consolider leurs acquis et préparer l’épreuve anticipée avec un cadre régulier.</p></details>
            <details><summary>Comment les groupes sont-ils constitués ?</summary><p>Le parcours suivi, le niveau observé au diagnostic et les disponibilités sont pris en compte. Un groupe rassemble de quatre à six élèves aux besoins compatibles.</p></details>
            <details><summary>Faut-il déjà avoir un bon niveau en mathématiques ?</summary><p>Non. Le diagnostic sert justement à distinguer une remise à niveau d’un besoin d’approfondissement. Les groupes ne sont pas constitués uniquement à partir de la moyenne scolaire.</p></details>
            <details><summary>Que faut-il pour suivre les séances ?</summary><p>Une connexion stable, un ordinateur ou une tablette, un micro, des feuilles et de quoi écrire. La calculatrice est mise de côté pendant les entraînements concernés.</p></details>
            <details><summary>Que se passe-t-il en cas d’absence ?</summary><p>Les conditions de report et les ressources disponibles seront précisées dans les modalités d’inscription avant le début du cycle.</p></details>
          </div>
        </section>

        <section className="coaching-form-section" id="preinscription">
          <div className="page-width coaching-form-section__grid">
            <div>
              <p className="overline">Préinscription</p>
              <h2>Recevoir les prochaines dates</h2>
              <p>Précisez le parcours, les besoins et les disponibilités de l’élève. Aucune place ne sera confirmée sans un échange préalable.</p>
              <div className="coaching-form-status"><strong>Préinscriptions ouvertes</strong><span>La demande est sans engagement. Une réponse vous sera adressée par e-mail.</span></div>
            </div>
            <CoachingForm />
          </div>
        </section>
      </main>
      <footer className="site-footer"><div><strong>L’Atelier des Maths</strong><span>Cours en ligne · Première</span></div><nav><Link href="/">Manuel</Link><Link href="/epreuve-anticipee">Épreuve anticipée</Link><a href="#preinscription">Préinscription</a></nav></footer>
    </>
  );
}
