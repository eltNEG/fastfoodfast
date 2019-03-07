const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 5000,
    contentBase: './dist'
  },
  plugins: [new Dotenv()]
});
