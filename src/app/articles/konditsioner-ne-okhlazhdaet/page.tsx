import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function KonditsionerNeOkhlazhdaetPage() {
  return (
    <ArticleShell>
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
          { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
          { '@type': 'ListItem', position: 3, name: 'Кондиционер работает, но не охлаждает: 7 причин и что делать' },
        ],
      }) }} />
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Главная</Link>
        {' / '}
        <Link href="/articles" className="hover:text-blue-600">Статьи</Link>
        {' / '}
        <span>Кондиционер не охлаждает</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Кондиционер работает, но не охлаждает: 7 причин и что делать
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Кондиционер включён, вентилятор крутится, а прохлады нет — знакомая ситуация в жаркий день.
        В большинстве случаев проблема простая и устраняется за 10 минут. Разберём по порядку от
        простого к сложному.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
        <strong>Важно:</strong> сначала проверьте все пункты самостоятельно. Если ни один не помог —
        звоните мастеру. Не пытайтесь разбирать кондиционер самостоятельно: это может лишить вас гарантии.
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-6">7 причин, почему кондиционер не охлаждает</h2>

      <div className="space-y-8 mb-10">

        <div className="border-l-4 border-blue-400 pl-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Грязный воздушный фильтр</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Самая частая причина — 40% всех обращений. Забитый фильтр блокирует воздухообмен: кондиционер
            гоняет воздух, но не может его охладить. При этом он потребляет те же 1–1,5 кВт, что и в норме.
          </p>
          <div className="bg-green-50 rounded-lg p-3 text-sm text-green-800">
            <strong>Решение:</strong> снимите сетчатые фильтры (крышка внутреннего блока открывается
            без инструментов), промойте под тёплой водой, высушите и верните на место. Занимает 10 минут.
          </div>
        </div>

        <div className="border-l-4 border-blue-400 pl-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Неправильный режим работы</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Если на пульте выбран режим «Heat» (обогрев) или «Fan only» (только вентиляция) — кондиционер
            не будет охлаждать. Это случается, если кто-то случайно нажал не ту кнопку.
          </p>
          <div className="bg-green-50 rounded-lg p-3 text-sm text-green-800">
            <strong>Решение:</strong> на пульте выберите режим «Cool» (значок снежинки ❄), установите
            температуру на 3–5 градусов ниже комнатной.
          </div>
        </div>

        <div className="border-l-4 border-blue-400 pl-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Обмерзание испарителя</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Если внутри блока намёрз лёд, холодный воздух не может пройти наружу. Видно по
            капающей воде с корпуса или видимому льду через решётку.
          </p>
          <div className="bg-green-50 rounded-lg p-3 text-sm text-green-800">
            <strong>Решение:</strong> выключите кондиционер (режим «Fan» без охлаждения), дайте ему
            оттаять 1–2 часа. Включите снова. Если обмерзание повторяется — причина в нехватке фреона.
          </div>
        </div>

        <div className="border-l-4 border-orange-400 pl-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Недостаток фреона (утечка)</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Фреон не расходуется сам по себе — если его не хватает, значит есть утечка. Признаки:
            обмерзание, кондиционер работает долго, а температура почти не снижается. Наружный блок
            может быть горячим.
          </p>
          <div className="bg-orange-50 rounded-lg p-3 text-sm text-orange-800">
            <strong>Нужен мастер:</strong> сначала найти и устранить утечку, потом дозаправить.
            Без устранения утечки дозаправка поможет ненадолго.
            Стоимость: диагностика + заправка от 60 р.
          </div>
        </div>

        <div className="border-l-4 border-orange-400 pl-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Засорение наружного блока</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Наружный блок отдаёт тепло в атмосферу. Если он забит тополиным пухом, грязью или
            листьями — теплообмен нарушается. Кондиционер работает, но эффективность падает на 30–40%.
          </p>
          <div className="bg-green-50 rounded-lg p-3 text-sm text-green-800">
            <strong>Решение:</strong> осторожно промойте наружный блок из шланга (снаружи, вдоль
            рёбер теплообменника). Делайте это при выключенном кондиционере.
          </div>
        </div>

        <div className="border-l-4 border-red-400 pl-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Поломка компрессора</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Компрессор — сердце кондиционера. При его поломке кондиционер включается, вентилятор
            крутится, но охлаждения нет совсем. Характерный признак: наружный блок не греется.
          </p>
          <div className="bg-red-50 rounded-lg p-3 text-sm text-red-800">
            <strong>Серьёзная поломка:</strong> замена компрессора стоит от 150 р. + работа. На
            старых кондиционерах (7+ лет) иногда выгоднее купить новый. Нужна диагностика мастера.
          </div>
        </div>

        <div className="border-l-4 border-red-400 pl-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Кондиционер не рассчитан на жару</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            В сильную жару (35°C и выше) кондиционер может не справляться с охлаждением, если он
            недостаточной мощности для данного помещения. Особенно в угловых квартирах или при
            плохой теплоизоляции.
          </p>
          <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
            <strong>Решение:</strong> помогают дополнительные меры — шторы/жалюзи на окна с солнечной
            стороны, проветривание ночью. Если проблема системная — нужен кондиционер большей мощности.
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что проверить самостоятельно — чеклист</h2>
      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <div className="space-y-3">
          {[
            'Фильтры чистые (сетки без серого налёта)',
            'На пульте выбран режим Cool ❄, не Heat',
            'Установленная температура ниже комнатной',
            'Жалюзи/заслонки внутреннего блока открыты',
            'Нет льда или инея на внутреннем блоке',
            'Наружный блок не засорён пухом или листьями',
            'Вентилятор наружного блока вращается',
          ].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-gray-300 rounded shrink-0 flex items-center justify-center text-gray-400 text-xs font-bold">
                {i + 1}
              </div>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Не помогло? Вызовите мастера</h3>
        <p className="text-blue-800 text-sm mb-4">
          Диагностика кондиционера в AirComfort — от 30 р. Мастер приедет, найдёт причину
          и устранит неисправность в тот же день.
        </p>
        <Link
          href="/services"
          className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Вызвать мастера →
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
      <div className="space-y-5 mb-10">
        {[
          {
            q: 'Почему кондиционер работает, но не охлаждает?',
            a: 'Самые частые причины: загрязнённый фильтр, обмерзание испарителя, недостаток фреона или неправильный режим работы. Начните с проверки фильтра — в 40% случаев это решает проблему без вызова мастера.',
          },
          {
            q: 'Сколько стоит дозаправка кондиционера фреоном?',
            a: 'В AirComfort: диагностика + заправка от 60 р. Предварительно мастер проверяет герметичность системы — без устранения утечки дозаправка не поможет надолго.',
          },
          {
            q: 'Можно ли самостоятельно заправить кондиционер фреоном?',
            a: 'Нет. Дозаправка требует специального оборудования (манометрический коллектор, вакуумный насос, баллон с фреоном). Без этого можно повредить компрессор. Вызывайте специалиста.',
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
          <Link href="/articles/chistka-i-obsluzhivanie" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-medium text-gray-900 text-sm">Чистка и обслуживание кондиционера</p>
            <p className="text-gray-500 text-xs mt-1">Как и когда обслуживать кондиционер</p>
          </Link>
          <Link href="/articles/tsena-ustanovki-konditsionera" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <p className="font-medium text-gray-900 text-sm">Цены на установку кондиционера</p>
            <p className="text-gray-500 text-xs mt-1">Монтаж и обслуживание в Гомеле</p>
          </Link>
        </div>
      </div>
    </main>
    </ArticleShell>
  );
}
