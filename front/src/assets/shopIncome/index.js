// import $ from 'zepto';
// import mock from "./data.js";
import "./index.less";
import Panel from "@components/shopIncome/panelList/";
import List from "@components/shopIncome/list/";
import API from "@api";
import Toast from "@public/lib/toast";
import DataNull from "@public/lib/datanull";
class Index {
    constructor() {
        // this.init(mock); //模拟数据
        // this.renderList(mock.data.cardList); //模拟数据

        this.loadConfig = {
            currentPage: 1,
            haveNextPage: true,
            list: []
        }
        this.getIncomeData(this.loadConfig.currentPage);
        this.events();
        this.dataNull = new DataNull();
    }
    init(config) {
        $("#total").html(config.allShopProfit);
        $("#potential").html("aaa");
        let panel = new Panel({
            el: $(".income-top-panel"),
            data: {
                cardList: config.shopCardTypeProfitList,
                monthList: config.profitForTimeList
            }
        });
    }
    renderList(list) {
        this.dataNull.hide();
        new List({
            el: $(".income-list-wrap"),
            data: list
        })
    }
    getIncomeData(pageNum) {
        API.request(API.getShopProfit, {
            "current": pageNum, //页码
            "size": "20" //每页数量
        }, (res) => {
            console.log(res);
            if (res.code == "200") {
                this.init(res.data);
                if (res.data.cardList) {
                    this.loadConfig.list = this.loadConfig.list.concat(res.data.cardList);
                }
                if (this.loadConfig.list.length > 0) {
                    this.renderList(this.loadConfig.list);
                } else {
                    this.dataNull.show();
                }
                this.loadConfig.haveNextPage = res.data.haveNextPage;
                if (this.loadConfig.haveNextPage) {
                    this.loadConfig.currentPage += 1;
                    $(".more-link").show();
                } else {
                    $(".more-link").hide();
                }
            } else {
                new Toast(res.msg);
            }
        }, (err) => {
            console.log(err);
            new Toast("网络繁忙，请稍后再试");
        })
    }
    events() {
        $(".more-link").on("click", () => {
            this.getIncomeData(this.loadConfig.currentPage);
        })
    }
}
new Index();