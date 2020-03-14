class CopyrightWebpackPlugin {
    constructor(options) {
        // console.log(options)
    }
    apply(compiler){
        // 同步的代码
        /* compiler.hooks.compile.tap('CopyrightWebpackPlugin',(compilation) => {
            console.log('compiler');
        }) */

        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation, cb) => {
            // console.log(compilation.assets)
            // debugger;
            compilation.assets['copyright.txt'] = {
                source: function(){
                    return 'copyright by Allen';
                },
                size: function(){
                    return 18;
                }
            }
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;