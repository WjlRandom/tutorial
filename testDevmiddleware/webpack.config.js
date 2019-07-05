var path = require("path");
var webpack = require("webpack")
module.exports = {
    mode: "development",
    entry: {
        'index': "./src/js/index.js",
        'common': "./src/js/common.js",
        'test': "./src/js/test.js",
    },
    output: {
        path: path.join(__dirname, "./dist"), //必须是绝对路径
        publicPath: "/js/",
        filename: "[name].js"
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
        //new webpack.HotModuleReplacementPlugin()
    ]
}