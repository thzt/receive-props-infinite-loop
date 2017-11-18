const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, ''),
    entry: {
        index: ['babel-polyfill', path.resolve(__dirname, 'src/index.jsx')]
    },
    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ]
};