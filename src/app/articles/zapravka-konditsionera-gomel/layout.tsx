import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Заправка кондиционера в Гомеле — цена 2026, выезд в день заказа',
  description: 'Заправка кондиционера в Гомеле от 60 р. Фреон R32, R410A, R22. Выезд мастера в день заказа. Диагностика бесплатно при заправке. Гарантия 1 год.',
  keywords: ['заправка кондиционера Гомель', 'заправка кондиционера цена Гомель', 'заправить кондиционер Гомель', 'фреон кондиционер Гомель', 'дозаправка кондиционера Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/zapravka-konditsionera-gomel' },
  openGraph: {
    title: 'Заправка кондиционера в Гомеле — от 60 р.',
    description: 'Выезд мастера в день заказа. Фреон R32, R410A, R22. Диагностика бесплатно.',
    url: 'https://aircom-fort.by/articles/zapravka-konditsionera-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
