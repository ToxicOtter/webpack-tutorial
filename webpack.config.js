const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            meta: {
                description: 'Página usada para exemplificar as funcionalidades básicas do webpack'
            }
        })
    ]
}