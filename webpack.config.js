var path = require('path');

module.exports = {
    mode: 'development',
    // production: 会压缩代码
    // development: 不会压缩代码
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.jpg$/,
            use: {
                loader: 'file-loader'
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}