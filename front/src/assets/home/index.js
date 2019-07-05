// import $ from 'zepto';
import "./index.less";
import List from "@components/home/index";
// import mock from "./data.js";
import API from "@api";
import Toast from "@public/lib/toast";
import WechatApi from "@public/lib/wechat"; //微信分享接口
import Loading from "@public/lib/loading";
class Index {
    constructor() {
        this.Loading = new Loading();
        this.getUserInfo(); //正式请求接口
        this.setWechatShare(); //设置微信分享参数
        // this.render(mock); //模拟数据
    }
    getUserInfo() { //初始进来获取用户信息
        API.request(API.getUserInfo, {}, (res) => {
            console.log(res)
            if (res.code == "200") {
                this.render(res);
            } else {
                new Toast(res.msg);
            }
        }, (err) => {
            console.log(err);
        })
    }
    render(res) {
        this.userInfo = res.data;
        this.init(this.userInfo);
        if (this.userInfo.activities) {
            this.renderActivities(this.userInfo.activities);
        }
        if (this.userInfo.cardTypes) {
            this.renderCardTypes(this.userInfo.cardTypes);
        }
        $(".container").show();
        this.Loading.hide();
    }
    init(data) {
        let ctx = this;
        this.profileUrl = "";
        if (data.headImageUrl) {
            $("#profile").attr("src", data.headImageUrl);
            this.profileUrl = data.headImageUrl;
        }
        $("#todayIncome").html(data.todayEarnings);
        $("#sumIncome").html(data.allEarnings);
        $("#cardDate").html(data.validityDayNumber);
        $("#cardName").html(data.cardName);
        $("#income").html(data.allEarnings);
        $("#subMember").html(data.myCardPerson);
        //$("#cardStatus").html(data.isSellProducts);
        if (data.isSellProducts == 0) {
            $("#cardStatus").hide();
        } else {
            $("#cardStatus").show();
        }
        $("#personal").show();
        if (data.position == 1) { //店长
            $("#business").show();
        } else { //服务人员
            $("#business").html("");
        }
        // $(".profile-link").click(function() { //跳转到上传头像页 暂时不用
        //     window.location.href = "./portrait.html?imgUrl=" + ctx.profileUrl;
        // })
    }
    renderActivities(data) { //加载活动列表
        let pid = this.userInfo.id;
        data.forEach(item => {
            item.href = `./activity.html?parentId=${pid}&activityId=${item.id}&shopId=${item.shopId}`
        });
        let list = new List({
            el: $(".new-customer"),
            data: {
                title: "新人专享",
                list: data
            }
        })
    }
    renderCardTypes(data) { //加载会员卡列表
        data.forEach((item) => {
            item.href = `./memberCard.html?cardTypeId=${item.id}&parentId=${this.userInfo.id}`;
        })
        let list1 = new List({
            el: $(".member"),
            data: {
                title: "会员专享",
                list: data
            }
        })
    }
    setWechatShare() { //微信分享信息设置
        new WechatApi({
            title: "速美仁医智能美容", // 分享标题
            desc: '立即体验，立刻变美', // 分享描述
            imgUrl: 'http://imgtj.sumeiliti.com/profile.png',
            link: window.location.href
        })
    }
}
new Index();