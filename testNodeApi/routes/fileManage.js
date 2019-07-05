var multiparty = require("multiparty");
var util = require("util");
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");
var operatorImg = require("../database/operatorImg.js");

function FileManage() {
    this.init.apply(this, arguments);
}
FileManage.prototype = {
    init: function(router) {
        /* 删除文件*/
        router.post("/deleteFileFromDir", bodyParser.json(), function(
            req,
            res,
            next
        ) {
            let index = req.body.imgUrl.lastIndexOf("/");
            let fileName = req.body.imgUrl.substring(index);
            let filePath = "./public/files" + fileName;
            fs.access(filePath, fs.constants.F_OK, err => {
                if (err) throw err;
                fs.unlink(filePath, err => {
                    if (err) throw err;
                    console.log("文件已删除");
                    res.json({ msg: "success" });
                });
            });
        });
    }
};

module.exports = FileManage;