var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', message: "welcome to beijing" });
});
router.get('/channel', function(req, res, next) {
    res.render('channel', { title: 'Express', message: "请输入渠道号" });
});
module.exports = router;