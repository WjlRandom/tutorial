var path = require("path");
var webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    "index/index": "./src/assets/index/index.js",
    "main/index": "./src/assets/main/index.js"
  },
  output: {
    path: path.join(__dirname, "./src/dist"), //必须是绝对路径
    publicPath: "/dist/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        include: [__dirname + "src"],
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], //按照最新ES语法规则解析
            plugins: ["transform-runtime"] //解决浏览器兼容性问题
          }
        }
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.ejs$/,
        use: ["ejs-loader?variable=data"]
      }
    ]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin()
  ]
};
