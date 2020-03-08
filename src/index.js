// ES Moudule 模块引入方式
/* import Header from './header.js'
import Content from './content.js'
import Sidebar from './sidebar.js' */

// CommonJS 模块引入
/* var Header = require('./header.js');
var Content = require('./content.js');
var Sidebar = require('./sidebar.js'); 

new Header();
new Content();
new Sidebar(); 
 */

// ES module 引入图片
// import './index.scss'
/* import style from './index.scss';
import avatar from './avatar.jpg';
var img = new Image();
img.src = avatar;
img.classList.add(style.avatar);

var root = document.getElementById('root');
root.appendChild(img); */

/* import createAvatar from './createAvatar';

createAvatar();
*/

// Hot Module Replacement 练习
/* import './style.css'
var btn = document.createElement('button');
btn.innerHTML = '新增';
document.body.appendChild(btn);

btn.onclick = function(){
    var div = document.createElement('div');
    div.innerHTML = 'item';
    document.body.appendChild(div);
} */

/* import counter from './counter';
import number from './number';

counter();
number();

if(module.hot){
    module.hot.accept('./number',() => {
        document.body.removeChild(document.getElementById('number'));
        number();
    })
} */

// 使用 Babel 处理 ES6 语法
/* import "@babel/polyfill";
const arr = [
    new Promise(() => {}),
    new Promise(() => {})
];

arr.map(item => {
    console.log(item);
}) */

// 实现对React框架代码的打包
/* import "@babel/polyfill";
import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component{
    render(){
        return <div>Hello World</div>
    }
}
ReactDom.render(<App />,document.getElementById('root')); */

// Tree Shaking 只支持 ES Module
/* import {add} from './math.js';

add(1,2); */

// Code Splitting

/* 
    第一种方式：
        首次访问页面时，加载 main.js (2mb)
        当页面业务逻辑发生变化时，又要加载 2mb 的内容
    第二种方式：
        main.js 被拆分成 loadsh.js (1mb)
        当页面业务逻辑发生变化时，只要加载 main.js 即可(1mb)
*/

import _ from 'loadsh';

console.log(_.join(['a','b','c'],'***'));
// 此处省略大量的业务逻辑代码
console.log(_.join(['a','b','c'],'***'));