import Tpl from "./index.ejs";
import "./index.less";
import Event from "@public/lib/event"
class Index {
    constructor(config) {
        this.el = config.el;
        this.data = config.data;
        this.render(this.data);
        this.events();
    }
    render(data) {
        let html = Tpl(data);
        this.el.html(html);
        this.el.find(".tab-item").eq(0).addClass("tab-active");
    }
    events() {
        let _this = this
        this.el.on("click", ".tab-item", function() {
            let rel = $(this).attr("data-rel");
            let type = $(this).attr("data-type");
            if ($(this).hasClass("tab-active")) {
                return;
            } else {
                _this.el.find(".tab-item").removeClass("tab-active");
                $(this).addClass("tab-active");
            }
            _this.trigger("tabChange", {
                tabRel: rel,
                tabType: type
            })
        })
    }
}
$.extend(Index.prototype, Event);
export default Index;