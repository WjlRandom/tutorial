var qs = require("querystring");
var str = "?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=nodejs&rsv_pq=c03a79dd000124d2&rsv_t=ee49GQcIl32waXhUg72W8KZMm7hp7KJhSickzLQtYaMtWzM3ZNWmJZLsO1I&rqlang=cn&rsv_enter=1&rsv_sug3=4&rsv_sug1=2&rsv_sug7=100";

function urlObj(str) {
    var obj = qs.parse(str) || {};
    return obj
}
// var obj = urlObj(str);
// console.log(obj);

function getConfig() {
    var urlstr = str.substring(1);
    var obj = qs.parse(urlstr) || {};
    console.log(obj);
    return obj
}
// getConfig();
function config(str) {
    var configstr = str.substring(1);
    var arr = configstr.split("&");
    var obj = {};
    arr.forEach(function(item) {
        var i = item.indexOf("=");
        var key = item.substring(0, i);
        var val = item.substring(i + 1);
        obj[key] = val;
    });
    console.log(obj)
}
config(str);