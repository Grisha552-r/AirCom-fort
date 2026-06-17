import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обслуживание кондиционера в Гомеле — чистка, ремонт',
  description: 'Диагностика бесплатно. Чистка кондиционера в Гомеле от 100 р., заправка фреоном от 60 р. Восстановим охлаждение за 1 визит. Все бренды, выезд в день заказа.',
  alternates: { canonical: 'https://aircom-fort.by/articles/obsluzhivanie-konditsionera-gomel' },
  openGraph: {
    title: 'Обслуживание кондиционера в Гомеле — чистка, заправка',
    description: 'Чистка от 100 р., заправка фреоном от 60 р. Выезд в день заказа.',
    url: 'https://aircom-fort.by/articles/obsluzhivanie-konditsionera-gomel',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
