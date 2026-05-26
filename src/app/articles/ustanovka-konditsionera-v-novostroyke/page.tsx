import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function NovostroykaPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Установка кондиционера в новостройке' },
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
        <span>Установка кондиционера в новостройке</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Установка кондиционера в новостройке — цены 2026 и особенности
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Установить кондиционер в новостройке можно до отделки или после. Разбираем оба варианта,
        объясняем, когда лучше делать отверстие под трассу и что нужно учесть при монтаже
        в новых домах Гомеля.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">До отделки или после?</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Параметр</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">До чистовой отделки</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">После ремонта</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Трубы и кабели', 'Укладываются в штробы — не видны', 'Прокладываются в коробе по стене'],
              ['Внешний вид', 'Идеально — нет видимых коробов', 'Видны декоративные короба'],
              ['Стоимость монтажа', 'Одинакова', 'Одинакова (+50–100 р. за короб)'],
              ['Пыль и грязь', 'Меньше — отделка потом', 'Нужно защищать мебель'],
              ['Когда делать?', 'На этапе чёрновых работ', 'В любое время после ремонта'],
            ].map(([param, before, after], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{param}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{before}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-1">Совет: делайте отверстие заранее</p>
        <p className="text-gray-700 text-sm">
          Если делаете ремонт — попросите пробурить отверстие под трассу кондиционера (65–80 мм)
          ещё на этапе работ. Это стоит 1 500–2 000 р. Потом отверстие закрывается заглушкой
          до момента покупки кондиционера. При монтаже — просто вытащите заглушку.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Согласование в новостройке Гомеля</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        В большинстве новостроек Гомеля специального разрешения на кондиционер не требуется —
        если наружный блок вешается на стену вашей квартиры без изменения архитектурного вида фасада.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Согласование нужно, если: управляющая компания установила единые требования к размещению блоков,
        блок крепится на козырёк или общедомовую стену, или дом является архитектурным памятником.
        Подробнее:{' '}
        <Link href="/articles/razreshenie-na-ustanovku-konditsionera" className="text-red-700 hover:underline">
          разрешение на установку кондиционера в Гомеле
        </Link>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Этапы монтажа в новостройке</h2>
      <div className="space-y-3 mb-8">
        {[
          ['1. Выбор места', 'Определяем, где будет внутренний блок и где — наружный. Учитываем длину трассы (до 5 м в стандартном монтаже).'],
          ['2. Бурение', 'Сверлим отверстие в стене диаметром 65–80 мм под 5–10° уклоном для дренажа.'],
          ['3. Прокладка трассы', 'Медные трубки в изоляции + силовой кабель + дренаж. Укладываем в штробу или в декоративный короб.'],
          ['4. Монтаж блоков', 'Наружный блок на кронштейны, внутренний на специальную пластину на стене.'],
          ['5. Вакуумирование и заправка', 'Вакуумируем систему насосом, проверяем герметичность, открываем фреон.'],
          ['6. Пусконаладка', 'Запуск и проверка всех режимов. Инструктаж по использованию.'],
        ].map(([step, desc]) => (
          <div key={step} className="flex gap-3">
            <span className="font-semibold text-red-700 shrink-0 text-sm">{step}</span>
            <p className="text-gray-700 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Стоимость установки в новостройке</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Работа</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Стандартный монтаж (до 3 м трассы)', 'от 290 р.'],
              ['Монтаж с трассой 3–5 м', 'от 350 р.'],
              ['Монтаж с трассой 5–10 м', 'от 450 р.'],
              ['Прокладка в штробу (за 1 п.м.)', 'от 40 р.'],
              ['Декоративный короб', 'от 50 р.'],
              ['Кондиционер + установка под ключ', 'от 1 290 р.'],
            ].map(([work, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 text-gray-700">{work}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Выезд на замер бесплатно</p>
        <p className="text-gray-700 text-sm mb-3">
          Мастер приедет, оценит условия монтажа, подберёт кронштейны и рассчитает стоимость.
          Работаем в Гомеле и Гомельской области. Звоните:
        </p>
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">
            → Полные цены на установку кондиционера в Гомеле
          </Link>
          <Link href="/articles/razreshenie-na-ustanovku-konditsionera" className="block text-red-700 hover:underline text-sm">
            → Разрешение на установку кондиционера — когда нужно
          </Link>
          <Link href="/articles/konditsioner-pod-klyuch" className="block text-red-700 hover:underline text-sm">
            → Кондиционер под ключ — что входит в пакет
          </Link>
        </div>
      </div>

      <Link
        href="/products"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
      >
        Выбрать кондиционер для новостройки →
      </Link>
    </main>
    </ArticleShell>
  );
}
