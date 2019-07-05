var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

module.exports = {
    insertOne: function(options, callback) {
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db(options.database);
            var obj = options.data;
            dbo.collection(options.collection).insertOne(obj, function(err, res) {
                if (err) throw err;
                if (callback && "function" == typeof callback) {
                    callback();
                }
                db.close();
            });
        });
    },
    query: function(options, callback) {
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db(options.database);
            dbo
                .collection(options.collection)
                .find(options.queryObj)
                .toArray(function(err, result) {
                    // 返回集合中所有数据
                    if (err) throw err;
                    if (callback && "function" == typeof callback) {
                        callback(result);
                    }
                    db.close();
                });
        });
    }
};