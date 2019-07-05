var multiparty = require("multiparty");
var util = require("util");
var fs = require("fs");
var bodyParser = require("body-parser");
// var excel2json = require("../public/utils/excel2json.js");
var excel2json = require("../public/utils/readExcel.js");
var path = require("path");
var operatorImg = require("../database/operatorImg.js");

function Upload() {
    this.init.apply(this, arguments);
}
Upload.prototype = {
    init: function(router) {
        /* 上传*/
        router.post("/uploadByForm", bodyParser.json(), function(req, res, next) {
            //生成multiparty对象，并配置上传目标路径
            var form = new multiparty.Form({ uploadDir: "./public/files/" });
            //上传完成后处理
            form.parse(req, function(err, fields, files) {
                //var filesTmp = JSON.stringify(files, null, 2);
                if (err) {
                    console.log("parse error: " + err);
                } else {
                    var inputFile = fields.file[0];
                    var uploadedPath = inputFile.path;
                    var dstPath = "./public/files/" + inputFile.originalFilename;
                    var extname = path.extname(uploadedPath);
                    fs.rename(uploadedPath, dstPath, function(err) {
                        if (err) {
                            console.log("rename error: " + err);
                        } else {
                            console.log("server", server.address().address);
                            // var host = server.address().address;
                            var port = server.address().port;
                            var url =
                                "//127.0.0.1:" + port + "/files/" + inputFile.originalFilename;
                            res.json({ msg: "success", imgUrl: url });
                        }
                    });
                }
            });
        });
        router.post("/upload", function(req, res, next) {
            console.log("原生的方法接收参数");
            console.log(res.headers);
            req.setEncoding("binary");
            // req.setEncoding("utf8");
            let chunks = []; // 文件数据
            // 边界字符串
            let boundary = req.headers["content-type"]
                .split("; ")[1]
                .replace("boundary=", "");

            //接收post如data 流 buffer
            req.on("data", function(chunk) {
                chunks.push(chunk);
            });
            req.on("end", function() {
                chunks = new Buffer().concat(chunks);
                console.log(chunks);
            });
        });
        router.post("/uploadByAjax", function(req, res, next) {
            console.log(req);
            var result = {};
            //生成multiparty对象，并配置上传目标路径
            var form = new multiparty.Form({ uploadDir: "./public/files/" });
            //上传完成后处理
            form.parse(req, function(err, fields, files) {
                if (err) {
                    console.log("parse error: " + err);
                } else {
                    var inputFile = files.file[0];
                    console.log("inputFile", inputFile);
                    var uploadedPath = inputFile.path;
                    var dstPath = "./public/files/" + inputFile.originalFilename;
                    var extname = path.extname(uploadedPath);
                    //重命名为真实文件名
                    fs.rename(uploadedPath, dstPath, function(err) {
                        if (err) {
                            console.log("rename error: " + err);
                        } else {
                            if (/xlsx/.test(extname)) {
                                var data = excel2json(dstPath);
                                result = data;
                                fs.writeFileSync(
                                    "./public/data.json",
                                    JSON.stringify(data),
                                    "utf8"
                                );
                            }
                            if (/png|jpg/.test(extname)) {
                                var port = server.address().port;
                                var url =
                                    "//127.0.0.1:" +
                                    port +
                                    "/files/" +
                                    inputFile.originalFilename;
                                result = {
                                    imgUrl: url
                                };
                            }
                            res.json(result);
                        }
                    });
                }
            });
        });
        router.post("/uploadMix", function(req, res, next) {
            //生成multiparty对象，并配置上传目标路径
            var form = new multiparty.Form({ uploadDir: "./public/files/" });
            //上传完成后处理
            form.parse(req, function(err, fields, files) {
                if (err) {
                    console.log("parse error: " + err);
                } else {
                    var inputFile = files.file[0];
                    var uploadedPath = inputFile.path;
                    var dstPath = "./public/files/" + inputFile.originalFilename;
                    //重命名为真实文件名
                    fs.rename(uploadedPath, dstPath, function(err) {
                        if (err) {
                            console.log("rename error: " + err);
                        } else {
                            var port = server.address().port;
                            var reqData = {
                                imgName: fields.imgName.toString(),
                                imgUrl: "//127.0.0.1:" + port + "/files/" + inputFile.originalFilename
                            };
                            operatorImg.insertImg({
                                    data: reqData
                                },
                                function() {
                                    res.json({ msg: "success" });
                                }
                            );
                        }
                    });
                }
            });
        });
        router.post("/uploadMulti", function(req, res, next) {
            var form = new multiparty.Form({ uploadDir: "./public/files/" });
            form.parse(req, function(err, fields, files) {
                console.log(files);
                if (err) {
                    console.log("parse error: " + err);
                } else {
                    for (var i = 0; i < files.file.length; i++) {
                        var inputFile = files.file[i];
                        var uploadedPath = inputFile.path;
                        var dstPath = "./public/files/" + inputFile.originalFilename;
                        //重命名为真实文件名
                        fs.rename(uploadedPath, dstPath, function(err) {
                            if (err) {
                                console.log("rename error: " + err);
                            }
                        });
                    }
                    res.json({ msg: "success" });
                }
            });
        });
        router.post("/uploadByBase", function(req, res, next) {
            var form = new multiparty.Form({ uploadDir: "./public/files/" });
            form.parse(req, function(err, fields, files) {
                if (err) {
                    console.log("parse error: " + err);
                } else {
                    var list = JSON.parse(fields.fileList);
                    list.forEach(function(item, index) {
                        var imgData = item.imgUrl.replace(/^data:image\/\w+;base64,/, "");
                        var dataBuffer = new Buffer(imgData, "base64");
                        //写入文件
                        fs.writeFileSync(
                            "./public/files/" + item.name + ".png",
                            dataBuffer
                        );
                    });
                    res.json({ msg: "保存成功" });
                }
            });
        });
    }
};

module.exports = Upload;