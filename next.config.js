/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Font optimization
  optimizeFonts: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  
  // Bundle analyzer (only in development)
  webpack: (config, { dev, isServer }) => {
    // Bundle optimization
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          animations: {
            test: /[\\/]node_modules[\\/](gsap|framer-motion|@studio-freight\/lenis|lenis)[\\/]/,
            name: 'animations',
            chunks: 'all',
            priority: 10,
          },
        },
      }
    }
    
    return config
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

