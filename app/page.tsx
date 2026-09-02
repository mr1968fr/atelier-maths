import Link from "next/link";

const disciplines = [
  {
    tag: "SES",
    title: "Comprendre l'économie",
    description:
      "Taux d'évolution, inflation, intérêts composés : les maths derrière les phénomènes économiques.",
    examples: ["Évolutions", "Pourcentages", "Intérêts"],
  },
  {
    tag: "SVT",
    title: "Modéliser le vivant",
    description:
      "Croissance d'une population, évolution d'un phénomène, seuils : les maths pour comprendre le vivant.",
    examples: ["Suites", "Modélisation", "Évolution"],
  },
  {
    tag: "HGGSP",
    title: "Lire le monde",
    description:
      "Démographie, données territoriales et indicateurs pour mieux interpréter les phénomènes géographiques.",
    examples: ["Données", "Indicateurs", "Interprétation"],
  },
];

const chapters = [
  {
    number: "01",
    title: "Les suites",
    description:
      "Comprendre comment une quantité évolue au fil du temps.",
    status: "Disponible",
    href: "/suites",
    active: true,
  },
  {
    number: "02",
    title: "Les statistiques",
    description:
      "Lire, résumer et interpréter des données.",
    status: "Bientôt disponible",
    href: "#",
    active: false,
  },
  {
    number: "03",
    title: "Les probabilités",
    description:
      "Modéliser l'incertitude et prendre des décisions.",
    status: "Bientôt disponible",
    href: "#",
    active: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-xl font-bold text-white">
              Σ
            </div>

            <div>
              <div className="font-bold tracking-tight">
                L'Atelier des Maths
              </div>
              <div className="text-xs text-slate-500">
                Première · Tronc commun
              </div>
            </div>
          </Link>

          <div className="hidden text-sm text-slate-500 sm:block">
            Des maths pour comprendre le monde
          </div>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-14">

          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
              Première · Tronc commun
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Les maths dont tu as besoin.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Des modules courts, concrets et interactifs pour comprendre
              les notions de mathématiques utiles en SES, SVT et HGGSP.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/suites"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
              >
                Commencer le parcours
                <span className="ml-2">→</span>
              </Link>

              <a
                href="#applications"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Voir à quoi ça sert
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          POINT DE DÉPART
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-10">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Ton parcours
              </div>

              <h2 className="mt-1 text-2xl font-bold">
                Chapitre 1 · Les suites
              </h2>

              <p className="mt-2 text-slate-600">
                Commence par comprendre comment une quantité évolue
                au fil du temps.
              </p>
            </div>

            <Link
              href="/suites"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Démarrer
              <span className="ml-2">→</span>
            </Link>

          </div>

          {/* Parcours visuel */}
          <div className="mt-7">

            <div className="flex items-center gap-2">

              <div className="h-2 flex-1 rounded-full bg-slate-900" />

              <div className="h-2 flex-1 rounded-full bg-slate-200" />

              <div className="h-2 flex-1 rounded-full bg-slate-200" />

            </div>

            <div className="mt-2 flex justify-between text-xs text-slate-400">
              <span>01 · Suites</span>
              <span>02 · Statistiques</span>
              <span>03 · Probabilités</span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          POURQUOI CES MATHS ?
      ========================================================= */}
      <section
        id="applications"
        className="mx-auto max-w-6xl px-6 py-14"
      >

        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Les mathématiques dans les autres matières
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Des maths pour comprendre des situations réelles.
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Ici, on ne commence pas par une formule. On part d'un problème,
            d'une donnée ou d'une situation que tu peux rencontrer ailleurs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {disciplines.map((discipline) => (
            <Link
              key={discipline.tag}
              href="/suites"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >

              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700">
                  {discipline.tag}
                </span>

                <span className="text-slate-400 transition group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {discipline.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {discipline.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {discipline.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500"
                  >
                    {example}
                  </span>
                ))}
              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* =========================================================
          PARCOURS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-6xl px-6 py-14">

          <div className="mb-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Le parcours
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Trois chapitres pour construire tes bases.
            </h2>
          </div>

          <div className="space-y-4">

            {chapters.map((chapter) => {

              const content = (
                <>
                  <div className="flex items-start gap-5">

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold ${
                        chapter.active
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {chapter.number}
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

                        <h3 className="text-lg font-bold">
                          {chapter.title}
                        </h3>

                        <span
                          className={`text-sm ${
                            chapter.active
                              ? "font-medium text-slate-700"
                              : "text-slate-400"
                          }`}
                        >
                          {chapter.status}
                        </span>

                      </div>

                      <p className="mt-1 text-sm text-slate-600">
                        {chapter.description}
                      </p>

                    </div>

                    {chapter.active && (
                      <div className="hidden text-xl text-slate-400 sm:block">
                        →
                      </div>
                    )}

                  </div>
                </>
              );

              if (chapter.active) {
                return (
                  <Link
                    key={chapter.number}
                    href={chapter.href}
                    className="block rounded-2xl border-2 border-slate-900 bg-slate-50 p-5 transition hover:bg-slate-100"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={chapter.number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 opacity-75"
                >
                  {content}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          MÉTHODE
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-14">

        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Comment ça marche ?
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Comprendre · S'entraîner · Valider
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-2xl font-bold">01</div>
            <h3 className="mt-4 font-bold">Comprendre</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Une situation concrète pour donner du sens à la notion.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-2xl font-bold">02</div>
            <h3 className="mt-4 font-bold">S'entraîner</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Des exercices courts et interactifs pour progresser
              étape par étape.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-2xl font-bold">03</div>
            <h3 className="mt-4 font-bold">Valider</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Une mission finale pour vérifier que tu sais réutiliser
              ce que tu as appris.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <div>
            © 2026 · L'Atelier des Maths
          </div>

          <div className="text-slate-400">
            Première · Tronc commun
          </div>

        </div>

      </footer>

    </main>
  );
}