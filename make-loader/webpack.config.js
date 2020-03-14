const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            use: [{
                loader: path.resolve(__dirname,'./loaders/replaceLoader.js'),
                options: {
                    name: 'JavaScript'
                }
            },{
                loader: path.resolve(__dirname,'./loaders/replaceLoaderAsync.js'),
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
