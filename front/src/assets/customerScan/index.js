// import $ from 'zepto';
import "./index.less";
import API from "@api";
import Query from "@public/lib/query";
import ActivityResult from "@components/activityResult/";
import CustomerScan from "@components/customerScan/index";
import CustomerScanPay from "@components/customerScanPay/index";
import WechatApi from "@public/lib/wechat";
import ScanResult from "@components/customerScanResult/"
// import mock from "./data";
import Toast from "@public/lib/toast"
class Index {
    constructor() {
        this.equipmentId = Query.query("equipmentId");
        this.getUserQrcode(this.equipmentId);
        // this.renderCustomerPay(mock.serviceData); //模拟数据
    }
    getUserQrcode(id) {
        debugger;
        API.request(API.showCustomerQrcode, {
            equipmentId: id
        }, (res) => {
            //alert(JSON.stringify(res));
            debugger;
            if (res.code == "203") { //扫描-活动类型返回值
                this.renderCustomerInfo(res.data);
                this.timer = setInterval(() => { //查询服务人员是否扫描成功
                    debugger;
                    let url = API.confirmServiceResult;
                    let reqData;
                    if (res.data.personActivityId != null) {
                        url = API.confirmActivityResult;
                        reqData = { personActivityId: res.data.personActivityId }
                    } else {
                        reqData = { serviceChargeId: res.data.serviceChargeId }
                    };
                    this.getScanResult(url, reqData);
                }, 5000);
            } else if (res.code == "202") { //扫描-服务类型返回值,用户已经办卡，需要支付服务费
                let data = res.data;
                //  data.equipmentId = this.equipmentId
                this.renderCustomerPay(data);
                let payConfig = res.data;
            } else if (res.code == "204") { //设备被占用
                new ActivityResult({
                    el: $(".container"),
                    data: {
                        tipTitle: "温馨提示",
                        message: "设备正在使用中，请您耐心等待"
                    }
                });
            } else if (res.code == "502") { //用户不是会员
                new ActivityResult({
                    el: $(".container"),
                    data: {
                        tipTitle: "温馨提示",
                        message: "尊敬的客户，请您联系服务人员办理会员卡"
                    }
                });
            } else {
                new ActivityResult({
                    el: $(".container"),
                    data: {
                        tipTitle: "温馨提示",
                        message: "尊敬的客户，您可享受新人9.9元特价活动（每人仅限首次），请联系店长体验服务。谢谢！"
                    }
                });
            }
        }, (err) => {
            console.log(err);
            new Toast("网络繁忙，请稍后再试");
        })
    }
    getScanResult(url, reqData) {
        API.request(url, reqData, (res) => {
            if (res.code == "200" && res.data == "2") {
                clearInterval(this.timer);
                new ScanResult({
                    el: $(".container")
                });
            }
        }, (err) => {
            console.log(err);
            new Toast("网络繁忙，请稍后再试");
        })
    }
    renderCustomerInfo(data) { //加载顾客二维码
        new CustomerScan({
            el: $(".container"),
            data: data
        })
    }
    renderCustomerPay(data) { //支付服务费
        new CustomerScanPay({
            el: $(".container"),
            data: data
        })
    }

}
new Index();