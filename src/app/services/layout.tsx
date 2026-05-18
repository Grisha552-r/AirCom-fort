import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Установка кондиционера в Гомеле — монтаж под ключ, цены',
  description: 'Кондиционер с установкой в Гомеле под ключ. Монтаж сплит-систем от 400 р., обслуживание и чистка, демонтаж. Гарантия 1 год. Рассчитайте стоимость онлайн.',
  keywords: ['установка кондиционера Гомель', 'кондиционер с установкой Гомель', 'монтаж кондиционера Гомель', 'кондиционер под ключ Гомель', 'обслуживание кондиционера Гомель', 'чистка кондиционера Гомель', 'демонтаж кондиционера', 'стоимость установки кондиционера'],
  alternates: { canonical: 'https://aircom-fort.by/services' },
  openGraph: {
    title: 'Установка кондиционера в Гомеле — AirComfort',
    description: 'Монтаж, обслуживание и демонтаж кондиционеров в Гомеле. Рассчитайте стоимость онлайн.',
    url: 'https://aircom-fort.by/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
