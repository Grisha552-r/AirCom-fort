import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Какой кондиционер выбрать для комнаты 20 кв м в Гомеле — советы 2025',
  description: 'Как правильно выбрать кондиционер для комнаты 20, 25 или 30 кв м. Расчёт мощности, инвертор или on/off, лучшие модели 2025. Советы мастеров AirComfort.',
  keywords: ['кондиционер для комнаты 20 кв м', 'выбрать кондиционер для комнаты', 'какой кондиционер нужен для комнаты', 'кондиционер 20 квадратов Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-dlya-komnaty' },
  openGraph: {
    title: 'Какой кондиционер выбрать для комнаты — советы 2025',
    description: 'Расчёт мощности, инвертор или on/off, топ моделей для квартиры.',
    url: 'https://aircom-fort.by/articles/konditsioner-dlya-komnaty',
    locale: 'ru_BY',
    type: 'article',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какой кондиционер выбрать для комнаты 20 кв м?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для комнаты 20 кв м достаточно кондиционера мощностью 07 (2,1 кВт) или 09 (2,7 кВт). Модели 09 предпочтительнее — у них есть запас по мощности для жарких дней. Рекомендуем инверторный тип: он экономичнее и поддерживает точную температуру.',
      },
    },
    {
      '@type': 'Question',
      name: 'Инверторный или обычный кондиционер — что выбрать?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Инверторный кондиционер потребляет на 30–40% меньше электроэнергии, работает тише и точнее поддерживает температуру. On/off (обычный) дешевле на 20–30% при покупке, но обходится дороже в эксплуатации. При использовании более 3 месяцев в году инвертор выгоднее.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как рассчитать мощность кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ориентировочный расчёт: 1 кВт на 10 кв м + 20% запас. Для комнаты 20 кв м: 2 кВт × 1,2 = 2,4 кВт. Выбирайте модель «09» (2,7 кВт). Для солнечных комнат или угловых квартир запас должен быть больше.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой кондиционер лучше для спальни?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для спальни важен низкий уровень шума. Выбирайте инверторные модели с режимом «Сон» и уровнем шума внутреннего блока до 26 дБ. Хорошие варианты: Electrolux серии Nordic, Ballu серии Platinum, Haier серии Pearl.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
