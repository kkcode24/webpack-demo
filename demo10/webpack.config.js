var path = require('path');
var webpack = require('webpack');
var buildPath = path.resolve(__dirname, "build");
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
	entry: {
		m1:path.resolve(__dirname, 'main.js'),
		m2:path.resolve(__dirname, 'main1.js')
	},
	output: {
		path: buildPath,
		filename:"[name].js" // 注意这里使用了name变量
	},
	resolve: {
		extentions: ["", ".js"] // 当rewquire的模块找不到时，添加这些后缀。
	},
	plugins: [
		//压缩打包的文件
		new webpack.optimize.UglifyJsPlugin({
			compress: true, //default 'true', you can pass 'false' to disable this plugin
			debug: true //default 'false', it will display some information in console
		}),
		new webpack.BannerPlugin("作者：kkcode"),
		// 把copy目录下的文件复制到build/paste目录下
		new CopyWebpackPlugin([{
			from: 'copy',
			to: 'paste'
		}], {
			debug: 'info'
		})
	],
	module: {
		loaders: [{
				test: /\.js$/, //注意是正则表达式，不要加引号
				loader: 'babel-loader?optional=runtime&stage=0', //babel模块相关的功能请自查，这里不做介绍
				exclude: [nodeModulesPath]
			},
			{
				test: /\.css$/,
				loader: 'style!css',
				exclude: [nodeModulesPath]
			},
			{
				test: /\.less$/,
				loader: 'style!css!less', //less配置:style!css!less 执行顺序:左<--右
				exclude: [nodeModulesPath]
			},
			{
				test: /\.jpg$/,
				loader: 'url-loader',
				exclude: [nodeModulesPath]
			},
			{
				test: /\.handlebars$/,
				loader: "handlebars-loader",
				exclude: [nodeModulesPath]
			}
		]
	},
}

module.exports = config;