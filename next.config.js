/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailingSlash and distDir settings as they might interfere with static export
  // Update basePath according to your repository name
  // basePath: '/your-repo-name',
}

module.exports = nextConfig 