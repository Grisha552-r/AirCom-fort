import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Купить кондиционер в Гомеле',
  robots: { index: false, follow: false },
};

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
