import Tpl from "./index.ejs";
import Toast from "@public/lib/toast";
import API from "@api";
import Event from "@public/lib/event"
import "./index.less";
class Index {
    constructor(config) {
        this.el = config.el;
        this.btnText = config.btnText;
        this.render();
    }
    render() {
        let html = Tpl(this.btnText);
        this.el.html(html);
        this.events();
    }
    events() {
        this.el.on("click", ".code-btn", () => {
            let data = this.checkInput(false);
            if (data) {
                this.sendSmsCode(data);
            }
        })
        this.el.on("click", ".submit-btn", () => {
            let data = this.checkInput(true);
            if (data) {
                this.submit(data);
            }
        })
    }
    checkInput(isSubmit) {
        let userName = this.el.find(".user-name").val() || "";
        let phone = this.el.find(".phone").val() || "";
        let code = this.el.find(".code").val() || "";
        if (!userName) {
            new Toast("请输入用户名", 1000);
            return;
        }
        if (!phone || !/^1[3-9]\d{9}$/.test(phone)) {
            new Toast("请输入正确的手机号")
            return;
        }
        if (isSubmit && !code) {
            new Toast("请输入短信验证码")
            return;
        }
        return {
            userName: userName,
            phone: phone,
            code: code
        }
    }
    sendSmsCode(config) {
        let url = API.getSmsCode + '?phoneNumber=' + config.phone;
        API.request(url, {}, (res) => {
            if (res.code == 200) {
                new Toast("验证码发送成功");
                this.countDown(60);
            } else {
                new Toast(res.msg);
            }
        }, (err) => {
            console.log(err);
        });
    }
    countDown(second) {
        let count = second;
        let Timer = setInterval(() => {
                count--;
                this.el.find(".code-btn").attr("disabled", "disabled");
                this.el.find(".code-btn").html(`${count}s后重发`);
                if (count < 1) {
                    count = second;
                    this.el.find(".code-btn").html('重新获取');
                    clearInterval(Timer);
                    this.el.find(".code-btn").removeAttr("disabled");
                }
            },
            1000);
    }
    submit(config) {
        API.request(API.bindUser, {
            name: config.userName,
            phoneNumber: config.phone,
            verifyCode: config.code
        }, (res) => {
            console.log(res);
            if (res.code == 200) {
                this.trigger("submitSuccess")
            }
        }, (err) => {
            console.log(err);
        });
    }
}
Object.assign(Index.prototype, Event);
export default Index;