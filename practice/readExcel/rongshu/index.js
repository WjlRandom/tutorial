var xl = require("xlsx");
var path = require("path");
var fs = require("fs");

function getExcelData() {
    //workbook 对象，指的是整份 Excel 文档。我们在使用 js-xlsx 读取 Excel 文档之后就会获得 workbook 对象。
    var workbook = xl.readFile(path.join(__dirname, "data.xlsx"));
    var SheetNames = workbook.SheetNames; //获得sheet的名称
    var temp = [];
    SheetNames.forEach(function(value) {
        var sheetName = value;
        var sheetData = workbook.Sheets[sheetName];
        var data = xl.utils.sheet_to_json(sheetData);
        data.forEach(function(item) {
            let id = item["转化ID"] ? item["转化ID"] : "";
            let apkName = item["渠道包"] ? item["渠道包"] : item["渠道id"];
            let channel = item["渠道id"] ? item["渠道id"] : "";
            temp.push({
                channel: channel,
                apkName: apkName,
                id: id
            });
        });
    });
    var obj = {
        apkVersion: "v3.6.0",
        channelList: temp
    };
    fs.writeFileSync("exceldata.json", JSON.stringify(obj), "utf8");
    console.log("完成");
}
getExcelData();