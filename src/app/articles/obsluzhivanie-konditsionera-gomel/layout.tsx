import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обслуживание кондиционера в Гомеле — чистка, заправка, ремонт | AirComfort',
  description: 'Обслуживание кондиционеров в Гомеле: чистка от 60 р., заправка фреоном от 60 р., диагностика бесплатно. Выезд в день заказа. Все бренды. ☎ +375 29 105-06-94.',
  keywords: [
    'обслуживание кондиционера Гомель',
    'чистка кондиционера Гомель',
    'заправка кондиционера Гомель',
    'техническое обслуживание кондиционера',
    'промывка кондиционера Гомель',
    'сервис кондиционеров Гомель',
    'ТО кондиционера Гомель',
    'дезинфекция кондиционера Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/obsluzhivanie-konditsionera-gomel' },
  openGraph: {
    title: 'Обслуживание кондиционера в Гомеле — чистка, заправка',
    description: 'Чистка от 60 р., заправка фреоном от 60 р. Выезд в день заказа.',
    url: 'https://aircom-fort.by/articles/obsluzhivanie-konditsionera-gomel',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
