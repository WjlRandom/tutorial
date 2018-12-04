var path = require("path");
var webpack = require("webpack");
module.exports = {
    mode: "development",
    entry: {
        'index': "./src/assets/js/index.js",
        'common': "./src/assets/js/common.js",
        'test': "./src/assets/js/test.js",
    },
    output: {
        path: path.join(__dirname, "./src/dist"), //必须是绝对路径
        publicPath: "/dist/",
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, "src/pages"),
        inline: true,
        hot: true,
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
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}