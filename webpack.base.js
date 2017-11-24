module.exports = {
	// tell webpack to run babel on 
	// every file it runs through
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'es2015',
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}]
					],
					plugins: [
						'transform-object-rest-spread',
						'transform-decorators-legacy',
						'transform-class-properties'
					]
				}
			}
		]
	}

};