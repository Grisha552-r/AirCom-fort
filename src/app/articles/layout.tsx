import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Как выбрать и установить кондиционер — полезные статьи',
  description: 'Полезные статьи о кондиционерах: как выбрать сплит-систему, инвертор или обычный, правила использования летом и зимой, чистка и обслуживание кондиционера.',
  keywords: ['как выбрать кондиционер', 'инверторный кондиционер', 'обслуживание кондиционера', 'чистка кондиционера', 'мобильный или сплит'],
  alternates: { canonical: 'https://aircom-fort.by/articles' },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
