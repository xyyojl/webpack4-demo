var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
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
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
    new CleanWebpackPlugin({
        root: path.resolve(__dirname, '../')
    })
    ],
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: false,
    
}