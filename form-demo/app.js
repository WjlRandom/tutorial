var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
var devMiddleWare = require("webpack-dev-middleware");
var hotMiddleWare = require("webpack-hot-middleware");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'example')));
app.use(express.static(__dirname));
var compiler = webpack(webpackConfig);
app.use(devMiddleWare(compiler));
app.use(hotMiddleWare(compiler));
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;