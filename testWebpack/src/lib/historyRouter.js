/**
 * history方式实现单页面路由
 * 
 */
class HistoryRouter {
    constructor(...args) {
        this.currentRoute = "/";
        this.routes = {};
        this.init();
    }
    init() {
        $(window).on("load", () => {
            this.refresh(this.currentRoute, 1);
        })
        $(window).on("popstate", () => {
            this.currentRoute = history.state.path;
            this.refresh(this.currentRoute, 2);
        });

        // 对所有的link标签进行绑定事件
        var historyLinks = document.querySelectorAll('.route-link');
        for (var i = 0, len = historyLinks.length; i < len; i++) {
            historyLinks[i].onclick = (e) => {
                // 阻止默认
                e.preventDefault();
                this.currentRoute = e.target.getAttribute('href');
                this.refresh(this.currentRoute, 1);
            }
        }
    }
    refresh(route, type) {
        this.routes[route] && this.routes[route](type);
    }
    route(path, callback) { //注册路由 callback 注册完成路由回调
        this.routes[path] = function(type) {
            if (type == 1) {
                history.pushState({ path: path }, '', path);
            } else if (type == 2) {
                history.replaceState({ path: path }, '', path);
            }
            callback();
        };
    }
}
export default HistoryRouter;