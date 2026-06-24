import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function VicoolGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры Vicool в Гомеле' },
    ],
  };

  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционеры Vicool в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционеры Vicool в Гомеле — купить с установкой</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: июнь 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Vicool — современный бренд климатической техники, выпускаемой на заводе TCL. AirComfort продаёт и устанавливает инверторные кондиционеры Vicool двух линеек: VIERA и PRO Light, под ключ в день заказа.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Линейки кондиционеров Vicool</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Серия</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Шум</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Особенности</th>
            </tr></thead>
            <tbody>
              {[
                ['VIERA', 'Инвертор', 'от 22 дБ', 'Класс A++/A+, встроенный Wi-Fi, R32, гарантия 3 года'],
                ['PRO Light', 'Инвертор', 'от 19 дБ', 'Класс A+++, угольная и серебряная фильтрация, гарантия 5 лет'],
              ].map(([series, type, noise, features], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{series}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">{type}</td>
                  <td className="p-3 border border-gray-200">{noise}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на Vicool с установкой в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr></thead>
            <tbody>
              {[
                ['Vicool VIERA VCI-DC09VI', 'до 25 м²', 'от 2 149 р.'],
                ['Vicool VIERA VCI-DC12VI', 'до 35 м²', 'от 2 299 р.'],
                ['Vicool VIERA VCI-DC18VI', 'до 50 м²', 'от 3 599 р.'],
                ['Vicool PRO Light VCI-DC09PRO', 'до 25 м²', 'от 2 499 р.'],
                ['Vicool PRO Light VCI-DC12PRO', 'до 35 м²', 'от 2 699 р.'],
              ].map(([model, area, price], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{model}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{area}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Почему выбирают Vicool</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Завод TCL', 'Производство на мощностях TCL — одного из крупнейших заводов климатической техники в мире.'],
            ['Долгая гарантия', 'VIERA — 3 года, PRO Light — 5 лет. Одна из самых долгих гарантий среди брендов в каталоге AirComfort.'],
            ['Тихая работа', 'PRO Light работает от 19 дБ — подходит для спальни и детской.'],
            ['Хладагент R32', 'Современный экологичный хладагент во всех моделях линейки.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Купить Vicool в Гомеле с установкой</p>
          <p className="text-gray-700 text-sm mb-3">Позвоните — подберём нужную серию и мощность, рассчитаем стоимость под ключ.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">→ Инвертор или обычный кондиционер — что выгоднее</Link>
            <Link href="/articles/konditsioner-haier-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Haier в Гомеле</Link>
            <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">→ Как выбрать кондиционер для квартиры</Link>
          </div>
        </div>
        <Link href="/products/split-vicool" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть кондиционеры Vicool →</Link>
      </main>
    </ArticleShell>
  );
}
