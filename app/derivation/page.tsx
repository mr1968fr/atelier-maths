import Link from 'next/link';

const ACCENT = '#3976A8';
const ACCENT_LIGHT = '#EAF2F8';
const DARK = '#17212B';
const MUTED = '#68737D';
const BORDER = '#D9E1E7';
const PAPER = '#FFFFFF';
const BG = '#F7F8F9';

const sections = [
  {
    number: '01',
    title: 'Comprendre la dérivée',
    text: 'La dérivée mesure la façon dont une grandeur évolue lorsque la variable change.',
  },
  {
    number: '02',
    title: 'Calculer une dérivée',
    text: 'Retrouver les dérivées usuelles et appliquer les règles de calcul.',
  },
  {
    number: '03',
    title: 'Lire une courbe',
    text: 'Relier le signe de la dérivée aux variations d’une fonction.',
  },
  {
    number: '04',
    title: 'Optimiser',
    text: 'Utiliser les dérivées pour rechercher un maximum ou un minimum.',
  },
];

const derivatives = [
  ['f(x) = x²', "f'(x) = 2x"],
  ['f(x) = x³', "f'(x) = 3x²"],
  ['f(x) = ax + b', "f'(x) = a"],
  ['f(x) = eˣ', "f'(x) = eˣ"],
  ['f(x) = ln(x)', "f'(x) = 1/x"],
];

const missions = [
  {
    level: 'NIVEAU 1',
    title: 'Lire une courbe',
    text: 'À partir d’une représentation graphique, déterminer où une fonction augmente ou diminue.',
    deliverable: 'Tableau de variations complété',
  },
  {
    level: 'NIVEAU 2',
    title: 'Optimiser un coût',
    text: 'Modéliser un coût par une fonction puis déterminer la quantité qui minimise ce coût.',
    deliverable: 'Résolution complète + interprétation',
  },
  {
    level: 'NIVEAU 3',
    title: 'Optimiser un réseau',
    text: 'Étudier une fonction représentant le temps de réponse d’un système informatique.',
    deliverable: 'Modèle + étude de la dérivée + conclusion',
  },
];

export default function DerivationPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: BG,
        color: DARK,
        fontFamily:
          'Georgia, "Times New Roman", serif',
      }}
    >
      {/* NAVIGATION */}
      <nav
        style={{
          height: 72,
          background: PAPER,
          borderBottom: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 6vw',
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            color: DARK,
            fontWeight: 800,
            fontSize: 18,
          }}
        >
          L’Atelier des Maths
        </Link>

        <div
          style={{
            display: 'flex',
            gap: 28,
            alignItems: 'center',
            fontSize: 14,
          }}
        >
          <Link
            href="/"
            style={{
              color: MUTED,
              textDecoration: 'none',
            }}
          >
            Accueil
          </Link>

          <Link
            href="/suites"
            style={{
              color: MUTED,
              textDecoration: 'none',
            }}
          >
            Chapitre 1
          </Link>

          <span
            style={{
              color: ACCENT,
              fontWeight: 800,
            }}
          >
            Chapitre 2
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          background: PAPER,
          borderBottom: `1px solid ${BORDER}`,
          padding: '72px 6vw 64px',
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
              display: 'inline-block',
              padding: '8px 14px',
              borderRadius: 999,
              background: ACCENT_LIGHT,
              color: ACCENT,
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              marginBottom: 24,
            }}
          >
            CHAPITRE 02 · DÉRIVATION
          </div>

          <h1
            style={{
              fontSize: 'clamp(44px, 7vw, 82px)',
              lineHeight: 0.98,
              margin: 0,
              maxWidth: 850,
              letterSpacing: -2,
            }}
          >
            Comprendre comment
            <br />
            <span style={{ color: ACCENT }}>les choses évoluent.</span>
          </h1>

          <p
            style={{
              maxWidth: 720,
              fontSize: 21,
              lineHeight: 1.65,
              color: MUTED,
              marginTop: 30,
              marginBottom: 0,
            }}
          >
            La dérivée n’est pas seulement une technique de calcul.
            Elle permet de mesurer une évolution, de comprendre une
            courbe et de rechercher un optimum.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        style={{
          padding: '54px 6vw',
          background: DARK,
          color: PAPER,
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.3fr 0.7fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                fontSize: 11,
                fontWeight: 800,
                opacity: 0.65,
                marginBottom: 16,
              }}
            >
              L’idée essentielle
            </div>

            <h2
              style={{
                fontSize: 34,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Une dérivée répond à une question simple :
              <br />
              <span style={{ color: '#B9D9EF' }}>
                « À quelle vitesse cela change ? »
              </span>
            </h2>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                opacity: 0.78,
                maxWidth: 700,
                marginTop: 22,
              }}
            >
              Une température qui augmente, un véhicule qui accélère,
              le nombre de visiteurs d’un site qui progresse ou le coût
              d’un serveur qui varie : dans tous ces cas, on s’intéresse
              à une évolution.
            </p>
          </div>

          <div
            style={{
              background: '#24323E',
              borderRadius: 20,
              padding: 30,
              border: '1px solid rgba(255,255,255,.12)',
            }}
          >
            <div
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 12,
                fontWeight: 800,
                color: '#B9D9EF',
                marginBottom: 18,
              }}
            >
              À RETENIR
            </div>

            <div
              style={{
                fontSize: 25,
                lineHeight: 1.45,
              }}
            >
              dérivée
              <br />
              → pente
              <br />
              → évolution
              <br />
              → optimisation
            </div>
          </div>
        </div>
      </section>

      {/* SOMMAIRE */}
      <section
        style={{
          padding: '70px 6vw 40px',
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
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              color: ACCENT,
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Le parcours
          </div>

          <h2
            style={{
              fontSize: 40,
              margin: 0,
            }}
          >
            Quatre étapes pour maîtriser la dérivation.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 18,
              marginTop: 36,
            }}
          >
            {sections.map((section) => (
              <div
                key={section.number}
                style={{
                  background: PAPER,
                  border: `1px solid ${BORDER}`,
                  borderTop: `5px solid ${ACCENT}`,
                  borderRadius: 16,
                  padding: 24,
                  minHeight: 190,
                  boxShadow: '0 8px 24px rgba(20,35,50,.05)',
                }}
              >
                <div
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    color: ACCENT,
                    fontSize: 12,
                    fontWeight: 900,
                    marginBottom: 22,
                  }}
                >
                  {section.number}
                </div>

                <h3
                  style={{
                    fontSize: 21,
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {section.title}
                </h3>

                <p
                  style={{
                    color: MUTED,
                    lineHeight: 1.55,
                    fontSize: 14,
                    marginBottom: 0,
                  }}
                >
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section
        style={{
          padding: '35px 6vw 70px',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            background: ACCENT_LIGHT,
            borderRadius: 22,
            padding: '38px 42px',
            display: 'grid',
            gridTemplateColumns: '0.28fr 1fr',
            gap: 36,
            alignItems: 'start',
          }}
        >
          <div
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: 12,
              fontWeight: 900,
              color: ACCENT,
              letterSpacing: 1.3,
              textTransform: 'uppercase',
            }}
          >
            Petite histoire
          </div>

          <div>
            <h2
              style={{
                fontSize: 30,
                margin: '0 0 14px',
              }}
            >
              De la tangente à l’optimisation moderne
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: '#45515C',
                margin: 0,
              }}
            >
              Au XVIIᵉ siècle, Isaac Newton et Gottfried Wilhelm Leibniz
              développent indépendamment les outils qui donneront naissance
              au calcul différentiel. Leur objectif est notamment de décrire
              les mouvements et les variations. Aujourd’hui, ces mêmes idées
              sont utilisées en physique, en économie, en informatique,
              en intelligence artificielle et dans l’optimisation des
              systèmes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION COURS */}
      <section
        style={{
          background: PAPER,
          padding: '75px 6vw',
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
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
              display: 'grid',
              gridTemplateColumns: '0.75fr 1.25fr',
              gap: 60,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  color: ACCENT,
                  fontWeight: 900,
                  fontSize: 12,
                  letterSpacing: 1.4,
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                01 · Comprendre
              </div>

              <h2
                style={{
                  fontSize: 42,
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                La dérivée comme pente.
              </h2>

              <p
                style={{
                  color: MUTED,
                  fontSize: 17,
                  lineHeight: 1.75,
                }}
              >
                Sur une courbe, la dérivée en un point correspond à la
                pente de la tangente à cette courbe.
              </p>

              <div
                style={{
                  marginTop: 28,
                  padding: 22,
                  background: ACCENT_LIGHT,
                  borderLeft: `5px solid ${ACCENT}`,
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <strong
                  style={{
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Idée clé
                </strong>

                <span
                  style={{
                    color: '#4B5863',
                    lineHeight: 1.6,
                  }}
                >
                  Si f′(x) &gt; 0, la fonction augmente.
                  <br />
                  Si f′(x) &lt; 0, la fonction diminue.
                </span>
              </div>
            </div>

            <div
              style={{
                background: '#F8FAFB',
                border: `1px solid ${BORDER}`,
                borderRadius: 20,
                padding: 34,
              }}
            >
              <div
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: 11,
                  fontWeight: 900,
                  color: MUTED,
                  letterSpacing: 1.2,
                  marginBottom: 24,
                }}
              >
                EXEMPLE
              </div>

              <div
                style={{
                  fontSize: 27,
                  lineHeight: 1.7,
                  textAlign: 'center',
                }}
              >
                f(x) = x²
                <br />
                <span style={{ color: ACCENT }}>
                  f′(x) = 2x
                </span>
              </div>

              <div
                style={{
                  marginTop: 26,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 14,
                }}
              >
                <div
                  style={{
                    background: PAPER,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <strong>x &lt; 0</strong>
                  <br />
                  <span style={{ color: MUTED }}>
                    2x &lt; 0
                    <br />
                    la fonction diminue
                  </span>
                </div>

                <div
                  style={{
                    background: PAPER,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <strong>x &gt; 0</strong>
                  <br />
                  <span style={{ color: MUTED }}>
                    2x &gt; 0
                    <br />
                    la fonction augmente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section
        style={{
          padding: '75px 6vw',
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
              display: 'grid',
              gridTemplateColumns: '0.7fr 1.3fr',
              gap: 60,
              alignItems: 'start',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  color: ACCENT,
                  fontWeight: 900,
                  fontSize: 12,
                  letterSpacing: 1.4,
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                02 · À savoir faire
              </div>

              <h2
                style={{
                  fontSize: 40,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Les dérivées usuelles.
              </h2>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.7,
                }}
              >
                Elles doivent devenir progressivement des réflexes.
              </p>
            </div>

            <div
              style={{
                background: PAPER,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(20,35,50,.05)',
              }}
            >
              {derivatives.map(([functionText, derivative], index) => (
                <div
                  key={functionText}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    padding: '19px 24px',
                    borderBottom:
                      index === derivatives.length - 1
                        ? 'none'
                        : `1px solid ${BORDER}`,
                    fontSize: 18,
                  }}
                >
                  <span>{functionText}</span>

                  <strong
                    style={{
                      color: ACCENT,
                    }}
                  >
                    {derivative}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATHS × SPECIALITES */}
      <section
        style={{
          background: '#EEF4F8',
          padding: '75px 6vw',
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
              maxWidth: 720,
            }}
          >
            <div
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                color: ACCENT,
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: 1.4,
                textTransform: 'uppercase',
              }}
            >
              Maths × autres spécialités
            </div>

            <h2
              style={{
                fontSize: 40,
                margin: '12px 0 18px',
              }}
            >
              La dérivée sort rapidement du cours de maths.
            </h2>

            <p
              style={{
                color: MUTED,
                fontSize: 17,
                lineHeight: 1.7,
              }}
            >
              C’est justement lorsqu’elle est utilisée dans un autre
              contexte qu’elle devient vraiment intéressante.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
              marginTop: 38,
            }}
          >
            <div
              style={{
                background: PAPER,
                borderRadius: 18,
                padding: 28,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 900,
                  color: ACCENT,
                  fontSize: 13,
                  marginBottom: 18,
                }}
              >
                SES
              </div>

              <h3 style={{ fontSize: 23, margin: 0 }}>
                Coûts et optimisation
              </h3>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.65,
                }}
              >
                Recherche d’un coût minimal, évolution d’une recette
                ou étude d’un modèle économique.
              </p>
            </div>

            <div
              style={{
                background: PAPER,
                borderRadius: 18,
                padding: 28,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 900,
                  color: ACCENT,
                  fontSize: 13,
                  marginBottom: 18,
                }}
              >
                SVT
              </div>

              <h3 style={{ fontSize: 23, margin: 0 }}>
                Évolution d’une population
              </h3>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.65,
                }}
              >
                Étudier la vitesse d’évolution d’une population,
                d’une concentration ou d’un phénomène biologique.
              </p>
            </div>

            <div
              style={{
                background: PAPER,
                borderRadius: 18,
                padding: 28,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 900,
                  color: ACCENT,
                  fontSize: 13,
                  marginBottom: 18,
                }}
              >
                INFORMATIQUE
              </div>

              <h3 style={{ fontSize: 23, margin: 0 }}>
                Performance d’un système
              </h3>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.65,
                }}
              >
                Chercher un réglage optimal pour réduire un temps de
                réponse ou une consommation de ressources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MINI LAB */}
      <section
        style={{
          padding: '75px 6vw',
          background: PAPER,
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
              display: 'grid',
              gridTemplateColumns: '0.75fr 1.25fr',
              gap: 60,
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-block',
                  background: '#FFF3D9',
                  color: '#8A681F',
                  padding: '7px 12px',
                  borderRadius: 999,
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: 1,
                }}
              >
                MINI-LAB
              </div>

              <h2
                style={{
                  fontSize: 40,
                  lineHeight: 1.1,
                  margin: '20px 0 15px',
                }}
              >
                Trouver le meilleur réglage.
              </h2>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.7,
                  fontSize: 16,
                }}
              >
                On modélise le temps de réponse d’un serveur par une
                fonction. L’objectif : déterminer pour quelle valeur
                du paramètre le système est le plus performant.
              </p>
            </div>

            <div
              style={{
                background: DARK,
                color: PAPER,
                borderRadius: 22,
                padding: 34,
              }}
            >
              <div
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: 1.2,
                  color: '#B9D9EF',
                  marginBottom: 22,
                }}
              >
                DÉFI
              </div>

              <p
                style={{
                  fontSize: 21,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Pour
                <span style={{ color: '#B9D9EF' }}>
                  {' '}
                  C(x) = x² − 8x + 25
                </span>
                , déterminer la valeur de x qui minimise C(x).
              </p>

              <div
                style={{
                  marginTop: 26,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,.15)',
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: 13,
                  opacity: 0.72,
                }}
              >
                Livrable : calculs + tableau de variations + interprétation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section
        style={{
          padding: '75px 6vw',
          background: BG,
          borderTop: `1px solid ${BORDER}`,
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
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              color: ACCENT,
              fontWeight: 900,
              fontSize: 12,
              letterSpacing: 1.4,
              textTransform: 'uppercase',
            }}
          >
            Missions
          </div>

          <h2
            style={{
              fontSize: 40,
              margin: '12px 0 38px',
            }}
          >
            Trois façons de passer à la pratique.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            {missions.map((mission) => (
              <div
                key={mission.title}
                style={{
                  background: PAPER,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 18,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 300,
                  boxShadow: '0 8px 24px rgba(20,35,50,.04)',
                }}
              >
                <div
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    color: ACCENT,
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: 1,
                  }}
                >
                  {mission.level}
                </div>

                <h3
                  style={{
                    fontSize: 25,
                    margin: '18px 0 10px',
                  }}
                >
                  {mission.title}
                </h3>

                <p
                  style={{
                    color: MUTED,
                    lineHeight: 1.65,
                    fontSize: 15,
                    marginTop: 0,
                  }}
                >
                  {mission.text}
                </p>

                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: 18,
                    borderTop: `1px solid ${BORDER}`,
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: 12,
                    color: MUTED,
                  }}
                >
                  <strong style={{ color: DARK }}>
                    Livrable :
                  </strong>{' '}
                  {mission.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section
        style={{
          padding: '70px 6vw',
          background: PAPER,
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 20,
          }}
        >
          <div
            style={{
              padding: 28,
              background: ACCENT_LIGHT,
              borderRadius: 18,
            }}
          >
            <div
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 11,
                fontWeight: 900,
                color: ACCENT,
                letterSpacing: 1,
              }}
            >
              COMPRENDRE
            </div>

            <h3 style={{ fontSize: 23 }}>
              Je sais expliquer
            </h3>

            <p
              style={{
                color: MUTED,
                lineHeight: 1.6,
              }}
            >
              ce que représente une dérivée et pourquoi elle permet
              d’étudier les variations.
            </p>
          </div>

          <div
            style={{
              padding: 28,
              background: '#F4F6F8',
              borderRadius: 18,
            }}
          >
            <div
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 11,
                fontWeight: 900,
                color: ACCENT,
                letterSpacing: 1,
              }}
            >
              S’ENTRAÎNER
            </div>

            <h3 style={{ fontSize: 23 }}>
              Je sais calculer
            </h3>

            <p
              style={{
                color: MUTED,
                lineHeight: 1.6,
              }}
            >
              les dérivées usuelles et étudier le signe d’une fonction
              dérivée.
            </p>
          </div>

          <div
            style={{
              padding: 28,
              background: '#EAF1F5',
              borderRadius: 18,
            }}
          >
            <div
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 11,
                fontWeight: 900,
                color: ACCENT,
                letterSpacing: 1,
              }}
            >
              VALIDER
            </div>

            <h3 style={{ fontSize: 23 }}>
              Je sais optimiser
            </h3>

            <p
              style={{
                color: MUTED,
                lineHeight: 1.6,
              }}
            >
              une situation concrète et interpréter le résultat obtenu.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '30px 6vw 80px',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            background: ACCENT,
            color: PAPER,
            borderRadius: 24,
            padding: '42px 46px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 30,
          }}
        >
          <div>
            <div
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: 1.2,
                opacity: 0.75,
                marginBottom: 10,
              }}
            >
              CHAPITRE SUIVANT
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: 30,
              }}
            >
              Prêt à passer de la variation à la croissance ?
            </h2>
          </div>

          <Link
            href="/"
            style={{
              display: 'inline-block',
              background: PAPER,
              color: ACCENT,
              textDecoration: 'none',
              padding: '14px 22px',
              borderRadius: 12,
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 800,
              fontSize: 14,
              whiteSpace: 'nowrap',
            }}
          >
            Retour à l’accueil →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: '28px 6vw',
          background: PAPER,
          color: MUTED,
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: 12,
          textAlign: 'center',
        }}
      >
        L’Atelier des Maths · Chapitre 02 — Dérivation
      </footer>
    </main>
  );
}