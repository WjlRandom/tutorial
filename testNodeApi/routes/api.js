var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
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
    var age = parseInt(req.body.age);
    if (name == undefined || age == undefined) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }
    res.json({ result: req.body.name });
});
module.exports = router;