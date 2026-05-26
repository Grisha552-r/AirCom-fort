import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Кондиционеры LG в Гомеле' },
  ],
};

const MODELS = [
  { series: 'S09EQ', name: 'LG S09EQ', btu: '9 000', area: '25 м²', price: '1 290', type: 'Инвертор', note: 'Хит' },
  { series: 'S12EQ', name: 'LG S12EQ', btu: '12 000', area: '35 м²', price: '1 490', type: 'Инвертор', note: '' },
  { series: 'S18EQ', name: 'LG S18EQ', btu: '18 000', area: '50 м²', price: '1 890', type: 'Инвертор', note: '' },
  { series: 'ArtCool S09EQ', name: 'LG ArtCool S09EQ', btu: '9 000', area: '25 м²', price: '1 790', type: 'Инвертор', note: 'Дизайн' },
  { series: 'ArtCool S12EQ', name: 'LG ArtCool S12EQ', btu: '12 000', area: '35 м²', price: '1 990', type: 'Инвертор', note: '' },
  { series: 'PC09SQ', name: 'LG Dualcool PC09SQ', btu: '9 000', area: '25 м²', price: '1 390', type: 'Инвертор', note: 'ThinQ' },
];

export default function LGPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Кондиционеры LG в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Кондиционеры LG в Гомеле — купить с установкой от 1 690 р.
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          LG — южнокорейский бренд с более чем 30-летним опытом производства климатической техники. Кондиционеры LG отличаются тихой работой (от 21 дБ), длительным сроком службы и расширенной гарантией — 3 года на оборудование и 5 лет на компрессор. В AirComfort можно купить кондиционер LG в Гомеле с установкой под ключ.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">AirComfort — официальный дилер LG в Гомеле</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✓ Официальная гарантия производителя 3 года (компрессор — 5 лет)</li>
            <li>✓ Самые тихие в своём классе — от 21 дБ</li>
            <li>✓ Установка в день заказа или на следующий день</li>
            <li>✓ Гарантия на монтажные работы 1 год</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Цены на кондиционеры LG с установкой в Гомеле</h2>
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

        <Link href="/products/split-lg" className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors mb-10">
          Смотреть все кондиционеры LG →
        </Link>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Преимущества кондиционеров LG</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: 'Гарантия 3 года',
              desc: 'LG предоставляет одну из лучших гарантий в отрасли: 3 года на оборудование и 5 лет на компрессор. Это в 1,5 раза больше, чем у большинства конкурентов.',
            },
            {
              title: 'Самые тихие в классе — 21 дБ',
              desc: 'Инверторные модели LG S-серии работают от 21 дБ при минимальной скорости. Для сравнения — шёпот человека составляет около 30 дБ. Идеально для спальни и переговорных комнат.',
            },
            {
              title: 'ThinQ — умное управление',
              desc: 'Приложение LG ThinQ позволяет управлять кондиционером с телефона, создавать расписание, получать уведомления о состоянии фильтра. Совместимо с Google Home и Amazon Alexa.',
            },
            {
              title: 'Dual Inverter Compressor',
              desc: 'Запатентованный двойной инверторный компрессор LG работает в более широком диапазоне частот. Результат: температура поддерживается точнее, потребление электроэнергии ниже на 40%.',
            },
          ].map(item => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 text-sm mb-2">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">LG S-серия vs ArtCool: в чём разница</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Характеристика</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">LG S-серия</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">LG ArtCool</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Шум (мин.)', '21 дБ', '21 дБ'],
                ['Инвертор', 'Да', 'Да'],
                ['ThinQ Wi-Fi', 'Да', 'Да'],
                ['Дизайн панели', 'Стандартный белый', 'Зеркальный (чёрный/серебро)'],
                ['Цена 9 000 BTU', 'от 1 290 р.', 'от 1 790 р.'],
              ].map(([feature, s, artcool], i) => (
                <tr key={feature} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-3 border border-gray-200 font-medium">{feature}</td>
                  <td className="px-4 py-3 border border-gray-200">{s}</td>
                  <td className="px-4 py-3 border border-gray-200">{artcool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          Если приоритет — тишина и экономия, достаточно S-серии. ArtCool выбирают, когда важна эстетика: зеркальная панель превращает кондиционер в элемент декора. По техническим характеристикам модели идентичны.
        </p>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Купить кондиционер LG с установкой в Гомеле</h3>
          <p className="text-gray-300 text-sm mb-4">Позвоните — поможем выбрать между S-серией и ArtCool под ваш интерьер и бюджет. Выезд в день заказа.</p>
          <a href="tel:+375291050694" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            +375 29 105-06-94
          </a>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/tikhiy-konditsioner-dlya-spalni', label: 'Тихий кондиционер для спальни' },
              { href: '/articles/konditsioner-dlya-ofisa-gomel', label: 'Кондиционер для офиса в Гомеле' },
              { href: '/articles/konditsioner-haier-gomel', label: 'Кондиционеры Haier в Гомеле' },
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
