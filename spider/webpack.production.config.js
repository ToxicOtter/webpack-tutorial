const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/spider.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'auto'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'spider.html',
            title: 'Spider',
            template: 'src/page-template.hbs',
            description: 'Página usada para exemplificar as funcionalidades básicas do webpack'
        }),
        new ModuleFederationPlugin({
            name: 'SpiderApp',
            filename: 'remoteEntry.js',
            exposes: {
                './SpiderPage': './src/components/spider-page/spider-page.js'
            },
            remotes: {
                ImageCaptionApp: 'ImageCaptionApp@http://localhost:9003/remoteEntry.js'
            }
        })
    ]
}