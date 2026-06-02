import { notFound } from 'next/navigation';
import { CITIES, getCityBySlug } from '@/lib/cities';
import CityPageTemplate from './CityPageTemplate';

export function generateStaticParams() {
  return CITIES.map(c => ({ city: c.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();
  return <CityPageTemplate city={city} />;
}
