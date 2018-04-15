var webpack = require('webpack');
var path = require('path');
var FlowWebpackPlugin = require('flow-webpack-plugin')

module.exports = {
    //页面入口文件配置
    entry: {
        index: path.join(__dirname, "../src/main.js"),
    },
    output: {
        path: path.join(__dirname, "../dist/"),
        // 生成的打包文件名
        filename: 'snake.js',
        library: 'snake',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    // //插件项
    devtool: 'source-map',
    plugins: [
        // new FlowWebpackPlugin({
        //     failOnError: false,
        //     failOnErrorWatch: false,
        //     reportingSeverity: 'error',
        //     printFlowOutput: true,
        //     flowPath: require('flow-bin'),
        //     flowArgs: ['--color=always'],
        //     verbose: false,
        // }),
    ]
};
