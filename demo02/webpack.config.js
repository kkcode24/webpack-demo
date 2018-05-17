var path = require('path');
var buildPath = path.resolve(__dirname,"build");

const config = {
	entry: path.resolve(__dirname,'main.js'),
	output: {
		path: buildPath,
		filename: "bundle.js"
	},
	resolve: {
		extentions:["","js"] // 当rewquire的模块找不到时，添加这些后缀。
	}
}


module.exports = config;