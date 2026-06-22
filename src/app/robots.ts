import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/data/', '/admin/'],
      },
      {
        userAgent: 'Yandexbot',
        allow: '/',
        disallow: ['/api/', '/_next/data/', '/admin/'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://aircom-fort.by/sitemap.xml',
    host: 'https://aircom-fort.by',
  };
}