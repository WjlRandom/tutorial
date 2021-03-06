var path = require("path");
var webpack = require("webpack");
var AssetsPlugin = require('assets-webpack-plugin');
// var uglifyjsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production", //对应的会设置process.env.NODE_ENV
    entry: {
        'index': path.join(__dirname, "../src/assets/js/index.js"),
        'common': path.join(__dirname, "../src/assets/js/common.js"),
        'test': path.join(__dirname, "../src/assets/js/test.js"),
    },
    output: {
        path: path.join(__dirname, "../src/dist"), //必须是绝对路径
        publicPath: "/dist/",
        filename: "[name].js?v=[hash]"
    },
    devServer: {
        contentBase: path.join(__dirname, "../src/pages/"),
        port: "3333"
    },
    externals: {
        // jquery: "jQuery"
    },
    module: {
        rules: [{
                test: "/\.js$/",
                include: [path.join(__dirname, "../src")],
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"], //按照最新ES语法规则解析
                        plugins: ["transform-runtime"], //解决浏览器兼容性问题
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "less-loader" }]
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
                test: /\.ejs$/,
                use: { loader: "ejs-loader" }
            }
        ]
    },
    resolve: {
        alias: {
            "@lib": path.join(__dirname, "../src/lib"),
            "@components": path.join(__dirname, "../src/components"),
        }
    },
    plugins: [
        /* new AssetsPlugin({
            filename: path.resolve(__dirname, "../stats.json")
        }), */
        // new uglifyjsPlugin()
    ]
}