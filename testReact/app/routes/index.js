var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index.html', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/error.html', function(req, res, next) {
    res.render('error', { title: 'Error' });
});

module.exports = router;