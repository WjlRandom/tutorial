var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");

var indexRouter = require("./routes/index");
var api = require("./routes/api");
var bodyParser = require("body-parser");
var session = require("express-session");
var FileStore = require("session-file-store")(session);

var app = express();
global.app = app; //全局使用app
global.session = session;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        name: "sessionKey",
        secret: "secret", // 用来对session id相关的cookie进行签名
        store: new FileStore(), // 本地存储session（文本文件，也可以选择其他store，比如redis的）
        saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
        resave: false, // 是否每次都重新保存会话，建议false
        cookie: {
            maxAge: 30 * 60 * 1000 // 有效期，单位是毫秒
        }
    })
);
app.use(
    //设置上传文件大小限制
    bodyParser.urlencoded({
        limit: "50mb",
        type: "*/x-www-form-urlencoded",
        extended: true
    })
);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Credentials", true);
    console.log("当前session");
    console.log(req.session.id);
    console.log(req.session);
        if (!req.session.loginUser && req.path != "/loginSystem") {
            res.json({ code: 302 });
            return;
        }
    next();
});

app.use(indexRouter); //路由
app.use(api); //使用接口服务

module.exports = app;