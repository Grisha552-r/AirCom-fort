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
    ];
  },

  compress: true,

  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
};
export default nextConfig;