/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // App Router server actions are GA in 14.x; nothing experimental needed for scaffold.
  },
  images: {
    remotePatterns: [
      // Allow Playpark CDN + IPFS gateways (placeholder hosts).
      { protocol: 'https', hostname: '**.playpark.com' },
      { protocol: 'https', hostname: 'ipfs.io' },
      { protocol: 'https', hostname: 'gateway.pinata.cloud' },
    ],
  },
  // No-op headers; production CSP/HSTS goes here later.
  async headers() {
    return [];
  },
};

export default nextConfig;
