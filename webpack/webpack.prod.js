const merge = require('webpack-merge');
const dotenv = require('dotenv');
const webpack = require('webpack');
const common = require('./webpack.common.js');

dotenv.config();

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
