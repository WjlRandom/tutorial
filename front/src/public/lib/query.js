/*
 * 查询URL参数
 */
const qs = require("querystring");

export default {
    queryObj() {
        let search = window.location.search.substring(1);
        return qs.parse(search);
    },
    query(queryname) {
        let queryObj = this.queryObj();
        if (queryObj[queryname]) {
            return queryObj[queryname];
        }
        return null
    }
}