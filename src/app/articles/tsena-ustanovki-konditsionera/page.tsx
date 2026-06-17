import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function TsenaUstanovkiPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Цены на установку кондиционера в Гомеле' },
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
        <span>Цены на установку кондиционера</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Цена установки кондиционера в Гомеле — монтаж от 400 р. в 2026 году
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: июнь 2026 · Время чтения: 6 мин</p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Сколько стоит установка кондиционера в Гомеле в 2026 году — один из первых вопросов при
        покупке сплит-системы. Цена монтажа зависит от сложности: длины трассы, этажности, наличия
        штробления. В этой статье — прозрачный прайс без скрытых доплат и разбор того, что реально
        входит в стоимость установки кондиционера.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        AirComfort выполняет монтаж кондиционеров в Гомеле и Гомельской области. Стоимость установки
        кондиционера под ключ — от 400 р. за стандартный монтаж. Выезд мастера в день заказа.
      </p>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Узнать точную цену установки</p>
          <p className="text-gray-600 text-sm">Гомель и область · Выезд сегодня · Гарантия 1 год на монтаж</p>
        </div>
        <a
          href="tel:+375291050694"
          className="inline-block bg-red-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors text-center whitespace-nowrap"
        >
          +375 29 105-06-94
        </a>
      </div>

      {/* Базовый прайс */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Базовые цены на установку кондиционера — 2026</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        В AirComfort стоимость стандартного монтажа кондиционера — <strong>400 р.</strong> независимо от мощности блока.
        Ниже — что входит в эту цену:
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь комнаты</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мощность</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена монтажа</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['до 25 м²', '7 BTU (2,1 кВт)', 'от 400 р.'],
              ['до 35 м²', '9–12 BTU (2,7–3,5 кВт)', 'от 400 р.'],
              ['до 50 м²', '18 BTU (5,3 кВт)', 'от 400 р.'],
              ['до 70 м²', '24 BTU (7 кВт)', 'от 450 р.'],
            ].map(([area, power, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 text-gray-700">{area}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{power}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-500 text-sm mb-8 italic">
        * Стандартный монтаж: трасса до 3 м, медные трубки, кабель, крепёж, вакуумирование и пусконаладка.
      </p>

      {/* Что входит */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что входит в стоимость установки кондиционера</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Многие компании называют низкую цену за монтаж, а потом добавляют «расходники» и «дополнительные
        работы». В AirComfort базовая цена установки кондиционера включает всё необходимое:
      </p>
      <ul className="list-none space-y-2 mb-8">
        {[
          'Крепление внутреннего блока на кронштейн',
          'Крепление наружного блока (на стену или перила балкона)',
          'Медные трубки трассы длиной до 3 м',
          'Электрокабель от кондиционера до щитка',
          'Дренажный шланг для отвода конденсата',
          'Теплоизоляция медных трубок',
          'Вакуумирование системы перед запуском',
          'Пусконаладочные работы и тест всех режимов',
          'Инструктаж по правилам эксплуатации',
          'Гарантия на монтаж — 1 год',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
            <span className="text-green-600 mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Доплаты */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">За что просят доплату — и сколько</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Базовая цена рассчитана на стандартный монтаж в квартире или доме. Если условия сложнее —
        стоимость установки кондиционера увеличивается. Все доплаты — фиксированные, без сюрпризов:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Условие</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Доплата</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Когда возникает</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Каждый доп. метр трассы (от 4-го метра)', '+50 р./м', 'Наружный блок далеко от внутреннего'],
              ['Монтаж через балкон или лоджию', '+50 р.', 'Нет прямого выхода на фасад'],
              ['Высотные работы (5 этаж и выше)', 'от +100 р.', 'Монтаж наружного блока с риском'],
              ['Штробление под трубки в стене', 'от +70 р.', 'Трасса идёт внутри стены'],
              ['Монтаж скрытой трассы в канал', 'от +50 р.', 'Трубки в декоративном коробе'],
              ['Демонтаж старого кондиционера', 'от 100 р. (бесплатно при новой установке)', 'При замене оборудования'],
            ].map(([cond, price, when], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 text-gray-700">{cond}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
                <td className="p-3 border border-gray-200 text-gray-500 text-xs">{when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Стоимость под ключ */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Итоговая цена: кондиционер + установка под ключ</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Если вы покупаете кондиционер и монтаж в одном месте — это всегда выгоднее. Не нужно
        согласовывать два визита, искать отдельного мастера, и на всё — единая гарантия 1 год.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Комплект</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Сплит-система 7 BTU (до 25 м²) + монтаж', 'от 1 290 р.'],
              ['Сплит-система 9 BTU (до 30 м²) + монтаж', 'от 1 390 р.'],
              ['Сплит-система 12 BTU (до 40 м²) + монтаж', 'от 1 590 р.'],
              ['Сплит-система 18 BTU (до 50 м²) + монтаж', 'от 1 990 р.'],
              ['Сплит-система 24 BTU (до 70 м²) + монтаж', 'от 2 590 р.'],
            ].map(([kit, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 text-gray-700">{kit}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-500 text-sm mb-8">
        * Цены «под ключ» включают кондиционер, стандартный монтаж (трасса 3 м), все расходники и гарантию.
        Смотрите актуальный каталог →{' '}
        <Link href="/products" className="text-red-700 hover:underline">все модели в наличии</Link>.
      </p>

      {/* Процесс */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как проходит установка кондиционера</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Стандартный монтаж сплит-системы занимает 2–4 часа. Вот как это выглядит по шагам:
      </p>
      <ol className="list-none space-y-4 mb-8">
        {[
          ['Осмотр и разметка', 'Мастер определяет лучшее место для внутреннего блока, выбирает путь трассы и точку вывода наружного блока. Согласовываем с вами до начала работ.'],
          ['Монтаж внутреннего блока', 'Сверлим стену, крепим пластину, фиксируем блок. Место выбирается так, чтобы воздух равномерно распределялся по комнате.'],
          ['Прокладка трассы', 'Прокладываем медные трубки, электрокабель и дренажный шланг. Трасса закрывается декоративным коробом или убирается в канал — по договорённости.'],
          ['Монтаж наружного блока', 'Кронштейны крепятся в стену дюбелями с запасом нагрузки. Блок фиксируется болтами и подключается к трассе.'],
          ['Вакуумирование', 'Из системы откачивается воздух и влага — это обязательный этап перед запуском. Без вакуумирования срок службы компрессора сокращается вдвое.'],
          ['Запуск и проверка', 'Открываем краны с фреоном, включаем кондиционер. Проверяем охлаждение, обогрев, вентиляцию и дренаж. Показываем, как пользоваться.'],
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

      {/* Частые ошибки */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Частые ошибки при выборе установщика кондиционера</h2>
      <div className="space-y-3 mb-8">
        {[
          ['Гонитесь за низкой ценой монтажа', 'Монтаж за 150–200 р. почти всегда означает отсутствие вакуумирования, тонкие трубки или некачественные крепления. Через год — протечка или выход компрессора из строя.'],
          ['Не проверяете, входят ли расходники', 'Часть компаний считает трубки, кабель и изоляцию отдельно. Итог — цена вырастает в 1,5–2 раза. Уточняйте до выезда мастера.'],
          ['Нанимаете мастера без гарантии', 'Если при монтаже допущена ошибка, и её обнаружат через 6 месяцев — без гарантийного договора это ваши расходы.'],
          ['Покупаете кондиционер у одних, устанавливаете у других', 'Два договора, два выезда, две ответственности. При проблеме каждая сторона будет ссылаться на другую.'],
        ].map(([mistake, explain], i) => (
          <div key={i} className="flex gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl">
            <span className="text-amber-500 text-lg shrink-0">⚠</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm mb-1">{mistake}</p>
              <p className="text-gray-600 text-sm">{explain}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Часто задаваемые вопросы о стоимости установки</h2>
      <div className="space-y-4 mb-8">
        {[
          {
            q: 'Сколько стоит стандартная установка кондиционера в Гомеле?',
            a: 'Стандартный монтаж кондиционера в AirComfort — 400 р. В стоимость входит трасса 3 м, медные трубки, кабель, крепёж, вакуумирование и пусконаладка. Доплат за расходники нет.',
          },
          {
            q: 'Сколько стоит установка кондиционера в квартире на 3-м этаже?',
            a: 'Для 3-го этажа — стандартная цена 400 р. Высотная надбавка начинается с 5-го этажа и выше. На 5-м и выше — +100 р., если наружный блок монтируется со стремянки снаружи.',
          },
          {
            q: 'Можно ли установить кондиционер самому, чтобы сэкономить?',
            a: 'Самостоятельная установка возможна только для мобильных (напольных) кондиционеров. Сплит-система требует сверления стен, работы с хладагентом под давлением и вакуумирования — без инструмента и опыта это приводит к поломке оборудования.',
          },
          {
            q: 'Сколько стоит перенос уже установленного кондиционера на другую стену?',
            a: 'Перенос = демонтаж (100 р.) + повторный монтаж (400 р.) + дозаправка фреоном (60 р.) = от 560 р. Если трасса не подходит — добавляются новые трубки.',
          },
          {
            q: 'Нужно ли что-то подготовить перед приездом мастера?',
            a: 'Освободите подход к стене, где будет внутренний блок, и к месту вывода наружного. Мастер приедет со всеми инструментами, трубками и расходниками.',
          },
          {
            q: 'Дают ли гарантию на установку кондиционера?',
            a: 'Да. AirComfort даёт гарантию 1 год на монтажные работы. На оборудование — гарантия производителя (1–3 года). Если в течение года возникнет неисправность по причине монтажа — устраним бесплатно.',
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
        <h3 className="text-xl font-bold mb-2">Установка кондиционера в Гомеле от 400 р.</h3>
        <p className="text-red-100 mb-4 text-sm">Выезд в день заказа · Всё включено · Гарантия 1 год</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+375291050694"
            className="inline-block bg-white text-red-700 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors"
          >
            +375 29 105-06-94
          </a>
          <Link
            href="/products"
            className="inline-block border border-red-300 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
          >
            Выбрать кондиционер →
          </Link>
        </div>
      </div>

      {/* Читайте также */}
      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/konditsionery-gomel" className="block text-red-700 hover:underline text-sm">
            → Кондиционеры в Гомеле с установкой — каталог и цены 2026
          </Link>
          <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">
            → Как выбрать кондиционер для квартиры
          </Link>
          <Link href="/articles/skolko-vremeni-zanimaet-ustanovka-konditsionera" className="block text-red-700 hover:underline text-sm">
            → Сколько времени занимает установка кондиционера
          </Link>
          <Link href="/articles/soglasovanie-ustanovki" className="block text-red-700 hover:underline text-sm">
            → Нужно ли разрешение на установку кондиционера
          </Link>
        </div>
      </div>
    </main>
    </ArticleShell>
  );
}
