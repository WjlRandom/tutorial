var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");

var webpack = require("webpack");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "src/view"));

app.engine("html", ejs.__express);
app.set("view engine", "html");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'dist')));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
/*
 * Webpack集成开发环境 及 线上环境
 */
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var webpackDevConfig = require("./webpack.config.js");
var compiler = webpack(webpackDevConfig);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true,
      chunks: false
    }
  })
);
app.use(webpackHotMiddleware(compiler));
app.all("/*", function(req, res, next) {
  console.log(req.query.c);
  if (req.query.c == "1") {
    res.render("error");
  }
  next();
});
app.get("/index.html", function(req, res) {
  res.render("index");
});
app.get("/main.html", function(req, res) {
  res.render("main");
});

const server = app.listen(3333, "localhost", function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log("服务启动中，访问地址为 http://%s:%s", host, port);
});
module.exports = app;
