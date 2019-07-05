import Tpl from "./index.ejs";
import "./index.less"
class Index {
    constructor(config) {
        this.el = config.el;
        this.data = config.data;
        this.render(this.data);
    }
    render(data) {
        let html = Tpl(data);
        this.el.html(html);
    }
}
export default Index;