const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    const callback = this.async();

    setTimeout(() => {
        const result = source.replace('World',options.name);
        // console.log('异步代码执行了： 2')
        callback(null,result);
    }, 1000);

}