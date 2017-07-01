var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'./src/index.jsx'
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		hot: true,
		contentBase: './public/'
	},
	externals: {
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'src'),
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		}]
	}
};