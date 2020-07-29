const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')

const fs = require('fs')

const nextConfiguration = {
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    if (!options.isServer) {
      config.node = {
        fs: 'empty',
      }
    }
    return config
  },
}

module.exports = withPlugins([[withCSS, nextConfiguration]])
