import "./index.less"
import Tpl from "./index.ejs";
import Toast from "@public/lib/toast";
import API from "@api";
import Form from "@components/form/";
import WechatApi from "@public/lib/wechat"
class Index {
    constructor(config) {
        this.el = config.el;
        this.data = config.data;
        this.render(this.data);
        this.events();
    }
    events() {
        this.el.find("#submit-btn-hadBind").click(() => {
            this.getPayInfo();
        });
    }
    render(data) {
        let html = Tpl(data);
        this.el.html(html);
        if (data.isBindPhone) {
            this.renderForm();
        }
    }
    renderForm() {
        let form = new Form({
            el: $(".card-form-wrap"),
            btnText: this.data.btnText,
        })
        form.on("submitSuccess", () => {
            this.getPayInfo(); //支付
        })
    }
    getPayInfo() {
        API.request(API.getPayConfig, {
            activityId: this.data.activityId,
            parentId: this.data.parentId,
        }, (res) => {
            console.log(res);
            if (res.code == "201") { //免费活动支付成功
                //"跳转到支付成功页面";
                window.location.href = "./paySuccess.html"
            } else if (res.code == "200") {
                let payConfig = res.data;
                new WechatApi({}).wechatPay(payConfig, () => {
                    window.location.href = "./paySuccess.html";
                });
            } else {
                new Toast(res.msg)
            }
        }, (err) => {
            console.log(err);
        });

    }
}
export default Index;