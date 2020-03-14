const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    resolveLoaders: {
        modules: ['node_modules','./loaders']
    },
    module: {
        rules: [{
            test: /\.js/,
            use: [{
                loader: 'replaceLoader',
                options: {
                    name: 'JavaScript'
                }
            },{
                loader: 'replaceLoaderAsync.js',
                options: {
                    name: 'Webpack'
                }
            }]
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}
