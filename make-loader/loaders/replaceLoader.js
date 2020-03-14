const loaderUtils = require('loader-utils');

module.exports = function (source) {
    // 使用 this.query
    /* console.log(this.query)
    return source.replace('World',this.query.name); */

    // 使用 loader-utils 
    const options = loaderUtils.getOptions(this);
    // console.log('同步代码执行了： 1')
    // console.log('options.name:',options.name); // JavaScript
    // console.log(source.replace('World',options.name));
    return source.replace('World',options.name);
}