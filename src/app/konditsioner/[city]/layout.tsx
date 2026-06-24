import type { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';

const BASE = 'https://aircom-fort.by';

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return { title: 'Страница не найдена' };
  }

  const title = `Кондиционер в ${city.nameIn} — купить и установить`;
  const description = `Купить кондиционер в ${city.nameIn} с доставкой и установкой. Electrolux, Ballu, Haier, LG — выезд из Гомеля. Монтаж от 400 р., гарантия 1 год. ☎ +375 29 105-06-94.`;
  const url = `${BASE}/konditsioner/${slug}`;

  return {
    title: { absolute: `${title} | AirComfort` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      locale: 'ru_BY',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
