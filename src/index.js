// ES Moudule 模块引入方式
/* import Header from './header.js'
import Content from './content.js'
import Sidebar from './sidebar.js' */

// CommonJS 模块引入
var Header = require('./header.js');
var Content = require('./content.js');
var Sidebar = require('./sidebar.js');

// ES module 引入图片
import './index.scss'
import avatar from './avatar.jpg';
var img = new Image();
img.src = avatar;
img.classList.add('avatar')

var root = document.getElementById('root');
root.appendChild(img);

new Header();
new Content();
new Sidebar();