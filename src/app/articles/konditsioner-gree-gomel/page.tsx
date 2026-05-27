import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function GreePage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры Gree в Гомеле' },
    ],
  };

  return (
    <ArticleShell>
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-red-600">Главная</Link>
        {' / '}
        <Link href="/articles" className="hover:text-red-600">Статьи</Link>
        {' / '}
        <span>Кондиционеры Gree в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Кондиционеры Gree в Гомеле — цены 2026, установка под ключ
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Gree — крупнейший специализированный производитель кондиционеров в мире, выпускает более
        60 миллионов единиц в год. Компания производит оборудование по OEM-контракту для Daikin,
        что говорит об уровне качества. Собственные серии Gree отличаются надёжностью
        при доступной цене.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Серии и цены кондиционеров Gree</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Серия</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Особенности</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Bora', 'On/Off', 'Базовая серия, надёжный компрессор', 'от 990 р.'],
              ['Lomo', 'Инвертор', 'Тихая работа, R32, A++', 'от 1 190 р.'],
              ['Amber', 'Инвертор', 'Wi-Fi, самоочистка, −15°C', 'от 1 390 р.'],
              ['Soyal', 'Инвертор A++', 'Класс A++, очистка от бактерий', 'от 1 490 р.'],
              ['U-Crown', 'Инвертор', 'Работа до −30°C, прочный корпус', 'от 1 790 р.'],
              ['Cosmo', 'Инвертор', 'Premium-линейка, бесшумный 17 дБ', 'от 2 190 р.'],
            ].map(([series, type, features, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{series}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{type}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{features}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Преимущества Gree</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['№1 в мире', 'Gree — крупнейший в мире специализированный производитель кондиционеров. Более 60 млн единиц в год.'],
          ['OEM для Daikin', 'Gree производит компрессоры и блоки для Daikin — японского лидера премиум-сегмента.'],
          ['Собственные компрессоры', '80% компрессоров Gree производит самостоятельно — контроль качества полного цикла.'],
          ['Широкий модельный ряд', 'От бюджетного Bora до тихого Cosmo с 17 дБ — есть для любой задачи и бюджета.'],
        ].map(([title, text]) => (
          <div key={title} className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gree vs другие бренды</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Бренд</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена 12 BTU с уст.</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Гарантия</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Позиция</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gree Lomo', 'от 1 190 р.', '2 года', 'Инвертор, цена/качество'],
              ['Ballu BSAGI', 'от 1 190 р.', '2 года', 'Инвертор, цена/качество'],
              ['Haier NS4ERA', 'от 1 290 р.', '2 года', 'Wi-Fi, самоочистка'],
              ['LG S12EQ', 'от 1 590 р.', '3 года', 'Dual Inverter, тихий'],
              ['Electrolux EACS-I', 'от 1 490 р.', '2 года', 'Известный бренд'],
            ].map(([brand, price, warranty, note], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{brand}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{warranty}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Установка Gree в Гомеле</p>
        <p className="text-gray-700 text-sm mb-3">
          Монтируем кондиционеры Gree любых серий. Гарантия на установку 2 года.
          Звоните — подберём модель под ваш бюджет и площадь:
        </p>
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/konditsioner-haier-gomel" className="block text-red-700 hover:underline text-sm">
            → Кондиционеры Haier в Гомеле
          </Link>
          <Link href="/articles/invertor-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">
            → Инверторный кондиционер в Гомеле
          </Link>
          <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">
            → Как выбрать кондиционер для квартиры
          </Link>
        </div>
      </div>

      <Link
        href="/products"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
      >
        Посмотреть кондиционеры в наличии →
      </Link>
    </main>
    </ArticleShell>
  );
}
