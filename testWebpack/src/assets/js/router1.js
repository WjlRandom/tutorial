import Router from "@lib/historyRouter.js";
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
    }
}
new Index();