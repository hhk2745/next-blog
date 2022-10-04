/** @type {import('next').NextConfig} */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const Dotenv = require("dotenv-webpack")


// const dotTarget = `${env.client ? 'client' : 'server'}.env`;
// const dotenv = new Dotenv({
//   path: dotTarget,
//   systemvars: false,
// });

// const ENV_URL = dotenv.getEnvs().env;

module.exports = {
  

  webpack(config, option){
    console.log(`@@`, option); 

    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve(__dirname, './node_modules/libpag/lib/libpag.wasm'), to: './static/chunks/' }],
      }),
    );
    // config.plugins.push(
    //   new Dotenv({
    //     path: `${env.client ? 'client' : 'server'}.env`,
    //   }),
    //   new webpack.DefinePlugin({
    //     __ACCESS_KEY: JSON.stringify(ENV_URL['ACCESS_KEY']),
    //   })
    // );
    return config;
  },
};