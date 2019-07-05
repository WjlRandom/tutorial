// import $ from 'zepto';
import "./index.less";
import Membership from "@components/membership/index";
// import mock from "./data";
import API from "@api";
import Toast from "@public/lib/toast"
class Index {
    constructor() {
        this.getMembership();
        // this.init(mock);//模拟数据
    }
    init(data) {
        let membership = new Membership({
            el: $(".container"),
            data: data
        })
    }
    getMembership() {
        API.request(API.getMembershipList, {}, (res) => {
            if (res.code == "200") {
                this.init(res.data);
            } else {
                new Toast(res.msg);
            }
        }, (err) => {
            new Toast("网络繁忙，请稍后再试");
        })
    }
}
new Index();