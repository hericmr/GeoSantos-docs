/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/GeoSantos-docs',
  assetPrefix: '/GeoSantos-docs/',
}

module.exports = nextConfig 