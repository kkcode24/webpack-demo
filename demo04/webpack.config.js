var path = require('path');
var webpack = require('webpack');
var buildPath = path.resolve(__dirname,"build");
var CopyWebpackPlugin = require('copy-webpack-plugin');



const config = {
	entry: path.resolve(__dirname,'main.js'),
	output: {
		path: buildPath,
		filename: "bundle.js"
	},
	resolve: {
		extentions:["",".js"] // 当rewquire的模块找不到时，添加这些后缀。
	},
	plugins: [
		//压缩打包的文件
        new webpack.optimize.UglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin
            debug: true //default 'false', it will display some information in console
        }),
        new webpack.BannerPlugin("作者：kkcode"),
         // 把copy目录下的文件复制到build/paste目录下
		new CopyWebpackPlugin([
	      {from: 'copy', to: 'paste'}
	    ],{debug:'info'})
    ]
}


module.exports = config;