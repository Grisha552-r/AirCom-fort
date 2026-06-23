import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 3600,
    formats: ['image/webp'],
  },

  async redirects() {
    const categorySlugs = [
      'split-systems', 'split-electrolux', 'split-ballu',
      'split-haier', 'split-lg', 'split-mitsudai', 'mobile',
    ];
    return [
      {
        source: '/product-detail',
        has: [{ type: 'query', key: 'id', value: '(?<id>.+)' }],
        destination: '/products/:id',
        permanent: true,
      },
      ...categorySlugs.map(slug => ({
        source: '/products',
        has: [{ type: 'query', key: 'category', value: slug }],
        destination: `/products/${slug}`,
        permanent: true,
      })),
      {
        source: '/articles/mulitsplit-gomel',
        destination: '/articles/multisplit-gomel',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/requisites',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/requisites',
        permanent: true,
      },
      { source: '/apple-icon', destination: '/apple-icon.png', permanent: true },
      { source: '/icon', destination: '/icon.png', permanent: true },
      { source: '/kalkulyator', destination: '/services', permanent: true },
      { source: '/kalkulyator/', destination: '/services', permanent: true },
      { source: '/uslugi', destination: '/services', permanent: true },
      { source: '/uslugi/', destination: '/services', permanent: true },
      { source: '/podbor-konditsionera', destination: '/products', permanent: true },
      { source: '/podbor-konditsionera/', destination: '/products', permanent: true },
      { source: '/tseny', destination: '/services', permanent: true },
      { source: '/tseny/', destination: '/services', permanent: true },
      { source: '/blog', destination: '/articles', permanent: true },
      { source: '/blog/', destination: '/articles', permanent: true },
      { source: '/ustanovka-konditsionerov', destination: '/services', permanent: true },
      { source: '/ustanovka-konditsionerov/', destination: '/services', permanent: true },
      { source: '/articles/konditsioner-midea-gomel', destination: '/articles', permanent: true },
      { source: '/articles/ustanovka-konditsionera-v-gomele', destination: '/services', permanent: true },
    ];
  },

  compress: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      // Static assets — 1 year cache
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Images — 30 days
      {
        source: '/assets/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
      // Sitemap and robots — 1 day
      {
        source: '/(sitemap.xml|robots.txt)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' }],
      },
    ];
  },

  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
};
export default nextConfig;