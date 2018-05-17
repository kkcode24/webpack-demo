var path = require('path');
var webpack = require('webpack');
var buildPath = path.resolve(__dirname,"build");

const config = {
	entry: path.resolve(__dirname,'main.js'),
	output: {
		path: buildPath,
		filename: "bundle.js"
	},
	resolve: {
		extentions:["","js"] // 当rewquire的模块找不到时，添加这些后缀。
	},
	plugins: [
		//压缩打包的文件
        new webpack.optimize.UglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin
            debug: true //default 'false', it will display some information in console
        }),
        new webpack.BannerPlugin("作者：kkcode")
    ]
}


module.exports = config;