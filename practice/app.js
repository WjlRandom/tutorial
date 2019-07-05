var express = require("express");
var app = express();

app.engine('html', require('ejs').__express); //设置模板引擎
app.set('view engine', 'html');
app.use(express.static(__dirname));

app.listen("3000", function() {
    console.log('请复制地址到浏览器中 127.0.0.1:3000');
});