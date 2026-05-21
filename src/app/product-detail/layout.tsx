import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Купить кондиционер в Гомеле',
  description: 'Купить кондиционер в Гомеле по выгодной цене. Официальная гарантия производителя. Установка под ключ от 400 р.',
  robots: { index: true, follow: true },
};

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
