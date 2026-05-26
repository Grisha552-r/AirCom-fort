import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Кондиционеры Haier в Гомеле' },
  ],
};

const MODELS = [
  { series: 'AS09NS4ERA', name: 'Haier AS09NS4ERA', btu: '9 000', area: '25 м²', price: '950', type: 'Инвертор', note: 'Хит' },
  { series: 'AS12NS4ERA', name: 'Haier AS12NS4ERA', btu: '12 000', area: '35 м²', price: '1 090', type: 'Инвертор', note: '' },
  { series: 'AS18NS4ERA', name: 'Haier AS18NS4ERA', btu: '18 000', area: '50 м²', price: '1 390', type: 'Инвертор', note: '' },
  { series: 'Pearl AS09PM5HRA', name: 'Haier Pearl AS09PM5HRA', btu: '9 000', area: '25 м²', price: '1 090', type: 'Инвертор', note: 'Тихий 22 дБ' },
  { series: 'Flexis AS09HF', name: 'Haier Flexis AS09HF2HRA', btu: '9 000', area: '25 м²', price: '1 190', type: 'Инвертор', note: 'Wi-Fi' },
  { series: 'AS12HF2HRA', name: 'Haier Flexis AS12HF2HRA', btu: '12 000', area: '35 м²', price: '1 390', type: 'Инвертор', note: '' },
];

export default function HaierPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Кондиционеры Haier в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Кондиционеры Haier в Гомеле — купить с установкой от 1 350 р.
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Haier — ведущий мировой производитель климатической техники. Главное преимущество бренда: встроенный Wi-Fi в большинстве инверторных моделей без доплаты, управление через приложение hOn с телефона. В AirComfort можно купить кондиционер Haier в Гомеле с установкой под ключ — мастер приедет в день заказа.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">AirComfort — официальный дилер Haier в Гомеле</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✓ Официальная гарантия производителя 2 года</li>
            <li>✓ Wi-Fi управление через приложение hOn — во многих моделях в базе</li>
            <li>✓ Установка в день заказа или на следующий день</li>
            <li>✓ Гарантия на монтажные работы 1 год</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Цены на кондиционеры Haier с установкой в Гомеле</h2>
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

        <Link href="/products/split-haier" className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors mb-10">
          Смотреть все кондиционеры Haier →
        </Link>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему Haier — лучший выбор для умного дома</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: 'Wi-Fi без доплаты',
              desc: 'Большинство инверторных моделей Haier поставляются с Wi-Fi модулем в базовой комплектации. Управляйте кондиционером через приложение hOn — включение, выключение, расписание, мониторинг температуры.',
            },
            {
              title: 'Self-cleaning — самоочистка',
              desc: 'Технология Auto-clean: после выключения кондиционер в течение 30 минут высушивает теплообменник, предотвращая рост бактерий и плесени. Меньше чисток, чище воздух.',
            },
            {
              title: 'Инверторный компрессор',
              desc: 'Все актуальные модели Haier — инверторные. Компрессор плавно регулирует мощность: быстро охлаждает и поддерживает температуру с минимальным потреблением энергии.',
            },
            {
              title: 'Работа в мороз',
              desc: 'Серия Flexis и Pearl работают на обогрев до −20°C. Это позволяет использовать кондиционер как основной источник тепла весной и осенью, снижая затраты на отопление.',
            },
          ].map(item => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 text-sm mb-2">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать кондиционер Haier по мощности</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { area: 'до 20 м²', model: 'AS07NS4ERA', btu: '7 000 BTU' },
            { area: '20–25 м²', model: 'AS09NS4ERA', btu: '9 000 BTU' },
            { area: '25–35 м²', model: 'AS12NS4ERA', btu: '12 000 BTU' },
            { area: '35–50 м²', model: 'AS18NS4ERA', btu: '18 000 BTU' },
          ].map(item => (
            <div key={item.area} className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">{item.area}</p>
              <p className="font-bold text-gray-900 text-sm mb-1">{item.model}</p>
              <p className="text-xs text-red-600 font-semibold">{item.btu}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Купить кондиционер Haier с установкой в Гомеле</h3>
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
              { href: '/articles/konditsioner-ballu-gomel', label: 'Кондиционеры Ballu в Гомеле' },
              { href: '/articles/invertor-ili-obychnyy', label: 'Инвертор или обычный — что лучше' },
              { href: '/articles/tikhiy-konditsioner-dlya-spalni', label: 'Тихий кондиционер для спальни' },
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
