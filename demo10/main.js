// 引入css模块
require('./css/style.css');
// 引入less模块
require('./less/style.less');

// 引入a模块
var a = require('./js/a');

// 引入模板文件
var template = require("./template/book.handlebars");
var data={title:"天龙八部",author:'金庸'};
var html = template(data);


var randomNumber = a.sum(Math.random() * 100,100) + '<br>';

document.write(randomNumber + html);