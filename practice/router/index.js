// import Router from "./hashRouter/router.js";
var Router = require("./hashRouter/router.js")
class Index {
    constructor() {
        this.init();
    }
    init() {
        let router = new Router();
        router.route("/home", () => {
            alert("home page")
        })
    }
}
new Index();