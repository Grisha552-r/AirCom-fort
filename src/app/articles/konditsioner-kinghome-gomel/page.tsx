import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function KingHomePage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры King Home в Гомеле' },
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
        <span>Кондиционеры King Home в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Кондиционеры King Home в Гомеле — цены 2026, установка под ключ
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 4 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        King Home — доступный бренд климатической техники, популярный в Беларуси и России.
        Производится на современных китайских заводах по международным стандартам качества.
        Хорошая альтернатива более дорогим брендам, если важен бюджет.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на King Home в Гомеле</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['King Home KFRD-25GW/X1C1', 'до 25 м²', 'On/Off', 'от 990 р.'],
              ['King Home KFRD-35GW/X1C1', 'до 35 м²', 'On/Off', 'от 1 190 р.'],
              ['King Home KFRD-25GW/X1C1-INV', 'до 25 м²', 'Инвертор', 'от 1 190 р.'],
              ['King Home KFRD-35GW/X1C1-INV', 'до 35 м²', 'Инвертор', 'от 1 390 р.'],
              ['King Home KFRD-51GW/X1C1', 'до 50 м²', 'On/Off', 'от 1 490 р.'],
              ['King Home KFRD-51GW/X1C1-INV', 'до 50 м²', 'Инвертор', 'от 1 690 р.'],
            ].map(([model, area, type, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{model}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{area}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{type}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">King Home vs другие бренды</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Бренд</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">On/Off 9 BTU с уст.</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Инвертор 9 BTU с уст.</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Гарантия</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['King Home', 'от 990 р.', 'от 1 190 р.', '2 года'],
              ['Mitsudai', 'от 1 090 р.', '—', '1 год'],
              ['Ballu', 'от 1 190 р.', 'от 1 290 р.', '2 года'],
              ['Haier', 'от 1 290 р.', 'от 1 350 р.', '2 года'],
              ['Electrolux', 'от 1 490 р.', 'от 1 790 р.', '2 года'],
              ['LG', '—', 'от 1 690 р.', '3 года'],
            ].map(([brand, onoff, inv, warranty], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{brand}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{onoff}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{inv}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{warranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Для кого подойдёт King Home</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['Бюджет до 1 300 р.', 'King Home on/off — надёжный вариант для охлаждения комнаты до 35 м², если нет задач по обогреву.'],
          ['Временное жильё', 'Если снимаете квартиру или это дача — не стоит переплачивать за известный бренд.'],
          ['Сезонное использование', 'Если кондиционер будет работать только летом — on/off вполне достаточно.'],
          ['Инвертор для экономии', 'Модели King Home с инвертором дешевле аналогов Ballu/Haier на 100–200 р.'],
        ].map(([title, text]) => (
          <div key={title} className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Установка King Home в Гомеле</p>
        <p className="text-gray-700 text-sm mb-3">
          Монтируем все модели King Home. Гарантия на установку 2 года. Звоните:
        </p>
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/nedorogoy-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">
            → Недорогой кондиционер в Гомеле — рейтинг 2026
          </Link>
          <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">
            → Инвертор или обычный — что выгоднее
          </Link>
          <Link href="/articles/konditsioner-ballu-gomel" className="block text-red-700 hover:underline text-sm">
            → Кондиционеры Ballu в Гомеле
          </Link>
        </div>
      </div>

      <Link
        href="/products/split-kinghome"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
      >
        Смотреть King Home в каталоге →
      </Link>
    </main>
    </ArticleShell>
  );
}
