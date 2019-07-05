// import $ from 'zepto';
// import mock from "./data.js";
import "./index.less";
import Tab from "@components/tab/index";
import ServiceList from "@components/income/serviceList/";
import RecommendList from "@components/income/recommendList/";
import TopPanel from "@components/income/panel/";
import API from "@api";
import DataNull from "@public/lib/datanull";
class Index {
    constructor() {
        this.recommendData = {
            //推卡佣金
            curentPage: 1,
            list: [],
        };
        this.serviceData = {
            //服务佣金
            currentPage: 1,
            list: []
        };
        this.dataNull = new DataNull();
        this.initTab();
        // this.initPanel("2", mock.recommendData); //模拟数据
        this.getServiceList("list1", this.serviceData.currentPage);
        this.events();
    }
    events() {
        $(".more-link").on("click", () => {
            //加载更多
            let rel = $(".tab-active").attr("data-rel");
            if (rel == "list2") {
                this.getRecommendList(rel, this.recommendData.curentPage);
            } else {
                this.getServiceList(rel, this.serviceData.curentPage);
            }
        });
    }
    initPanel(type, option) {
        let data = $.extend({
            type: type
        }, option);
        this.panel = new TopPanel({
            el: $("#panel" + type),
            data: data
        });
    }
    initTab() {
        let tab = new Tab({
            el: $(".top-tab"),
            data: [{
                    rel: "list1",
                    txt: "服务佣金",
                    type: "2"
                },
                {
                    rel: "list2",
                    txt: "推卡佣金",
                    type: "1"
                }
            ]
        });
        tab.on("tabChange", res => {
            this.dataNull.hide();
            let rel = res.tabRel;
            let type = res.tabType;
            $("#" + rel)
                .show()
                .siblings()
                .hide();
            $("#panel" + type)
                .show()
                .siblings()
                .hide();
            if (type == "2" && this.serviceData.list.length == 0) {
                this.getServiceList(rel, 1);
            }
            if (type == "1" && this.recommendData.list.length == 0) {
                this.getRecommendList(rel, 1);
            }
        });
    }

    getServiceList(rel, currentPage) {
        API.request(
            API.getProfitList, {
                type: "2", // 1 办卡返利,2服务费
                current: currentPage, //页码
                size: "20" //每页数量
            },
            res => {
                console.log(res);
                if (res.code == "200" && res.data) {
                    res.data.serviceChargeList && (this.serviceData.list = this.serviceData.list.concat(
                        res.data.serviceChargeList
                    ));
                    if (!this.serviceData.panelData) {
                        this.serviceData.panelData = {
                            nowMonthProfit: res.data.nowMonthProfit,
                            allProfit: res.data.allProfit
                        };
                        this.initPanel("2", this.serviceData.panelData);
                    }
                    this.renderList(rel, this.serviceData.list);
                    this.serviceData.curentPage += 1;
                    this.serviceData.haveNextPage = res.data.haveNextPage;
                    this.loadingMore(this.serviceData.haveNextPage);
                }
            },
            err => {
                console.log(err);
            }
        );
    }
    getRecommendList(rel, currentPage) {
        API.request(
            API.getProfitList, {
                type: "1", // 1 办卡返利,2服务费
                current: currentPage, //页码
                size: "20" //每页数量
            },
            res => {
                console.log(res);
                if (res.code == "200" && res.data) {
                    res.data.earningsList && (this.recommendData.list = this.recommendData.list.concat(
                        res.data.earningsList
                    ));
                    if (!this.recommendData.panelData) {
                        this.recommendData.panelData = {
                            nowMonthProfit: res.data.nowMonthProfit,
                            allProfit: res.data.allProfit,
                            earningsCardTypeList: res.data.earningsCardTypeList
                        };
                        this.initPanel("1", this.recommendData.panelData);
                    }
                    this.renderList(rel, this.recommendData.list);
                    this.recommendData.curentPage += 1;
                    this.recommendData.haveNextPage = res.data.haveNextPage;
                    this.loadingMore(this.recommendData.haveNextPage);
                }
            },
            err => {
                console.log(err);
            }
        );
    }
    renderList(rel, data) {
        $("#" + rel).show().siblings().hide();
        if (data.length == 0) {
            this.dataNull.show();
        }
        if (rel == "list1") {
            this[rel] = new ServiceList({
                el: $("#" + rel),
                data: data
            });
        } else if (rel == "list2") {
            this[rel] = new RecommendList({
                el: $("#" + rel),
                data: data
            });
        }

    }
    loadingMore(isMore) {
        //是否显示加载更多
        if (isMore) {
            $(".more-link").show();
        } else {
            $(".more-link").hide();
        }
    }
}
new Index();