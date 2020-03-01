import { ProxyConfigMap, ProxyConfigArray } from 'webpack-dev-server';
import webpack from 'webpack';

export interface HolaConfiguration {
  // webpack
  outputPath?: string;
  proxy?: ProxyConfigMap | ProxyConfigArray;
  externals?:
    | string
    | RegExp
    | webpack.ExternalsObjectElement
    | webpack.ExternalsFunctionElement
    | webpack.ExternalsElement[];
}
