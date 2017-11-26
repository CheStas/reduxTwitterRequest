const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './client/index.js'
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
                        presets: ['react']
                    }
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'client'),
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader'
            },
        ]
    }
};