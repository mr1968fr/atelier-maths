```tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <nav className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
              Σ
            </div>

            <div>
              <div className="font-black tracking-tight text-slate-800">
                L'Atelier des Maths
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Première · Tronc commun
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Ton niveau
              </div>
              <div className="font-black text-emerald-600">
                Niveau 2 · 420 XP
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-emerald-200 flex items-center justify-center font-black text-emerald-700">
              2
            </div>
          </div>
        </div>
      </nav>


      {/* =====================================================
          ACCUEIL
      ===================================================== */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* INTRODUCTION */}
        <section className="mb-10">
          <div className="text-sm font-bold text-emerald-600 mb-2">
            TON PARCOURS DE MATHÉMATIQUES
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            Prêt à continuer ?
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl">
            Avance à ton rythme, relève les défis et construis progressivement
            les compétences dont tu as besoin.
          </p>
        </section>


        {/* =====================================================
            MISSION PRINCIPALE
        ===================================================== */}
        <section className="mb-12">

          <div className="bg-slate-900 rounded-[2.5rem] p-7 md:p-10 text-white shadow-xl">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-black uppercase tracking-widest mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Mission en cours
                </div>

                <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Chapitre 01
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-3">
                  Les Suites
                </h2>

                <p className="text-slate-300 max-w-xl">
                  Comprendre les suites arithmétiques et géométriques,
                  calculer un terme et résoudre des problèmes de seuil.
                </p>
              </div>

              <div className="md:text-right">
                <div className="text-4xl font-black text-emerald-400">
                  70%
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  progression
                </div>
              </div>

            </div>


            {/* BARRE DE PROGRESSION */}
            <div className="mt-8">

              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-400">
                  Progression de la mission
                </span>
                <span className="text-emerald-300">
                  420 / 600 XP
                </span>
              </div>

              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: '70%' }}
                />
              </div>

            </div>


            {/* ACTION */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Link
                href="/suites"
                className="inline-flex items-center justify-center px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-black transition-all shadow-[0_5px_0_rgb(4,120,87)] hover:translate-y-1 hover:shadow-[0_3px_0_rgb(4,120,87)]"
              >
                Reprendre ma mission →
              </Link>

              <div className="flex items-center px-5 py-4 rounded-xl bg-white/5 text-sm text-slate-400">
                Dernière activité : Mission 1.3
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PARCOURS
        ===================================================== */}
        <section className="mb-12">

          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-2">
                Ton parcours
              </div>

              <h2 className="text-2xl font-black">
                Les chapitres
              </h2>
            </div>
          </div>


          <div className="grid md:grid-cols-3 gap-5">

            {/* CHAPITRE 1 */}
            <Link
              href="/suites"
              className="group bg-white rounded-3xl border-2 border-emerald-200 p-6 shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all"
            >

              <div className="flex justify-between items-start mb-5">

                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center font-black text-emerald-700">
                  01
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider">
                  En cours
                </span>

              </div>

              <h3 className="text-xl font-black mb-2 group-hover:text-emerald-600 transition-colors">
                Les Suites
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Suites arithmétiques, géométriques et recherche de seuil.
              </p>

              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">
                  70 %
                </span>

                <span className="text-emerald-600">
                  Continuer →
                </span>
              </div>

              <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-emerald-500 rounded-full" />
              </div>

            </Link>


            {/* CHAPITRE 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 opacity-70">

              <div className="flex justify-between items-start mb-5">

                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center font-black text-slate-400">
                  02
                </div>

                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-wider">
                  À venir
                </span>

              </div>

              <h3 className="text-xl font-black text-slate-500 mb-2">
                Statistiques
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Moyenne, dispersion, écart-type et représentation des données.
              </p>

            </div>


            {/* CHAPITRE 3 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 opacity-70">

              <div className="flex justify-between items-start mb-5">

                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center font-black text-slate-400">
                  03
                </div>

                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-wider">
                  À venir
                </span>

              </div>

              <h3 className="text-xl font-black text-slate-500 mb-2">
                Probabilités
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Arbres pondérés, probabilités conditionnelles et événements.
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            DÉFIS / XP
        ===================================================== */}
        <section className="mb-12">

          <div className="mb-6">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-2">
              Progression
            </div>

            <h2 className="text-2xl font-black">
              Tes prochains défis
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-5">

            {/* MINI LAB */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6">

              <div className="text-2xl mb-4">⚡</div>

              <h3 className="font-black text-lg mb-2">
                Mini-Lab
              </h3>

              <p className="text-sm text-slate-500 mb-5">
                Résous un petit problème et gagne des XP bonus.
              </p>

              <div className="text-emerald-600 font-black text-sm">
                +50 XP
              </div>

            </div>


            {/* DÉFI */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6">

              <div className="text-2xl mb-4">🧠</div>

              <h3 className="font-black text-lg mb-2">
                Défi du jour
              </h3>

              <p className="text-sm text-slate-500 mb-5">
                Une question rapide pour tester ta compréhension.
              </p>

              <div className="text-emerald-600 font-black text-sm">
                +100 XP
              </div>

            </div>


            {/* NIVEAU */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6">

              <div className="text-2xl mb-4">🏆</div>

              <h3 className="font-black text-lg mb-2">
                Prochain niveau
              </h3>

              <p className="text-sm text-slate-500 mb-5">
                Encore 80 XP pour atteindre le niveau 3.
              </p>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-emerald-500 rounded-full" />
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            CONSEIL
        ===================================================== */}
        <section className="bg-emerald-50 border border-emerald-100 rounded-3xl p-7 md:p-8">

          <div className="flex gap-5 items-start">

            <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black">
              ?
            </div>

            <div>

              <div className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">
                Conseil
              </div>

              <h2 className="text-xl font-black mb-2">
                Ne cherche pas à tout faire d'un coup.
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Termine une mission, vérifie que tu as compris et passe
                ensuite à la suivante. Les XP récompensent surtout ta
                progression et tes efforts.
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-slate-200 mt-10">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-400">

          <div>
            © L'Atelier des Maths
          </div>

          <div className="flex gap-6">
            <span>Première · Tronc commun</span>
            <span>Parcours interactif</span>
          </div>

        </div>

      </footer>

    </div>
  );
}
```
