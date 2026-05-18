import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании AirComfort — продажа кондиционеров в Гомеле',
  description: 'AirComfort — продажа кондиционеров с установкой в Гомеле. Electrolux, Ballu, Haier, LG, Mitsudai. Официальная гарантия производителя. Монтаж от 400 р.',
  keywords: ['AirComfort Гомель', 'магазин кондиционеров Гомель', 'продажа кондиционеров Гомель', 'кондиционер с установкой Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
