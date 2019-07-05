var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

function create() {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    //console.log("数据库已创建");
    // console.log(db)
    var dbbase = db.db("ceshi");
    // var dbbase = db;
    dbbase.createCollection("site", function(err, res) {
      //创建集合
      if (err) throw err;
      console.log("创建集合");
      // console.log(res)
    });
    var obj = { name: "魏晋龙", url: "www.baidu.com" };
    dbbase.collection("site").insertOne(obj, function(err, res) {
      //插入单条数据
      if (err) throw err;
      console.log("文档插入成功" + res);
    });
    var arr = [
      { name: "zhangsan", url: "aaaaa.com" },
      { name: "lisi", url: "bbbb.com" }
    ];
    dbbase.collection("site").insertMany(arr, function(err, res) {
      //插入多条数据
      if (err) throw err;
      console.log("插入文档数量" + res.insertedCount);
      db.close();
    });
    var query = {};
    dbbase.collection("site").find(options, function(err, res) {
      //插入多条数据
      if (err) throw err;
      console.log("插入文档数量" + res.insertedCount);
      db.close();
    });
  });
}

function findByOptions() {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbbase = db.db("ceshi");
    var query = { name: "xxx" };
    dbbase
      .collection("site")
      .find(query)
      .toArray(function(err, res) {
        //根据条件查询
        if (err) throw err;
        console.log(res);
        db.close();
      });
  });
}
//findByOptions();

function updateData() {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbbase = db.db("ceshi");
    var query = { name: "xxx" };
    var replace = { $set: { url: "www.100credit.com" } };
    dbbase.collection("site").updateMany(query, replace, function(err, res) {
      //更新单条数据
      if (err) throw err;
      console.log("文档更新成功");
      db.close();
    });
  });
}
//updateData();
function insertData() {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbbase = db.db("ceshi");
    var obj = { name: "张三三", url: "www.Sina.com" };
    dbbase.collection("site").insertOne(obj, function(err, res) {
      //插入单条数据
      if (err) throw err;
      console.log("文档插入成功" + res);
      db.close();
    });
  });
}
insertData();
