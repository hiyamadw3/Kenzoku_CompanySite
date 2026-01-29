/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Kenzoku_CompanySite',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
