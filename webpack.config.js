var webpack = require('webpack');

module.exports = {
	entry: "./app/index.js",
	output: {
		filename: "./build/build.js"
	},
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        },{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: "babel-loader"
			}]
		},{
			test: /\.(png|gif|jpg)$/,
			exclude: /node_modules/,
			loader: 'url-loader'
		}]
    }/*,
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
			  warnings: false,
			  screw_ie8: true,
			  conditionals: true,
			  unused: true,
			  comparisons: true,
			  sequences: true,
			  dead_code: true,
			  evaluate: true,
			  if_return: true,
			  join_vars: true
			},
			output: {
				comments: false
			}
		}),
	new webpack.HashedModuleIdsPlugin()
	]*/
};