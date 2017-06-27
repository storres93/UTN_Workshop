var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'src')
		}]
	}
};