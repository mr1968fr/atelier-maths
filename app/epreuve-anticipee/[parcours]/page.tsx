import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import { examModules, examTracks, getExamTrack } from '@/lib/exam';

export function generateStaticParams() {
  return examTracks.map((track) => ({ parcours: track.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ parcours: string }> }): Promise<Metadata> {
  const { parcours } = await params;
  const track = getExamTrack(parcours);
  return track ? { title: `Épreuve anticipée · ${track.label}`, description: track.description } : {};
}

export default async function TrackPage({ params }: { params: Promise<{ parcours: string }> }) {
  const { parcours } = await params;
  const track = getExamTrack(parcours);
  if (!track) notFound();
  const style = { '--accent': track.accent, '--accent-light': track.light } as React.CSSProperties;

  return (
    <div className="exam-track" style={style}>
      <SiteHeader />
      <main>
        <header className="track-hero">
          <div className="page-width">
            <div className="track-hero__crumb"><Link href="/epreuve-anticipee">Épreuve anticipée</Link><span>/</span><strong>{track.slug}</strong></div>
            <p className="overline">Ton parcours</p>
            <h1>{track.label}</h1>
            <p>{track.audience}. {track.description}</p>
            <div><Link className="button button--accent" href={`/epreuve-anticipee/${track.slug}/sujet-blanc`}>Lancer le sujet blanc</Link><a href="#programme">Voir le programme ↓</a></div>
          </div>
        </header>

        <section className="track-priorities page-width">
          <div><p className="overline">Priorités</p><h2>Ce qui fera la différence</h2></div>
          <ol>{track.priorities.map((priority, index) => <li key={priority}><span>{index + 1}</span>{priority}</li>)}</ol>
        </section>

        <section className="track-program page-width" id="programme">
          <header><p className="overline">Programme à maîtriser</p><h2>Ta feuille de route</h2></header>
          <div>
            {track.program.map((group, index) => (
              <article key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>
            ))}
          </div>
        </section>

        <section className="track-resources">
          <div className="page-width">
            <header><p className="overline">Réviser avant le sujet blanc</p><h2>Trois cours essentiels</h2></header>
            <div>
              {examModules.map((module) => (
                <article key={module.slug}><span>{module.number}</span><h3>{module.title}</h3><p>{module.subtitle}</p><Link href={`/epreuve-anticipee/cours/${module.slug}`}>Ouvrir le cours →</Link></article>
              ))}
            </div>
          </div>
        </section>

        <section className="mock-cta page-width">
          <div><p className="overline">Mise en situation</p><h2>Prêt pour deux heures sans calculatrice ?</h2><p>Le sujet blanc reprend la répartition officielle : automatismes sur 6 points, exercices sur 14 points et autoévaluation guidée.</p></div>
          <Link href={`/epreuve-anticipee/${track.slug}/sujet-blanc`}>Commencer le sujet blanc →</Link>
        </section>
      </main>
      <footer className="site-footer"><div><strong>L’Atelier des Maths</strong><span>{track.label}</span></div></footer>
    </div>
  );
}
