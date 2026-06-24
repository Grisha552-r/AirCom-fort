import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мобильный кондиционер в Гомеле — купить напольный без установки',
  description: 'Мобильные и напольные кондиционеры в Гомеле от 699 р. Ballu, Electrolux, Zanussi. Без монтажа, работает сразу. Доставка в день заказа. Консультация бесплатно.',
  alternates: { canonical: 'https://aircom-fort.by/articles/mobilnyy-konditsioner-gomel' },
  openGraph: {
    title: 'Мобильный кондиционер в Гомеле — купить напольный без установки',
    description: 'Мобильные и напольные кондиционеры: Ballu, Electrolux, Zanussi. Без монтажа, от 699 р. Доставка по Гомелю.',
    url: 'https://aircom-fort.by/articles/mobilnyy-konditsioner-gomel',
    locale: 'ru_BY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Мобильный кондиционер в Гомеле — купить напольный без установки',
    description: 'Мобильные и напольные кондиционеры: Ballu, Electrolux, Zanussi. Без монтажа, от 699 р. Доставка по Гомелю.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Мобильный кондиционер в Гомеле — купить напольный без установки 2026',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/mobilnyy-konditsioner-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Можно ли использовать мобильный кондиционер без вентиляционного шланга?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Нет. Мобильный кондиционер в обязательном порядке выводит горячий воздух через гибкий шланг диаметром 15 см в окно или вентиляционное отверстие. Без шланга устройство будет одновременно охлаждать и нагревать воздух — без эффекта. Установка занимает 10–15 минут и не требует инструментов.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит мобильный кондиционер в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Мобильный кондиционер в Гомеле стоит от 699 р. (Ballu на 9 000 BTU) до 1 299 р. (инверторные модели Electrolux на 12 000 BTU). Средняя цена популярной модели на 9 000–12 000 BTU — 850–1 050 р. Установка не нужна — только подключение шланга к окну.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой мобильный кондиционер лучше: Ballu или Electrolux?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для большинства задач Ballu — оптимальный выбор по соотношению цена/качество (от 699 р., тихий, надёжный). Electrolux предпочтительнее, если нужна инверторная технология, более тихая работа (40–42 дБ) или дизайн премиум-класса — цена от 950 р. Обе марки продаём официально с гарантией.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой мощности мобильный кондиционер нужен для комнаты 20 м²?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для комнаты 20 м² достаточно 9 000 BTU (2,6 кВт). Для 25–30 м² — 12 000 BTU (3,5 кВт). Правило: 1 кВт на каждые 10 м². Если потолки выше 2,7 м или большое остекление — берите модель на ступень мощнее.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли установить мобильный кондиционер в квартире без разрешения?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Мобильный кондиционер — переносное устройство, для которого не нужны ни разрешение ЖЭУ, ни монтаж внешнего блока на фасад. Достаточно вставить шланг в форточку или приоткрытое окно. Идеально для съёмного жилья и там, где ТСЖ запрещает крепить наружный блок.',
      },
    },
    {
      '@type': 'Question',
      name: 'Насколько мобильный кондиционер шумнее сплит-системы?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Мобильный кондиционер работает в диапазоне 44–52 дБ (сравните: холодильник — 45 дБ, разговор — 60 дБ). Сплит-система на той же мощности — 22–32 дБ. Разница ощутима ночью. Если тишина важна — выбирайте инверторный напольный кондиционер (от 40 дБ) или сплит-систему.',
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
