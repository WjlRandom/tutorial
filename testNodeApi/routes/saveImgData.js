var bodyParser = require("body-parser");
var operatorImg = require("../database/operatorImg.js");

function SaveImg() {
    this.init.apply(this, arguments);
}
SaveImg.prototype = {
    init: function(router) {
        /* 保存图片信息*/
        router.post("/saveImg", bodyParser.json(), function(req, res, next) {
            var reqData = {
                imgName: req.body.imgName,
                imgUrl: req.body.imgUrl
            };
            if (reqData.imgName == undefined || reqData.imgUrl == undefined) {
                res.status(400);
                res.json({ msg: "Bad request", code: "400" });
                return;
            }
            operatorImg.insertImg({
                    data: reqData
                },
                function() {
                    res.json({ msg: "success" });
                }
            );
        });
    }
};

module.exports = SaveImg;