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
    }
    events() {
        let _this = this;
        this.el.on("click", ".list-item", function() {
            let index = $(this).index();
            _this.trigger("itemClick", _this.data[index]);
        })
    }
}
Object.assign(Index.prototype, Event);
export default Index;