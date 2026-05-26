import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function NedorogoyPage() {
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
        <Link href="/" className="hover:text-red-600">Главная</Link>
        {' / '}
        <Link href="/articles" className="hover:text-red-600">Статьи</Link>
        {' / '}
        <span>Недорогой кондиционер в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Недорогой кондиционер в Гомеле — купить с установкой от 1 090 р.
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Хотите купить кондиционер без переплаты за бренд? Есть надёжные бюджетные модели, которые
        хорошо справляются со своей задачей. Разбираем лучшие варианты с ценами в Гомеле в 2026 году.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Рейтинг недорогих кондиционеров с установкой</h2>
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
              ['Mitsudai MD-SNE09AI', 'до 25 м²', 'On/Off', 'от 1 090 р.'],
              ['Ballu BSW-09HN1', 'до 25 м²', 'On/Off', 'от 1 190 р.'],
              ['Ballu BSW-12HN1', 'до 35 м²', 'On/Off', 'от 1 290 р.'],
              ['Ballu BSAGI-09HN8', 'до 25 м²', 'Инвертор', 'от 1 290 р.'],
              ['Electrolux EACS-09HA', 'до 25 м²', 'On/Off', 'от 1 490 р.'],
              ['Haier AS09NS4ERA', 'до 25 м²', 'Инвертор', 'от 1 350 р.'],
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

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-1">Что включено в цену «с установкой»</p>
        <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
          <li>Кондиционер (внутренний + внешний блок)</li>
          <li>Стандартный монтаж до 3 м медной трассы</li>
          <li>Кабель, теплоизоляция, крепёж</li>
          <li>Пусконаладочные работы</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">On/Off или дешёвый инвертор?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Если бюджет ограничен до 1 300 р. — берите on/off (например, Mitsudai или Ballu BSW).
        Это честный, надёжный кондиционер без лишних функций. Минус — потребляет больше электроэнергии
        и включается/выключается рывками.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Если готовы добавить 100–200 р. — рассмотрите бюджетный инвертор Ballu BSAGI или Haier AS09NS4ERA.
        За 1,5–2 сезона разница в счётах за электроэнергию окупит доплату.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как сэкономить ещё больше</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['Брать готовый комплект', 'Кондиционер + монтаж + материалы в одном месте дешевле, чем покупать отдельно.'],
          ['Заказать не в сезон', 'В марте–апреле и сентябре–октябре загрузка мастеров ниже — иногда предлагаем скидки.'],
          ['Выбрать мощность точно по площади', 'Не берите кондиционер с запасом на вырост — переплата без пользы.'],
          ['Простая трасса', 'Если от дыры в стене до места блока меньше 3 м — монтаж дешевле.'],
        ].map(([title, text]) => (
          <div key={title} className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Узнайте точную цену</p>
        <p className="text-gray-700 text-sm mb-3">
          Скажите площадь комнаты и этаж — рассчитаем стоимость под ключ.
          Звоните:
        </p>
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">
            → Сколько стоит установка кондиционера в Гомеле
          </Link>
          <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">
            → Инвертор или обычный — что выгоднее
          </Link>
          <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">
            → Как выбрать кондиционер — полный гайд
          </Link>
        </div>
      </div>

      <Link
        href="/products"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
      >
        Смотреть бюджетные кондиционеры →
      </Link>
    </main>
    </ArticleShell>
  );
}
