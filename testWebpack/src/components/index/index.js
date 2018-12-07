import Tpl from "./index.ejs";
import Event from "@lib/event";

class Index {
    constructor(config) {
        console.log(config.el);
        this.el = config.el;
        this.render();
        this.events();
    }
    render() {
        let html = Tpl();
        this.el.html(html);
    }
    events() {
        this.el.on("click", ".link", () => {
            this.emit("linkClick", {
                link: "hahahh"
            })
        })

    }
}
Object.assign(Index.prototype, Event);
export default Index;