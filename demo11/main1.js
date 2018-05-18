// 引入模板文件
var template = require("./template/book.handlebars");
var data={title:"天龙八部",author:'金庸'};
var html = template(data);

document.getElementById('container').innerHTML = html;