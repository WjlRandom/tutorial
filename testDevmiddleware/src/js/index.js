import common from "./common.js";
import moduleJs from "../components/c1.js";
class Index {
    constructor() {
        this.msg = "hello world wwwwww";
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