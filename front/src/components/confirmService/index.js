import Tpl from "./index.ejs";
import "./index.less";
import API from "@api";
import Query from "@public/lib/query";
import Toast from '@public/lib/toast';
import ScanResult from '@components/customerScanResult/';
class Index {
    constructor(config) {
        this.el = config.el;
        this.data = config.data;
        this.render(this.data);
        this.events();
    }
    events() {
        this.el.on("click", ".confirm-btn", () => {
            let queryData = {
                shopId: Query.query('shopId'),
                personId: Query.query('personId'),
                equipmentId: Query.query('equipmentId'),
            }

            if (Query.query('personActivityId') != null) {
                queryData["personActivityId"] = Query.query('personActivityId');
            } else {

                queryData["serviceChargeId"] = Query.query('serviceChargeId');

            }

            this.confirm(queryData);
        })
    }
    render(data) {
        let html = Tpl(data);
        this.el.html(html);
        data.headImageUrl && $("#profile").attr("src", data.headImageUrl);
    }
    confirm(config) { //服务人员确认顾客服务信息

        var url = API.confirmActivityService;
        if (config.serviceChargeId != null) {
            url = API.confirmService;
        }
        API.request(url, config, (res) => {
            if (res.code == "200") { //怎么去改变顾客的手机界面
                new Toast("确认成功");
                new ScanResult({
                    el: $(".container")
                });
                window.location.href = "./customerScanResult.html";
            } else if (res.code == "505") { //9.9活动已经被使用
                new Toast("已经参与过活动");
            } else if (res.code == "506") {
                new Toast(res.msg);
            }
        }, (err) => {
            new Toast("网络繁忙，请稍后再试");
        })
    }
}
export default Index;