var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";
var res = null;
module.exports = {
    insertOne: function(obj) {
        MongoClient.connect(dbUrl, function(err, db) {
            if (err) throw err;
            var dbo = db.db("ceshi");
            dbo.collection('site').insertOne(obj, function(err, res) {
                if (err) throw err;
                console.log("文档插入成功");
                db.close();
            });
        });
    },
    insert: function(collection, data) {
        MongoClient.connect(dbUrl, function(err, db) {
            if (err) throw err;
            var dbo = db.db("ceshi");
            dbo.collection(collection).insert(data, function(err, res) {
                if (err) throw err;
                console.log("文档插入成功");
                db.close();
            });
        });
    },
    find: function(obj, callback) {
        var _this = this;
        console.log("查询条件", obj)
        MongoClient.connect(dbUrl, function(err, db) {
            if (err) throw err;
            var dbo = db.db("ceshi");
            dbo.collection("site").find(obj).toArray(function(err, result) {
                if (err) throw err;
                callback(result);
                db.close();
            });
        });
    },
}