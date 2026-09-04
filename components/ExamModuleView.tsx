import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import type { ExamModule } from '@/lib/exam';

export default function ExamModuleView({ module }: { module: ExamModule }) {
  return (
    <>
      <SiteHeader />
      <main className="exam-course">
        <header className="exam-course__hero">
          <div className="page-width">
            <div className="exam-course__crumb"><Link href="/epreuve-anticipee">Épreuve anticipée</Link><span>/</span><strong>Cours {module.number}</strong></div>
            <p className="overline">Cours transversal · {module.duration}</p>
            <h1><span>{module.number}</span>{module.title}</h1>
            <p>{module.subtitle}</p>
            <div className="exam-course__tracks">{module.tracks.map((track) => <span key={track}>{track}</span>)}</div>
          </div>
        </header>

        <section className="exam-course__intro page-width">
          <div><p className="overline">Pourquoi ce cours ?</p><h2>Une base pour réussir sans calculatrice.</h2></div>
          <div><p>{module.intro}</p><ul>{module.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></div>
        </section>

        <div className="exam-course__layout page-width">
          <aside>
            <p>Sommaire</p>
            <ol>{module.sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`}><span>{index + 1}</span>{section.title}</a></li>)}</ol>
            <Link href="/epreuve-anticipee">Retour aux parcours</Link>
          </aside>
          <div>
            {module.sections.map((section, index) => (
              <article className="exam-course__section" id={`section-${index + 1}`} key={section.title}>
                <header><span>{String(index + 1).padStart(2, '0')}</span><div><p>Notion essentielle</p><h2>{section.title}</h2></div></header>
                <p className="exam-course__lead">{section.lead}</p>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.formulas && <div className="exam-course__formulas"><strong>À connaître</strong>{section.formulas.map((formula) => <code key={formula}>{formula}</code>)}</div>}
                {section.method && <div className="exam-course__method"><strong>Méthode</strong><ol>{section.method.map((step) => <li key={step}>{step}</li>)}</ol></div>}
                {section.example && <div className="exam-course__example"><strong>Exemple résolu</strong><p>{section.example.statement}</p><div>{section.example.solution}</div></div>}
                {section.warning && <p className="exam-course__warning"><strong>Attention.</strong> {section.warning}</p>}
              </article>
            ))}
            <section className="exam-course__end"><p className="overline">Étape suivante</p><h2>Mettre le cours à l’épreuve</h2><p>Choisis ton parcours pour accéder au sujet blanc correspondant à ton programme.</p><Link href="/epreuve-anticipee">Choisir mon parcours →</Link></section>
          </div>
        </div>
      </main>
      <footer className="site-footer"><div><strong>L’Atelier des Maths</strong><span>{module.title}</span></div></footer>
    </>
  );
}
