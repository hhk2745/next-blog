/** @type {import('next').NextConfig} */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, './node_modules/libpag/lib/libpag.wasm'), to: './static/chunks/' }],
      }),
    );
    return config;
  },
};