const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = (env) => {
  return {
    experiments: {
      topLevelAwait: true,
    },
    entry: {
      index: {
        import: './src/index.js',
      },
      hot: 'webpack/hot/dev-server.js',
      client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
      another: {
        import: './src/another-module.js',
      },
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },

    devServer: {
      static: './dist',
      hot: false,
      client: false,
      devMiddleware: {
        writeToDisk: true,
      }
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      usedExports: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          include: path.resolve(__dirname, 'src'),
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          include: path.resolve(__dirname, 'src'),
          type: 'asset/resource',
        }
      ],
    },
  };
}

