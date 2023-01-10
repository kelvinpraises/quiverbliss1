/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5500',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.ipfs.w3s.link',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
