var path = require('path');
var webpack = require('webpack');
var dirNodeModule = path.join(__dirname, './node_modules');
var rootdir = path.join(__dirname, './src/assets');
var deldir = path.join(__dirname, './src/dist');
var fs = require("fs");
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清空dist目录插件
var entry = {};
// deleteFolder(deldir);
getFile(rootdir);
/**
 * 删除目录及文件夹
 * @param directoryPath 文件夹路径
 */
function deleteFolder(directoryPath) {
    var files = [];
    if (fs.existsSync(directoryPath)) {
        files = fs.readdirSync(directoryPath);
        files.forEach(function(file, index) {
            var curPath = directoryPath + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
};

function getFile(dir) {
    var files = fs.readdirSync(dir);
    files.forEach(function(filename) {
        var filepath = path.join(dir, filename);
        var stats = fs.statSync(filepath);
        var isFile = stats.isFile();
        var isDir = stats.isDirectory();
        if (isFile && filepath.indexOf("index.js") > -1) {
            var key = filepath.replace(rootdir + "/", "").replace("index.js", "index");
            var value = filepath.replace(__dirname, ".");;
            entry[key] = value;
        }
        if (isDir) {
            getFile(filepath);
        }
    })
}
// console.log(entry)
module.exports = {
    mode: 'development',
    performance: {
        maxEntrypointSize: 1000000
    },
    entry: entry,
    output: {
        path: path.join(__dirname, 'src/dist'),
        publicPath: "/dist/",
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        inline: true,
        hot: true,
        inline: true,
        open: true,
        host: "gxmr1.sumeiliti.com",
        disableHostCheck: true
    },
    externals: { // 使用CDN/远程文件
        jquery: "jQuery",
        zepto: "Zepto"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime', 'dynamic-import-node', 'add-module-exports']
                    }
                }
            },
            {
                test: /\.ejs$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ejs-loader?variable=data' }
                ],
                exclude: dirNodeModule
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    // { loader: 'file-loader' },
                    { loader: 'url-loader?limit=8192' }
                ]
            },
            // { test: /\.(woff|eot|ttf)$/i, use: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]' }
        ]
    },
    resolve: { //require时候自动补全扩展名;
        modules: [__dirname, path.join(__dirname, 'node_modules')],
        extensions: ['*', '.js', '.json', '.html'],
        alias: {
            "@components": path.join(__dirname, "./src/components"),
            "@public": path.join(__dirname, "./src/public"),
            "@api": path.join(__dirname, "./src/routes/api")
        }
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(path.join(__dirname, "src/dist/"))
    ]
};