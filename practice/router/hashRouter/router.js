class HashRouter {
    constructor(...args) {
        this.currentHash = "/";
        this.routers = {};
        this.init(...args);
    }
    init(config) {
        window.on("hashchange", () => {
            alert(window.location.hash);
        })
    }
    refresh() {
        window.location.href = ""
    }
    route(path, callback) {
        this.routes[path] = callback || function() {
            alert('未定义回调函数！');
        }
    }
}
new HashRouter();