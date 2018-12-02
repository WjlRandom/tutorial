import common from "./common.js"
class Index {
    constructor() {
        this.msg = "hello world 1111"
        alert(this.msg);
        common();
        this.init();
    }
    init() {
        console.log("init");
    }
}
new Index();