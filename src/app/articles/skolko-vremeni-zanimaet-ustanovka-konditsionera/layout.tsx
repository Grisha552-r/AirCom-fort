import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сколько времени занимает установка кондиционера — от замера до запуска',
  description: 'Стандартная установка кондиционера занимает 2–4 часа. Сложные случаи — до 8 часов. Разбираем этапы монтажа и что может затянуть работу.',
  keywords: [
    'сколько времени занимает установка кондиционера',
    'сколько времени устанавливают кондиционер',
    'за сколько устанавливают кондиционер',
    'монтаж кондиционера время',
    'установка кондиционера Гомель сроки',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/skolko-vremeni-zanimaet-ustanovka-konditsionera' },
  openGraph: {
    title: 'Сколько времени занимает установка кондиционера',
    description: 'Стандартный монтаж — 2–4 часа. Разбираем все этапы и что влияет на время установки.',
    url: 'https://aircom-fort.by/articles/skolko-vremeni-zanimaet-ustanovka-konditsionera',
    locale: 'ru_BY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сколько времени занимает установка кондиционера',
    description: 'Стандартный монтаж — 2–4 часа. Разбираем все этапы и что влияет на время установки.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Сколько времени занимает установка кондиционера — от замера до запуска',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/skolko-vremeni-zanimaet-ustanovka-konditsionera',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько времени занимает установка кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартный монтаж сплит-системы занимает 2–4 часа. При сложных условиях (штробление, высотные работы, несколько блоков) время может увеличиться до 6–8 часов.',
      },
    },
    {
      '@type': 'Question',
      name: 'За сколько времени мастер приезжает на установку?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AirComfort выезжает в день заказа или на следующий день при наличии свободных окон. В сезон (май–август) лучше записываться заранее.',
      },
    },
    {
      '@type': 'Question',
      name: 'Нужно ли присутствовать дома весь день при установке кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Мастер работает 2–4 часа. Вы получаете подтверждение времени прибытия, поэтому не нужно ждать целый день — только в согласованный промежуток.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
