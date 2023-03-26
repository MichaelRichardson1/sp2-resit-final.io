/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'placekitten.com',
        port: '',
        pathname: '/500/**',
      },
    ],
  },
}

module.exports = {
  images: {
    domains: ['placekitten.com'],
  },
}