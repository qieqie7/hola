import { Configuration } from 'webpack';
import { Configuration as WDSConfig } from 'webpack-dev-server';

export interface HolaConfiguration {
    // webpack
    outputPath?: string;
    proxy?: WDSConfig['proxy'];
    externals?: Configuration['externals'];
}
