// import $ from 'zepto';
import API from "@api";
import Query from "@public/lib/query";
import Toast from "@public/lib/toast"
class Index {
    constructor() {
        debugger;
        this.code = Query.query("code");
        this.businessUrl = Query.query("businessUrl");
        this.getLoginCode(this.code,this.businessUrl);
    }
    getLoginCode(code,businessUrl) {
        debugger;
  
        API.request(API.login, {
            code: code
        }, (res) => {
            debugger;
            if (res.code == 200) { //扫描-活动类型返回值
                window.location.href=decodeURIComponent(Query.query("businessUrl"));
            }
        }, (err) => {
            console.log(err);
            new Toast("网络繁忙，请稍后再试");
        })
    }
}
new Index();