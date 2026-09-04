import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found">
        <p className="overline">Erreur 404</p>
        <h1>Cette page n’est pas dans le manuel.</h1>
        <p>Le chapitre demandé a peut-être changé d’adresse.</p>
        <Link className="button button--ink" href="/">Revenir au sommaire</Link>
      </main>
    </>
  );
}
