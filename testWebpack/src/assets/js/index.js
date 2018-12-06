import "../style/index.less";
import Module from "../../components/index/index";
class Index {
    constructor() {
        this.msg = "hello world 666"
        alert(this.msg);
        alert(process.env.NODE_ENV);
        this.init();
    }
    init() {
        let module = new Module({
            el: $("#module")
        });
        console.log("module", module);
        module.on("linkClick", () => {
            alert("点击事件被触发")
        })
    }
}
new Index();