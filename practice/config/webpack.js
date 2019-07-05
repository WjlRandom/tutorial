var path = require("path");
console.log(path.join(__dirname, "./dist"));
export default {
    mode: "development",
    /* entry: {
        index: "../index/index.js"
    }, */
    entry: "../index/index.js",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
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