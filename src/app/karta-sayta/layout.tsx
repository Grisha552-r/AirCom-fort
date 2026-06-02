import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Карта сайта — AirComfort Гомель',
  description: 'Карта сайта aircom-fort.by — все разделы, категории каталога и статьи о кондиционерах.',
  alternates: { canonical: 'https://aircom-fort.by/karta-sayta' },
  robots: { index: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
