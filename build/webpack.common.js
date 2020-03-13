var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');
const commonConfig = {
    entry: {
        // lodash: './src/lodash.js',
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }/* ,{ // 出错
                loader: 'imports-loader?this=>window'
            } */]
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
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash',
        _join: ['lodash','join']
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


module.exports = (env) => {
    if(env && env.production){
        return merge(commonConfig, prodConfig);
    }else{
        return merge(commonConfig, devConfig);
    }
}