import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты AirComfort — телефон, адрес, реквизиты',
  description: 'Контакты AirComfort в Гомеле: телефон +375 29 105-06-94, email aircomfortbel@gmail.com, адрес ул. 2-я Витебская, 30. Режим работы пн–сб 9:00–18:00.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://aircom-fort.by/requisites' },
  openGraph: {
    title: 'Контакты AirComfort — кондиционеры в Гомеле',
    description: 'Телефон, адрес, режим работы и реквизиты компании AirComfort в Гомеле.',
    url: 'https://aircom-fort.by/requisites',
    locale: 'ru_BY',
    type: 'website',
  },
};

export default function RequisitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
