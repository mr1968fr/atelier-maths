import Link from 'next/link';

const ACCENT = '#7957A8';
const ACCENT_LIGHT = '#F1ECF7';
const DARK = '#17212B';
const MUTED = '#68737D';
const BORDER = '#D9E1E7';
const PAPER = '#FFFFFF';
const BG = '#F7F8F9';

const sections = [
  {
    number: '01',
    title: 'Comprendre la croissance',
    text: 'Reconnaître une évolution exponentielle et comprendre ce qui la distingue d’une évolution linéaire.',
  },
  {
    number: '02',
    title: 'Utiliser la fonction exponentielle',
    text: 'Calculer, comparer et interpréter des valeurs de eˣ dans des situations concrètes.',
  },
  {
    number: '03',
    title: 'Résoudre avec l’exponentielle',
    text: 'Utiliser les propriétés de l’exponentielle et du logarithme pour résoudre des problèmes.',
  },
  {
    number: '04',
    title: 'Modéliser une évolution',
    text: 'Construire et exploiter un modèle de croissance ou de décroissance.',
  },
];

const formulas = [
  ['Fonction exponentielle', 'f(x) = eˣ', 'eˣ > 0'],
  ['Valeur en 0', 'e⁰ = 1', 'Point de référence'],
  ['Produit', 'eᵃ × eᵇ = eᵃ⁺ᵇ', 'On additionne les exposants'],
  ['Quotient', 'eᵃ / eᵇ = eᵃ⁻ᵇ', 'On soustrait les exposants'],
  ['Puissance', '(eᵃ)ᵇ = eᵃᵇ', 'On multiplie les exposants'],
];

const missions = [
  {
    level: 'NIVEAU 1',
    title: 'Reconnaître une croissance',
    difficulty: 'Accessible',
    deliverable: 'Tableau de valeurs + interprétation',
    text: 'À partir d’une situation de croissance, identifier le modèle exponentiel et expliquer ce que représente le coefficient.',
  },
  {
    level: 'NIVEAU 2',
    title: 'Modéliser une population',
    difficulty: 'Intermédiaire',
    deliverable: 'Modèle exponentiel + calculs',
    text: 'Construire un modèle décrivant l’évolution d’une population et déterminer une valeur à une date donnée.',
  },
  {
    level: 'NIVEAU 3',
    title: 'Analyser une croissance informatique',
    difficulty: 'Défi',
    deliverable: 'Modèle + graphique + conclusion',
    text: 'Étudier une évolution rapide de données et déterminer à partir de quand un seuil critique est dépassé.',
  },
];

export default function ExponentiellePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: BG,
        color: DARK,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
          position: 'sticky',
          top: 0,
          zIndex: 20,
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            color: DARK,
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: '-0.02em',
          }}
        >
          L’Atelier des Maths
        </Link>

        <div
          style={{
            display: 'flex',
            gap: 26,
            alignItems: 'center',
            fontSize: 14,
          }}
        >
          <Link
            href="/"
            style={{ color: MUTED, textDecoration: 'none' }}
          >
            Accueil
          </Link>

          <Link
            href="/suites"
            style={{ color: MUTED, textDecoration: 'none' }}
          >
            Suites
          </Link>

          <Link
            href="/derivation"
            style={{ color: MUTED, textDecoration: 'none' }}
          >
            Dérivation
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          background: PAPER,
          padding: '78px 6vw 72px',
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 13px',
              borderRadius: 999,
              background: ACCENT_LIGHT,
              color: ACCENT,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.08em',
              marginBottom: 24,
            }}
          >
            CHAPITRE 03 · EXPONENTIELLE
          </div>

          <h1
            style={{
              fontSize: 'clamp(42px, 6vw, 76px)',
              lineHeight: 0.98,
              letterSpacing: '-0.055em',
              maxWidth: 850,
              margin: '0 0 26px',
              fontWeight: 850,
            }}
          >
            Comprendre pourquoi
            <br />
            certaines évolutions
            <br />
            <span style={{ color: ACCENT }}>s’accélèrent.</span>
          </h1>

          <p
            style={{
              maxWidth: 720,
              fontSize: 20,
              lineHeight: 1.6,
              color: MUTED,
              margin: 0,
            }}
          >
            Une population, une épidémie, un capital, une quantité de
            données… certaines grandeurs ne progressent pas simplement :
            elles se multiplient.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        style={{
          background: DARK,
          color: '#FFFFFF',
          padding: '54px 6vw',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.3fr 0.7fr',
            gap: 60,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                color: '#CBB9DC',
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '0.1em',
                marginBottom: 16,
              }}
            >
              L’IDÉE CENTRALE
            </div>

            <h2
              style={{
                fontSize: 34,
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                margin: '0 0 18px',
              }}
            >
              Une exponentielle répond à une question simple :
              <br />
              <span style={{ color: '#D8C8E5' }}>
                « Que se passe-t-il quand une quantité évolue
                proportionnellement à elle-même ? »
              </span>
            </h2>

            <p
              style={{
                color: '#C5CDD3',
                lineHeight: 1.7,
                maxWidth: 720,
                margin: 0,
              }}
            >
              C’est le modèle naturel de nombreuses situations de
              croissance ou de décroissance. Et c’est précisément ce qui
              rend l’exponentielle utile pour comprendre le monde réel.
            </p>
          </div>

          <div
            style={{
              borderLeft: '1px solid #46515B',
              paddingLeft: 32,
            }}
          >
            <div
              style={{
                fontSize: 54,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.05em',
              }}
            >
              eˣ
            </div>

            <div
              style={{
                marginTop: 8,
                color: '#AEB8C0',
                lineHeight: 1.5,
              }}
            >
              La fonction exponentielle :
              <br />
              positive, croissante et
              <br />
              égale à 1 en 0.
            </div>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section
        style={{
          padding: '76px 6vw',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              gap: 30,
              marginBottom: 32,
            }}
          >
            <div>
              <div
                style={{
                  color: ACCENT,
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  marginBottom: 10,
                }}
              >
                TON PARCOURS
              </div>

              <h2
                style={{
                  fontSize: 38,
                  letterSpacing: '-0.04em',
                  margin: 0,
                }}
              >
                Quatre étapes pour maîtriser l’exponentielle.
              </h2>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 14,
            }}
          >
            {sections.map((section) => (
              <div
                key={section.number}
                style={{
                  background: PAPER,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 18,
                  padding: 24,
                  minHeight: 205,
                }}
              >
                <div
                  style={{
                    color: ACCENT,
                    fontWeight: 850,
                    fontSize: 13,
                    marginBottom: 28,
                  }}
                >
                  {section.number}
                </div>

                <h3
                  style={{
                    margin: '0 0 12px',
                    fontSize: 19,
                    lineHeight: 1.2,
                  }}
                >
                  {section.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: MUTED,
                    lineHeight: 1.55,
                    fontSize: 14,
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
          padding: '0 6vw 76px',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            background: ACCENT_LIGHT,
            borderRadius: 24,
            padding: '34px 38px',
            display: 'grid',
            gridTemplateColumns: '170px 1fr',
            gap: 35,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 42,
              fontWeight: 850,
              color: ACCENT,
              letterSpacing: '-0.05em',
            }}
          >
            1683
          </div>

          <div>
            <div
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 850,
                letterSpacing: '0.1em',
                marginBottom: 8,
              }}
            >
              PETITE HISTOIRE
            </div>

            <h3
              style={{
                fontSize: 24,
                margin: '0 0 8px',
                letterSpacing: '-0.025em',
              }}
            >
              Leibniz et la naissance du langage du changement.
            </h3>

            <p
              style={{
                margin: 0,
                color: '#5F6870',
                lineHeight: 1.6,
              }}
            >
              À la fin du XVIIᵉ siècle, les mathématiciens cherchent à
              décrire des phénomènes qui évoluent continûment. Leibniz
              développe alors un nouveau langage mathématique : le calcul
              différentiel. Quelques décennies plus tard, l’exponentielle
              devient un outil central pour décrire les phénomènes de
              croissance et de décroissance.
            </p>
          </div>
        </div>
      </section>

      {/* COURS */}
      <section
        style={{
          background: PAPER,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: '76px 6vw',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ maxWidth: 760, marginBottom: 42 }}>
            <div
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 850,
                letterSpacing: '0.1em',
                marginBottom: 12,
              }}
            >
              L’ESSENTIEL
            </div>

            <h2
              style={{
                fontSize: 40,
                letterSpacing: '-0.04em',
                margin: '0 0 16px',
              }}
            >
              La fonction exponentielle comme modèle.
            </h2>

            <p
              style={{
                margin: 0,
                color: MUTED,
                lineHeight: 1.7,
                fontSize: 17,
              }}
            >
              La fonction exponentielle transforme une évolution additive
              des nombres en une évolution multiplicative. C’est cette
              propriété qui la rend particulièrement puissante.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 18,
            }}
          >
            <div
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 20,
                padding: 30,
                background: BG,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 850,
                  color: ACCENT,
                  marginBottom: 14,
                }}
              >
                01 · À RETENIR
              </div>

              <div
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  marginBottom: 16,
                }}
              >
                f(x) = eˣ
              </div>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                La fonction exponentielle est définie sur ℝ et prend
                toujours des valeurs strictement positives.
              </p>
            </div>

            <div
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 20,
                padding: 30,
                background: BG,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 850,
                  color: ACCENT,
                  marginBottom: 14,
                }}
              >
                02 · PROPRIÉTÉ FONDAMENTALE
              </div>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  marginBottom: 16,
                }}
              >
                (eˣ)′ = eˣ
              </div>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                C’est la seule fonction qui reste identique lorsqu’on la
                dérive. Elle est donc intimement liée aux phénomènes dont
                le taux de variation dépend de la quantité elle-même.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section
        style={{
          padding: '76px 6vw',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: 30 }}>
            <div
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 850,
                letterSpacing: '0.1em',
                marginBottom: 10,
              }}
            >
              À SAVOIR FAIRE
            </div>

            <h2
              style={{
                fontSize: 36,
                letterSpacing: '-0.04em',
                margin: 0,
              }}
            >
              Les propriétés à avoir sous la main.
            </h2>
          </div>

          <div
            style={{
              overflow: 'hidden',
              border: `1px solid ${BORDER}`,
              borderRadius: 18,
              background: PAPER,
            }}
          >
            {formulas.map(([title, formula, explanation], index) => (
              <div
                key={title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1fr 1fr',
                  gap: 20,
                  padding: '20px 24px',
                  borderBottom:
                    index === formulas.length - 1
                      ? 'none'
                      : `1px solid ${BORDER}`,
                  alignItems: 'center',
                }}
              >
                <strong>{title}</strong>

                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 750,
                    color: ACCENT,
                  }}
                >
                  {formula}
                </span>

                <span
                  style={{
                    color: MUTED,
                    fontSize: 14,
                  }}
                >
                  {explanation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTRES SPÉCIALITÉS */}
      <section
        style={{
          background: '#F3F0F6',
          padding: '76px 6vw',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ maxWidth: 720, marginBottom: 34 }}>
            <div
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 850,
                letterSpacing: '0.1em',
                marginBottom: 10,
              }}
            >
              MATHS × AUTRES SPÉCIALITÉS
            </div>

            <h2
              style={{
                fontSize: 38,
                letterSpacing: '-0.04em',
                margin: '0 0 14px',
              }}
            >
              L’exponentielle existe déjà dans vos autres cours.
            </h2>

            <p
              style={{
                margin: 0,
                color: MUTED,
                lineHeight: 1.65,
              }}
            >
              Ici, les mathématiques ne sont pas un chapitre isolé :
              elles donnent un modèle à des phénomènes étudiés ailleurs.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
          >
            <div
              style={{
                background: PAPER,
                borderRadius: 20,
                padding: 28,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontWeight: 850,
                  marginBottom: 15,
                }}
              >
                SES
              </div>

              <h3 style={{ margin: '0 0 10px', fontSize: 20 }}>
                Intérêts et croissance
              </h3>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Un capital placé à taux fixe évolue de manière
                multiplicative. L’exponentielle permet de comprendre la
                croissance composée.
              </p>
            </div>

            <div
              style={{
                background: PAPER,
                borderRadius: 20,
                padding: 28,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontWeight: 850,
                  marginBottom: 15,
                }}
              >
                SVT
              </div>

              <h3 style={{ margin: '0 0 10px', fontSize: 20 }}>
                Populations et phénomènes naturels
              </h3>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Certaines populations peuvent être modélisées par des
                fonctions exponentielles sur une période donnée.
              </p>
            </div>

            <div
              style={{
                background: PAPER,
                borderRadius: 20,
                padding: 28,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  color: ACCENT,
                  fontWeight: 850,
                  marginBottom: 15,
                }}
              >
                INFORMATIQUE
              </div>

              <h3 style={{ margin: '0 0 10px', fontSize: 20 }}>
                Données et croissance
              </h3>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Taille des données, capacité de stockage, évolution d’un
                trafic réseau : les modèles exponentiels apparaissent
                lorsque les quantités se multiplient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MINI LAB */}
      <section
        style={{
          padding: '76px 6vw',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div
            style={{
              background: DARK,
              color: '#FFFFFF',
              borderRadius: 26,
              padding: '42px 44px',
              display: 'grid',
              gridTemplateColumns: '1fr 0.8fr',
              gap: 50,
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  color: '#CBB9DC',
                  fontSize: 12,
                  fontWeight: 850,
                  letterSpacing: '0.1em',
                  marginBottom: 12,
                }}
              >
                MINI-LAB
              </div>

              <h2
                style={{
                  fontSize: 34,
                  lineHeight: 1.15,
                  letterSpacing: '-0.035em',
                  margin: '0 0 15px',
                }}
              >
                Une croissance de données
                <br />
                peut-elle devenir critique ?
              </h2>

              <p
                style={{
                  color: '#C5CDD3',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Un serveur reçoit actuellement 1 000 requêtes par heure.
                Le trafic augmente de 8 % chaque heure. Modélise cette
                évolution et détermine au bout de combien d’heures le
                trafic dépasse 2 000 requêtes.
              </p>
            </div>

            <div
              style={{
                background: '#25313B',
                borderRadius: 18,
                padding: 26,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: '#AEB8C0',
                  marginBottom: 10,
                }}
              >
                MODÈLE
              </div>

              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  marginBottom: 16,
                }}
              >
                uₙ = 1000 × 1,08ⁿ
              </div>

              <div
                style={{
                  color: '#C5CDD3',
                  lineHeight: 1.55,
                  fontSize: 14,
                }}
              >
                À toi de déterminer le premier entier n pour lequel
                uₙ &gt; 2000.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section
        style={{
          background: PAPER,
          borderTop: `1px solid ${BORDER}`,
          padding: '76px 6vw',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: 34 }}>
            <div
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 850,
                letterSpacing: '0.1em',
                marginBottom: 10,
              }}
            >
              MISSIONS
            </div>

            <h2
              style={{
                fontSize: 38,
                letterSpacing: '-0.04em',
                margin: '0 0 12px',
              }}
            >
              Prouve que tu sais utiliser l’exponentielle.
            </h2>

            <p
              style={{
                margin: 0,
                color: MUTED,
              }}
            >
              Chaque mission produit un livrable concret.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
          >
            {missions.map((mission) => (
              <div
                key={mission.level}
                style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: 20,
                  overflow: 'hidden',
                  background: BG,
                }}
              >
                <div
                  style={{
                    background: ACCENT_LIGHT,
                    color: ACCENT,
                    padding: '13px 20px',
                    fontSize: 11,
                    fontWeight: 850,
                    letterSpacing: '0.08em',
                  }}
                >
                  {mission.level}
                </div>

                <div style={{ padding: 24 }}>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '5px 9px',
                      borderRadius: 999,
                      background: PAPER,
                      border: `1px solid ${BORDER}`,
                      color: MUTED,
                      fontSize: 11,
                      fontWeight: 750,
                      marginBottom: 15,
                    }}
                  >
                    {mission.difficulty}
                  </div>

                  <h3
                    style={{
                      fontSize: 21,
                      margin: '0 0 10px',
                    }}
                  >
                    {mission.title}
                  </h3>

                  <p
                    style={{
                      color: MUTED,
                      lineHeight: 1.6,
                      fontSize: 14,
                      margin: '0 0 22px',
                    }}
                  >
                    {mission.text}
                  </p>

                  <div
                    style={{
                      borderTop: `1px solid ${BORDER}`,
                      paddingTop: 15,
                    }}
                  >
                    <div
                      style={{
                        color: ACCENT,
                        fontSize: 11,
                        fontWeight: 850,
                        letterSpacing: '0.08em',
                        marginBottom: 5,
                      }}
                    >
                      LIVRABLE ATTENDU
                    </div>

                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                      }}
                    >
                      {mission.deliverable}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section
        style={{
          padding: '76px 6vw',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div
            style={{
              textAlign: 'center',
              maxWidth: 680,
              margin: '0 auto 35px',
            }}
          >
            <div
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 850,
                letterSpacing: '0.1em',
                marginBottom: 10,
              }}
            >
              VALIDATION
            </div>

            <h2
              style={{
                fontSize: 38,
                letterSpacing: '-0.04em',
                margin: '0 0 12px',
              }}
            >
              Comprendre · S’entraîner · Valider
            </h2>

            <p
              style={{
                color: MUTED,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Le chapitre est maîtrisé lorsque tu peux passer de la
              formule à l’interprétation.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
          >
            {[
              [
                '01',
                'Comprendre',
                'Expliquer ce qu’est une croissance exponentielle et reconnaître son modèle.',
              ],
              [
                '02',
                'S’entraîner',
                'Calculer, transformer et résoudre des expressions avec eˣ.',
              ],
              [
                '03',
                'Valider',
                'Utiliser l’exponentielle pour résoudre une situation concrète.',
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                style={{
                  background: PAPER,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 20,
                  padding: 27,
                }}
              >
                <div
                  style={{
                    color: ACCENT,
                    fontSize: 13,
                    fontWeight: 850,
                    marginBottom: 20,
                  }}
                >
                  {number}
                </div>

                <h3
                  style={{
                    fontSize: 21,
                    margin: '0 0 10px',
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: MUTED,
                    lineHeight: 1.6,
                    fontSize: 14,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '0 6vw 76px',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            background: ACCENT,
            color: '#FFFFFF',
            borderRadius: 26,
            padding: '38px 42px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 30,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: 8,
              }}
            >
              Chapitre suivant : Probabilités
            </div>

            <div style={{ opacity: 0.85 }}>
              Continue ton parcours dans L’Atelier des Maths.
            </div>
          </div>

          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '13px 20px',
              borderRadius: 12,
              background: '#FFFFFF',
              color: ACCENT,
              textDecoration: 'none',
              fontWeight: 800,
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
          background: PAPER,
          padding: '28px 6vw',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 20,
            color: MUTED,
            fontSize: 13,
          }}
        >
          <span>L’Atelier des Maths</span>
          <span>Chapitre 03 · Exponentielle</span>
        </div>
      </footer>
    </main>
  );
}