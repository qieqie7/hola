import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// 用户自定义外部配置
import holaConfig from './.holarc';

const { outputPath = './dist' } = holaConfig;

const config: Configuration = {
    mode: 'production',
    entry: {
        mani: path.resolve(__dirname, '../src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, '../', outputPath),
        // TODO: HASH
        filename: 'hola.[name].js',
    },
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
                                localIdentName: '[name][hash:base64:4]',
                            },
                        },
                    },
                    'less-loader',
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
    devtool: undefined
};

export default config;
