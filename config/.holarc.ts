import { ProxyConfigMap, ProxyConfigArray } from 'webpack-dev-server';

export default {
  proxy: {},
} as {
  proxy?: ProxyConfigMap | ProxyConfigArray;
};
