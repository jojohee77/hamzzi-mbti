/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async exportPathMap(defaultPathMap) {
    delete defaultPathMap['/pre-result']
    return defaultPathMap
  },
}

export default nextConfig
