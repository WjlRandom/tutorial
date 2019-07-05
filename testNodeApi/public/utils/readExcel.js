var xlsx = require("node-xlsx");
var fs = require("fs");

module.exports = function(filePath) {
    var sheets = xlsx.parse(filePath); //获取到所有sheets
    var temp = {};
    sheets.forEach(function(sheet) {
        var sheetName = sheet["name"];
        temp[sheetName] = [];
        for (var rowId in sheet["data"]) {
            var itemObj = {};
            let row = sheet["data"][rowId];
            for (var i in row) {
                itemObj[i] = row[i] ? row[i] : "";
            }
            temp[sheetName].push(itemObj);
        }
    });
    // fs.writeFileSync("./public/data.json", JSON.stringify(temp), "utf8");
    console.log("读取完成");
    return temp;
};