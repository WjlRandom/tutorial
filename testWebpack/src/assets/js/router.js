import Router from "@lib/hashRouter.js";
import Home from "@components/router/home/"
class Index {
    constructor() {
        this.init();
    }
    init() {
        let router = new Router();
        router.route("/home", () => {
            new Home({
                el: $(".content")
            })
        })
        router.route("/news", () => {
            $(".content").html("新闻")
        })
        router.route("/about", () => {
            $(".content").html("关于我们")
        })
        router.route("/error", () => {
            $(".content").html("发生错误")
        })
    }
}
new Index();