import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.143'],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.albertoferreira.pt',
          },
        ],
        destination: 'https://albertoferreira.pt/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
