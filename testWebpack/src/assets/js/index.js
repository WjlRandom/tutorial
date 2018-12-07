import "../style/index.less";
import "@lib/zepto";
class Index {
    constructor() {
        this.msg = "hello world 111"
        alert(this.msg);
        alert(process.env.NODE_ENV);
        this.init();
    }
    init() {
        // $(".main").html("hello world come on");
    }
}
new Index();