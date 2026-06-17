import Link from 'next/link';

export default function MobilnyiKonditsionerGomel() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><Link href="/" className="hover:text-red-600">Главная</Link></li>
          <li className="text-gray-300">/</li>
          <li><Link href="/articles" className="hover:text-red-600">Статьи</Link></li>
          <li className="text-gray-300">/</li>
          <li className="text-gray-700">Мобильный кондиционер</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Мобильный кондиционер в Гомеле — купить напольный без установки
      </h1>
      <p className="text-gray-500 text-sm mb-6">Обновлено: июнь 2026 · AirComfort</p>

      <p className="text-lg text-gray-700 mb-8">
        Мобильные и напольные кондиционеры — единственный способ охладить комнату, если нельзя
        сверлить стены или монтировать внешний блок. Подключается за 15 минут, не требует мастера
        и разрешения. В наличии в Гомеле: <strong>Ballu, Electrolux, Zanussi</strong> от 699 р.
      </p>

      {/* Callout */}
      <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-4 mb-10 flex gap-3">
        <span className="text-2xl">📞</span>
        <div>
          <p className="font-semibold text-gray-900">Консультация и заказ в Гомеле</p>
          <p className="text-gray-600 text-sm mb-2">Подберём модель под вашу площадь и бюджет, доставим в день заказа</p>
          <a href="tel:+375291050694" className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition text-sm">
            +375 (29) 105-06-94
          </a>
        </div>
      </div>

      {/* Что такое */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое мобильный (напольный) кондиционер</h2>
      <p className="text-gray-700 mb-4">
        Мобильный кондиционер — это моноблок на колёсиках: компрессор, конденсатор и испаритель
        расположены в одном корпусе, который стоит на полу внутри помещения. В отличие от
        сплит-системы, ему не нужен наружный блок и монтаж трассы. Горячий воздух выводится
        через гибкий гофрированный шланг диаметром 15 см в окно или форточку.
      </p>
      <p className="text-gray-700 mb-8">
        Напольный кондиционер — другое название того же устройства. «Напольный» указывает на
        способ размещения (стоит на полу), «мобильный» — на возможность перемещать его из
        комнаты в комнату. Это одно и то же.
      </p>

      {/* Кому подходит */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Кому подходит мобильный кондиционер</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {[
          { icon: '🏠', title: 'Съёмное жильё', desc: 'Не сверлите стены, не нужны разрешения от хозяина. При переезде забирайте с собой.' },
          { icon: '🏢', title: 'Офис или торговое помещение', desc: 'Нет возможности крепить наружный блок или не согласован фасад — мобильный решает.' },
          { icon: '🏗️', title: 'Нельзя выходить на фасад', desc: 'ТСЖ запрещает монтаж или здание в реестре — единственный легальный вариант.' },
          { icon: '⚡', title: 'Нужно прямо сейчас', desc: 'Мастер занят на 2 недели вперёд, а жара уже стоит. Привезём и подключите сами.' },
          { icon: '💰', title: 'Бюджет до 1 000 р.', desc: 'Сплит с монтажом — от 1 290 р. Мобильный кондиционер с доставкой — от 699 р.' },
          { icon: '📦', title: 'Временное использование', desc: 'Нужен на один сезон, на период ремонта или пока не переедете.' },
        ].map((item) => (
          <div key={item.title} className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
            <div className="text-sm text-gray-600">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Цены */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Цены на мобильные кондиционеры в Гомеле</h2>
      <p className="text-gray-700 mb-4">Актуальные цены 2026 года в нашем наличии:</p>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-3 text-left rounded-tl-lg">Модель</th>
              <th className="p-3 text-left">Площадь</th>
              <th className="p-3 text-left">Мощность</th>
              <th className="p-3 text-left">Уровень шума</th>
              <th className="p-3 text-left rounded-tr-lg">Цена</th>
            </tr>
          </thead>
          <tbody>
            {[
              { model: 'Ballu BPAC-09 CE', area: 'до 25 м²', power: '9 000 BTU / 2,6 кВт', noise: '48 дБ', price: 'от 699 р.' },
              { model: 'Ballu BPAC-12 CE', area: 'до 30 м²', power: '12 000 BTU / 3,5 кВт', noise: '52 дБ', price: 'от 849 р.' },
              { model: 'Electrolux EACM-9 EZ/N3', area: 'до 25 м²', power: '9 000 BTU / 2,6 кВт', noise: '44 дБ', price: 'от 950 р.' },
              { model: 'Electrolux EACM-12 EZ/N3', area: 'до 32 м²', power: '12 000 BTU / 3,5 кВт', noise: '46 дБ', price: 'от 1 099 р.' },
              { model: 'Zanussi ZACM-09 MS/N1', area: 'до 25 м²', power: '9 000 BTU / 2,6 кВт', noise: '46 дБ', price: 'от 879 р.' },
              { model: 'Ballu BPAC-12 INV', area: 'до 32 м²', power: '12 000 BTU инвертор', noise: '40 дБ', price: 'от 1 199 р.' },
            ].map((row, i) => (
              <tr key={row.model} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{row.model}</td>
                <td className="p-3 text-gray-600 border-b border-gray-100">{row.area}</td>
                <td className="p-3 text-gray-600 border-b border-gray-100">{row.power}</td>
                <td className="p-3 text-gray-600 border-b border-gray-100">{row.noise}</td>
                <td className="p-3 font-semibold text-red-700 border-b border-gray-100">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Как выбрать мощность */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать мощность мобильного кондиционера</h2>
      <p className="text-gray-700 mb-4">
        Базовое правило: <strong>1 кВт охлаждения на 10 м² площади</strong> при стандартной высоте потолков 2,7 м.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left rounded-tl-lg">Площадь</th>
              <th className="p-3 text-left">Мощность BTU</th>
              <th className="p-3 text-left rounded-tr-lg">Рекомендуем</th>
            </tr>
          </thead>
          <tbody>
            {[
              { area: 'до 15 м²', btu: '7 000 BTU', rec: 'Маленькая спальня, кабинет' },
              { area: '15–25 м²', btu: '9 000 BTU', rec: 'Стандартная комната, студия' },
              { area: '25–35 м²', btu: '12 000 BTU', rec: 'Зал, большая спальня' },
              { area: '35–50 м²', btu: '14 000–18 000 BTU', rec: 'Открытое пространство, 2 комнаты' },
            ].map((row, i) => (
              <tr key={row.area} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{row.area}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.btu}</td>
                <td className="p-3 text-gray-600 border-b border-gray-100">{row.rec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-sm text-amber-800">
        <strong>Важно:</strong> если комната угловая, потолки выше 2,7 м, много окон на южную сторону
        или жилой этаж под крышей — берите мощность на ступень выше расчётной. Недомощный кондиционер
        работает без остановки и ломается быстрее.
      </div>

      {/* Мобильный vs сплит */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Мобильный кондиционер или сплит-система — что выбрать</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left rounded-tl-lg">Параметр</th>
              <th className="p-3 text-left">Мобильный</th>
              <th className="p-3 text-left rounded-tr-lg">Сплит-система</th>
            </tr>
          </thead>
          <tbody>
            {[
              { param: 'Монтаж', mobile: '15 мин, сам', split: '2–4 часа, мастер' },
              { param: 'Цена + установка', mobile: 'от 699 р.', split: 'от 1 290 р.' },
              { param: 'Уровень шума', mobile: '44–52 дБ', split: '22–32 дБ' },
              { param: 'Энергоэффективность', mobile: 'COP 2,5–2,8', split: 'COP 3,5–5,5' },
              { param: 'Мобильность', mobile: 'Перемещается по квартире', split: 'Стационарная' },
              { param: 'Внешний блок', mobile: 'Не нужен', split: 'Обязателен' },
              { param: 'Разрешение ЖЭУ', mobile: 'Не нужно', split: 'Иногда нужно' },
              { param: 'Срок службы', mobile: '5–8 лет', split: '10–15 лет' },
            ].map((row, i) => (
              <tr key={row.param} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 font-medium text-gray-900 border-b border-gray-100">{row.param}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.mobile}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.split}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 mb-10">
        <strong>Вывод:</strong> если у вас собственное жильё и вы планируете пользоваться кондиционером
        несколько лет — сплит-система выгоднее за счёт низких счетов за электричество и тишины.
        Если нужно <em>прямо сейчас</em>, без монтажа, или на съёмной квартире — мобильный.
      </p>

      {/* Ballu */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Мобильный кондиционер Ballu в Гомеле</h2>
      <p className="text-gray-700 mb-4">
        Ballu — один из самых популярных брендов мобильных кондиционеров в Беларуси. Основные
        причины выбора:
      </p>
      <ul className="space-y-2 mb-6">
        {[
          'Официальная гарантия 2 года и доступный сервис по Беларуси',
          'Серия BPAC — проверенная временем, широкий выбор от 9 000 до 18 000 BTU',
          'Серия BPAC INV — инверторный компрессор, тише и экономичнее на 25–30%',
          'Встроенный осушитель воздуха и вентилятор — 3-в-1',
          'Wi-Fi управление в старших моделях',
          'Цена в Гомеле: от 699 р. — оптимальный старт',
        ].map((item) => (
          <li key={item} className="flex gap-2 text-sm text-gray-700">
            <span className="text-red-500 mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="bg-gray-50 rounded-lg p-4 mb-10 text-sm text-gray-700">
        <strong>Популярная модель:</strong> Ballu BPAC-09 CE — 9 000 BTU, для комнаты до 25 м²,
        уровень шума 48 дБ, мощность компрессора 1,0 кВт, потребление 0,97 кВт/ч. Цена в Гомеле: <strong>от 699 р.</strong>
      </div>

      {/* Electrolux */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Мобильный кондиционер Electrolux в Гомеле</h2>
      <p className="text-gray-700 mb-4">
        Electrolux — премиальный сегмент среди мобильных кондиционеров. Преимущества перед Ballu:
      </p>
      <ul className="space-y-2 mb-6">
        {[
          'Тише: 44–46 дБ против 48–52 дБ у базовых Ballu',
          'Дизайн — компактнее, вписывается в интерьер',
          'Гарантия 3 года на большинство моделей',
          'Серия EACM EZ — с самовыпаривателем конденсата (не нужно часто сливать воду)',
          'Инверторные модели доступны с 9 000 BTU',
        ].map((item) => (
          <li key={item} className="flex gap-2 text-sm text-gray-700">
            <span className="text-red-500 mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-gray-700 mb-10">
        Цены в Гомеле: <strong>от 950 р. (9 000 BTU) до 1 299 р. (12 000 BTU инвертор)</strong>.
        Если бюджет позволяет — Electrolux окупается тишиной и экономией электричества.
      </p>

      {/* Как подключить */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Как подключить мобильный кондиционер: пошаговая инструкция</h2>
      <p className="text-gray-700 mb-4">
        Установка не требует мастера. Весь процесс занимает 10–20 минут:
      </p>
      <ol className="space-y-4 mb-6">
        {[
          { step: '1', title: 'Распакуйте и установите на колёса', desc: 'Прикрутите колёсики к основанию, это занимает 2 минуты. Поставьте кондиционер в 50 см от стены — нужна циркуляция воздуха.' },
          { step: '2', title: 'Подключите гофрированный шланг', desc: 'Прикрутите один конец к патрубку кондиционера, второй — к оконному адаптеру из комплекта. Шланг растягивается до 150 см.' },
          { step: '3', title: 'Установите оконный адаптер', desc: 'Вставьте пластиковую вставку в приоткрытое окно или форточку. В комплекте идут телескопические панели для большинства стандартных окон.' },
          { step: '4', title: 'Слейте поддон или включите самовыпаривание', desc: 'В бюджетных моделях нужно сливать скопившийся конденсат раз в 2–8 часов через сливной шланг. В дорогих моделях конденсат испаряется автоматически.' },
          { step: '5', title: 'Включите и настройте', desc: 'Подключите к розетке 220 В, выберите режим, температуру и скорость вентилятора. Рабочий диапазон температур снаружи: +5°C … +43°C.' },
        ].map((item) => (
          <li key={item.step} className="flex gap-4">
            <div className="shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              {item.step}
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </li>
        ))}
      </ol>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-sm text-amber-800">
        <strong>Частая ошибка:</strong> вставить шланг в форточку, но оставить большую щель открытой.
        Тёплый воздух с улицы будет поступать обратно в комнату, и эффект охлаждения снизится на 40–60%.
        Закройте щель вставкой из комплекта или поролоном.
      </div>

      {/* Минусы */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Честно о минусах мобильного кондиционера</h2>
      <p className="text-gray-700 mb-4">
        Прежде чем купить — знайте о недостатках, чтобы не разочаровываться:
      </p>
      <div className="space-y-3 mb-10">
        {[
          { minus: 'Шумнее сплит-системы', desc: '44–52 дБ — слышно в спальне. Во время сна некоторых это беспокоит. Решение: инверторная модель (40–42 дБ) или вынести кондиционер за дверь.' },
          { minus: 'Менее эффективен', desc: 'КПД ниже: чтобы охладить ту же комнату, мобильный тратит на 30–40% больше электричества, чем сплит. За лето разница 25–50 р. в счёте.' },
          { minus: 'Нужно сливать конденсат', desc: 'В бюджетных моделях — каждые 2–6 часов при высокой влажности. В моделях с самовыпаривателем (Electrolux EZ, Ballu INV) — не нужно.' },
          { minus: 'Занимает место на полу', desc: 'Размер — примерно как маленький холодильник. В маленьких комнатах это заметно.' },
          { minus: 'Охлаждает только одну комнату', desc: 'Шланг не длиннее 1,5 м — ставить нужно у окна. Переносить из комнаты в комнату можно, но каждый раз перемонтировать шланг.' },
        ].map((item) => (
          <div key={item.minus} className="bg-gray-50 rounded-lg p-4">
            <div className="font-semibold text-gray-900 mb-1">— {item.minus}</div>
            <div className="text-sm text-gray-600">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
      <div className="space-y-3 mb-10">
        {[
          {
            q: 'Можно ли использовать мобильный кондиционер без шланга?',
            a: 'Нет. Без шланга устройство одновременно охлаждает воздух спереди и выбрасывает горячий сзади — температура в комнате не изменится. Шланг обязателен для вывода горячего воздуха на улицу.',
          },
          {
            q: 'Выводит ли мобильный кондиционер воздух из комнаты?',
            a: 'Да. Он немного создаёт разрежение, поэтому рекомендуют приоткрыть дверь или форточку на 1–2 см для притока воздуха. Иначе КПД снижается.',
          },
          {
            q: 'Как часто нужно чистить мобильный кондиционер?',
            a: 'Фильтр — раз в 2–3 недели при активном использовании. Снимается и промывается под проточной водой. Глубокая чистка испарителя — раз в сезон, как и у сплит-системы.',
          },
          {
            q: 'Можно ли использовать мобильный кондиционер как обогреватель зимой?',
            a: 'Зависит от модели. Большинство бюджетных моделей работают только на охлаждение и вентиляцию. Модели с тепловым насосом (режим «тепло») работают при наружной температуре до −5°C. Уточняйте при заказе.',
          },
          {
            q: 'Мобильный кондиционер Ballu или Electrolux — что взять?',
            a: 'Ballu — лучший выбор по цене/качеству, от 699 р., 2 года гарантии. Electrolux — тише и с самовыпаривателем конденсата, от 950 р., 3 года гарантии. Для спальни или кабинета тихий Electrolux предпочтительнее. Для гостиной или временного использования — Ballu.',
          },
          {
            q: 'Нужна ли профессиональная чистка мобильного кондиционера?',
            a: 'Раз в год рекомендуем профессиональную чистку испарителя антибактериальным средством — особенно если используете в детской или спальне. Стоимость в Гомеле: от 40 р. Мы выезжаем на дом.',
          },
        ].map((item) => (
          <details key={item.q} className="bg-gray-50 rounded-lg border border-gray-200 group">
            <summary className="cursor-pointer p-4 font-semibold text-gray-900 list-none flex justify-between items-center hover:text-red-700 transition-colors">
              {item.q}
              <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg shrink-0 ml-2">▼</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm">{item.a}</div>
          </details>
        ))}
      </div>

      {/* Обслуживание */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Обслуживание мобильного кондиционера в Гомеле</h2>
      <p className="text-gray-700 mb-4">
        Мобильный кондиционер, как и сплит-система, требует ежегодной чистки. Мы занимаемся:
      </p>
      <ul className="space-y-2 mb-6">
        {[
          'Чистка фильтров и испарителя — от 40 р.',
          'Антибактериальная обработка — от 20 р.',
          'Проверка дренажной системы и уплотнений шланга',
          'Диагностика холодильного контура',
          'Выезд на дом по всему Гомелю',
        ].map((item) => (
          <li key={item} className="flex gap-2 text-sm text-gray-700">
            <span className="text-red-500 mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-gray-700 mb-10">
        После обслуживания кондиционер потребляет на 15–20% меньше электроэнергии и охлаждает
        быстрее. Записывайтесь по телефону: <a href="tel:+375291050694" className="text-red-600 font-semibold hover:underline">+375 (29) 105-06-94</a>.
      </p>

      {/* CTA */}
      <div className="bg-red-600 text-white rounded-xl p-6 text-center mb-10">
        <h2 className="text-xl font-bold mb-2">Купить мобильный кондиционер в Гомеле</h2>
        <p className="text-red-100 mb-4 text-sm">
          Ballu, Electrolux, Zanussi от 699 р. Консультация бесплатно. Доставка в день заказа.
        </p>
        <a
          href="tel:+375291050694"
          className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition"
        >
          +375 (29) 105-06-94
        </a>
      </div>

      {/* Читайте также */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Читайте также</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: '/articles/mobilnyy-ili-split', label: 'Мобильный или сплит — полное сравнение' },
            { href: '/konditsionery-gomel', label: 'Каталог сплит-систем с установкой' },
            { href: '/articles/tsena-ustanovki-konditsionera', label: 'Цены на установку сплит-системы' },
            { href: '/articles/obsluzhivanie-konditsionera-gomel', label: 'Обслуживание и чистка кондиционера' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-lg p-3 text-sm text-gray-700 hover:text-red-700 transition-colors"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
