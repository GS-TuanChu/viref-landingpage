/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/'
  },
  i18n
  // trailingSlash: true,
}

module.exports = nextConfig
