import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import QuizView from '@/components/QuizView';
import { getChapter } from '@/lib/chapters';
import { getQuiz, quizzes } from '@/lib/evaluations';

export function generateStaticParams() {
  return quizzes.map((quiz) => ({ slug: quiz.chapterSlug, level: quiz.level }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; level: string }> }): Promise<Metadata> {
  const { slug, level } = await params;
  const quiz = getQuiz(slug, level);
  if (!quiz) return {};
  return { title: quiz.title, description: quiz.description };
}

export default async function QuizPage({ params }: { params: Promise<{ slug: string; level: string }> }) {
  const { slug, level } = await params;
  const chapter = getChapter(slug);
  const quiz = getQuiz(slug, level);
  if (!chapter || !quiz) notFound();
  return <QuizView chapter={chapter} quiz={quiz} />;
}
