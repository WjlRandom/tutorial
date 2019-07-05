var path = require("path");
var webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        index: "./public/assets/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"), //必须是绝对路径
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [{
                    options: {
                        formatter: require.resolve('react-dev-utils/eslintFormatter'),
                        eslintPath: require.resolve('eslint'),

                    },
                    loader: require.resolve('eslint-loader'),
                }, ],
            },
            {
                test: /\.js|jsx$/,
                include: [__dirname + "src"],
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: ["transform-runtime"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
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
        extensions: [".js"],
        alias: {
            "@public": path.join(__dirname, "./public")
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};