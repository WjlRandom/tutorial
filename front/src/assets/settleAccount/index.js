// import $ from 'zepto';
// import mock from "./data.js";
import "./index.less";
import Tab from "@components/tab/index";
import AccountList from "@components/settleAccount/index";
import API from "@api";
import Toast from "@public/lib/toast";
import DataNull from "@public/lib/datanull"
class Index {
    constructor() {
        this.reset();
        this.initTab();
        // this.renderList("list1", mock.earningsBoList);//本地测试用
        this.getList(this.accountData);
        this.events();
        this.dataNull = new DataNull();
    }
    events() {
        $(".more-link").on("click", () => { //加载更多
            let rel = $(".tab-active").attr("data-rel");
            if (rel == "list1") {
                this.getList(this.accountData);
            } else if (rel == "list2") {
                this.getList(this.settledData);
            }
        });
    }
    reset() {
        this.accountData = {
            //未结算
            currentPage: 1,
            list: [],
            haveNextPage: true,
            wrap: "list1",
            type: "0"
        };
        this.settledData = {
            //已结算
            currentPage: 1,
            list: [],
            haveNextPage: true,
            wrap: "list2",
            type: "1"
        };
    }
    initTab() {
        let tab = new Tab({
            el: $(".top-tab"),
            data: [{
                    rel: "list1",
                    txt: "未结算",
                    type: "0"
                },
                {
                    rel: "list2",
                    txt: "已结算",
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
            this.reset();
            if (type == "0") {
                this.getList(this.accountData);
            } else if (type == "1") {
                this.getList(this.settledData);
            }
        });
    }
    renderList(id, type, list) {
        this.dataNull.hide();
        $("#" + id)
            .show()
            .siblings()
            .hide();
        this[id] = new AccountList({
            el: $("#" + id),
            data: {
                list: list,
                type: type
            }
        }).on("confirmClick", res => {
            this.settleAccount(res.earningsId);
        });
    }
    getList(data) {
        let wrap = data.wrap;
        API.request(
            API.getAccountsList, {
                current: data.currentPage,
                size: "20",
                isVerify: data.type //返利是否已被计算  1-->已结算  0-->未结算
            },
            res => {
                console.log(res);
                if (res.code == "200") {
                    data.haveNextPage = res.data.haveNextPage;
                    if (res.data.earningsBoList) {
                        data.list = data.list.concat(
                            res.data.earningsBoList
                        );
                    }
                    if (data.list.length > 0) {
                        this.renderList(wrap, data.type, data.list);
                    } else {
                        this.dataNull.show();
                    }
                    if (data.haveNextPage) {
                        data.currentPage += 1;
                    }
                    this.loadingMore(data.haveNextPage);
                } else {
                    new Toast(res.msg);
                }
            },
            err => {
                console.log(err);
                new Toast("网络繁忙，请稍后再试");
            }
        );
    }
    settleAccount(id) {
        API.request(
            API.settleAccount, {
                earningsId: id
            },
            res => {
                if (res.code == "200") {
                    new Toast("结算成功");
                    $("#" + id).attr("disabled", "disabled");
                    $("#" + id).addClass("btn-disabled");
                } else {
                    new Toast(res.msg);
                }
            },
            err => {
                console.log(err);
                new Toast("网络繁忙，请稍后再试");
            }
        );
    }
    loadingMore(isLoadMore) {
        if (isLoadMore) {
            $(".more-link").show();
        } else {
            $(".more-link").hide();
        }
    }
}
new Index();