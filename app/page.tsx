import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      <nav className="p-6 bg-white border-b border-emerald-100 flex justify-between items-center shadow-sm">
        <div className="text-xl font-black tracking-tighter text-slate-800 uppercase">
          L&apos;Atelier des Maths
        </div>

        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
          Première · Tronc commun
        </div>
      </nav>

      <header className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
          Les maths de Première, enfin{' '}
          <span className="text-emerald-600 italic">utiles</span>.
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Des modules courts, concrets et interactifs pour comprendre les
          notions utiles en SES, SVT et HGGSP.
        </p>

        <Link
          href="/suites"
          className="inline-block px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl shadow-[0_8px_0_rgb(5,150,105)] hover:bg-emerald-500 hover:translate-y-1 transition-all active:shadow-none active:translate-y-2"
        >
          Démarrer le chapitre : Les suites →
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="text-4xl mb-6">📊</div>
            <h3 className="text-xl font-black mb-3">SES</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Taux d’évolution, inflation, intérêts composés.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="text-4xl mb-6">🧬</div>
            <h3 className="text-xl font-black mb-3">SVT</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Croissance de population, modélisation, seuils.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="text-4xl mb-6">🌍</div>
            <h3 className="text-xl font-black mb-3">HGGSP</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Démographie, données territoriales, interprétation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}