const path = require('path');
const fs = require('fs');
var webpack = require('webpack');

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/index-node.js',
  target: 'node',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/backend')
  },
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true, 
        entryOnly: false 
    })
  ],
};