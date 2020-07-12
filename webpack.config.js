const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './main.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './app'),
    },
    devServer: {
        contentBase: path.join(__dirname, './app'),
        compress: true,
        port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            exclude: [/node_modules/],
        }),
    ],
};
