export interface CityData {
  slug: string;
  name: string;
  nameIn: string;
  nameTo: string;
  distance: number;
  uniqueNote: string;
  region: string;
}

function deliveryText(d: CityData): string {
  if (d.distance <= 50) {
    return `${d.name} находится в ${d.distance} км от Гомеля — выезжаем в течение 1–2 рабочих дней. Дополнительная стоимость выезда минимальна.`;
  }
  if (d.distance <= 120) {
    return `${d.name} — ${d.distance} км от Гомеля. Выезжаем по предварительной записи, срок — 2–3 рабочих дня после согласования. Стоимость выезда мастера уточняется индивидуально.`;
  }
  return `${d.name} находится в ${d.distance} км от Гомеля. Выезжаем по предварительной записи, срок — 3–5 рабочих дней. Стоимость выезда мастера и доставки оборудования согласовывается отдельно.`;
}

export function getDeliveryText(city: CityData): string {
  return deliveryText(city);
}

export const CITIES: CityData[] = [
  {
    slug: 'vetka',
    name: 'Ветка',
    nameIn: 'Ветке',
    nameTo: 'Ветку',
    distance: 25,
    region: 'Ветковский район',
    uniqueNote: 'Один из ближайших к Гомелю районных центров — выезд в тот же или следующий день.',
  },
  {
    slug: 'dobrush',
    name: 'Добруш',
    nameIn: 'Добруше',
    nameTo: 'Добруш',
    distance: 36,
    region: 'Добрушский район',
    uniqueNote: 'Небольшой промышленный город в 36 км от Гомеля, выезд возможен в день заказа.',
  },
  {
    slug: 'rechitsa',
    name: 'Речица',
    nameIn: 'Речице',
    nameTo: 'Речицу',
    distance: 57,
    region: 'Речицкий район',
    uniqueNote: 'Речица — крупный промышленный центр с населением более 65 000 человек, один из самых активных районов по монтажу климатической техники.',
  },
  {
    slug: 'buda-koshelevo',
    name: 'Буда-Кошелёво',
    nameIn: 'Буда-Кошелёво',
    nameTo: 'Буда-Кошелёво',
    distance: 60,
    region: 'Буда-Кошелёвский район',
    uniqueNote: 'Районный центр в 60 км от Гомеля с развитой жилой застройкой.',
  },
  {
    slug: 'rogachev',
    name: 'Рогачёв',
    nameIn: 'Рогачёве',
    nameTo: 'Рогачёв',
    distance: 85,
    region: 'Рогачёвский район',
    uniqueNote: 'Рогачёв — один из крупнейших городов восточной части Гомельщины с населением около 33 000 человек.',
  },
  {
    slug: 'svetlogorsk',
    name: 'Светлогорск',
    nameIn: 'Светлогорске',
    nameTo: 'Светлогорск',
    distance: 95,
    region: 'Светлогорский район',
    uniqueNote: 'Светлогорск — крупный город с населением 68 000 человек, один из промышленных центров области.',
  },
  {
    slug: 'chechersk',
    name: 'Чечерск',
    nameIn: 'Чечерске',
    nameTo: 'Чечерск',
    distance: 102,
    region: 'Чечерский район',
    uniqueNote: 'Районный центр с историческими традициями, расположен в 102 км от Гомеля.',
  },
  {
    slug: 'korma',
    name: 'Корма',
    nameIn: 'Корме',
    nameTo: 'Корму',
    distance: 105,
    region: 'Кормянский район',
    uniqueNote: 'Небольшой районный центр Кормянского района.',
  },
  {
    slug: 'zhlobin',
    name: 'Жлобин',
    nameIn: 'Жлобине',
    nameTo: 'Жлобин',
    distance: 130,
    region: 'Жлобинский район',
    uniqueNote: 'Жлобин — второй по величине город Гомельской области с населением около 76 000 человек, крупный промышленный центр.',
  },
  {
    slug: 'khoyniki',
    name: 'Хойники',
    nameIn: 'Хойниках',
    nameTo: 'Хойники',
    distance: 146,
    region: 'Хойникский район',
    uniqueNote: 'Районный центр на юге Гомельской области.',
  },
  {
    slug: 'oktyabrskiy',
    name: 'Октябрьский',
    nameIn: 'Октябрьском',
    nameTo: 'Октябрьский',
    distance: 155,
    region: 'Октябрьский район',
    uniqueNote: 'Посёлок городского типа Октябрьского района.',
  },
  {
    slug: 'kalinkovichi',
    name: 'Калинковичи',
    nameIn: 'Калинковичах',
    nameTo: 'Калинковичи',
    distance: 158,
    region: 'Калинковичский район',
    uniqueNote: 'Калинковичи — крупный железнодорожный узел и районный центр с населением около 39 000 человек.',
  },
  {
    slug: 'bragin',
    name: 'Брагин',
    nameIn: 'Брагине',
    nameTo: 'Брагин',
    distance: 168,
    region: 'Брагинский район',
    uniqueNote: 'Районный центр на юго-востоке Гомельской области.',
  },
  {
    slug: 'petrikov',
    name: 'Петриков',
    nameIn: 'Петрикове',
    nameTo: 'Петриков',
    distance: 195,
    region: 'Петриковский район',
    uniqueNote: 'Петриков — районный центр с населением около 20 000 человек на реке Припять.',
  },
  {
    slug: 'mozyr',
    name: 'Мозырь',
    nameIn: 'Мозыре',
    nameTo: 'Мозырь',
    distance: 200,
    region: 'Мозырский район',
    uniqueNote: 'Мозырь — крупнейший город на юге Беларуси с населением более 110 000 человек, второй по величине город Гомельской области.',
  },
  {
    slug: 'narovlya',
    name: 'Наровля',
    nameIn: 'Наровле',
    nameTo: 'Наровлю',
    distance: 219,
    region: 'Наровлянский район',
    uniqueNote: 'Небольшой районный центр на реке Припять.',
  },
  {
    slug: 'zhitkovichi',
    name: 'Житковичи',
    nameIn: 'Житковичах',
    nameTo: 'Житковичи',
    distance: 230,
    region: 'Житковичский район',
    uniqueNote: 'Районный центр на западе Гомельской области, недалеко от Припятского заповедника.',
  },
  {
    slug: 'lelchitsy',
    name: 'Лельчицы',
    nameIn: 'Лельчицах',
    nameTo: 'Лельчицы',
    distance: 240,
    region: 'Лельчицкий район',
    uniqueNote: 'Районный центр на юго-западе Гомельской области.',
  },
  {
    slug: 'elsk',
    name: 'Ельск',
    nameIn: 'Ельске',
    nameTo: 'Ельск',
    distance: 248,
    region: 'Ельский район',
    uniqueNote: 'Районный центр на юго-западе Гомельской области.',
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find(c => c.slug === slug);
}
