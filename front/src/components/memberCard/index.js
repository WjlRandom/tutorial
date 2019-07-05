import Tpl from "./index.ejs"
import "./index.less";
import Form from "@components/form/";
import API from "@api";
import Query from "@public/lib/query";
import ActivityResult from "@components/activityResult/";
import Toast from "@public/lib/toast"
class Index {
    constructor(config) {
        this.el = config.el;
        this.data = config.data;
        this.parentId = Query.query("parentId");
        this.cardTypeId = Query.query("cardTypeId");
        this.render(this.data);
    }
    render(data) {
        let html = Tpl(data);
        this.el.html(html);
        if (data.code == "505") {
            this.bindUser();
        }
        this.events();
    }
    events() {
        this.el.find(".submit-link").on('click', () => {
            this.createOrder();
        })
    }
    bindUser() {
        let form = new Form({
            el: $(".bind-user-form"),
            btnText: "提交"
        })
        form.on("submitSuccess", () => {
            this.createOrder(); //创建支付订单
        })
    }
    createOrder() {
        API.request(API.createOrder, {
            "cardTypeId": this.cardTypeId, //卡类型id
            "parentId": this.parentId //上级ID
        }, (res) => {
            debugger;
            if (res.code == 200) {
                new ActivityResult({
                    el: this.el,
                    data: {
                        tipTitle: "温馨提示",
                        // message: "为了保证您的会员权益，避免他人盗用，请联系工作人员进行指导，请上传本人头像，一经上传不得更改。（如不是本人清晰面部照片，店内服务人员有权拒绝服务）。"
                        message: "尊敬的客户，您好，请耐心等待店主确认您的会员身份!"
                    }
                })
            } else {
                new Toast(res.msg);
            }
        }, (err) => {
            console.log(res);
        })
    }
}
export default Index;