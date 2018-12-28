/**
 * hash方式实现单页面路由
 * 
 */
class HashRouter {
    constructor(...args) {
        this.currentHash = "/";
        this.routes = {};
        this.init(...args);
    }
    init(config) {
        $(window).on("load", () => {
            this.refresh();
        })
        $(window).on("hashchange", () => {
            this.refresh();
        })
    }
    refresh() {
        this.currentHash = location.hash.slice(1) || "/";
        this.routes[this.currentHash] && this.routes[this.currentHash]();
    }
    route(path, callback) { //注册路由 callback 注册完成路由回调
        this.routes[path] = callback;
    }
}
export default HashRouter;