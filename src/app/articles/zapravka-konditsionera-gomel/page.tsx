import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function ZapravkaPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Заправка кондиционера в Гомеле' },
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
        <span>Заправка кондиционера в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Заправка кондиционера в Гомеле — цены 2026, выезд в день заказа
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: июнь 2026 · Время чтения: 7 мин</p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Заправка кондиционера фреоном — одна из самых частых причин вызова мастера летом в Гомеле.
        Кондиционер включается, шумит, но воздух в комнате остаётся тёплым или чуть прохладнее уличного.
        Это классический признак нехватки хладагента. В этой статье разбираем: сколько стоит заправка
        кондиционера в Гомеле в 2026 году, когда она нужна, и что будет, если затянуть с вызовом мастера.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        AirComfort выполняет заправку кондиционеров в Гомеле и Гомельской области. Выезд мастера — в день
        обращения. Диагностика и проверка давления в системе — бесплатно при заказе заправки.
      </p>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Вызвать мастера по заправке</p>
          <p className="text-gray-600 text-sm">Гомель и область · Выезд сегодня · Диагностика бесплатно</p>
        </div>
        <a
          href="tel:+375291050694"
          className="inline-block bg-red-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors text-center whitespace-nowrap"
        >
          +375 29 105-06-94
        </a>
      </div>

      {/* Признаки */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Признаки нехватки фреона в кондиционере</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Распознать нехватку хладагента можно по нескольким симптомам. Если вы замечаете хотя бы два из
        перечисленных ниже — пора заправить кондиционер, иначе компрессор начнёт работать «вхолостую»
        и быстро выйдет из строя.
      </p>
      <ul className="list-none space-y-3 mb-8">
        {[
          ['Воздух из кондиционера тёплый или чуть прохладнее уличного', 'Самый очевидный признак. Кондиционер включается, вентилятор работает, но температура в комнате не снижается.'],
          ['Иней или лёд на трубке или испарителе', 'Нехватка фреона вызывает переохлаждение испарителя — на нём появляется наледь. Парадокс: мало хладагента → слишком холодный испаритель → лёд.'],
          ['Кондиционер работает не останавливаясь', 'В режиме охлаждения он так и не набирает нужную температуру и продолжает работать часами без отключения.'],
          ['Шипение или булькание из блока', 'Шипящий или клокочущий звук — признак того, что фреон испаряется неправильно из-за низкого давления.'],
          ['Кондиционер плохо охлаждает при жаре выше 30°C', 'При достаточном уровне фреона хорошая сплит-система охлаждает комнату до +22°C даже в 35-градусную жару. Если нет — проверьте давление.'],
        ].map(([title, desc], i) => (
          <li key={i} className="flex gap-3">
            <span className="text-red-700 font-bold mt-0.5 shrink-0">✓</span>
            <div>
              <p className="font-medium text-gray-900">{title}</p>
              <p className="text-gray-600 text-sm mt-0.5">{desc}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Цены */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на заправку кондиционера в Гомеле — 2026</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Стоимость заправки кондиционера зависит от типа фреона (хладагента) и объёма, который нужно
        добавить. Мастер измеряет давление в системе манометрическим коллектором и определяет точное
        количество фреона.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип фреона</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена заправки</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Какие кондиционеры</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['R32', 'от 70 р.', 'Современные инверторные (Electrolux, Haier, LG с 2018 г.)'],
              ['R410A', 'от 60 р.', 'Большинство сплит-систем 2010–2022 г.'],
              ['R22', 'от 80 р.', 'Старые модели до 2010 г. (фреон дефицитный)'],
              ['R600a / R290', 'по запросу', 'Мобильные и специальные кондиционеры'],
            ].map(([type, price, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium text-gray-900">{type}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-500 text-sm mb-8">
        * В цену включена диагностика давления и проверка на утечку. Поиск и устранение утечки — отдельно, от 50 р.
      </p>

      {/* Дополнительные работы */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Дополнительные работы при заправке</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Услуга</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Диагностика давления (манометром)', 'Бесплатно при заправке'],
              ['Поиск утечки хладагента', 'от 50 р.'],
              ['Устранение утечки (пайка)', 'от 80 р.'],
              ['Чистка фильтров + дозаправка', 'от 110 р.'],
              ['Полное обслуживание + заправка', 'от 150 р.'],
            ].map(([service, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 text-gray-700">{service}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Процесс */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как проходит заправка кондиционера</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Заправить кондиционер самостоятельно без специального оборудования невозможно: нужен
        манометрический коллектор, баллон с хладагентом и знание рабочих давлений для конкретной
        модели. Весь процесс занимает 30–60 минут:
      </p>
      <ol className="list-none space-y-4 mb-8">
        {[
          ['Замер давления', 'Мастер подключает манометрический коллектор к сервисным портам кондиционера и включает его в режим охлаждения. По показаниям манометра определяет, насколько упало давление хладагента.'],
          ['Проверка на утечку', 'Если давление сильно занижено — ищем место утечки течеискателем или мыльным раствором. Если утечка найдена, устраняем до заправки — иначе заправленный фреон снова уйдёт.'],
          ['Дозаправка фреоном', 'Подключаем баллон с нужным типом хладагента и дозируем его весовым методом или по давлению, доводя систему до рабочих параметров.'],
          ['Контрольная проверка', 'После заправки замеряем давление повторно, проверяем температуру воздуха на выходе из блока. При нормальном уровне хладагента Δt между входом и выходом — 8–12°C.'],
          ['Рекомендации', 'Мастер объяснит, почему произошла утечка, и что сделать, чтобы избежать этого в будущем. Гарантия на заправку — 1 год.'],
        ].map(([step, desc], i) => (
          <li key={i} className="flex gap-4">
            <span className="bg-red-700 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{i + 1}</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">{step}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Как часто */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как часто нужна заправка кондиционера?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Это важный вопрос, на который многие мастера отвечают уклончиво. Правда такова:{' '}
        <strong>исправный кондиционер не теряет фреон</strong>. Хладагент циркулирует в замкнутом контуре,
        и при нормальной эксплуатации его хватает на весь срок службы прибора (10–15 лет).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Если заправка нужна каждый год или раз в сезон — это признак{' '}
        <strong>утечки</strong>. Трещина в трубке, ненадёжное соединение, плохой вентиль наружного блока.
        В такой ситуации просто дозаправить фреон — выбросить деньги. Нужно найти и устранить причину.
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">⚠ Что будет, если не заправить вовремя?</p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Компрессор перегревается и работает на износ</li>
          <li>• Электропотребление растёт на 20–40%, а эффективность падает</li>
          <li>• Через 1–2 сезона компрессор выйдет из строя — ремонт от 400 р. или замена блока</li>
          <li>• Испаритель промерзает, возможен гидравлический удар по компрессору</li>
        </ul>
      </div>

      {/* Для мобильных */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Заправка мобильного кондиционера</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Большинство напольных мобильных кондиционеров (Ballu, Electrolux, Zanussi) используют
        хладагент R290 (пропан) или R600a. Эти фреоны не требуют обслуживания в течение всего
        срока службы: их потеря означает серьёзную неисправность, при которой ремонт может
        быть нецелесообразен.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Если мобильный кондиционер плохо охлаждает — чаще всего причина в засорённом фильтре или
        в том, что воздуховод отведения горячего воздуха установлен неправильно. Рекомендуем
        сначала проверить эти моменты перед вызовом мастера.
      </p>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Частые вопросы о заправке кондиционера</h2>
      <div className="space-y-4 mb-8">
        {[
          {
            q: 'Сколько времени занимает заправка кондиционера?',
            a: 'Сама заправка — 20–30 минут. С учётом диагностики, проверки на утечку и контрольных замеров — до 60 минут. Если нужна ещё и чистка фильтров — до 90 минут.',
          },
          {
            q: 'Нужно ли быть дома во время заправки?',
            a: 'Да, мастеру нужен доступ к внутреннему и наружному блокам. Также нужно включить кондиционер в режиме охлаждения — это возможно только при наличии хозяина или его представителя.',
          },
          {
            q: 'Можно ли заправить кондиционер зимой?',
            a: 'Диагностику давления можно провести в любое время года. Но заправку фреоном выполняют при температуре наружного воздуха не ниже +5°C: при низкой температуре сложно правильно замерить давление в системе.',
          },
          {
            q: 'Почему фреон R22 дороже, хотя кондиционер старше?',
            a: 'R22 запрещён к производству по Монреальскому протоколу — он разрушает озоновый слой. Старые запасы заканчиваются, цена растёт. Если у вас кондиционер на R22 старше 2010 года — при следующей заправке рассмотрите замену на новую модель.',
          },
          {
            q: 'Дают ли гарантию на заправку?',
            a: 'Да. AirComfort даёт гарантию 1 год на заправку хладагентом. Если давление упадёт снова раньше — бесплатно ищем и устраняем утечку.',
          },
          {
            q: 'Какой тип фреона в моём кондиционере?',
            a: 'Тип хладагента указан на шильдике наружного блока (металлическая табличка с характеристиками). Обычно там написано: Refrigerant R410A или R32. Если таблички нет или она нечитаемая — мастер определит по году выпуска и модели.',
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

      {/* Почему мы */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Почему выбирают AirComfort для заправки кондиционера в Гомеле</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['Выезд в день заказа', 'Принимаем заявки с 8:00 до 20:00. Мастер приедет в удобный для вас промежуток.'],
          ['Диагностика бесплатно', 'При заказе заправки мастер бесплатно проверяет давление и ищет утечку.'],
          ['Честная цена', 'Называем стоимость до начала работ. Без скрытых доплат за «расходники».'],
          ['Гарантия 1 год', 'Если после нашей заправки давление упадёт раньше — возвращаемся бесплатно.'],
          ['Все типы фреона', 'R32, R410A, R22 — есть в наличии. Работаем со всеми марками кондиционеров.'],
          ['Работаем в Гомельской области', 'Гомель, Жлобин, Светлогорск, Речица, Мозырь — уточните стоимость выезда.'],
        ].map(([title, desc], i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1 text-sm">{title}</p>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-red-700 rounded-2xl p-6 text-white mb-8">
        <h3 className="text-xl font-bold mb-2">Нужна заправка кондиционера в Гомеле?</h3>
        <p className="text-red-100 mb-4 text-sm">Выезд сегодня · Диагностика бесплатно · Гарантия 1 год</p>
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
          <Link href="/articles/obsluzhivanie-konditsionera-gomel" className="block text-red-700 hover:underline text-sm">
            → Обслуживание кондиционера в Гомеле — чистка, диагностика
          </Link>
          <Link href="/articles/konditsioner-ne-okhlazhdaet" className="block text-red-700 hover:underline text-sm">
            → Кондиционер не охлаждает — что делать?
          </Link>
          <Link href="/articles/remont-konditsionera-gomel" className="block text-red-700 hover:underline text-sm">
            → Ремонт кондиционера в Гомеле — цены и сроки
          </Link>
          <Link href="/articles/chistka-i-obsluzhivanie" className="block text-red-700 hover:underline text-sm">
            → Чистка и обслуживание кондиционера
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
