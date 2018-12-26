/*
 *请求接口
 */
var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var dataOperate = require("../database/index");
var fs = require("fs");
var path = require("path");
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
router.get("/random/:min/:max", function(req, res) {
    console.log(req.params);
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }
    var result = Math.round((Math.random() * (max - min)) + min);
    res.json({ result: result });
});
router.post("/saveUser", bodyParser.json(), function(req, res) {
    console.log(req.body);
    var name = parseInt(req.body.name);
    var url = parseInt(req.body.url);
    var myobj = { name: req.body.name, url: req.body.url };
    if (name == undefined || url == undefined) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }
    dataOperate.insertOne(myobj);
    res.json({
        code: 0,
        message: "成功"
    });
});
router.post("/saveUsers", bodyParser.json(), function(req, res) {
    var data = [{ name: "aaa", url: "www.aaa.com" }, { name: "bbb", url: "www.bbb.com" }]
    dataOperate.insert(data);
    res.json({
        code: 0,
        message: "成功"
    });
});
router.get("/findUser", function(req, res) {
    var name = req.query.name;
    var whereStr = { "name": name };
    if (name == undefined) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }
    dataOperate.find(whereStr, function(result) {
        console.log("result", result);
        res.json({
            result: result
        });
    });
});
router.post("/saveGdtId", bodyParser.json(), function(req, res) {
    dataOperate.insert(req.body.source, req.body.list);
    res.json({
        code: 0,
        message: "成功",
    });
});

router.post("/uploadImg", bodyParser.json(), function(req, res) {
    var i = req.body.file.indexOf(";base64");
    var imgType = req.body.file.substring(11, i);
    var fileData = req.body.file.substring(i + 8);
    var imgBuffer = new Buffer(fileData, "base64");
    var hash = new Date().getTime();
    var desDir = path.join(__dirname, "../public/images/")
    var imgUrl = desDir + hash + "." + imgType;
    fs.writeFileSync(imgUrl, imgBuffer);
    res.json({
        code: 0,
        message: "成功",
        imgUrl: imgUrl
    });
});
router.post("/uploadImg1", function(req, res) {
    req.setEncoding('binary');
    let chunks = ''; // 文件数据
    req.on('data', function(chunk) {
        chunks += chunk;
    });
    req.on('end', function(d) {
        console.log(chunks);
    });
    res.json({
        code: 0,
        message: "成功",
    });
});

module.exports = router;