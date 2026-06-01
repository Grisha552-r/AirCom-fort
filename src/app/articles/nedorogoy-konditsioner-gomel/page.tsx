import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function NedorogoyKonditsionerPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Недорогой кондиционер в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Недорогой кондиционер в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Недорогой кондиционер в Гомеле — лучшие модели до 1 500 р. с установкой</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Купить хороший кондиционер в Гомеле можно и за разумные деньги. Разбираем лучшие бюджетные модели с установкой под ключ и объясняем, на чём можно сэкономить, а на чём — нет.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">ТОП недорогих кондиционеров с установкой до 1 500 р.</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr></thead>
            <tbody>
              {[
                ['Mitsudai MD-SNE09AI', 'Инвертор', 'до 25 м²', 'от 1 290 р.'],
                ['Ballu BSW-09HN1', 'On/Off', 'до 25 м²', 'от 990 р.'],
                ['Ballu BSAGI-09HN8', 'Инвертор', 'до 25 м²', 'от 1 290 р.'],
                ['Electrolux EACS-09HA', 'On/Off', 'до 25 м²', 'от 1 090 р.'],
                ['Ballu BSW-12HN1', 'On/Off', 'до 35 м²', 'от 1 090 р.'],
                ['Mitsudai MD-SNE12AI', 'Инвертор', 'до 35 м²', 'от 1 490 р.'],
              ].map(([m, t, a, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{m}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{t}</td>
                  <td className="p-3 border border-gray-200">{a}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">На чём экономить, а на чём нет</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Можно сэкономить: бренд', 'Mitsudai и Ballu BSW — надёжные бюджетные марки. По надёжности не уступают более дорогим.'],
            ['Можно сэкономить: Wi-Fi', 'Если не нужно управление с телефона — смело берите модель без Wi-Fi.'],
            ['Нельзя экономить: монтаж', 'Дешёвый монтаж — дорогой ремонт. Всегда заказывайте установку у проверенных мастеров с гарантией.'],
            ['Нельзя экономить: мощность', 'Покупка слабого кондиционера в надежде сэкономить — ошибка. Он будет работать на максимуме и быстро выйдет из строя.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Лучший бюджетный выбор 2026</p>
          <p className="text-gray-700 text-sm">Mitsudai MD-SNE09AI — 890 р. + монтаж 400 р. = 1 290 р. под ключ. Инверторный, надёжный, 9 000 BTU для комнаты до 27 м². Наш хит продаж среди бюджетных моделей.</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Недорогой кондиционер с установкой в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Подберём модель под ваш бюджет. Монтаж в день заказа, гарантия 1 год.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/konditsioner-mitsudai-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Mitsudai в Гомеле</Link>
            <Link href="/articles/konditsioner-ballu-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Ballu в Гомеле</Link>
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">→ Сколько стоит установка кондиционера</Link>
          </div>
        </div>
        <Link href="/products/split-systems" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть недорогие кондиционеры →</Link>
      </main>
    </ArticleShell>
  );
}
