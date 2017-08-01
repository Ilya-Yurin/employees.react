const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'app/src/emp-app.jsx'),
    vendor: path.resolve(__dirname, 'assets/vendor.js')
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },

      {
        test: /\.styl$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'stylus-loader']
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'assets/index.html')
    }),

    new ExtractTextWebpackPlugin('[name].[contenthash].css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

  ],

  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  },

  devtool: 'eval-source-map'

};
