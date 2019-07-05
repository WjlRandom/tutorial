import Tpl from "./index.ejs";
import "./index.less";
import MemberList from "@components/memberList/"
class Index {
    constructor(config) {
        this.el = config.el;
        this.data = config.data;
        this.render(this.data);
    }
    render(data) {
        let html = Tpl(data);
        this.el.html(html);
        this.renderList()
    }
    renderList() {
        for (let i = 0; i < this.data.length; i++) {
            let el = this.el.find(".member-list").eq(i).find(".list");
            new MemberList({
                el: el,
                data: this.data[i].detailList
            }).on("itemClick", (res) => {
                sessionStorage.setItem("memberInfo", JSON.stringify(res))
                window.location.href = `./subMember.html`;
            })
        }
        this.events();
    }
    events() {
        this.el.on("click", ".title", function() {
            let listWrap = $(this).siblings(".list");
            if (listWrap.height() == 0) {
                $(this).find(".icon").addClass("icon-down");
                listWrap.css("height", "auto");
            } else {
                $(this).find(".icon").removeClass("icon-down");
                listWrap.css("height", 0);
            }
        })
    }
}
export default Index;