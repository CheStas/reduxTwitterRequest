const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
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
    }
};