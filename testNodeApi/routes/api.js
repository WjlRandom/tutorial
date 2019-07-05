var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var userManage = require("./user.js");
var Upload = require("./upload.js");
var FileManage = require("./fileManage.js");
var saveImgData = require("./saveImgData.js");
var Spider = require("./spider.js");

new userManage(router);
new Upload(router);
new saveImgData(router);
new FileManage(router);
new Spider(router);
module.exports = router;