// import $ from 'zepto';
import Query from "@public/lib/query";
import Tpl from "./index.ejs";
import './index.less';
import API from "@api";
import Toast from "@public/lib/toast";
import WechatApi from "@public/lib/wechat";
class Index {
    constructor(config) {
        debugger;
        this.el = config.el;
        this.data = config.data;
        this.render(this.data);
    }
    render(data) {
        let html = Tpl(data);
        this.el.html(html);
        this.events();
    }
    events() {
        this.el.on("click", ".submit-btn", () => {
            debugger;
            this.payForService();
        });
    }
    payForService() {
        debugger
        API.request(API.payService, {
            // payInfoId: this.data.payInfoId,
            equipmentId: Query.query("equipmentId"),
        }, (res) => {
            //alert(JSON.stringify(res));
            if (res.code == "200") {
                let payConfig = res.data;
                new WechatApi({}).wechatPay(payConfig, () => {
                    window.location.reload(); //支付成功刷新 当前页面
                });
            } else if (res.code == "502") { //该用户已经办卡 待确认会员资格
                new Toast("请您找服务人员确认后再支付");
                return;
            }
        }, (err) => {
            new Toast("网络繁忙，请稍后再试");
        });
    }
}
export default Index