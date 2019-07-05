// import $ from 'zepto';
import "./index.less";
import BindUser from "@components/bindUser/index";
import ActivityResult from "@components/activityResult/index";
import ServerPage from "@components/serverPage/index";
import Query from "@public/lib/query";
import API from "@api";
import Toast from "@public/lib/toast"
import WechatApi from "@public/lib/wechat"; //微信分享接口
// import mock from "./data.js"
// import Wechat from "@public/lib/wechat"
class Index {
    constructor() {
        this.parentId = Query.query("parentId");
        this.activityId = Query.query("activityId");
        this.shopId = Query.query("shopId");
        this.getActivityUser();
    }
    getActivityUser() {
        API.request(API.getActivityUser, {
            parentId: this.parentId,
            activityId: this.activityId
        }, (res) => {
            debugger;
            console.log(res);
            if (res.code == '200') { //服务人员界面
                new ServerPage({
                    el: $(".container"),
                    data: res.data
                })
            } else if (res.code == '502') { //用户不是会员
                new ActivityResult({
                    el: $(".container"),
                    data: {
                        tipTitle: "温馨提示",
                        message: "请联系本店工作人员办理会员卡"
                    }
                })
            } else if (res.code == '503') { //用户已经参加过体验活动了
                new ActivityResult({
                    el: $(".container"),
                    data: {
                        tipTitle: "温馨提示",
                        message: "您已参与过9.9元特价活动（每人仅限首次），如需继续体验服务，请联系本店工作人员办理会员卡"
                    }
                })
            } else if (res.code == '505') { //用户没有绑定过手机号
                new BindUser({
                    el: $(".container"),
                    data: {
                        previewImage: res.data.previewImage,
                        parentId: this.parentId,
                        activityId: this.activityId,
                        shopId: this.shopId,
                        btnText: res.data.activityFee && res.data.activityFee > 0 ? res.data.activityFee + "元 立即支付(微信)" : "确认", //如果是已经支付过的，按钮显示确认
                        isBindPhone: true,
                    }
                })
            } else if (res.code == '504') { //用户已经绑定过手机号了
                new BindUser({
                    el: $(".container"),
                    data: {
                        previewImage: res.data.previewImage,
                        parentId: this.parentId,
                        activityId: this.activityId,
                        shopId: this.shopId,
                        btnText: res.data.activityFee && res.data.activityFee > 0 ? res.data.activityFee + "元 立即支付(微信)" : "确认",
                        isBindPhone: false,
                    }
                })
            } else if (res.code == "510") { //已经支付过活动了
                window.location.href = "./paySuccess.html"
            } else {
                new Toast(res.msg);
            }
            this.setWechatShare(res.data.name);
        }, (err) => {
            console.log(err);
            new Toast("网络繁忙，请稍后再试")
        });
    }
    setWechatShare(desc) { //微信分享信息设置
        new WechatApi({
            title: "速美仁医智能美容", // 分享标题
            desc: desc, // 分享描述
            imgUrl: 'http://imgtj.sumeiliti.com/profile.png',
            link: window.location.href
        })
    }
}
new Index();