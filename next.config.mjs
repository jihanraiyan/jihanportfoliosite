/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/jihanportfoliosite' : '');
const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig