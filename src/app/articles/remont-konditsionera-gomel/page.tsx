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
        Ремонт кондиционеров в Гомеле — диагностика бесплатно, выезд в день заказа
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: июнь 2026 · Время чтения: 7 мин</p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ремонт кондиционера — не всегда повод покупать новый. Большинство неисправностей устраняется
        за один визит мастера: кондиционер не охлаждает, течёт, не включается, шумит, показывает
        ошибку на дисплее. В этой статье расскажем о самых частых поломках, ценах на ремонт
        кондиционеров в Гомеле в 2026 году и о том, когда ремонт всё-таки нецелесообразен.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        AirComfort выполняет ремонт и обслуживание кондиционеров всех популярных марок в Гомеле и
        Гомельской области. Диагностика — бесплатно при выполнении ремонта. Гарантия на работы — 6 месяцев.
      </p>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Вызвать мастера по ремонту кондиционера</p>
          <p className="text-gray-600 text-sm">Гомель и область · Выезд сегодня · Диагностика бесплатно</p>
        </div>
        <a
          href="tel:+375291050694"
          className="inline-block bg-red-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors text-center whitespace-nowrap"
        >
          +375 29 105-06-94
        </a>
      </div>

      {/* Таблица неисправностей */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Частые неисправности и стоимость ремонта</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ниже — наиболее распространённые причины обращений по ремонту кондиционеров в Гомеле.
        Точную стоимость мастер называет после диагностики.
      </p>
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
              ['Не охлаждает, воздух тёплый', 'Утечка фреона, грязный испаритель', 'от 60 р.'],
              ['Не включается, нет реакции', 'Плата управления, предохранитель, обрыв', 'от 80 р.'],
              ['Течёт вода внутри помещения', 'Засор дренажной трубки', 'от 40 р.'],
              ['Шумит, стучит, вибрирует', 'Вентилятор, подшипники, крыльчатка', 'от 70 р.'],
              ['Ошибка на дисплее (E1, E3…)', 'Датчик температуры или давления, плата', 'от 60 р.'],
              ['Плохо греет зимой', 'Утечка фреона, обмерзание наружного блока', 'от 70 р.'],
              ['Неприятный запах из блока', 'Плесень в испарителе, загрязнение', 'от 80 р.'],
              ['Лёд на наружном блоке', 'Мало фреона или засорён воздушный фильтр', 'от 60 р.'],
              ['Мигает индикатор работы', 'Ошибка датчика, сбой платы управления', 'от 80 р.'],
              ['Не реагирует на пульт', 'Приёмник ИК-сигнала, батарейки, плата', 'от 50 р.'],
            ].map(([problem, reason, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium text-gray-900">{problem}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{reason}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-1">Диагностика кондиционера — бесплатно</p>
        <p className="text-gray-700 text-sm">
          Мастер приедет, осмотрит кондиционер и назовёт точную причину неисправности и стоимость ремонта
          до начала работ. Если не договоримся по цене — ничего не платите. Диагностика бесплатна при
          выполнении ремонта.
        </p>
      </div>

      {/* Детально по типам */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ремонт конкретных неисправностей</h2>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">Кондиционер не охлаждает</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Это самая частая причина вызова в летний сезон. Первое, что нужно сделать — проверить и
        промыть фильтры самостоятельно: иногда этого достаточно. Если после чистки фильтров
        ситуация не улучшилась — скорее всего, утечка фреона. Дозаправка хладагентом устраняет
        проблему за один визит. Подробнее:{' '}
        <Link href="/articles/zapravka-konditsionera-gomel" className="text-red-700 hover:underline">
          заправка кондиционера в Гомеле — цены 2026
        </Link>.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">Кондиционер течёт — вода капает внутри</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Вода из внутреннего блока — почти всегда засор дренажной трубки. Конденсат не отводится наружу
        и начинает капать в помещение. Прочистка дренажа занимает 20–30 минут и стоит от 40 р.
        Если не устранить вовремя — вода попадает на плату управления, и простой ремонт превращается
        в дорогостоящую замену электроники.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">Кондиционер шумит, стучит или вибрирует</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Посторонние звуки из внутреннего блока — чаще всего крыльчатка вентилятора с налипшей
        грязью или изношенные подшипники. В наружном блоке стук обычно означает проблему с
        компрессором или вентилятором. Чем дольше работает шумящий кондиционер — тем дороже
        ремонт: мелкая поломка усугубляется.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">Ошибки на дисплее: E1, E3, E4, F1…</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Коды ошибок у разных брендов означают разные неисправности. E1 у Electrolux — датчик
        температуры испарителя; E3 у Ballu — высокое давление; F1 у Haier — разрыв цепи датчика.
        Мастер расшифрует код и проведёт диагностику конкретного датчика или платы.
      </p>

      {/* Бренды */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ремонт кондиционеров всех брендов</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Выполняем ремонт и обслуживание кондиционеров всех популярных марок. Запчасти для большинства
        моделей — в наличии, не нужно ждать доставки.
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {['Electrolux', 'Ballu', 'Haier', 'LG', 'Samsung', 'Panasonic', 'Daikin', 'Mitsubishi Electric', 'Gree', 'Midea', 'Hisense', 'Mitsudai', 'AUX', 'Toshiba'].map(brand => (
          <span key={brand} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {brand}
          </span>
        ))}
      </div>

      {/* Когда не стоит ремонтировать */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Когда ремонт нецелесообразен?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Мастер честно скажет, если ремонт обойдётся дороже, чем покупка нового кондиционера.
        Ремонт не имеет смысла, если:
      </p>
      <ul className="list-none space-y-3 mb-4">
        {[
          'Кондиционеру более 10–12 лет и вышел из строя компрессор (замена компрессора — от 400 р., при этом новый кондиционер обойдётся от 600 р.)',
          'Стоимость запчастей превышает 50–60% цены нового кондиционера',
          'Сгорела плата управления на старой модели, которая снята с производства — запчасть не найти',
          'Кондиционер требует ремонта несколько раз за сезон — постоянные расходы превышают стоимость замены',
        ].map((item, i) => (
          <li key={i} className="flex gap-3 text-gray-700">
            <span className="text-red-400 shrink-0 mt-0.5">✕</span>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-700 leading-relaxed mb-8">
        В таком случае выгоднее купить новый кондиционер с установкой. Стоимость нового сплит-системы
        под ключ в Гомеле — от{' '}
        <Link href="/products" className="text-red-700 hover:underline font-medium">
          1 290 р.
        </Link>
        . Мы поможем подобрать подходящую модель.
      </p>

      {/* Прайс */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Полный прайс на ремонт и обслуживание кондиционеров</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Услуга</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Диагностика (при выполнении ремонта)', 'Бесплатно'],
              ['Прочистка дренажной трубки', 'от 40 р.'],
              ['Заправка фреоном R410A', 'от 60 р.'],
              ['Заправка фреоном R32', 'от 70 р.'],
              ['Чистка фильтров и теплообменника', 'от 60 р.'],
              ['Замена датчика температуры', 'от 60 р.'],
              ['Замена платы управления', 'от 150 р.'],
              ['Ремонт электрической цепи', 'от 80 р.'],
              ['Замена вентилятора внутреннего блока', 'от 100 р.'],
              ['Поиск и устранение утечки фреона', 'от 80 р.'],
              ['Замена компрессора', 'от 400 р.'],
              ['Комплексное обслуживание (чистка + дозаправка)', 'от 150 р.'],
            ].map(([service, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 text-gray-700">{service}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Частые вопросы о ремонте кондиционера</h2>
      <div className="space-y-4 mb-8">
        {[
          {
            q: 'Сколько времени занимает ремонт кондиционера?',
            a: 'Большинство ремонтов — прочистка дренажа, заправка фреоном, замена датчика — занимают 30–90 минут. Замена платы управления или компрессора может потребовать второго визита, если запчасть нужно заказать.',
          },
          {
            q: 'Можно ли отремонтировать кондиционер самостоятельно?',
            a: 'Почистить фильтры — да, это делается без мастера. Всё остальное (дозаправка фреоном, ремонт электроники, замена деталей) требует профессионального оборудования и допуска к работе с хладагентом. Самостоятельная попытка часто увеличивает стоимость итогового ремонта.',
          },
          {
            q: 'Есть ли гарантия на ремонт?',
            a: 'Да. AirComfort даёт гарантию 6 месяцев на выполненный ремонт. На замену запчастей — гарантия производителя запчасти.',
          },
          {
            q: 'Ремонтируете кондиционеры на месте или нужно везти в сервис?',
            a: 'Выездной ремонт — прямо у вас дома или в офисе. Большинство неисправностей устраняются на месте. Снять блок и везти в сервис требуется редко — только при сложном ремонте компрессора или серьёзном повреждении.',
          },
          {
            q: 'Ремонтируете кондиционеры в офисах и на производстве?',
            a: 'Да. Работаем как с частными клиентами, так и с юридическими лицами. Предоставляем акты выполненных работ и гарантийные талоны.',
          },
        ].map(({ q, a }, i) => (
          <details key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <summary className="p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center">
              {q}
              <span className="text-gray-400 ml-4 shrink-0">▾</span>
            </summary>
            <div className="px-4 pb-4 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              {a}
            </div>
          </details>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-red-700 rounded-2xl p-6 text-white mb-8">
        <h3 className="text-xl font-bold mb-2">Нужен ремонт кондиционера в Гомеле?</h3>
        <p className="text-red-100 mb-4 text-sm">Выезд сегодня · Диагностика бесплатно · Гарантия 6 месяцев</p>
        <a
          href="tel:+375291050694"
          className="inline-block bg-white text-red-700 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors"
        >
          +375 29 105-06-94
        </a>
      </div>

      {/* Читайте также */}
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
            → Кондиционер не охлаждает — что делать самостоятельно
          </Link>
          <Link href="/articles/obsluzhivanie-konditsionera-gomel" className="block text-red-700 hover:underline text-sm">
            → Обслуживание кондиционера в Гомеле
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
