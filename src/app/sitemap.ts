import { MetadataRoute } from 'next';
import { getSupabaseAdmin } from '@/lib/supabase';

const BASE = 'https://aircom-fort.by';

const STATIC_PAGES = [
  { url: `${BASE}/`,                        priority: 1.0, changefreq: 'daily'   },
  { url: `${BASE}/konditsionery-gomel`,     priority: 0.98, changefreq: 'daily'  },
  { url: `${BASE}/products`,                priority: 0.9, changefreq: 'daily'   },
  { url: `${BASE}/services`,                priority: 0.8, changefreq: 'weekly'  },
  { url: `${BASE}/about`,                   priority: 0.5, changefreq: 'monthly' },
  { url: `${BASE}/requisites`,              priority: 0.4, changefreq: 'monthly' },
  { url: `${BASE}/articles`,                priority: 0.6, changefreq: 'weekly'  },
];

const CATEGORY_SLUGS = [
  'split-systems', 'split-electrolux', 'split-ballu',
  'split-haier', 'split-lg', 'split-mitsudai', 'split-kinghome', 'mobile',
];

const ARTICLE_SLUGS = [
  'tsena-ustanovki-konditsionera',
  'konditsioner-dlya-komnaty',
  'konditsioner-ne-okhlazhdaet',
  'kak-vybrat-konditsioner',
  'invertor-ili-obychnyy',
  'chistka-i-obsluzhivanie',
  'kak-pravilno-polzovatsya-letom',
  'podgotovka-k-zime',
  'soglasovanie-ustanovki',
  'mobilnyy-ili-split',
  'ustanovka-konditsionera-v-gomele',
  'skolko-vremeni-zanimaet-ustanovka-konditsionera',
  'razreshenie-na-ustanovku-konditsionera',
  'konditsioner-pod-klyuch',
  'montazh-kassetnogo-konditsionera',
  'zapravka-konditsionera-gomel',
  'remont-konditsionera-gomel',
  'obsluzhivanie-konditsionera-gomel',
  'demontazh-konditsionera-gomel',
  'konditsioner-electrolux-gomel',
  'konditsioner-dlya-ofisa-gomel',
  'tikhiy-konditsioner-dlya-spalni',
  'konditsioner-ballu-gomel',
  'konditsioner-haier-gomel',
  'konditsioner-lg-gomel',
  'konditsioner-dlya-detskoy',
  'invertor-konditsioner-gomel',
  'split-sistema-gomel',
  'konditsioner-dlya-gostinoy',
  'mulitsplit-gomel',
  'konditsioner-midea-gomel',
  'konditsioner-gree-gomel',
  'konditsioner-dlya-dachi',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const categoryPages = CATEGORY_SLUGS.map(slug => ({
    url: `${BASE}/products/${slug}`,
    lastModified: now,
    priority: 0.85,
  }));

  const articlePages = ARTICLE_SLUGS.map(slug => ({
    url: `${BASE}/articles/${slug}`,
    lastModified: now,
    priority: 0.6,
  }));

  // Fetch products from Supabase (works on Vercel, unlike fs.readFileSync)
  let productPages: MetadataRoute.Sitemap = [];
  try {
    const { data } = await getSupabaseAdmin()
      .from('products')
      .select('id')
      .order('id');
    if (data) {
      productPages = data.map(p => ({
        url: `${BASE}/products/${p.id}`,
        lastModified: now,
        priority: 0.7,
      }));
    }
  } catch {}

  return [
    ...STATIC_PAGES.map(p => ({ url: p.url, lastModified: now, priority: p.priority })),
    ...categoryPages,
    ...articlePages,
    ...productPages,
  ];
}
