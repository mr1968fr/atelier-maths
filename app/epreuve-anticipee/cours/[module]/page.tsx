import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExamModuleView from '@/components/ExamModuleView';
import { examModules, getExamModule } from '@/lib/exam';

export function generateStaticParams() {
  return examModules.map((module) => ({ module: module.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }): Promise<Metadata> {
  const { module: slug } = await params;
  const module = getExamModule(slug);
  return module ? { title: module.title, description: module.subtitle } : {};
}

export default async function ExamCoursePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: slug } = await params;
  const module = getExamModule(slug);
  if (!module) notFound();
  return <ExamModuleView module={module} />;
}
