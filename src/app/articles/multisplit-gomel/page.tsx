import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function MultisplitPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Мультисплит система в Гомеле' },
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
        <span>Мультисплит система в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Мультисплит система в Гомеле — цены 2026 и установка
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Мультисплит — система, где один внешний блок обслуживает 2–5 комнат. Каждая комната
        управляется отдельным пультом. Это решение особенно популярно в частных домах и квартирах
        с несколькими комнатами — один блок на фасаде вместо нескольких.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Мультисплит vs отдельные кондиционеры</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Параметр</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мультисплит</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Отдельные кондиционеры</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Внешние блоки', '1 блок на фасаде', 'По одному на каждую комнату'],
              ['Управление', 'Независимое для каждой комнаты', 'Независимое для каждой комнаты'],
              ['Монтаж', 'Сложнее, один раз', 'Проще, но несколько раз'],
              ['Цена оборудования', 'Дешевле на 10–20%', 'Дороже при 3+ комнатах'],
              ['Цена монтажа', 'Дороже (длинные трассы)', 'Дешевле на каждый блок'],
              ['Итог 3 комнаты', 'от 4 500 р.', 'от 4 800 р.'],
              ['Ремонт', 'Если сломался наружный — встали все', 'Остальные работают'],
            ].map(([param, multi, single], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{param}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{multi}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{single}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на мультисплит системы в Гомеле</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Конфигурация</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Бренды</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['2 комнаты (2×9 BTU)', 'Haier, LG, Daikin', 'от 2 500 р.'],
              ['2 комнаты (2×12 BTU)', 'Haier, LG, Mitsubishi', 'от 3 200 р.'],
              ['3 комнаты (3×9 BTU)', 'Haier, LG, Daikin', 'от 4 000 р.'],
              ['3 комнаты (разные мощн.)', 'Haier, LG, Mitsubishi', 'от 4 800 р.'],
              ['4 комнаты', 'Daikin, Mitsubishi Electric', 'от 6 500 р.'],
            ].map(([config, brands, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{config}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{brands}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-1">Цены включают</p>
        <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
          <li>Оборудование (внешний + внутренние блоки)</li>
          <li>Монтаж всей системы «под ключ»</li>
          <li>Медные трубы, кабели, крепёж</li>
          <li>Пусконаладку и проверку работы</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Когда мультисплит — правильный выбор</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['Новостройка или ремонт', 'Монтаж один раз — все трубы укладываются в штробы до чистовой отделки.'],
          ['Частный дом', 'Один блок снаружи вместо 3–4, что важно для архитектурного вида фасада.'],
          ['Квартира 3+ комнаты', 'Если нужен холод во всей квартире, мультисплит удобнее 3 отдельных систем.'],
          ['Запрет на несколько блоков', 'В некоторых домах ТСЖ ограничивает количество внешних блоков на фасаде.'],
        ].map(([title, text]) => (
          <div key={title} className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Вызвать замерщика</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Для мультисплит системы нужен предварительный замер и расчёт длины трасс. Мастер
        приедет бесплатно, оценит условия монтажа и назовёт точную стоимость.
        Звоните:{' '}
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </p>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/split-sistema-gomel" className="block text-red-700 hover:underline text-sm">
            → Сплит система в Гомеле — цены и установка
          </Link>
          <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">
            → Сколько стоит установка кондиционера в Гомеле
          </Link>
          <Link href="/articles/konditsioner-pod-klyuch" className="block text-red-700 hover:underline text-sm">
            → Кондиционер под ключ — что входит в стоимость
          </Link>
        </div>
      </div>

      <Link
        href="/products"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
      >
        Посмотреть кондиционеры →
      </Link>
    </main>
    </ArticleShell>
  );
}
