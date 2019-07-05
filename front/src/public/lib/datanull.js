class Index {
    constructor() {
        this.render();
    }
    render() {
        let div = document.createElement("div");
        div.setAttribute("class", "data-null");
        let html = `<img src="../public/images/data-null.png"><p>暂无数据</p>`;
        div.innerHTML = html;
        document.body.appendChild(div);
    }
    show() {
        document.getElementsByClassName("data-null")[0].style.display = "block";
    }
    hide() {
        document.getElementsByClassName("data-null")[0].style.display = "none";
    }
}
export default Index;