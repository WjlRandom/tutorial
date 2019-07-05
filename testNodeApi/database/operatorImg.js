var db = require("./index.js");
const dataConfig = {
    database: "ceshi",
    collection: "img"
};
module.exports = {
    insertImg: function(config, callback) {
        var data = Object.assign(config, dataConfig);
        db.insertOne(data, callback);
    },
    queryImg(config, callback) {
        var data = Object.assign(config, dataConfig);
        db.query(data, callback);
    }
};