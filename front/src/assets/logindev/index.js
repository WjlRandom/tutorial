// import $ from 'zepto';
import API from "@api";
import Query from "@public/lib/query";
import Toast from "@public/lib/toast"
class Index {
    constructor() {
        this.personId = Query.query("personId");
        this.getLoginCode(this.personId);
        this.getPersonIds();
    }
    getLoginCode(personId) {
        API.request(API.logindev + '?personId=' + personId, {
            personId: personId
        }, (res) => {
            if (res.code == 200) { //扫描-活动类型返回值
                window.location.href = window.location.host + '/views/home.html';
            }
        }, (err) => {
            console.log(err);
            new Toast("网络繁忙，请稍后再试");
        })
    }
    getPersonIds() {
        API.request(API.getPersonIds, {}, (res) => {
            console.log(res);
            if (res.code == 200) { //扫描-活动类型返回值
                // alert('断点看ID');
            }
        }, (err) => {
            console.log(err);
            new Toast("网络繁忙，请稍后再试");
        })
    }

}
new Index();