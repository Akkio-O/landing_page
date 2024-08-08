const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPages = glob.sync('./src/**/*.html');
const entries = htmlPages.reduce((acc, page) => {
    const name = path.basename(page, '.html');
    acc[name] = path.resolve(__dirname, `./src/${name}.js`);
    return acc;
}, {});

module.exports = {
    mode: 'production',
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js', // JS файлы в подкаталоге
        clean: true,
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|webm)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]', // Изображения в папке img
                }
            }
        ]
    },
    plugins: [
        ...htmlPages.map(page => {
            const name = path.basename(page, '.html');
            return new HtmlWebpackPlugin({
                filename: path.basename(page),
                template: page,
                inject: 'body',
                chunks: [name],
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true
                }
            });
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css', // CSS файлы в подкаталоге
        }),
        new CssMinimizerPlugin(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img'), // Путь к исходной папке с изображениями
                    to: path.resolve(__dirname, 'dist/img'), // Путь к папке назначения
                    noErrorOnMissing: true, // Не показывать ошибку, если папка пуста
                    globOptions: {
                        ignore: ['**/ignored-file.png'], // Игнорировать определенные файлы
                    },
                },
            ],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
};
