var path = require('path');
var webpack = require('webpack');

var root = __dirname;

module.exports = {
	entry: {
        pkmnReport: './src/client/routes/routes.js',
	},
	output: {
		path: path.join(__dirname,'public/js'),
		filename: '[name].js',
	},

	 module: {
	    rules: [
	      {
	        test: /\.js?$/,
	        exclude: /(node_modules|bower_components)/,
	        use: {
	          loader: 'babel-loader'
	        },
	     },
	     {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
	      }
	    ]
	  },
	devtool: 'source-map'
 };