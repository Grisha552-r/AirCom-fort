import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function DachaPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционер для дачи' },
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
        <span>Кондиционер для дачи</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Кондиционер для дачи — какой выбрать в 2026 году
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Жара на даче — настоящее испытание. Разбираем, что выбрать: мобильный кондиционер без
        сверления стен или бюджетный сплит с монтажом. Цены и практические советы для дачного дома.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Мобильный vs сплит для дачи</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Параметр</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мобильный</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Сплит-система</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Цена', 'от 490 р.', 'от 1 190 р. (с монтажом)'],
              ['Монтаж', 'Не нужен', 'Требуется (2–4 часа)'],
              ['Сверление стен', 'Не нужно', 'Отверстие 65–80 мм'],
              ['Уровень шума', '40–50 дБ (громкий)', '22–26 дБ (тихий)'],
              ['Охлаждение 20 м²', 'Справляется', 'Эффективнее на 30%'],
              ['Переезд на другую дачу', 'Легко перевезти', 'Нужен демонтаж'],
              ['Постоянное проживание', 'Не рекомендуется', 'Идеально'],
            ].map(([param, mobile, split], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{param}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{mobile}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{split}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Лучшие кондиционеры для дачи с ценами</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Ballu BPAG-09H (мобильный)', 'Напольный', 'до 25 кв.м', 'от 590 р.'],
              ['Electrolux EACM-9 (мобильный)', 'Напольный', 'до 25 кв.м', 'от 650 р.'],
              ['Mitsudai 9000 + монтаж', 'Сплит On/Off', 'до 25 кв.м', 'от 1 190 р.'],
              ['Ballu BSW-09 + монтаж', 'Сплит On/Off', 'до 25 кв.м', 'от 1 290 р.'],
              ['Ballu BSAGI-09 + монтаж', 'Сплит инвертор', 'до 25 кв.м', 'от 1 490 р.'],
            ].map(([model, type, area, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{model}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{type}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{area}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как выбрать мобильный кондиционер для дачи</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['Мощность', 'На дачу площадью до 20 м² хватит 9 000 BTU. На 25–30 м² — 12 000 BTU.'],
          ['Воздуховод', 'Нужно отверстие для вывода горячего воздуха — форточка или щель в окне. Без этого кондиционер работать не будет.'],
          ['Шум', 'Мобильные кондиционеры шумнее сплитов. Ставьте в соседней комнате или выбирайте модели с уровнем до 45 дБ.'],
          ['Обслуживание', 'Раз в 2–3 недели сливайте конденсат из поддона. Некоторые модели сами испаряют конденсат.'],
        ].map(([title, text]) => (
          <div key={title} className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Когда лучше выбрать сплит для дачи</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Если вы живёте на даче всё лето или бываете там каждые выходные — сплит-система оправдает
        вложения. Бюджетный Mitsudai или Ballu с установкой обойдётся от 1 190 р. и прослужит 10–15 лет.
        Комфорт несопоставимо выше мобильного.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Установим сплит даже в деревянном доме. Работаем по Гомелю и Гомельской области — выезжаем
        в Жлобин, Мозырь, Речицу, Светлогорск и другие города.
      </p>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Подберём кондиционер для дачи</p>
        <p className="text-gray-700 text-sm mb-3">
          Скажите площадь помещения и есть ли возможность сверлить стены — подберём оптимальный
          вариант. Звоните:{' '}
        </p>
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/mobilnyy-ili-split" className="block text-red-700 hover:underline text-sm">
            → Мобильный кондиционер или сплит — что выбрать?
          </Link>
          <Link href="/articles/konditsioner-dlya-komnaty" className="block text-red-700 hover:underline text-sm">
            → Какой кондиционер выбрать для комнаты
          </Link>
          <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">
            → Цены на установку кондиционера в Гомеле
          </Link>
        </div>
      </div>

      <Link
        href="/products/mobile"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors mr-4"
      >
        Мобильные кондиционеры →
      </Link>
      <Link
        href="/products"
        className="inline-block border border-red-700 text-red-700 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
      >
        Все кондиционеры →
      </Link>
    </main>
    </ArticleShell>
  );
}
