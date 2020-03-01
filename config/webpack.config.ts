import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as devConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// 用户自定义外部配置
import holaConfig from './.holarc';

const isProd = process.env.NODE_ENV === 'production';

type Config = Configuration & devConfiguration;

const { outputPath = './dist' } = holaConfig;

const config: Config = {
  entry: path.resolve(__dirname, '../src/app.tsx'),
  output: { path: path.resolve(__dirname, '../', outputPath), filename: 'hola.bundle.js' },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack app',
      template: 'src/index.html',
      minify: {
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true, // 压缩内联css
      },
    }),
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
            options: { esModule: true, hmr: !isProd, reload: true },
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
  externals: holaConfig.externals,
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 10000,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true,
  //       },
  //     },
  //   },
  // },
};

export default config;
