import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function LgGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры LG в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционеры LG в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционеры LG в Гомеле — купить с установкой от 1 690 р.</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">LG — лидер в производстве инверторных кондиционеров с запатентованной технологией Dual Inverter Compressor. Охлаждает на 40% быстрее, работает тише 21 дБ, гарантия 3 года и 5 лет на компрессор.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Серии LG в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Серия</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Шум</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Особенности</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr></thead>
            <tbody>
              {[
                ['LG S-серия (EQ)', '21 дБ', 'Dual Inverter, ThinQ Wi-Fi', 'от 1 690 р.'],
                ['LG ArtCool Mirror', '21 дБ', 'Зеркальный корпус, ThinQ', 'от 2 200 р.'],
                ['LG Deluxe', '21 дБ', 'Ионизатор, очистка воздуха', 'от 2 490 р.'],
                ['LG DUALCOOL Premium', '19 дБ', 'Самый тихий, HEPA-фильтр', 'от 2 790 р.'],
              ].map(([s, n, f, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{s}</td>
                  <td className="p-3 border border-gray-200">{n}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{f}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">LG ArtCool — кондиционер-декор</p>
          <p className="text-gray-700 text-sm">Зеркальная панель, вписывается в любой интерьер. Технически идентичен S-серии: инвертор, 21 дБ, ThinQ. Популярный выбор для гостиных с дизайнерским ремонтом.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Dual Inverter', 'Охлаждает быстрее на 40%, расход энергии ниже на 70% по сравнению с on/off.'],
            ['Гарантия 3 года', 'На компрессор — 5 лет. Лучшее гарантийное предложение среди массовых брендов.'],
            ['21 дБ', 'Самый тихий в своём классе. Шум — как лёгкий шелест листьев.'],
            ['До −25°C', 'Работает на обогрев при −25°C без дополнительного нагревателя.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Купить LG в Гомеле с установкой</p>
          <p className="text-gray-700 text-sm mb-3">Официальный дилер LG. Гарантия 3 года, монтаж в день заказа.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/tikhiy-konditsioner-dlya-spalni" className="block text-red-700 hover:underline text-sm">→ Тихий кондиционер для спальни — рейтинг 2026</Link>
            <Link href="/articles/konditsioner-haier-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Haier в Гомеле</Link>
            <Link href="/articles/invertor-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">→ Инверторный кондиционер в Гомеле</Link>
          </div>
        </div>
        <Link href="/products/split-lg" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть кондиционеры LG →</Link>
      </main>
    </ArticleShell>
  );
}
