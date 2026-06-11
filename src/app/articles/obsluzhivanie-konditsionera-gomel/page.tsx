import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Обслуживание кондиционера в Гомеле — чистка, заправка, ремонт',
  datePublished: '2026-05-25',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  description: 'Обслуживание кондиционеров в Гомеле: чистка, промывка, заправка фреоном, диагностика. Цены и сроки.',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://aircom-fort.by/articles/obsluzhivanie-konditsionera-gomel' },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Обслуживание кондиционера в Гомеле' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Как часто нужно чистить кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Рекомендуется раз в год — лучше весной, перед началом сезона. При интенсивном использовании (офис, кафе, пыльное помещение) — раз в полгода. Регулярная чистка продлевает срок службы на 3–5 лет.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что входит в техническое обслуживание кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартное ТО включает: снятие и промывку фильтров, чистку теплообменника внутреннего блока, проверку дренажной системы, очистку дренажного лотка, проверку давления фреона, проверку электрических соединений и тестирование всех режимов.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит обслуживание кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Чистка кондиционера в Гомеле — от 100 р. Полное ТО с промывкой теплообменника — от 100 р. Заправка фреоном R410A — от 60 р. Диагностика — бесплатно при проведении обслуживания.',
      },
    },
  ],
};

const SERVICES = [
  { name: 'Чистка фильтров', price: 'от 30 р.', desc: 'Снятие, промывка, просушка. Убираем пыль, плесень, бактерии.' },
  { name: 'Чистка теплообменника', price: 'от 100 р.', desc: 'Промывка внутреннего блока спецраствором. Восстанавливает производительность.' },
  { name: 'Чистка наружного блока', price: 'от 40 р.', desc: 'Продувка и промывка радиатора наружного блока.' },
  { name: 'Чистка дренажа', price: 'от 30 р.', desc: 'Прочистка дренажной трубки, устраняет течь воды внутрь.' },
  { name: 'Заправка фреоном R32', price: 'от 70 р.', desc: 'Современные инверторные модели. Включает проверку давления.' },
  { name: 'Заправка фреоном R410A', price: 'от 60 р.', desc: 'Большинство моделей 2015–2023 г. выпуска.' },
  { name: 'Дезинфекция', price: 'от 20 р.', desc: 'Антибактериальная обработка. Устраняет запах и грибок.' },
  { name: 'Полное ТО', price: 'от 100 р.', desc: 'Всё включено: чистка, дренаж, проверка фреона, дезинфекция.' },
];

export default function ObsluzhivaniePage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-crimson-700">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-crimson-700">Статьи</Link>
          {' / '}
          <span>Обслуживание кондиционера в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Обслуживание кондиционера в Гомеле — чистка, заправка, ремонт
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Кондиционер, который не обслуживался 2–3 года, потребляет на 20–30% больше электроэнергии
          и охлаждает хуже нового. Загрязнённый теплообменник — идеальная среда для плесени и
          бактерий, которые потом распыляются в воздух. Разберём, что включает правильное обслуживание
          и сколько это стоит в Гомеле в 2026 году.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на обслуживание кондиционера в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-red-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Услуга</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Цена</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Что входит</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((s, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{s.name}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold whitespace-nowrap">{s.price}</td>
                  <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Диагностика бесплатно</p>
          <p className="text-gray-700 text-sm">
            При проведении обслуживания мастер бесплатно проверяет состояние кондиционера:
            давление фреона, работу компрессора, состояние контактов. Если найдётся проблема —
            сообщим заранее.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что входит в полное ТО кондиционера</h2>
        <div className="space-y-3 mb-8">
          {[
            ['Внешний осмотр', 'Проверяем состояние корпуса, трассы, дренажа, наружного блока.'],
            ['Чистка фильтров', 'Снимаем, моем, просушиваем фильтры. Убираем пыль, грибок, аллергены.'],
            ['Промывка теплообменника', 'Наносим специальный раствор, смываем загрязнения. Восстанавливает КПД.'],
            ['Чистка дренажного лотка', 'Убираем слизь и налёт, предотвращаем засор дренажа.'],
            ['Проверка фреона', 'Измеряем давление манометром. Если нужна дозаправка — сообщим и сделаем.'],
            ['Дезинфекция', 'Антибактериальный спрей внутри блока. Устраняет запах, уничтожает грибок.'],
            ['Тестирование', 'Запускаем кондиционер, проверяем охлаждение, обогрев, вентиляцию.'],
          ].map(([title, desc], i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Частые вопросы об обслуживании</h2>
        <div className="space-y-3 mb-8">
          {faqLd.mainEntity.map((faq, i) => (
            <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-gray-800 text-sm hover:bg-gray-50 list-none">
                {faq.name}
                <svg className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как вызвать мастера</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Выезд в удобное для вас время — в тот же день или на следующий.
          Работаем по всему Гомелю и Гомельской области.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Звоните:{' '}
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
            +375 29 105-06-94
          </a>
          {' '}или пишите в{' '}
          <a href="https://t.me/AirComforto" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:underline">Telegram</a>
          {' / '}
          <a href="viber://chat?number=%2B375291050694" className="text-purple-600 font-semibold hover:underline">Viber</a>.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/chistka-i-obsluzhivanie" className="block text-red-700 hover:underline text-sm">
              → Чистка кондиционера — подробное руководство
            </Link>
            <Link href="/articles/zapravka-konditsionera-gomel" className="block text-red-700 hover:underline text-sm">
              → Заправка фреоном в Гомеле — цены 2026
            </Link>
            <Link href="/articles/remont-konditsionera-gomel" className="block text-red-700 hover:underline text-sm">
              → Ремонт кондиционера в Гомеле
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/konditsionery-gomel"
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
          >
            Купить новый кондиционер →
          </Link>
          <Link
            href="/services"
            className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-400 hover:text-red-700 transition-colors"
          >
            Все услуги и цены →
          </Link>
        </div>
      </main>
    </ArticleShell>
  );
}
