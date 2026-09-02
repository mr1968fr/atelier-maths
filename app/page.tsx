import Link from 'next/link';

const chapters = [
  {
    number: '01',
    title: 'Les suites',
    subtitle: 'Modéliser une évolution',
    color: '#C65D3A',
    light: '#F7E9E3',
    href: '/suites',
    available: true,
  },
  {
    number: '02',
    title: 'Dérivation',
    subtitle: 'Mesurer comment ça change',
    color: '#3976A8',
    light: '#EAF2F8',
    href: '/derivation',
    available: false,
  },
  {
    number: '03',
    title: 'Exponentielle',
    subtitle: 'Comprendre les croissances',
    color: '#7957A8',
    light: '#F1ECF7',
    href: '/exponentielle',
    available: false,
  },
  {
    number: '04',
    title: 'Probabilités',
    subtitle: 'Décider dans l’incertitude',
    color: '#4D8A68',
    light: '#EAF4EE',
    href: '/probabilites',
    available: false,
  },
  {
    number: '05',
    title: 'Statistiques',
    subtitle: 'Lire et interpréter les données',
    color: '#277B86',
    light: '#E8F4F5',
    href: '/statistiques',
    available: false,
  },
  {
    number: '06',
    title: 'Algorithmique',
    subtitle: 'Faire parler les données',
    color: '#B08328',
    light: '#F8F1DF',
    href: '/algorithmique',
    available: false,
  },
];

const specialties = [
  {
    name: 'SES',
    title: 'Économie & société',
    text: 'Salaires, prix, inflation, croissance et décisions.',
    color: '#3976A8',
    light: '#EAF2F8',
  },
  {
    name: 'SVT',
    title: 'Le vivant',
    text: 'Populations, croissance, évolution et modèles.',
    color: '#4D8A68',
    light: '#EAF4EE',
  },
  {
    name: 'HGGSP',
    title: 'Monde contemporain',
    text: 'Démographie, territoires et données historiques.',
    color: '#7957A8',
    light: '#F1ECF7',
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#FAF8F5',
        color: '#262626',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >

      {/* NAVIGATION */}

      <nav
        style={{
          height: 72,
          padding: '0 5vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #E5DED6',
          background: '#FAF8F5',
        }}
      >
        <Link
          href="/"
          style={{
            color: '#262626',
            textDecoration: 'none',
            fontSize: 19,
            fontWeight: 700,
          }}
        >
          L’Atelier des Maths
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 25,
            fontFamily: 'Arial, sans-serif',
            fontSize: 13,
          }}
        >
          <a
            href="#parcours"
            style={{ color: '#555', textDecoration: 'none' }}
          >
            Parcours
          </a>

          <a
            href="#specialites"
            style={{ color: '#555', textDecoration: 'none' }}
          >
            Autres spécialités
          </a>

          <Link
            href="/suites"
            style={{
              background: '#C65D3A',
              color: '#fff',
              padding: '10px 17px',
              borderRadius: 7,
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            Commencer
          </Link>
        </div>
      </nav>

      {/* HERO */}

      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '80px 5vw',
          display: 'grid',
          gridTemplateColumns: '1.3fr 0.7fr',
          gap: 60,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              color: '#C65D3A',
              fontFamily: 'Arial, sans-serif',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Mathématiques · Première
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(48px, 7vw, 80px)',
              lineHeight: 0.98,
              letterSpacing: '-0.05em',
            }}
          >
            Les maths dont
            <br />
            <span style={{ color: '#C65D3A' }}>
              tu as besoin.
            </span>
          </h1>

          <p
            style={{
              maxWidth: 650,
              margin: '28px 0 34px',
              color: '#625E59',
              fontSize: 20,
              lineHeight: 1.55,
            }}
          >
            Comprendre les notions essentielles, les utiliser dans
            des situations concrètes et progresser à ton rythme.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/suites"
              style={{
                background: '#C65D3A',
                color: '#fff',
                padding: '14px 21px',
                borderRadius: 7,
                textDecoration: 'none',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Commencer le chapitre 1 →
            </Link>

            <a
              href="#parcours"
              style={{
                background: '#fff',
                color: '#444',
                padding: '14px 21px',
                borderRadius: 7,
                border: '1px solid #CEC6BD',
                textDecoration: 'none',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Voir le parcours
            </a>
          </div>
        </div>

        <div
          style={{
            minHeight: 300,
            padding: 34,
            borderRadius: 18,
            background: '#F7E9E3',
            border: '1px solid #ECD5CC',
          }}
        >
          <div
            style={{
              color: '#9A452C',
              fontFamily: 'Arial, sans-serif',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.15em',
              marginBottom: 22,
            }}
          >
            TON MANUEL NUMÉRIQUE
          </div>

          <div
            style={{
              fontSize: 31,
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Comprendre.
            <br />
            S’entraîner.
            <br />
            Utiliser.
          </div>

          <div
            style={{
              marginTop: 80,
              color: '#8B4C3A',
              fontFamily: 'Arial, sans-serif',
              fontSize: 12,
              lineHeight: 1.5,
            }}
          >
            Maths × réel
            <br />
            Maths × spécialités
          </div>
        </div>
      </section>

      {/* POURQUOI */}

      <section
        style={{
          padding: '50px 5vw',
          background: '#262626',
          color: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '0.7fr 1.3fr',
            gap: 60,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              color: '#D9A08E',
              fontFamily: 'Arial, sans-serif',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Pourquoi ces maths ?
          </div>

          <p
            style={{
              margin: 0,
              color: '#F0ECE8',
              fontSize: 21,
              lineHeight: 1.55,
            }}
          >
            Parce qu’une formule devient beaucoup plus intéressante
            quand on comprend{' '}
            <strong>ce qu’elle permet de faire</strong>.
            Chaque notion est reliée à une situation, une autre
            spécialité ou un problème à résoudre.
          </p>
        </div>
      </section>

      {/* PARCOURS */}

      <section
        id="parcours"
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '80px 5vw',
        }}
      >
        <div
          style={{
            marginBottom: 42,
          }}
        >
          <div
            style={{
              color: '#777',
              fontFamily: 'Arial, sans-serif',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Le parcours
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 40,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            Six chapitres.
            <br />
            Un fil conducteur.
          </h2>

          <p
            style={{
              maxWidth: 620,
              color: '#666',
              fontSize: 17,
              lineHeight: 1.6,
              marginTop: 18,
            }}
          >
            Comprendre une notion, la pratiquer, puis la mobiliser
            dans une situation qui a du sens.
          </p>
        </div>

        <div>
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              style={{
                display: 'grid',
                gridTemplateColumns: '65px 1fr auto',
                gap: 20,
                alignItems: 'center',
                padding: '21px 0',
                borderTop: '1px solid #E0D9D1',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 9,
                  background: chapter.light,
                  color: chapter.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                {chapter.number}
              </div>

              <div>
                <h3
                  style={{
                    margin: '0 0 5px',
                    fontSize: 21,
                  }}
                >
                  {chapter.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: '#777',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 13,
                  }}
                >
                  {chapter.subtitle}
                </p>
              </div>

              {chapter.available ? (
                <Link
                  href={chapter.href}
                  style={{
                    color: chapter.color,
                    textDecoration: 'none',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  Ouvrir →
                </Link>
              ) : (
                <span
                  style={{
                    color: '#999',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  À venir
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SPÉCIALITÉS */}

      <section
        id="specialites"
        style={{
          padding: '75px 5vw 85px',
          background: '#F0ECE7',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              color: '#777',
              fontFamily: 'Arial, sans-serif',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Maths × autres spécialités
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 40,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            Les maths ne vivent pas
            <br />
            toutes seules.
          </h2>

          <p
            style={{
              maxWidth: 650,
              color: '#666',
              fontSize: 17,
              lineHeight: 1.6,
              margin: '18px 0 40px',
            }}
          >
            Les situations proposées reprennent des questions que
            tu peux rencontrer en SES, en SVT ou en HGGSP.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 18,
            }}
          >
            {specialties.map((specialty) => (
              <div
                key={specialty.name}
                style={{
                  minHeight: 190,
                  padding: 27,
                  background: '#fff',
                  borderTop: `4px solid ${specialty.color}`,
                  borderRadius: 11,
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    padding: '7px 11px',
                    marginBottom: 18,
                    borderRadius: 6,
                    background: specialty.light,
                    color: specialty.color,
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  {specialty.name}
                </div>

                <h3
                  style={{
                    margin: '0 0 10px',
                    fontSize: 20,
                  }}
                >
                  {specialty.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: '#666',
                    fontSize: 15,
                    lineHeight: 1.55,
                  }}
                >
                  {specialty.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}

      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '80px 5vw',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 45,
        }}
      >
        <div>
          <div
            style={{
              color: '#C65D3A',
              fontFamily: 'Arial, sans-serif',
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            01
          </div>

          <h3 style={{ fontSize: 25, margin: '12px 0 10px' }}>
            Comprendre
          </h3>

          <p
            style={{
              margin: 0,
              color: '#666',
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            Une notion expliquée clairement, avec un exemple
            et l’essentiel à retenir.
          </p>
        </div>

        <div>
          <div
            style={{
              color: '#C65D3A',
              fontFamily: 'Arial, sans-serif',
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            02
          </div>

          <h3 style={{ fontSize: 25, margin: '12px 0 10px' }}>
            S’entraîner
          </h3>

          <p
            style={{
              margin: 0,
              color: '#666',
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            Des exercices courts et des Mini-Labs pour vérifier
            que tu sais réellement utiliser la notion.
          </p>
        </div>

        <div>
          <div
            style={{
              color: '#C65D3A',
              fontFamily: 'Arial, sans-serif',
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            03
          </div>

          <h3 style={{ fontSize: 25, margin: '12px 0 10px' }}>
            Utiliser
          </h3>

          <p
            style={{
              margin: 0,
              color: '#666',
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            Une mission inspirée d’un problème de SES, SVT
            ou HGGSP, avec un livrable concret.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}

      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto 60px',
          padding: '50px 6vw',
          background: '#C65D3A',
          color: '#fff',
          borderRadius: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 30,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              opacity: 0.8,
              marginBottom: 13,
            }}
          >
            Chapitre 01 · Disponible maintenant
          </div>

          <h2
            style={{
              margin: 0,
              color: '#fff',
              fontSize: 37,
              lineHeight: 1.1,
            }}
          >
            Prêt à commencer
            <br />
            avec les suites ?
          </h2>
        </div>

        <Link
          href="/suites"
          style={{
            background: '#fff',
            color: '#C65D3A',
            padding: '15px 23px',
            borderRadius: 7,
            textDecoration: 'none',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 800,
            fontSize: 14,
            whiteSpace: 'nowrap',
          }}
        >
          Ouvrir le chapitre →
        </Link>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          padding: '28px 5vw 40px',
          borderTop: '1px solid #E2DBD3',
          textAlign: 'center',
          color: '#888',
          fontFamily: 'Arial, sans-serif',
          fontSize: 12,
        }}
      >
        L’Atelier des Maths · Première
      </footer>

    </main>
  );
}