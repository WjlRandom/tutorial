import common from "./common.js";
import moduleJs from "../components/c1.js";
class Index {
    constructor() {
        this.msg = "hello world 1111";
        moduleJs();
        alert(this.msg);
        common();
        this.init();
    }
    init() {
        console.log("init");
    }
}
new Index();