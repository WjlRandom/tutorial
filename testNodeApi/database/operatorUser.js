var db = require("./index.js");
const dataConfig = {
    database: "ceshi",
    collection: "user"
};
module.exports = {
    insertUser: function(config, callback) {
        var data = Object.assign(config, dataConfig);
        db.insertOne(data, callback);
    },
    queryUser(config, callback) {
        var data = Object.assign(config, dataConfig);
        db.query(data, callback);
    }
};