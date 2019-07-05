// import $ from 'zepto';
import "./index.less";
import Member from "@components/member/index";
import mock from "./data.js"
import API from "@api";
class Index {
    constructor() {
        this.getMemberData();
        // this.init(mock)//模拟数据
    }
    init(list) {
        let member = new Member({
            el: $(".container"),
            data: list
        })
    }
    getMemberData() {
        API.request(API.getMemberData, {}, (res) => {
            // console.log(res);
            if (res.code == "200" && res.data) {
                this.init(res.data);
                this.setTitle(res.data);
            }
        }, (err) => {
            console.log(err);
        })
    }
    setTitle(list) {
        let total = 0
        list.map((item) => {
            total += item.totalPersonNumber
        })
        document.title = `直推会员(${total}人)`;
    }
}
new Index();