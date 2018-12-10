var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var dataOperate = require("../database/index");
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

module.exports = router;