import Link from 'next/link';

export default function KonditsionerDlyaKomnatyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Главная</Link>
        {' / '}
        <Link href="/articles" className="hover:text-blue-600">Статьи</Link>
        {' / '}
        <span>Какой кондиционер выбрать для комнаты</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Какой кондиционер выбрать для комнаты в 2025 году: советы мастеров
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2025 · Время чтения: 6 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Выбрать кондиционер сложнее, чем кажется. Продавцы в магазинах часто советуют
        «помощнее» — чтобы продать дороже. Мы объясним, как посчитать нужную мощность
        самостоятельно, и расскажем, на что реально обращать внимание.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Шаг 1: Рассчитайте нужную мощность</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Правило простое: 1 кВт на 10 м² плюс 20% запас. Таблица для удобства:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мощность (кВт)</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['до 20 м²', '2,1 кВт', '«07» (7 000 BTU)'],
              ['20–25 м²', '2,7 кВт', '«09» (9 000 BTU)'],
              ['25–35 м²', '3,5 кВт', '«12» (12 000 BTU)'],
              ['35–50 м²', '5,3 кВт', '«18» (18 000 BTU)'],
              ['50–70 м²', '7,0 кВт', '«24» (24 000 BTU)'],
            ].map(([area, kw, model]) => (
              <tr key={area} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200">{area}</td>
                <td className="p-3 border border-gray-200">{kw}</td>
                <td className="p-3 border border-gray-200 font-medium">{model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 text-sm mb-8 italic">
        Для угловых квартир, комнат с большими окнами на юг или высокими потолками — берите
        следующую ступень мощности.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Шаг 2: Инвертор или on/off</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="border border-green-200 bg-green-50 rounded-xl p-5">
          <h3 className="font-semibold text-green-900 mb-3">Инверторный</h3>
          <ul className="space-y-2 text-sm text-green-800">
            <li>✓ Экономит 30–40% электроэнергии</li>
            <li>✓ Точно держит температуру ±0,5°C</li>
            <li>✓ Работает тише (компрессор не включается резко)</li>
            <li>✓ Дольше служит (меньше пусков компрессора)</li>
            <li>✗ Дороже на 20–30% при покупке</li>
          </ul>
        </div>
        <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
          <h3 className="font-semibold text-gray-700 mb-3">On/off (обычный)</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ Дешевле при покупке</li>
            <li>✓ Простой ремонт</li>
            <li>✗ Потребляет больше электроэнергии</li>
            <li>✗ Температура скачет ±2–3°C</li>
            <li>✗ Громче работает при включении</li>
          </ul>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed mb-8">
        Вывод: если используете кондиционер более 3 месяцев в год — берите инвертор.
        Разница в цене окупится за 2–3 сезона за счёт экономии на электричестве.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Шаг 3: Выбор бренда</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Все популярные бренды примерно одинаковы по надёжности в нижнем и среднем сегменте.
        Разница — в функциях, сервисе и стоимости обслуживания.
      </p>
      <div className="space-y-4 mb-8">
        {[
          {
            brand: 'Electrolux',
            desc: 'Европейский дизайн, хорошая шумоизоляция. Отличный выбор для спальни. Есть WiFi-управление в старших моделях.',
            href: '/products/split-electrolux',
          },
          {
            brand: 'Ballu',
            desc: 'Соотношение цена/качество. Широкая сеть сервиса. Модели Platinum и Platinum DC с инвертором — популярный выбор.',
            href: '/products/split-ballu',
          },
          {
            brand: 'Haier',
            desc: 'Одна из крупнейших компаний в мире. Надёжная техника, широкий модельный ряд, хорошие инверторы среднего класса.',
            href: '/products/split-haier',
          },
          {
            brand: 'LG',
            desc: 'Высокий класс энергоэффективности, встроенная очистка воздуха, WiFi. Дороже, но технологично.',
            href: '/products/split-lg',
          },
        ].map(({ brand, desc, href }) => (
          <div key={brand} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{brand}</h3>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
            <Link href={href} className="shrink-0 text-sm text-blue-600 hover:underline mt-1">
              Смотреть →
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Шаг 4: Полезные функции — что реально нужно</h2>
      <div className="space-y-3 mb-8 text-gray-700">
        {[
          { f: 'Режим «Сон»', desc: 'Плавно поднимает температуру ночью. Важен для спальни.' },
          { f: 'Таймер включения/выключения', desc: 'Кондиционер включится до вашего прихода. Есть в большинстве моделей.' },
          { f: 'Тепловой насос (режим обогрева)', desc: 'Работает как обогреватель зимой. Экономичнее обычного обогревателя в 3–4 раза.' },
          { f: 'WiFi и приложение', desc: 'Удобно управлять со смартфона. Берите, если это важно — потом не добавить.' },
          { f: 'Самоочистка', desc: 'Автоматически просушивает теплообменник. Уменьшает появление плесени и запахов.' },
        ].map(({ f, desc }) => (
          <div key={f} className="flex items-start gap-3">
            <span className="text-blue-500 font-bold shrink-0">→</span>
            <div>
              <span className="font-medium text-gray-900">{f}: </span>
              <span className="text-gray-600">{desc}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Частые ошибки при выборе</h2>
      <ul className="space-y-3 mb-8">
        {[
          'Брать кондиционер «с запасом» по мощности — переохлаждённый воздух вызывает конденсат и плесень в помещении.',
          'Игнорировать уровень шума — для спальни более 30 дБ уже некомфортно.',
          'Выбирать по цвету или внешнему виду — это последний критерий.',
          'Не считать стоимость монтажа заранее — она часто равна цене самого кондиционера.',
        ].map(err => (
          <li key={err} className="flex items-start gap-2 text-gray-700">
            <span className="text-red-500 shrink-0 font-bold">✗</span>
            <span>{err}</span>
          </li>
        ))}
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Нужна помощь с выбором?</h3>
        <p className="text-blue-800 text-sm mb-4">
          Позвоните нам или оставьте заявку — мастер бесплатно проконсультирует и подберёт
          оптимальную модель для вашего помещения.
        </p>
        <Link
          href="/products/split-systems"
          className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Смотреть все кондиционеры →
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
      <div className="space-y-5 mb-10">
        {[
          {
            q: 'Какой кондиционер выбрать для комнаты 20 кв м?',
            a: 'Для 20 кв м подойдёт модель «09» (2,7 кВт). Это оптимально: есть небольшой запас мощности, и кондиционер не будет работать на пределе. Выбирайте инверторный вариант.',
          },
          {
            q: 'Можно ли поставить один кондиционер на две комнаты?',
            a: 'Один кондиционер охлаждает только то помещение, в котором установлен внутренний блок. Для двух комнат нужны два отдельных кондиционера или мультисплит-система (один наружный блок — несколько внутренних).',
          },
          {
            q: 'Какой кондиционер самый тихий?',
            a: 'Самые тихие модели на рынке — инверторные с уровнем шума 20–22 дБ на минимальной скорости. Из доступных в Гомеле: Electrolux серии Super Nordic, LG ARTCOOL. Уточните уровень шума в технических характеристиках перед покупкой.',
          },
        ].map(({ q, a }) => (
          <details key={q} className="border border-gray-200 rounded-lg overflow-hidden">
            <summary className="p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50">
              {q}
            </summary>
            <p className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">{a}</p>
          </details>
        ))}
      </div>

      <div className="border-t pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Читайте также</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/articles/tsena-ustanovki-konditsionera" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-medium text-gray-900 text-sm">Сколько стоит установка кондиционера</p>
            <p className="text-gray-500 text-xs mt-1">Актуальные цены в Гомеле на 2025 год</p>
          </Link>
          <Link href="/articles/invertor-ili-obychnyy" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-medium text-gray-900 text-sm">Инверторный или обычный кондиционер</p>
            <p className="text-gray-500 text-xs mt-1">Подробное сравнение двух типов</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
