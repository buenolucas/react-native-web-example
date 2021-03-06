const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = path.join(__dirname, '..');
const webpackEnv = process.env.NODE_ENV || 'development';

module.exports = {
  mode: webpackEnv,
  entry: {
    app: path.join(rootDir, './uiforge/src/index.tsx'),
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'app-[hash].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpe?g|gif|ttf|otf)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.(svg)$/i,
        exclude: /node_modules/,
        loader: 'react-native-svg-loader',
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './web/index.html'),
    }),
    //new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.jsx', '.web.js', '.jsx', '.js'], // read files in following order
    alias: Object.assign({
      'react-native$': 'react-native-web',
    }),
  },
};
