import Tpl from "./index.ejs";

class Index {
    constructor(config) {
        console.log(config.el);
        this.el = config.el;
        this.render();
    }
    render() {
        let html = Tpl();
        this.el.html(html);
    }
}
export default Index;