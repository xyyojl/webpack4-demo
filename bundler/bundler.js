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


const graghInfo = makeDependenciesGraph('./src/index.js');
console.log(graghInfo);