const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.s?css/,
			use: ["style-loader", "css-loader", "sass-loader"]
		},
		{
			test: /\.(jpe?g|png|gif|svg|jpg|otf)$/,
			use: ["file-loader"]
		}
	]
	},
	plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html"
			})
		],
		devServer:{
			historyApiFallback:{
				disableDotRule:true
			}
		}

}
