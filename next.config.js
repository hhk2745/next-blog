/** @type {import('next').NextConfig} */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack(config, { isServer, dev }){
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, './node_modules/libpag/lib/libpag.wasm'), to: './static/chunks/' }],
      }),
    );
    return config;
  },
};