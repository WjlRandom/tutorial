var path = require("path");
console.log(path.join(__dirname, "./dist"));
module.exports = {
    mode: "development",
    entry: "./index/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "aaa.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.ejs$/,
            use: {
                loader: "ejs-loader"
            }
        }, {
            test: /\.less$/,
            use: {
                loader: "less-loader"
            }
        }, ]
    },
    plugins: [

    ]
}