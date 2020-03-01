import { HotModuleReplacementPlugin, Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import webpackBasicConfig from './webpack.config';
// 用户自定义外部配置
import holaConfig from './.holarc';

const config: Configuration = {
  mode: 'development',
  plugins: [new HotModuleReplacementPlugin()],
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
    proxy: holaConfig.proxy,
    // NOTE: 开启GZIP
    compress: true,
  },
};

export default webpackMerge(webpackBasicConfig, config as Configuration);
