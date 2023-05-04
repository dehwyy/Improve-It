/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        port: '',
        hostname: '**',
        pathname: '**',
        protocol: 'https',
      },
      {
        port: '',
        hostname: '**',
        pathname: '**',
        protocol: 'http',
      },
    ],
  },
}
