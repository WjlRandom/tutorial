var path = require("path");
var webpack = require("webpack");
var AssetsPlugin = require('assets-webpack-plugin');
var uglifyjsPlugin = require("uglifyjs-webpack-plugin");
var webpackInitPlugin = require("./src/plugins/webpackInitPlugin");
module.exports = {
    mode: "development", //对应的会设置process.env.NODE_ENV
    entry: {
        'index': "./src/assets/js/index.js",
        'common': "./src/assets/js/common.js",
        'test': "./src/assets/js/test.js",
    },
    output: {
        path: path.resolve(__dirname, "./src/dist"), //必须是绝对路径
        publicPath: "/dist/",
        filename: "[name].js?v=[hash]"
    },
    devServer: {
        contentBase: path.join(__dirname, "src/pages/"),
        hot: true,
        inline: true,
        port: "3333"
    },

    module: {
        rules: [{
                test: "/\.js$/",
                include: [__dirname + "src"],
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
            "@lib": path.join(__dirname, "./src/lib"),
            "@components": path.join(__dirname, "./src/components"),
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new AssetsPlugin({
            filename: "src/stats.json"
        }),
        new uglifyjsPlugin(),
        new webpackInitPlugin()
    ]
}