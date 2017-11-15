const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/,
                query:
                    {
                        presets:['react']
                    }
            },
            {
				test: /\.scss$/,
				include: path.join(__dirname, 'src'),
                loader: 'style-loader!css-loader!sass-loader'
			},
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 3000
    }
};