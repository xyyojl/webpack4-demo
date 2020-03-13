/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, _) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ui; });
function ui() {
  $('body').css('background', _.join(['red'], ''));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jquery_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
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



Object(_jquery_ui__WEBPACK_IMPORTED_MODULE_2__[/* ui */ "a"])();
const dom = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div>');
dom.html(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['aa', 'bb'], '--'));
jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append(dom); // console.log(this === window);

/***/ })
/******/ ]);