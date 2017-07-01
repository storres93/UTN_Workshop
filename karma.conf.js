module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai', 'sinon'],
		files: [
			'src/**/*.spec.jsx'
		],
		exclude: [],
		preprocessors: {
			"src/**/*.spec.jsx": ["webpack"]
		},
		// webpack configuration
		webpack: require("./webpack.config.js"),
		webpackMiddleware: {
			stats: "errors-only"
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['PhantomJS'],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,
		concurrency: Infinity
	});
};