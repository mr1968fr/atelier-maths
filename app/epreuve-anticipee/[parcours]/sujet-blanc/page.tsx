import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MockExamView from '@/components/MockExamView';
import { examTracks, getExamTrack } from '@/lib/exam';

export function generateStaticParams() {
  return examTracks.map((track) => ({ parcours: track.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ parcours: string }> }): Promise<Metadata> {
  const { parcours } = await params;
  const track = getExamTrack(parcours);
  return track ? { title: `Sujet blanc · ${track.label}`, description: 'Sujet blanc interactif de l’épreuve anticipée de mathématiques.' } : {};
}

export default async function MockExamPage({ params }: { params: Promise<{ parcours: string }> }) {
  const { parcours } = await params;
  const track = getExamTrack(parcours);
  if (!track) notFound();
  return <MockExamView track={track} />;
}
