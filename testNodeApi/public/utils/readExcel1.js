var node_xls = require("xls-to-json");
var fs = require("fs");

module.exports = function(filePath) {
    node_xls({
            input: filePath, // input xls
            output: "./public/output.json" // output json
                //sheet: "sheetname", // specific sheetname
                //rowsToSkip: 5 // number of rows to skip at the top of the sheet; defaults to 0
        },
        function(err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(result);
            }
        }
    );
    console.log("读取完成");
};