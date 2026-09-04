import Link from 'next/link';
import { chapters } from '@/lib/chapters';

export default function SiteHeader({ currentSlug }: { currentSlug?: string }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="L’Atelier des Maths — accueil">
          <span className="brand__mark" aria-hidden="true">AM</span>
          <span>
            <strong>L’Atelier des Maths</strong>
            <small>Manuel de Première</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link href="/">Sommaire</Link>
          <div className="chapter-menu">
            <span>Chapitres</span>
            <div className="chapter-menu__panel">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/${chapter.slug}`}
                  aria-current={currentSlug === chapter.slug ? 'page' : undefined}
                >
                  <span>{chapter.number}</span> {chapter.title}
                </Link>
              ))}
            </div>
          </div>
          <a href={currentSlug ? `/${currentSlug}#exercices` : '/#mode-emploi'}>S’entraîner</a>
          <Link href="/evaluations">Évaluations</Link>
          <Link className="nav-exam" href="/epreuve-anticipee">Épreuve anticipée</Link>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Ouvrir le menu"><span></span><span></span><span></span></summary>
          <nav aria-label="Navigation mobile">
            <Link href="/">Sommaire</Link>
            {chapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/${chapter.slug}`}
                aria-current={currentSlug === chapter.slug ? 'page' : undefined}
              >
                Chapitre {chapter.number} · {chapter.title}
              </Link>
            ))}
            <Link href="/evaluations">Évaluations · 2 niveaux</Link>
            <Link href="/epreuve-anticipee">Préparer l’épreuve anticipée</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
