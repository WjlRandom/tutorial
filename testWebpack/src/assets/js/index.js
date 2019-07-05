// import "../style/index.less";

class Index {
    constructor() {
        this.msg = "hello world 999";
        // alert(this.msg);
        //alert(process.env.NODE_ENV);
        this.init();
    }
    init() {
        $(".main").html(new Date().getTime());
        $(".banner1").attr("background", "url(/assets/images/4.jpg) no-repeat center");
    }
}
new Index();