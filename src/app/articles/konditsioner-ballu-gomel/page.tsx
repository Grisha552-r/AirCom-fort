import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Кондиционеры Ballu в Гомеле' },
  ],
};

const MODELS = [
  { series: 'BSAGI-09HN8', name: 'Ballu BSAGI-09HN8', btu: '9 000', area: '25 м²', price: '890', type: 'Инвертор', note: 'Хит' },
  { series: 'BSAGI-12HN8', name: 'Ballu BSAGI-12HN8', btu: '12 000', area: '35 м²', price: '990', type: 'Инвертор', note: '' },
  { series: 'BSDI-12HN8', name: 'Ballu BSDI-12HN8', btu: '12 000', area: '35 м²', price: '1 090', type: 'Инвертор', note: '' },
  { series: 'BSDI-18HN8', name: 'Ballu BSDI-18HN8', btu: '18 000', area: '50 м²', price: '1 390', type: 'Инвертор', note: '' },
  { series: 'Platinum Evo 09', name: 'Ballu BSPI-09HN8 Platinum', btu: '9 000', area: '25 м²', price: '1 290', type: 'Инвертор', note: 'Тихий 19 дБ' },
  { series: 'BSW-09', name: 'Ballu BSW-09HN1', btu: '9 000', area: '25 м²', price: '690', type: 'On/Off', note: 'Бюджет' },
];

export default function BalluPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Кондиционеры Ballu в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Кондиционеры Ballu в Гомеле — купить с установкой от 1 290 р.
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Ballu — один из самых популярных брендов кондиционеров в Беларуси благодаря широкому ассортименту и соотношению цена/качество. От бюджетных On/Off моделей до тихих инверторных серий Platinum — в AirComfort можно купить кондиционер Ballu в Гомеле с установкой под ключ. Все модели в наличии на складе, монтаж в день заказа.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">AirComfort — официальный дилер Ballu в Гомеле</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✓ Официальная гарантия производителя 2 года</li>
            <li>✓ Все популярные серии в наличии на складе</li>
            <li>✓ Установка в день заказа или на следующий день</li>
            <li>✓ Гарантия на монтажные работы 1 год</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Цены на кондиционеры Ballu с установкой в Гомеле</h2>
        <p className="text-gray-600 text-sm mb-4">Цены указаны за кондиционер без монтажа. Установка под ключ (до 3 м трассы) — +400 р.</p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-3 font-semibold border border-gray-200">Серия</th>
                <th className="text-left px-3 py-3 font-semibold border border-gray-200">Площадь</th>
                <th className="text-left px-3 py-3 font-semibold border border-gray-200">Тип</th>
                <th className="text-left px-3 py-3 font-semibold border border-gray-200">Цена</th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map((m, i) => (
                <tr key={m.series} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="px-3 py-3 border border-gray-200">
                    <span className="font-semibold">{m.series}</span>
                    {m.note && <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{m.note}</span>}
                  </td>
                  <td className="px-3 py-3 border border-gray-200">{m.area}</td>
                  <td className="px-3 py-3 border border-gray-200">{m.type}</td>
                  <td className="px-3 py-3 border border-gray-200 font-semibold text-red-700">от {m.price} р.</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/products/split-ballu" className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors mb-10">
          Смотреть все кондиционеры Ballu →
        </Link>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Серии кондиционеров Ballu: чем отличаются</h2>

        <div className="space-y-5 mb-8">
          {[
            {
              series: 'BSW / BSWH — базовая On/Off серия',
              desc: 'Самые доступные кондиционеры Ballu. On/Off компрессор работает на фиксированной мощности. Подходят для дач, гаражей, временного охлаждения. Главное преимущество — низкая цена от 690 р. Минус — больше потребляют электроэнергии и громче работают.',
              pros: ['От 690 р. — самая доступная цена', 'Простая конструкция', 'Надёжны при редком использовании'],
            },
            {
              series: 'BSAGI / BSDI — инверторные серии',
              desc: 'Основные инверторные серии Ballu для квартир и офисов. Инверторный компрессор плавно регулирует мощность, поддерживает температуру точнее и тише. Экономят 30–40% электроэнергии по сравнению с On/Off. Уровень шума — от 22 дБ.',
              pros: ['Инвертор — 30–40% экономии', 'Тихая работа от 22 дБ', 'Работает на обогрев до −15°C', 'Оптимальная цена для ежедневного применения'],
            },
            {
              series: 'Platinum Evolution — премиум серия',
              desc: 'Топовая линейка Ballu с уровнем шума от 19 дБ — самый тихий кондиционер бренда. Расширенный диапазон обогрева до −25°C, Wi-Fi управление, самоочистка. Идеален для спальни и детской комнаты.',
              pros: ['Уровень шума от 19 дБ', 'Обогрев до −25°C', 'Wi-Fi управление', 'Самоочистка теплообменника'],
            },
          ].map(item => (
            <div key={item.series} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{item.series}</h3>
              <p className="text-gray-700 text-sm mb-3">{item.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {item.pros.map(pro => (
                  <li key={pro} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{pro}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать кондиционер Ballu по мощности</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { area: 'до 20 м²', model: 'BSW-07 / BSAGI-07', btu: '7 000 BTU' },
            { area: '20–25 м²', model: 'BSW-09 / BSAGI-09', btu: '9 000 BTU' },
            { area: '25–35 м²', model: 'BSDI-12 / BSAGI-12', btu: '12 000 BTU' },
            { area: '35–50 м²', model: 'BSDI-18', btu: '18 000 BTU' },
          ].map(item => (
            <div key={item.area} className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">{item.area}</p>
              <p className="font-bold text-gray-900 text-sm mb-1">{item.model}</p>
              <p className="text-xs text-red-600 font-semibold">{item.btu}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Что входит в установку кондиционера Ballu под ключ</h2>

        <ul className="space-y-2 mb-8">
          {[
            'Монтаж внутреннего блока на стену',
            'Монтаж наружного блока на кронштейны',
            'Прокладка медной трассы до 3 м',
            'Подключение электрического кабеля',
            'Вакуумирование трассы',
            'Запуск и проверка всех режимов работы',
            'Инструктаж по использованию',
          ].map(item => (
            <li key={item} className="flex gap-2 text-sm text-gray-700">
              <span className="text-green-600 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Купить кондиционер Ballu с установкой в Гомеле</h3>
          <p className="text-gray-300 text-sm mb-4">Позвоните — поможем выбрать модель под вашу площадь и бюджет. Выезд мастера в день заказа.</p>
          <a href="tel:+375291050694" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            +375 29 105-06-94
          </a>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/konditsioner-electrolux-gomel', label: 'Кондиционеры Electrolux в Гомеле' },
              { href: '/articles/tikhiy-konditsioner-dlya-spalni', label: 'Тихий кондиционер для спальни' },
              { href: '/articles/invertor-ili-obychnyy', label: 'Инвертор или обычный — что лучше' },
              { href: '/articles/tsena-ustanovki-konditsionera', label: 'Сколько стоит установка кондиционера' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-sm text-red-700 hover:text-red-800 hover:underline">
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </ArticleShell>
  );
}
