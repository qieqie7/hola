import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// 用户自定义外部配置
import holaConfig from './.holarc';

const { outputPath = './dist' } = holaConfig;

const config: Configuration = {
    entry: {
        main: path.resolve(__dirname, '../src/app.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '../', outputPath),
        filename: 'hola.[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack app',
            template: 'src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, '../public') }],
        }),
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
                    'style-loader',
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            modules: {
                                localIdentName: "[name]_[local]-[hash:base64:5]",
                            }
                        },
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
        ],
    },
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
    // externals: holaConfig.externals,
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        // TODO: 似乎和inline一起使用才有效果，没搞明白
        // contentBase: path.join(__dirname, './'),
        hot: true,
        // NOTE: 单页面应用且使用historyApi会用到，他会让所有请求均返回特定页面，但可以配置路由规则
        historyApiFallback: true,
        // inline: false
        port: 9527,
        // open: true,
        // proxy: holaConfig.proxy,
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
};

export default config;

// import { HotModuleReplacementPlugin, Configuration } from 'webpack';
// import webpackMerge from 'webpack-merge';
// import webpackBasicConfig from './webpack.config';
// // 用户自定义外部配置
// import holaConfig from './.holarc';

// const config: Configuration = {
//   mode: 'development',
//   plugins: [new HotModuleReplacementPlugin()],
//   devtool: 'eval',
//   devServer: {
//     // TODO: 似乎和inline一起使用才有效果，没搞明白
//     // contentBase: path.join(__dirname, './'),
//     // webpack 5 这个配置默认为 true
//     // hot: true,
//     // NOTE: 单页面应用且使用historyApi会用到，他会让所有请求均返回特定页面，但可以配置路由规则
//     // historyApiFallback: true
//     // inline: false
//     port: 9527,
//     open: true,
//     proxy: holaConfig.proxy,
//     // NOTE: 开启GZIP
//     compress: true,
//   },
// };

// export default webpackMerge(webpackBasicConfig, config);
