/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
// 同步代码分割

/* import _ from 'lodash';

console.log(_.join(['a','b','c'],'***'));
// 此处省略大量的业务逻辑代码
console.log(_.join(['a','b','c'],'***')); */
//  异步代码分割
// function getComponent(){
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['a','b'],'-')
//         return element;
//     })
// }
// getComponent().then(element => {
//     document.body.appendChild(element);
// })

/* 
    小总结：
        代码分割，和 webpack 无关
        webpack 中实现代码分割，有两种方式
            1. 同步代码：只需要在 webpack.common.js 中做 optimization 的配置
            2. 异步代码(import)：无需做任何配置，会自动进行代码分割
*/
//  Lazy Loading 懒加载
// function getComponent(){
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['a','b'],'-')
//         return element;
//     })
// }
// document.addEventListener('click',function(){
//     getComponent().then(element => {
//         document.body.appendChild(element);
//     })
// })
// 前端性能优化的重点：code coverage
// document.addEventListener('click',() => {
//     import(/* webpaclPrefetch: true */'./click.js').then(({default: func}) => {
//         func();
//     })
// })
// import './style.css';
// console.log('hhhh')
// Webpack 与浏览器缓存

/* import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['aa','bb'],'--'));
$('body').append(dom); */
// shimming

/* import _ from 'lodash';
import $ from 'jquery';
import {ui} from './jquery.ui';

ui();

const dom = $('<div>');
dom.html(_.join(['aa','bb'],'--'));
$('body').append(dom); */
// pwa 的配置
console.log('hello world');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registeration => {
      console.log('service-worker registed');
    }).catch(error => {
      console.log('service-worker registed error');
    });
  });
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.75f88e9f35b20cd6e844.js.map