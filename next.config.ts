import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'goceylontravel.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'static.tacdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tripadvisor.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tripadvisor.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
