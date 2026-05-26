import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры Electrolux в Гомеле — купить с установкой от 1 490 р.',
  description: 'Купить кондиционер Electrolux в Гомеле с установкой под ключ. Официальный дилер. Electrolux EACS, EACS-I, Nordic — все серии в наличии. Монтаж от 400 р., гарантия 3 года.',
  keywords: [
    'кондиционер Electrolux Гомель',
    'купить Electrolux Гомель',
    'Electrolux кондиционер цена Гомель',
    'установка Electrolux Гомель',
    'сплит система Electrolux Гомель',
    'Electrolux EACS Гомель',
    'официальный дилер Electrolux Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-electrolux-gomel' },
  openGraph: {
    title: 'Кондиционеры Electrolux в Гомеле — от 1 490 р. с установкой',
    description: 'Официальный дилер Electrolux. Все серии в наличии, монтаж в день заказа.',
    url: 'https://aircom-fort.by/articles/konditsioner-electrolux-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционеры Electrolux в Гомеле — купить с установкой от 1 490 р.',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-electrolux-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит кондиционер Electrolux с установкой в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер Electrolux с установкой под ключ в Гомеле — от 1 490 р. (EACS-09 + монтаж до 3 м трассы). Инверторные модели серии EACS-I — от 1 690 р. с установкой. Гарантия производителя 3 года.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой кондиционер Electrolux лучше выбрать для квартиры?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для квартиры рекомендуем серию Electrolux EACS-I (инверторная) — тихая, экономичная, работает на обогрев до −15°C. Для небольшой комнаты 20–25 м² подойдёт модель 09 (9 000 BTU), для 30–35 м² — модель 12 (12 000 BTU).',
      },
    },
    {
      '@type': 'Question',
      name: 'Есть ли у Electrolux гарантия в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. AirComfort — официальный дилер Electrolux в Гомеле. Гарантия производителя на кондиционеры Electrolux — 2–3 года. При гарантийной поломке мастер выезжает бесплатно.',
      },
    },
    {
      '@type': 'Question',
      name: 'Чем серия Electrolux EACS-I отличается от EACS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EACS — базовая on/off серия: компрессор работает на максимальной мощности. EACS-I — инверторная: плавно регулирует мощность, потребляет на 30–40% меньше электроэнергии и работает тише. Разница в цене окупается за 2–3 сезона.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
