// import $ from 'zepto';
import mock from "./data.js";
import "./index.less";
import Tab from "@components/tab/index";
import ConfirmMemberList from "@components/confirmMember/index";
import API from "@api";
import Toast from "@public/lib/toast";
import DataNull from "@public/lib/datanull"
class Index {
    constructor() {
        this.reset();
        this.initTab();
        // this.renderList("list1", mock.cardList); //本地测试用
        this.getList(this.unconfirmedData);
        this.events();
        this.dataNull = new DataNull();
    }
    events() {
        $(".more-link").on("click", () => { //加载更多
            let rel = $(".tab-active").attr("data-rel");
            if (rel == "list1") {
                this.getList(this.unconfirmedData);
            } else if (rel == "list2") {
                this.getList(this.confirmedData);
            }
        });
    }
    reset() {
        this.unconfirmedData = {
            //未确认
            currentPage: 1,
            list: [],
            haveNextPage: true,
            wrap: "list1",
            type: "0"
        };
        this.confirmedData = {
            //已确认
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
                    txt: "未确认",
                    type: "0"
                },
                {
                    rel: "list2",
                    txt: "已确认",
                    type: "1"
                }
            ]
        });
        tab.on("tabChange", res => {
            let rel = res.tabRel;
            let type = res.tabType;
            $("#" + rel)
                .show()
                .siblings()
                .hide();
            this.reset();
            if (type == "0") {
                this.getList(this.unconfirmedData);
            } else if (type == "1") {
                this.getList(this.confirmedData);
            }
        });
    }
    renderList(id, list) {
        // console.log(list.length)
        this.dataNull.hide();
        $("#" + id)
            .show()
            .siblings()
            .hide();
        this[id] = new ConfirmMemberList({
            el: $("#" + id),
            data: list
        }).on("confirmClick", res => {
            this.confirmMember(res.id);
        });
    }
    getList(data) {
        let wrap = data.wrap;
        API.request(
            API.getConfirmData, {
                current: data.currentPage,
                size: "20",
                isVerify: data.type //  1-->已确认  0-->未确认
            },
            res => {
                console.log(res);
                if (res.code == "200") {
                    data.haveNextPage = res.data.haveNextPage;
                    if (res.data.cardList) {
                        data.list = data.list.concat(
                            res.data.cardList
                        );
                    }
                    if (data.list.length > 0) {
                        this.renderList(wrap, data.list);
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
    confirmMember(id) {
        API.request(
            API.confirmMember, {
                cardId: id
            },
            res => {
                if (res.code == "200") {
                    new Toast("确认成功");
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