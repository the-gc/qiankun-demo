const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageName = require('./package.json').name;

module.exports = {
    mode: 'development',
    devServer: {
        port: 7101,
        host: 'localhost',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    entry: './index.js',
    output: {
        library: `${packageName}-[name]`,
        libraryTarget: "umd",
        jsonpFunction: `webpackJsonp_${packageName}`
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        })
    ]
};