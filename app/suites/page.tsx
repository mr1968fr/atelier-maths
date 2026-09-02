import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* NAVIGATION */}
      <nav className="p-6 bg-white border-b border-emerald-100 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black italic">Σ</div>
          <div className="text-xl font-black tracking-tighter text-slate-800 uppercase">L'Atelier des Maths</div>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
          Première · Tronc Commun
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
          Les Maths de Première, enfin <span className="text-emerald-600 italic">utiles</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Des modules interactifs conçus pour réussir vos spécialités <span className="font-bold text-slate-800 underline decoration-emerald-400">SES</span>, <span className="font-bold text-slate-800 underline decoration-emerald-400">SVT</span> et <span className="font-bold text-slate-800 underline decoration-emerald-400">HGGSP</span> grâce aux mathématiques.
        </p>
        
        <Link href="/suites" className="inline-block px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl shadow-[0_8px_0_rgb(5,150,105)] hover:bg-emerald-500 hover:translate-y-1 transition-all active:shadow-none active:translate-y-2">
          Démarrer le Chapitre 1 : Les Suites →
        </Link>
      </header>

      {/* GRILLE DES CHAPITRES */}
      <main id="chapitres" className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-10 text-center">Programme Officiel</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CHAPITRE 1 */}
          <Link href="/suites" className="group p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all">
             <div className="text-emerald-600 font-black text-sm mb-2 uppercase tracking-widest">Chapitre 01</div>
             <h3 className="text-2xl font-black mb-4 text-slate-800 group-hover:text-emerald-600 transition-colors">Les Suites</h3>
             <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">Arithmétiques, géométriques et recherche de seuil. Applications : épargne, bio, démo.</p>
             <div className="text-emerald-600 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Commencer →</div>
          </Link>

          {/* CHAPITRE 2 (À venir) */}
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 opacity-60">
             <div className="text-slate-400 font-black text-sm mb-2 uppercase tracking-widest text-left">Chapitre 02</div>
             <h3 className="text-2xl font-black mb-4 text-slate-400 text-left">Statistiques</h3>
             <p className="text-slate-400 font-medium text-sm leading-relaxed text-left">Moyenne, écart-type et boîtes à moustaches. (Bientôt disponible)</p>
          </div>

          {/* CHAPITRE 3 (À venir) */}
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 opacity-60">
             <div className="text-slate-400 font-black text-sm mb-2 uppercase tracking-widest text-left">Chapitre 03</div>
             <h3 className="text-2xl font-black mb-4 text-slate-400 text-left">Probabilités</h3>
             <p className="text-slate-400 font-medium text-sm leading-relaxed text-left">Arbres pondérés et conditionnelles. (Bientôt disponible)</p>
          </div>
        </div>

        {/* BANDEAU PROF */}
        <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-white text-center">
          <h2 className="text-3xl font-black mb-4 uppercase italic tracking-tight">Espace Enseignant</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Inscrivez votre établissement pour accéder aux outils de suivi de classe et exporter les notes vers Pronote.</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest">
            En développement · Octobre 2026
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] border-t border-slate-100">
        © L'Atelier des Maths · Mathématiques Première Tronc Commun
      </footer>
    </div>
  );
}