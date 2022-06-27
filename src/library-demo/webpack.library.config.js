
const path = require('path');

module.exports = {
  entry: './src/library-demo/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    // library: 'webpackNumbers'
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
  mode: 'development',
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_',
  //   },
  // },
};