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
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
