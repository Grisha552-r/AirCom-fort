import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Инверторный кондиционер в Гомеле' },
  ],
};

const MODELS = [
  { brand: 'Ballu', series: 'BSAGI-09HN8', btu: '9 000', area: '25 м²', price: 'от 1 290 р.', link: '/products/split-ballu', badge: 'Лучшая цена' },
  { brand: 'Electrolux', series: 'EACS-I-09HAL/N8', btu: '9 000', area: '25 м²', price: 'от 1 690 р.', link: '/products/split-electrolux', badge: 'Надёжность' },
  { brand: 'Haier', series: 'AS09NS4ERA', btu: '9 000', area: '25 м²', price: 'от 1 350 р.', link: '/products/split-haier', badge: 'Wi-Fi' },
  { brand: 'LG', series: 'S09EQ', btu: '9 000', area: '25 м²', price: 'от 1 690 р.', link: '/products/split-lg', badge: 'Гарантия 3 г.' },
  { brand: 'Ballu', series: 'BSAGI-12HN8', btu: '12 000', area: '35 м²', price: 'от 1 390 р.', link: '/products/split-ballu', badge: 'До 35 м²' },
  { brand: 'Electrolux', series: 'EACS-I-12HAL/N8', btu: '12 000', area: '35 м²', price: 'от 1 890 р.', link: '/products/split-electrolux', badge: '' },
];

export default function InvertorPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Инверторный кондиционер в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Инверторный кондиционер в Гомеле — купить с установкой, цены 2026
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Инверторный кондиционер — это не просто маркетинговый термин. Это технология, которая реально экономит деньги на электроэнергии и продлевает срок службы техники. В Гомеле инверторные кондиционеры продаются с установкой от 1 290 р. — и в большинстве случаев разница с On/Off моделями отбивается уже за первый сезон.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Чем инвертор отличается от обычного кондиционера</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Параметр</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Инверторный</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">On/Off</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Компрессор', 'Плавно регулирует обороты', 'Вкл./выкл. на полной мощности'],
                ['Потребление', 'На 30–40% меньше', 'Стандартное'],
                ['Шум', 'От 19–22 дБ в режиме поддержания', 'Резкие циклы включения (31–36 дБ)'],
                ['Точность температуры', '±0,5°C', '±2–3°C (перепады)'],
                ['Срок службы компрессора', 'Дольше — нет ударных нагрузок', 'Меньше — из-за частых запусков'],
                ['Работа на обогрев', 'До −15...−25°C в зависимости от модели', 'До −5...−7°C'],
                ['Цена покупки', 'На 100–300 р. дороже', 'Дешевле'],
              ].map(([param, inv, onoff], i) => (
                <tr key={param} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-3 border border-gray-200 font-medium">{param}</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700">{inv}</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">{onoff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Инверторные кондиционеры с установкой в Гомеле — цены 2026</h2>

        <div className="space-y-3 mb-8">
          {MODELS.map((m, i) => (
            <div key={`${m.brand}-${m.series}`} className={`border rounded-xl p-4 ${i === 0 ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">{m.brand} {m.series}</span>
                    {m.badge && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{m.badge}</span>}
                  </div>
                  <p className="text-xs text-gray-500">{m.btu} BTU · {m.area} · Инвертор</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-700">{m.price}</p>
                  <p className="text-xs text-gray-400">с монтажом</p>
                </div>
              </div>
              <Link href={m.link} className="text-xs text-red-700 hover:underline mt-2 block">Смотреть в каталоге →</Link>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Когда инвертор оправдан, а когда нет</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="font-semibold text-green-800 mb-3">Берите инвертор, если:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-green-600">✓</span>Используете кондиционер каждый день</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span>Кондиционер работает 6+ часов в сутки</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span>Хотите тишину — спальня, детская, кабинет</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span>Планируете использовать на обогрев зимой</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span>Важен комфорт — ровная температура без перепадов</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="font-semibold text-gray-800 mb-3">On/Off подойдёт, если:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-gray-500">—</span>Дача или гараж — редкое, непостоянное использование</li>
              <li className="flex gap-2"><span className="text-gray-500">—</span>Нужен минимальный бюджет при покупке</li>
              <li className="flex gap-2"><span className="text-gray-500">—</span>Кондиционер для склада или технического помещения</li>
              <li className="flex gap-2"><span className="text-gray-500">—</span>Временное решение на 1–2 сезона</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Как распознать инверторный кондиционер по маркировке</h2>

        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <div className="space-y-2 text-sm">
            {[
              { brand: 'Electrolux', inv: 'EACS-I-09 (буква "I" в названии)', notinv: 'EACS-09 (без "I")' },
              { brand: 'Ballu', inv: 'BSAGI, BSDI, BSEI, Platinum', notinv: 'BSW, BSWH' },
              { brand: 'Haier', inv: 'AS09NS4ERA, Pearl, Flexis (все актуальные)', notinv: 'Старые серии HSU (редкость)' },
              { brand: 'LG', inv: 'S-серия, ArtCool, PC (все актуальные)', notinv: 'Практически все модели LG — инверторы' },
            ].map(item => (
              <div key={item.brand} className="grid grid-cols-3 gap-3">
                <span className="font-semibold text-gray-800">{item.brand}</span>
                <span className="text-green-700">{item.inv}</span>
                <span className="text-gray-500 text-xs">{item.notinv}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Купить инверторный кондиционер с установкой в Гомеле</h3>
          <p className="text-gray-300 text-sm mb-4">Поможем подобрать инверторную модель под площадь и бюджет. Установка в день заказа, гарантия 1 год на монтаж.</p>
          <a href="tel:+375291050694" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            +375 29 105-06-94
          </a>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/invertor-ili-obychnyy', label: 'Инвертор или обычный — полное сравнение' },
              { href: '/articles/kak-vybrat-konditsioner', label: 'Как выбрать кондиционер' },
              { href: '/articles/konditsioner-electrolux-gomel', label: 'Кондиционеры Electrolux в Гомеле' },
              { href: '/articles/tsena-ustanovki-konditsionera', label: 'Сколько стоит установка' },
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
