/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  // Update basePath according to your repository name
  // basePath: '/your-repo-name',
}

module.exports = nextConfig 