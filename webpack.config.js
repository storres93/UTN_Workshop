var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'./src/index.js'
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
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'src'),
		}]
	}
};