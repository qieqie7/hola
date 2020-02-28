import path from 'path';
import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as devConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// 用户自定义外部配置
import holaConfig from './.holarc';

const isProd = process.env.NODE_ENV === 'production';

type Config = Configuration & devConfiguration;

const config: Config = {
  entry: path.resolve(__dirname, '../src/app.tsx'),
  output: { path: path.resolve(__dirname, '../dist'), filename: 'index.bundle.js' },
  plugins: [
    new HtmlWebpackPlugin({ title: 'webpack app', template: 'src/index.html' }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../public') }]),
  ],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: !isProd,
              reload: true,
            },
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
};

export default config;
