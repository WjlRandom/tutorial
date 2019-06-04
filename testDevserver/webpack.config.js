var path = require("path");
var webpack = require("webpack");
console.log("----", path.join(__dirname, "src"));
module.exports = {
  mode: "development",
  entry: {
    home: "./src/page/home/index.js",
    about: "./src/page/about/index.js"
  },
  output: {
    path: path.join(__dirname, "./src/dist"), //必须是绝对路径
    publicPath: "/dist/",
    filename: "[name]/index.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "/src"),
    inline: true,
    port: "3000",
    open: true //自动打开浏览器
  },
  module: {
    rules: [
      {
        test: /.js$/,
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
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": path.join(__dirname, "src")
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
