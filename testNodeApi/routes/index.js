/**
 * 全局路由配置
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', message: "welcome to beijing" });
});
router.get('/channel', function(req, res, next) {
    res.render('channel', { title: 'Express', message: "请输入渠道号" });
});
router.get('/upload', function(req, res, next) {
    res.render('upload', { title: '文件上传' });
});
router.get('/upload1', function(req, res, next) {
    res.render('upload1', { title: '文件上传' });
});
module.exports = router;