/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
    ],
  },
};

export default nextConfig;
