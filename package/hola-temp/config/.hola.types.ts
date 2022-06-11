import { Configuration } from 'webpack';
import { Configuration as WDSConfig } from 'webpack-dev-server';
interface HolaConfiguration {
    // webpack
    outputPath?: string;
    proxy?: WDSConfig['proxy'];
    externals?: Configuration['externals'];
}

export function definedConfig(config: HolaConfiguration) {
    return config;
}
