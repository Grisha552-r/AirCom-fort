import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мобильный или сплит-система — какой кондиционер выбрать?',
  description: 'Мобильный — от 890 р., без сверления, сразу готов. Сплит — мощнее, тише, дороже. Честное сравнение: что взять для квартиры или дачи в Гомеле.',
  keywords: ['мобильный кондиционер', 'мобильный или сплит система', 'кондиционер без установки', 'мобильный кондиционер Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/mobilnyy-ili-split' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Мобильный или сплит-система — какой кондиционер выбрать?',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/mobilnyy-ili-split',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Нужна ли установка мобильного кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Нет. Мобильный кондиционер не требует монтажа: нужно только вывести гофрированный шланг в окно или форточку. Это идеальный вариант для арендованных квартир или помещений, где нельзя сверлить стены.',
      },
    },
    {
      '@type': 'Question',
      name: 'Мобильный кондиционер или сплит — что лучше?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Сплит-система эффективнее, тише и экономичнее мобильного кондиционера. Мобильный — дешевле, не требует монтажа и его можно переставить из комнаты в комнату. Если есть возможность установки сплита — выбирайте его. Мобильный подходит как временное решение или при невозможности монтажа.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой мобильный кондиционер выбрать для комнаты 20 м²?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для комнаты площадью 20 м² подойдёт мобильный кондиционер мощностью 2–2,5 кВт (7 000–9 000 BTU). Учтите, что мобильный кондиционер менее эффективен сплита той же мощности, поэтому для южной стороны или жаркого помещения лучше взять на 20% мощнее.',
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
