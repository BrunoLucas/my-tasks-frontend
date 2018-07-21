const webpack = require('webpack')

const EXtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8000,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', 'js', 'jsx'],
        alias : {
            modules : __dirname + '/node_modules'
        }
    },
    plugins: [
        new EXtractTextPlugin('app.css')
    ],
    modules: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: '/node_modules',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: EXtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.woff|.woff2|.tff|.eof|.svg*.*/,
            loader: 'file'
        }]
    }
}