import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Статьи о кондиционерах — советы по выбору и уходу',
  description: 'Статьи о кондиционерах: как выбрать, инвертор или обычный, правила использования, чистка и обслуживание. Советы от экспертов AirComfort в Гомеле.',
  alternates: { canonical: 'https://aircom-fort.by/articles' },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
