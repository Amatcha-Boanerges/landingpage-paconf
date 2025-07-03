import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'yourdomain.com',  // replace with your actual domain
          },
        ],
        destination: 'https://yourdomain.com/:path*', // replace with your domain too
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
