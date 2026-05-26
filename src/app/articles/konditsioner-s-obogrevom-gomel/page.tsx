import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function ObogrevPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционер с обогревом в Гомеле' },
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
        <span>Кондиционер с обогревом в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Кондиционер с обогревом в Гомеле — цены 2026, монтаж
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Практически любой современный сплит-кондиционер умеет не только охлаждать, но и обогревать.
        При этом он потребляет в 2,5–3,5 раза меньше электроэнергии, чем обычный электрообогреватель.
        Разбираем, как выбрать кондиционер для зимнего обогрева в Гомеле.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Почему кондиционер экономичнее обогревателя</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Электрический обогреватель превращает 1 кВт электроэнергии в 1 кВт тепла (КПД = 1).
        Кондиционер работает иначе: он <strong>перекачивает</strong> тепло с улицы в помещение,
        а не генерирует его. На 1 кВт потреблённой электроэнергии инверторный кондиционер
        производит 3–5 кВт тепловой энергии (COP = 3–5).
      </p>
      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Пример экономии</p>
        <p className="text-gray-700 text-sm">
          Обогрев комнаты 20 м²: электрообогреватель 2 кВт потребляет <strong>2 кВт/ч</strong>.
          Инверторный кондиционер 2,6 кВт (9 BTU) потребляет на обогрев <strong>~0,7 кВт/ч</strong>.
          При тарифе 0,33 р./кВт·ч экономия — около <strong>330 р. за сезон</strong>.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">До какой температуры работает кондиционер</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мин. температура</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Примеры</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['On/Off стандарт', 'до −7°C', 'Mitsudai, Ballu BSW'],
              ['Инвертор стандарт', 'до −15°C', 'Ballu BSAGI, Haier NS4ERA, LG S-серия'],
              ['Инвертор «зима»', 'до −20°C', 'Electrolux EACS-I, Haier с Flash Start'],
              ['Морозостойкий', 'до −25°C', 'Electrolux Nordic, Ballu Platinum Evolution'],
              ['Арктический', 'до −30°C', 'Haier Aurora, Mitsubishi Zubadan'],
            ].map(([type, temp, examples], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{type}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{temp}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Лучшие кондиционеры для обогрева в Гомеле</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Зимний режим</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">COP</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Ballu BSAGI-09HN8', 'до −15°C', '4,0', 'от 1 290 р.'],
              ['Haier AS09NS4ERA', 'до −20°C Flash', '4,0', 'от 1 350 р.'],
              ['Electrolux EACS-I 09HAT', 'до −20°C', '4,1', 'от 1 790 р.'],
              ['Ballu Platinum 09HN8', 'до −25°C', '4,5', 'от 1 990 р.'],
              ['Electrolux Nordic 09HAT', 'до −25°C', '4,3', 'от 2 190 р.'],
            ].map(([model, winter, cop, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{model}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{winter}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{cop}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Кондиционер или котёл — что выгоднее для Гомеля</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Если в квартире есть центральное отопление, кондиционер с обогревом — отличное дополнение
        в межсезонье (октябрь, апрель–май), когда отопление уже отключили или ещё не включили.
        В это время температура опускается до −5..−10°C — как раз для работы стандартного инвертора.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Для полного отопления частного дома нужен морозостойкий инвертор (до −25°C). Но учтите:
        при −20°C эффективность кондиционера снижается до COP ~1,5–2. Для сильных морозов
        рекомендуем комбинировать кондиционер с резервным источником тепла.
      </p>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Поможем выбрать под ваши условия</p>
        <p className="text-gray-700 text-sm mb-3">
          Скажите площадь помещения и минимальную зимнюю температуру в вашем регионе —
          подберём оптимальную модель. Звоните:
        </p>
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/podgotovka-k-zime" className="block text-red-700 hover:underline text-sm">
            → Подготовка кондиционера к зиме — пошаговое руководство
          </Link>
          <Link href="/articles/invertor-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">
            → Инверторный кондиционер в Гомеле — что нужно знать
          </Link>
          <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">
            → Инвертор или обычный — что выгоднее?
          </Link>
        </div>
      </div>

      <Link
        href="/products"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
      >
        Посмотреть кондиционеры с обогревом →
      </Link>
    </main>
    </ArticleShell>
  );
}
