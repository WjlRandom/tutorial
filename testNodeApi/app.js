var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require("ejs");
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var api = require('./routes/api');

var app = express();

app.use(logger('dev'));
//handle request entity too large
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter); //路由
app.use(api); //使用接口服务



module.exports = app;