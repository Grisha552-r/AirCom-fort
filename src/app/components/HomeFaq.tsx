const FAQ_ITEMS = [
  {
    q: 'Сколько стоит установка кондиционера в Гомеле?',
    a: 'Установка кондиционера в Гомеле от 400 р. Цена под ключ — кондиционер + монтаж. Electrolux от 1 290 р., Ballu от 1 090 р. Выезд мастера бесплатно.',
  },
  {
    q: 'Как быстро установят кондиционер?',
    a: 'Выезд мастера и установка кондиционера — в день заказа или на следующий день. Монтаж занимает 2–4 часа.',
  },
  {
    q: 'Какая гарантия на кондиционер?',
    a: 'Гарантия на кондиционер — 1 год, на монтажные работы — 1 год. Обслуживание и ремонт по гарантии бесплатно.',
  },
  {
    q: 'Выезжаете ли в область?',
    a: 'Да, работаем в Гомеле и Гомельской области. Выезд в район — по договорённости. Звоните: +375 29 105-06-94.',
  },
  {
    q: 'Какие кондиционеры есть в наличии?',
    a: 'В наличии более 300 моделей: Electrolux, Ballu, Haier, LG, Mitsudai, King Home. Сплит-системы, мобильные, инверторные. Цены от 890 р.',
  },
];

export default function HomeFaq() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Частые вопросы</h2>
      <div className="space-y-3">
        {FAQ_ITEMS.map(item => (
          <details key={item.q} className="group border border-border rounded-xl overflow-hidden bg-white">
            <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-sm text-foreground hover:bg-zinc-50 list-none">
              {item.q}
              <svg className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
