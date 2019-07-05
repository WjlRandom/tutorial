// import $ from 'zepto';
import './index.less';
import Benefits from "@components/memberBenefits/index";
import Data from "./data.js"
class Index {
    constructor(...args) {
        //this.getMemberData();
        this.init(Data)
    }
    init(list) {
        let benefits = new Benefits({
            el: $(".benefit-wrap"),
            data: list
        })
    }
}
new Index();