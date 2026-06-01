import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function BalluGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры Ballu в Гомеле' },
    ],
  };

  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционеры Ballu в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционеры Ballu в Гомеле — купить с установкой от 1 290 р.</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Ballu — один из самых популярных брендов в Гомеле. Широкий выбор инверторных и on/off моделей, доступная цена и официальная гарантия 2 года. AirComfort — авторизованный дилер Ballu, продаём и устанавливаем под ключ в день заказа.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Серии кондиционеров Ballu</h2>
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
                ['BSAGI / BSDI', 'Инвертор', '21–24 дБ', 'Экономия 40%, обогрев до −15°C'],
                ['Platinum Evolution', 'Инвертор', '19 дБ', 'Самый тихий, R32, класс A++'],
                ['BSW / BSWH', 'On/Off', '26–28 дБ', 'Бюджет, надёжный базовый вариант'],
                ['Platinum DC', 'Инвертор', '20 дБ', 'Wi-Fi, 4D поток воздуха'],
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на Ballu с установкой в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr></thead>
            <tbody>
              {[
                ['Ballu BSAGI-09HN8 (инвертор)', 'до 25 м²', 'от 1 290 р.'],
                ['Ballu BSAGI-12HN8 (инвертор)', 'до 35 м²', 'от 1 490 р.'],
                ['Ballu BSW-09HN1 (on/off)', 'до 25 м²', 'от 990 р.'],
                ['Ballu BSW-12HN1 (on/off)', 'до 35 м²', 'от 1 090 р.'],
                ['Ballu Platinum BSEI-09HN8', 'до 25 м²', 'от 1 690 р.'],
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Почему выбирают Ballu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Доступная цена', 'Ballu — один из самых доступных брендов при хороших характеристиках. On/off модели — от 590 р.'],
            ['Широкий выбор', '111 моделей в каталоге AirComfort: 7 000–24 000 BTU, разные серии и исполнения.'],
            ['Инвертор в базе', 'Серия BSAGI — полноценный инвертор, экономит 30–40% электроэнергии.'],
            ['Работа в мороз', 'Инверторные модели работают на обогрев при −15°C, серия Arctic — до −25°C.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Купить Ballu в Гомеле с установкой</p>
          <p className="text-gray-700 text-sm mb-3">Позвоните — подберём нужную серию и мощность, рассчитаем стоимость под ключ.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">→ Инвертор или обычный кондиционер — что выгоднее</Link>
            <Link href="/articles/konditsioner-electrolux-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Electrolux в Гомеле</Link>
            <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">→ Как выбрать кондиционер для квартиры</Link>
          </div>
        </div>
        <Link href="/products/split-ballu" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть кондиционеры Ballu →</Link>
      </main>
    </ArticleShell>
  );
}
