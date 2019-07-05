import mock from "./data.js";
import "./index.less";
import ProductList from "@components/paySuccess/index"
class Index {
    constructor() {
        this.init(mock);
    }
    init(data) {
        new ProductList({
            el: $(".product-wrap"),
            data: data
        })
    }
}
new Index();