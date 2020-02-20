const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config = {
  mode,
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack app',
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};

module.exports = config;
