var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: {
		pageA: "./pageA",
		pageB: "./pageB"
	},
	output: {
		path: path.resolve(__dirname, "js"),
		publicPath: "js/",
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			filename: "commons.js",
			name: "commons"
		})
	]
};