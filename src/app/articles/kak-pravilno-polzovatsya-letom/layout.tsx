import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Как правильно пользоваться кондиционером летом — советы и ошибки',
  description: 'Как использовать кондиционер летом чтобы не простудиться и сэкономить электричество. Правильные режимы, частые ошибки, советы от специалистов AirComfort.',
  keywords: ['как пользоваться кондиционером', 'кондиционер летом', 'правильный режим кондиционера', 'кондиционер простуда', 'температура кондиционера летом'],
  alternates: { canonical: 'https://aircom-fort.by/articles/kak-pravilno-polzovatsya-letom' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Как правильно пользоваться кондиционером летом — советы и ошибки',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/kak-pravilno-polzovatsya-letom',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'На какую температуру ставить кондиционер летом?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Оптимальная температура кондиционера летом — 23–26°C. Разница между температурой на улице и в помещении не должна превышать 7–8 градусов. При 35°C на улице ставьте не ниже 27°C, чтобы не простудиться.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли спать с включённым кондиционером?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, если кондиционер не направлен на спящего. Включайте режим "ночной" или "сон" — он плавно повышает температуру с 1–3 часов ночи. Рекомендуемая температура для сна: 24–26°C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как кондиционер влияет на здоровье?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'При правильном использовании кондиционер безопасен. Проблемы возникают при: холодном воздухе прямо на тело, слишком низкой температуре (ниже 20°C), грязных фильтрах. Чистите фильтры каждые 2–4 недели.',
      },
    },
    {
      '@type': 'Question',
      name: 'Нужно ли проветривать комнату при работающем кондиционере?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Кондиционер охлаждает воздух, но не проветривает помещение. Открывайте окна на 10–15 минут раз в 2–3 часа. Некоторые модели имеют режим вентиляции с притоком свежего воздуха.',
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
