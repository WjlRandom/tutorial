import mock from "./data.js";
import "./index.less";
import List from "@components/memberList/index";
import API from "@api";
import Toast from "@public/lib/toast";
import DataNull from "@public/lib/datanull"
class Index {
    constructor() {
        this.memberInfo = JSON.parse(sessionStorage.getItem("memberInfo"));
        this.loadConfig = {
            list: [],
            currentPage: 1,
            haveNextPage: true
        }
        this.dataNull = new DataNull();
        this.initTitle(this.memberInfo);
        this.getSubMemberData();
        this.events();

        // this.initList(mock); //模拟数据
    }
    events() {
        $(".more-link").on("click", () => {
            this.getSubMemberData(this.loadConfig.currentPage);
        })
    }
    initTitle(data) {
        $(".name").html(data.personName);
        $(".card-type").html(data.cardName);
        $(".phone").html(data.phoneNumber);
        if (data.isSellProducts == 0) {
            $(".status").hide();
        }
    }
    initList(list) {
        if (list.length > 0) {
            this.dataNull.hide();
            new List({
                el: $(".list-main"),
                data: list
            })
        } else {
            this.dataNull.show();
        }
        $(".list-item .list-item-icon").hide();
        $(".list-item .phone").hide();
        $(".list-item .verify").hide();
    }
    getSubMemberData(currentPage) {
        API.request(API.getSubMemberData, {
            personId: this.memberInfo.personId || "",
            current: currentPage,
            size: "20"
        }, (res) => {
            console.log(res);
            if (res.code == "200") {
                this.loadConfig.list = this.loadConfig.list.concat(res.data.cardBoList);
                this.initList(this.loadConfig.list);
                this.loadConfig.currentPage += 1;
                this.loadConfig.haveNextPage = res.data.haveNextPage;
                if (this.loadConfig.haveNextPage) {
                    $(".more-link").show();
                } else {
                    $(".more-link").hide();
                }
            } else {
                new Toast(res.msg);
            }
        }, (err) => {
            console.log(err);
        })
    }
}
new Index();