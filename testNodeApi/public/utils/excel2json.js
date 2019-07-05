var xl = require("xlsx");

module.exports = function(filePath) {
    //workbook 对象，指的是整份 Excel 文档
    var workbook = xl.readFile(filePath);
    var SheetNames = workbook.SheetNames; //获得sheet的名称
    var temp = {};
    SheetNames.forEach(function(value) {
        var sheetName = value;
        var sheetData = workbook.Sheets[sheetName];
        temp[sheetName] = [];
        var data = xl.utils.sheet_to_json(sheetData);
        data.forEach(function(item) {
            temp[sheetName].push(item);
        });
    });
    return temp;
};