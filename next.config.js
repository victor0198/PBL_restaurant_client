const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = {
  images: {
    domains: ['external-content.duckduckgo.com'],
  },
}
