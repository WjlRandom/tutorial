// import $ from 'zepto';
import "./index.less";
import MemberCard from "@components/memberCard/index";
import API from "@api";
import Query from "@public/lib/query";
import mock from './data.js'
import WechatApi from "@public/lib/wechat"; //微信分享接口
class Index {
    constructor() {
        this.getCardInfo(); //正式请求
        // this.init(mock.result2); //模拟数据
    }
    init(data) {
        new MemberCard({
            el: $(".container"),
            data: data
        })
    }
    getCardInfo() {
        API.request(API.getMemberCardInfo, {
            parentId: Query.query("parentId"),
            cardTypeId: Query.query("cardTypeId")
        }, (res) => {
            if (res.code == '200' || res.code == '504' || res.code == '505') { //服务人员打开
                this.init(res);
                this.setWechatShare(res.data.cardName);
            } else if (res.code == "507") { //已经是会员
                this.init(res)
            } else {
                console.log(res);
            }
            
        }, (err) => {
            console.log(err);
        })
    }
    setWechatShare(cardName) { //微信分享信息设置
        new WechatApi({
            title: "速美仁医智能美容", // 分享标题
            desc: cardName, // 分享描述
            imgUrl: 'http://imgtj.sumeiliti.com/profile.png',
            link: window.location.href
        })
    }
}
new Index()