class Index {
    constructor() {
        this.init();
    }
    init() {
        var div = document.createElement("div");
        div.setAttribute("class", "loading");
        div.innerHTML = "加载中...."
        document.body.appendChild(div);
    }
    show() {
        document.getElementsByClassName("loading")[0].style.display = "block";
    }
    hide() {
        document.getElementsByClassName("loading")[0].style.display = "none";
    }
}
export default Index;