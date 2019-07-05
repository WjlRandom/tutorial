var util = require("util");
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");
var cheerio = require("cheerio");
var request = require("request");

function Spider() {
    this.init.apply(this, arguments);
}
Spider.prototype = {
    init: function(router) {
        var _this = this;
        // 爬取数据
        router.post("/getCertInfo", bodyParser.json(), function(req, res, next) {
            try {
                // _this.getData(function(data) {
                //     console.log(data);
                //     res.json({ result: data });
                // });
                _this.getImage(function(data) {
                    console.log(data);
                });
            } catch (err) {
                console.log(err);
            }
        });
    },
    getData(callback) {
        request("https://grwsyw.bjgjj.gov.cn/ish/", function(err, res) {
            if (err) {
                console.log(err);
            }
            var $ = cheerio.load(res.body.toString());
            var loginType = $("input[name='logintype']").val();
            var yzfsList = [];
            $("#yzfs option").each(function() {
                yzfsList.push({
                    value: $(this).val(),
                    name: $(this).text()
                });
            });
            var config = {
                loginType: loginType,
                yzfsList: yzfsList
            };

            callback(config);
        });
    }
};

module.exports = Spider;