import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика обработки персональных данных AirComfort: какие данные собираются, для чего используются и как защищаются.',
  alternates: { canonical: 'https://aircom-fort.by/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
