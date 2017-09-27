module.exports = {
	entry: "./scripts/index.js",
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
		}]
    }
};