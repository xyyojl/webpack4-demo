var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    // production: 会压缩代码
    // development: 不会压缩代码
    entry: {
        main: './src/index.js'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true,
        hotOnly: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    // placeholder 占位符
                    name: '[name]_[hash].[ext]',
                    outputPath: 'image/',
                    limit: 204800
                }
            }
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        modules: true
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    ],
    /* optimization: {
        usedExports: true
    }, */
    output: {
        // publicPath: '/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}