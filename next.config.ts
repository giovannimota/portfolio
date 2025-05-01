import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  }
}

export default nextConfig
