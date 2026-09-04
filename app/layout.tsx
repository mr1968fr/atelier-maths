import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'L’Atelier des Maths — Première',
    template: '%s — L’Atelier des Maths',
  },
  description:
    'Un manuel numérique de mathématiques pour la Première : cours, méthodes, exercices corrigés et applications.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
