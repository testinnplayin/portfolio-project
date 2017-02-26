var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'build/scripts'),
		filename: 'index.js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [],
		rules: [
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader",
				},
				{
					loader: "css-loader",
				},
				{
					loader: "sass-loader"
				}]		
			},
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
		]
	}
};