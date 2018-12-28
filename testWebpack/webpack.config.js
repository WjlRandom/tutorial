var path = require("path");
var fs = require("fs");
var webpack = require("webpack");
var AssetsPlugin = require('assets-webpack-plugin');
var uglifyjsPlugin = require("uglifyjs-webpack-plugin");
var webpackInitPlugin = require("./src/plugins/webpackInitPlugin");
var webpackRenamePlugin = require("./src/plugins/webpackRenamePlugin");
var webpackHashPlugin = require("./src/plugins/webpackHashPlugin");
var distUrl = path.join(__dirname, "src/dist");
var entry = {};

function getEntry(root, dir) {
    var url = path.join(root, dir);
    var files = fs.readdirSync(url);
    files.forEach(function(file) {
        var filePath = path.join(url, file);
        var stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getEntry(filePath);
        }
        if (stat.isFile()) {
            var key = file.replace(/.js/, "");
            var index = filePath.indexOf(dir);
            var value = "./" + filePath.substring(index);
            entry[key] = value;
        }
    })
    return entry;
}
module.exports = {
    mode: "development", //对应的会设置process.env.NODE_ENV
    entry: getEntry(__dirname, "src/assets/js"),
    output: {
        path: path.resolve(__dirname, "./src/dist"), //必须是绝对路径
        publicPath: "/",
        filename: "[name].js"
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
                        presets: ["@babel/preset-env"],
                        plugins: ["transform-runtime"],
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
        /* new AssetsPlugin({
            filename: "src/stats.json"
        }), */
        // new uglifyjsPlugin(),
        //new webpackInitPlugin(distUrl),
        //new webpackRenamePlugin(),
        // new webpackHashPlugin(),
    ]
}