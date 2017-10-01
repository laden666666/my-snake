var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

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
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
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
        }, {
            test: /\.(png|jpg|gif|wav)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 10,
                        name: 'images/[name].[ext]?[hash:8]'
                    }
                }
            ]
        }, {
            test: /\.(scss|sass|css)$/,  // pack sass and css files
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    'css-loader?minimize',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, 'postcss.config.js')
                            }
                        }
                    },
                ],
            })
        },]
    },
    // //插件项
    plugins: [
        // 单独抽离 CSS
        new ExtractTextPlugin("my-picker.css"),

        // // JS 压缩插件
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     sourceMap: true
        // }),
    ],
    devtool: 'source-map'
};
