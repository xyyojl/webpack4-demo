// ES Moudule 模块引入方式
/* import Header from './header.js'
import Content from './content.js'
import Sidebar from './sidebar.js' */

// CommonJS 模块引入
var Header = require('./header.js');
var Content = require('./content.js');
var Sidebar = require('./sidebar.js');

new Header();
new Content();
new Sidebar();