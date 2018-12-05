import "../style/index.less";
import Module from "../../components/index/index";
class Index {
    constructor() {
        this.msg = "hello world 222"
        alert(this.msg);
        alert(process.env.NODE_ENV);
        this.init();
    }
    init() {
        new Module({
            el: $("#module")
        });
    }
}
new Index();