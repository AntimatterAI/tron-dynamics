/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
  
  // Server external packages (moved from experimental)
  serverExternalPackages: [],
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // Advanced webpack optimization
  webpack: (config, { dev, isServer, webpack }) => {
    if (!dev && !isServer) {
      // Ultra-aggressive code splitting for mobile performance
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 200000,
        maxAsyncRequests: 30,
        maxInitialRequests: 25,
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
            enforce: false,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
            maxSize: 150000,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          animations: {
            test: /[\\/]node_modules[\\/](gsap|framer-motion|@studio-freight\/lenis|lenis)[\\/]/,
            name: 'animations',
            chunks: 'async',
            priority: 15,
          },
          ui: {
            test: /[\\/]src[\\/]components[\\/]ui[\\/]/,
            name: 'ui',
            chunks: 'async',
            priority: 10,
          },
          icons: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'icons',
            chunks: 'async',
            priority: 12,
          }
        },
      }
      
      // Aggressive tree shaking optimization
      config.optimization.usedExports = true
      config.optimization.sideEffects = false
      config.optimization.providedExports = true
      config.optimization.innerGraph = true
      
      // Module concatenation
      config.optimization.concatenateModules = true
      
      // Modern JS target for smaller bundles
      config.target = ['web', 'es2017']
      
      // Additional bundle optimizations
      config.resolve.alias = {
        ...config.resolve.alias,
        // Reduce bundle size by using lighter alternatives
        'framer-motion': false, // Already removed but ensure it's not loaded
      }
      
      // Exclude heavy polyfills for modern browsers
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    // Realistic performance hints for mobile
    config.performance = {
      maxAssetSize: 300000,
      maxEntrypointSize: 400000,
      hints: 'warning',
      assetFilter: function(assetFilename) {
        return !assetFilename.endsWith('.map');
      }
    }
    
    return config
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // Static optimization
  output: 'standalone',
  
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
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig

