import path from 'path';
import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as devConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

type Config = Configuration & devConfiguration;

const config: Config = {
  mode,
  entry: path.resolve(__dirname, '../src/app.tsx'),
  output: { path: path.resolve(__dirname, '../dist'), filename: 'index.bundle.js' },
  plugins: [
    new HtmlWebpackPlugin({ title: 'webpack app', template: 'src/index.html' }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../public') }]),
    // TODO: 生产环境千万不要开启热更新
    new HotModuleReplacementPlugin(),
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
              hmr: mode === 'development',
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
  devtool: 'eval-source-map',
  devServer: {
    // TODO: 似乎和inline一起使用才有效果，没搞明白
    // contentBase: path.join(__dirname, './'),
    hot: true,
    // NOTE: 单页面应用且使用historyApi会用到，他会让所有请求均返回特定页面，但可以配置路由规则
    // historyApiFallback: true
    // inline: false
    port: 9527,
    open: true,
  },
};

export default config;
