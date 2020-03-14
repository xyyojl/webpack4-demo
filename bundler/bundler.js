const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
// 因为默认是esmodule的导出，所以要用export default的内容，需要如下写法。
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');



const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename, 'utf-8');
    const ast = parser.parse(content, {
        sourceType: 'module' // 需要指明content使用的是ex6 module语法（import/export)
    });
    const dependencies = {};
    traverse(ast, {
        ImportDeclaration({ node }){
            // console.log(node.source.value);
            const dirname = path.dirname(filename);
            console.log(node.source.value);
            // win 和 mac 之间的路径区别
            // const newFile = './' + path.join(dirname, node.source.value);
            const newFile = path.join(dirname, node.source.value);
            // 保留相对路径和绝对路径
            dependencies[node.source.value] = newFile;
        }
    })
    const { code } = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })
    return {
        filename,
        dependencies,
        code
    }


    // 测试代码
    // console.log(dependencies);
    // console.log(ast.program.body);
    // console.log(content);
}

const makeDependenciesGraph = (entry) => {
    const entryModule = moduleAnalyser('./src/index.js');
    const graphArray = [ entryModule ];
    for(let i = 0; i < graphArray.length; i++){
        const item = graphArray[i];
        const {dependencies} = item;
        if(dependencies) {
            for (let j in dependencies) {
                graphArray.push(
                    moduleAnalyser(dependencies[j])
                );
            }
        }
    }
    const graph = {};
    graphArray.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })
    
    return graph;
    // console.log(graph);
    // console.log(graphArray);
}
// console.log(entry) // 打印出来的是 ./src/index.js 外面并没有引号，所以下面的 '${entry}' 外面要加引号。
// 拼接一段js 代码而不是去运行js 代码，以字符串的形式构建内容
// 下面的 const exports = {}; 这里必须要加分号否则js引擎会报错。以 “(”、“[”、“/”、“+”、或 “-” 开始，那么它极有可能和前一条语句合在一起解释。所以前面需要加分号。
const generateCode = (entry) => {
    // 需要进行 JSON.stringify
    const graph = JSON.stringify(makeDependenciesGraph('./src/index.js'));
    // 注意下面graph[module] module的作用域。
    // graph[module].code : 依赖图谱下的module，也就是 graph 下的键名是相对路径，但是需要的是真正的路径

    return `
        (function(graph){
            function require(module){
                // 获取真正的路径
                function localRequire(relativePath){
                    return require(graph[module].dependencies[relativePath]);
                }
                const exports = {};
                (function(require, exports, code){
                    eval(code);
                })(localRequire, exports, graph[module].code);
                return exports;
            }
            require('${entry}');
        })(${graph});
    `
}

const code = generateCode('./src/index.js');
console.log(code);