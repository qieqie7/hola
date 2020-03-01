import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import webpackBasicConfig from './webpack.config';
// 用户自定义外部配置
import holaConfig from './.holarc';

const config: Configuration = {
  mode: 'production',
};
export default webpackMerge(webpackBasicConfig, config);
