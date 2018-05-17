
// 引入a模块
var a = require('./js/a');
// 引入css模块
require('./css/style.css');
// 引入less模块
require('./less/style.less');

document.write(a.sum(Math.random() * 100,100));