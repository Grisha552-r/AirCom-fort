import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function RemontPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Ремонт кондиционера в Гомеле' },
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
        <span>Ремонт кондиционера в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Ремонт кондиционера в Гомеле — цены 2026
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Кондиционер не включается, гудит, течёт или перестал охлаждать — не торопитесь покупать
        новый. Большинство неисправностей устраняется за один визит мастера. Разбираем самые
        частые поломки и цены на ремонт в Гомеле в 2026 году.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Частые неисправности и стоимость ремонта</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Проблема</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Причина</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена ремонта</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Не охлаждает', 'Нет фреона, грязный фильтр', 'от 60 р.'],
              ['Не включается', 'Плата управления, предохранитель', 'от 80 р.'],
              ['Течёт вода внутри', 'Засор дренажа', 'от 40 р.'],
              ['Шумит, стучит', 'Вентилятор, компрессор', 'от 70 р.'],
              ['Ошибка на дисплее', 'Датчик, плата', 'от 60 р.'],
              ['Плохо греет зимой', 'Утечка фреона, обледенение', 'от 70 р.'],
            ].map(([problem, reason, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{problem}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{reason}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-1">Диагностика бесплатно</p>
        <p className="text-gray-700 text-sm">
          Мастер приедет, осмотрит кондиционер и назовёт точную причину и стоимость ремонта.
          Если не договоримся — ничего не платите. Диагностика бесплатна при выполнении ремонта.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ремонтируем любые бренды</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Работаем с кондиционерами всех популярных марок: <strong>Electrolux, Ballu, Haier, LG,
        Samsung, Panasonic, Daikin, Mitsubishi, Gree, Midea</strong> и другими. Запчасти есть
        в наличии для большинства моделей — не нужно ждать доставки.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Когда лучше купить новый?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ремонт имеет смысл, если стоимость работ не превышает 50% цены нового кондиционера.
        Если кондиционеру более 10–12 лет и вышел компрессор — выгоднее купить новый.
        Мастер честно скажет, что выгоднее в вашем случае.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Стоимость нового кондиционера с установкой в Гомеле — от{' '}
        <Link href="/articles/tsena-ustanovki-konditsionera" className="text-red-700 hover:underline">
          1 290 р. под ключ
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Вызвать мастера</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Работаем ежедневно с 9:00 до 18:00. Выезд в день обращения. Гомель и область.
        Звоните:{' '}
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </p>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/zapravka-konditsionera-gomel" className="block text-red-700 hover:underline text-sm">
            → Заправка кондиционера в Гомеле — цены 2026
          </Link>
          <Link href="/articles/chistka-i-obsluzhivanie" className="block text-red-700 hover:underline text-sm">
            → Чистка и обслуживание кондиционера
          </Link>
          <Link href="/articles/konditsioner-ne-okhlazhdaet" className="block text-red-700 hover:underline text-sm">
            → Кондиционер не охлаждает — что делать?
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
