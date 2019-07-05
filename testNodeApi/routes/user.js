var bodyParser = require("body-parser");
var operatorUser = require("../database/operatorUser.js");

function UserManage() {
    this.init.apply(this, arguments);
}
UserManage.prototype = {
    init: function(router) {
        router.get("/random/:min/:max", function(req, res) {
            console.log(req.params);
            var min = parseInt(req.params.min);
            var max = parseInt(req.params.max);
            if (isNaN(min) || isNaN(max)) {
                res.status(400);
                res.json({ error: "Bad request." });
                return;
            }
            var result = Math.round(Math.random() * (max - min) + min);
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
        router.post("/loginSystem", bodyParser.json(), function(req, res) {
            var name = req.body.userName;
            var psw = req.body.password;
            if (name == undefined || psw == undefined) {
                res.status(400);
                res.json({ msg: "Bad request", code: "400" });
                return;
            }
            req.session.regenerate(function(err) {
                if (err) {
                    return res.json({ ret_code: 2, ret_msg: "登录失败" });
                }
                req.session.loginUser = name;
                console.log("登录成功");
            });
            operatorUser.queryUser({
                    queryObj: {
                        name: name
                    }
                },
                function(config) {
                    if (config.length == 0) {
                        res.json({ msg: "用户未注册" });
                    } else {
                        res.json({ msg: "success" });
                    }
                }
            );
        });
        router.post("/logout", function(req, res) {
            req.session.destroy();
            res.json({ msg: "退出成功" });
        });
    }
};

module.exports = UserManage;