import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import WebpackBar from 'webpackbar';
// 用户自定义外部配置
import holaConfig from './.holarc';

const { outputPath = './dist' } = holaConfig;

const config: Configuration = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '../', outputPath),
        filename: 'hola.[name].js',
    },
    // NOTE: webpack 5.72.0 默认时间20ms，会出现单次保存 两次编译的情况
    // chokidar watch change 也会有这个问题
    // 可能是底层依赖的 fsevents 的问题
    watchOptions: {
        aggregateTimeout: 200,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack app',
            template: 'src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, '../public') }],
        }),
        new EslintWebpackPlugin({
            extensions: ['tsx', 'ts', 'jsx', 'js'],
            exclude: 'node_modules',
            fix: true,
            threads: true,
            lintDirtyModulesOnly: true,
            emitWarning: false,
        }),
        new ReactRefreshWebpackPlugin(),
        new WebpackBar({ name: 'Hola Cli' }),
    ],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {

                    // },
                },
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            modules: {
                                mode: (resourcePath) => {
                                    if (/\.module\.(c|le)ss$/i.test(resourcePath)) {
                                        return 'local';
                                    }

                                    return 'global';
                                },
                                localIdentName: '[path][name]__[local]',
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    externals: holaConfig.externals,
    /* 这个 devtool 下
     * eval 代表在 eval下执行
     * cheap 代表不显示列信息
     * module 代表显示源码为未经 loader转换的代码
     */
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, outputPath),
        },
        client: {
            logging: 'warn',
        },
        hot: true,
        // NOTE: 单页面应用且使用historyApi会用到，他会让所有请求均返回特定页面，但可以配置路由规则
        historyApiFallback: true,
        port: 9527,
        // open: true,
        proxy: holaConfig.proxy,
        // NOTE: 开启GZIP
        // compress: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    stats: 'errors-only',
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename],
        },
    },
};

export default config;
