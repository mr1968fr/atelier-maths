import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ChapterView from '@/components/ChapterView';
import { chapters, getChapter } from '@/lib/chapters';

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return {};
  return {
    title: `${chapter.number} · ${chapter.title}`,
    description: `${chapter.subtitle}. Cours, méthodes, exercices corrigés et activité d’application.`,
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();
  return <ChapterView chapter={chapter} />;
}
