import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционер под ключ в Гомеле — цены и что входит в пакет',
  description: 'Кондиционер под ключ в Гомеле: покупка + монтаж + гарантия от AirComfort. Климатические системы под ключ от 790 р. Один договор — никаких сюрпризов.',
  keywords: [
    'кондиционер под ключ Гомель',
    'кондиционер под ключ цена',
    'климатические системы под ключ Гомель',
    'купить кондиционер с установкой под ключ',
    'кондиционер с монтажом Гомель',
    'установка кондиционера под ключ цена Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-pod-klyuch' },
  openGraph: {
    title: 'Кондиционер под ключ в Гомеле — цены',
    description: 'Купите кондиционер с монтажом под ключ. Один визит, один договор, гарантия 1 год.',
    url: 'https://aircom-fort.by/articles/konditsioner-pod-klyuch',
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
      name: 'Что значит кондиционер под ключ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер под ключ — это комплексная услуга: выбор модели, доставка, монтаж обоих блоков, подключение электрики и дренажа, вакуумирование и пуско-наладка. Вы платите одну сумму и получаете работающую систему.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит кондиционер под ключ в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость зависит от модели. Начальный вариант — от 790 р. (кондиционер ~390 р. + монтаж от 400 р.). Инверторные модели с установкой — от 1050 р.',
      },
    },
    {
      '@type': 'Question',
      name: 'Выгоднее покупать кондиционер с установкой в одном месте?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Один продавец и один монтажник — это единая гарантия, один договор и один контакт при любой проблеме. Плюс нет двойного выезда и накладных расходов.',
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
