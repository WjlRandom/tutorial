class Toast {
    constructor(...args) {
        this.init(...args);
    }
    init(msg, time) {
        let t = time || 1500;
        let div = document.createElement("div");
        div.setAttribute("class", "toast");
        document.querySelector("body").appendChild(div);
        div.innerHTML = msg;
        setTimeout(() => {
            div.parentNode.removeChild(div);
        }, t);
    }
}
export default Toast;