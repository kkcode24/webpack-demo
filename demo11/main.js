// 引入css模块
require('./css/style.css');
// 引入less模块
require('./less/style.less');

// 引入a模块
var a = require('./js/a');

var randomNumber = a.sum(Math.random() * 100,100) + '<br>';

document.write(randomNumber);