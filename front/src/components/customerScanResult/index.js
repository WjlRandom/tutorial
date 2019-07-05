// import $ from 'zepto';
import Tpl from "./index.ejs";
import './index.less';
class Index {
    constructor(config) {
        this.el = config.el;
        this.render();
    }
    render() {
        let html = Tpl();
        this.el.html(html);
    }
}
export default Index