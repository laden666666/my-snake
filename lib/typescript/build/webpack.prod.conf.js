var webpack = require('webpack');
var path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        index: path.join(__dirname, "../src/main.ts"),
    },
    output: {
        path: path.join(__dirname, "../dist/"),
        // 生成的打包文件名
        filename: 'snake.js',
        library: 'snake',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, '../src'),
        }, {
            test: /\.ts(x?)$/,
            include: path.join(__dirname, '../src'),
            use: [{
                loader: 'babel-loader',
            }, {
                loader: 'ts-loader',
            }]
        }]
    },
    // //插件项
    plugins: [
    ],
    devtool: 'source-map'
};
