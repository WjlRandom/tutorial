import Module from "@components/index/index";
import "@lib/zepto";
class Index {
    constructor() {
        $(".common").html("哈哈哈哈")
    }
    init() {
        let module = new Module({
            el: $("#module")
        });
        console.log("module", module);
        module.on("linkClick", () => {
            alert("点击事件被触发")
        });
    }
}
new Index();