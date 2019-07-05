import Tpl from "./index.ejs";
import "./index.less";
import Event from "@public/lib/event";
class Index {
    constructor(config) {
        this.el = config.el;
        this.data = config.data;
        this.render(this.data);
    }
    render(data) {
        let html = Tpl(data);
        this.el.html(html);
        this.events();
    }
    events() {
        let _this = this;
        this.el.on("click", ".confirm-btn", function() {
            _this.trigger("confirmClick", {
                earningsId: this.id
            })
        })
    }
}
Object.assign(Index.prototype, Event);
export default Index;