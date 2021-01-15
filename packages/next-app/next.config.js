module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.jsx?$/,
      use: ['source-map-loader'],
      enforce: 'pre',
      exclude: /node_modules/,
    })

    return config
  },
}
