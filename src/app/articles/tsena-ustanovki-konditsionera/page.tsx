import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function TsenaUstanovkiPage() {
  return (
    <ArticleShell>
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
          { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
          { '@type': 'ListItem', position: 3, name: 'Цены на установку кондиционера в Гомеле' },
        ],
      }) }} />
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Главная</Link>
        {' / '}
        <Link href="/articles" className="hover:text-blue-600">Статьи</Link>
        {' / '}
        <span>Цены на установку кондиционера</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Сколько стоит установка кондиционера в Гомеле в 2026 году
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Один из главных вопросов при покупке кондиционера — сколько придётся заплатить за установку.
        Назвать точную цифру по телефону сложно: стоимость зависит от мощности прибора, длины трассы
        и сложности монтажа. Но базовые цены прозрачны, и в этой статье мы разберём всё по шагам.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Базовые цены на монтаж в 2026 году</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь помещения</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мощность кондиционера</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена монтажа</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-gray-200">до 30 м²</td>
              <td className="p-3 border border-gray-200">7 000–9 000 BTU (2,1–2,7 кВт)</td>
              <td className="p-3 border border-gray-200 font-semibold text-blue-700">от 400 р.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">до 50 м²</td>
              <td className="p-3 border border-gray-200">12 000–18 000 BTU (3,5–5,3 кВт)</td>
              <td className="p-3 border border-gray-200 font-semibold text-blue-700">от 400 р.</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200">до 70 м²</td>
              <td className="p-3 border border-gray-200">24 000 BTU (7 кВт)</td>
              <td className="p-3 border border-gray-200 font-semibold text-blue-700">от 400 р.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 text-sm mb-8 italic">
        В базовую цену входит трасса 3 м, медные трубки, кабель, крепёж, вакуумирование и пусконаладка.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что входит в стоимость установки</h2>
      <ul className="space-y-3 mb-8 text-gray-700">
        {[
          'Крепление внутреннего блока на стену',
          'Крепление наружного блока на кронштейны',
          'Прокладка медных трубок трассы до 3 м',
          'Электрокабель от щитка до кондиционера',
          'Сливной шланг для конденсата',
          'Вакуумирование системы перед запуском',
          'Пусконаладочные работы и проверка всех режимов',
          'Инструктаж по эксплуатации',
        ].map(item => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">За что могут попросить доплату</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Базовая цена рассчитана на стандартный монтаж. Если условия сложнее — стоимость растёт.
        Вот реальные доплаты:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3 border border-gray-200 font-semibold">Условие</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Доплата</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Каждый доп. метр трассы (свыше 3 м)', '+50 р./м'],
              ['Монтаж через балкон или лоджию', '+50 р.'],
              ['Высотные работы (этаж выше 5-го)', 'от +100 р.'],
              ['Штробление стены под трубки', 'от +80 р.'],
              ['Перенос наружного блока на фасад', 'по договорённости'],
            ].map(([cond, price]) => (
              <tr key={cond} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200">{cond}</td>
                <td className="p-3 border border-gray-200 font-medium text-orange-600">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Установка через балкон: сколько стоит</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Если наружный блок нельзя вынести напрямую через стену — мастер выводит трассу через балкон или
        лоджию. Это стандартная ситуация для квартир без выхода на фасад. Доплата составляет 50 р.,
        итоговая цена — от 450 р. за помещение до 30 м².
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Сколько времени занимает монтаж</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Стандартная установка одного кондиционера занимает 2–4 часа. Мастер приезжает с инструментом
        и расходниками, не нужно ничего дополнительно готовить. После монтажа — пусконаладка и
        объяснение правил пользования. Если одновременно устанавливается несколько блоков или
        требуется штробление, работы могут занять 6–8 часов.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Кондиционер с установкой под ключ — выгодно ли</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Покупать кондиционер и монтаж отдельно — распространённая ошибка. Если берёте технику
        в AirComfort, установка обходится дешевле, чем при отдельном заказе: нет накладных расходов
        на два выезда и согласование. Плюс — единая гарантия на оборудование и монтаж: 1 год.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Рассчитайте стоимость онлайн</h3>
        <p className="text-blue-800 text-sm mb-4">
          Заполните форму на странице услуг — мастер перезвонит и назовёт точную цену с учётом
          особенностей вашего помещения.
        </p>
        <Link
          href="/services"
          className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Рассчитать стоимость →
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
      <div className="space-y-5 mb-10">
        {[
          {
            q: 'Сколько стоит стандартная установка кондиционера в Гомеле?',
            a: 'Стандартный монтаж в AirComfort: 400 р. независимо от мощности. В стоимость включена трасса 3 м, медные трубки, кабель и крепление.',
          },
          {
            q: 'Могут ли быть скрытые доплаты?',
            a: 'Доплаты возможны за длину трассы свыше 3 м (50 р./м), монтаж через балкон (+50 р.) и высотные работы (от +100 р.). Все условия оговариваются до начала работ.',
          },
          {
            q: 'Даётся ли гарантия на установку?',
            a: 'Да, гарантия на монтажные работы составляет 1 год. На оборудование — гарантия производителя (1–3 года в зависимости от бренда).',
          },
          {
            q: 'Нужно ли что-то готовить перед приездом мастера?',
            a: 'Освободите подход к месту монтажа внутреннего и наружного блока. Мастер приедет со всем инструментом и расходниками.',
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
          <Link href="/konditsionery-gomel" className="block p-4 border border-red-200 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
            <p className="font-medium text-red-800 text-sm">Купить кондиционер с установкой в Гомеле</p>
            <p className="text-red-600 text-xs mt-1">От 1 329 р. под ключ — 300+ моделей</p>
          </Link>
          <Link href="/articles/kak-vybrat-konditsioner" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-medium text-gray-900 text-sm">Как выбрать кондиционер для квартиры</p>
            <p className="text-gray-500 text-xs mt-1">Советы по мощности, бренду и функциям</p>
          </Link>
          <Link href="/articles/soglasovanie-ustanovki" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-medium text-gray-900 text-sm">Нужно ли согласование на установку</p>
            <p className="text-gray-500 text-xs mt-1">Разрешения и правила монтажа</p>
          </Link>
        </div>
      </div>
    </main>
    </ArticleShell>
  );
}
