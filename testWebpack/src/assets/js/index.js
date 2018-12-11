import "../style/index.less";

class Index {
    constructor() {
        this.msg = "hello world 333"
        alert(this.msg);
        alert(process.env.NODE_ENV);
        this.init();
    }
    init() {
        $(".main").html(new Date().getTime());
    }
}
new Index();