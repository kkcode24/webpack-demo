
// 引入a模块
var a = require('./js/a');
// 引入css模块
require('./css/style.css');

document.write(a.sum(Math.random() * 100,100));