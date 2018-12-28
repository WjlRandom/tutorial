var path = require("path");
var fs = require("fs");
var entry = {};

function getEntry(url) {
    var files = fs.readdirSync(url);
    files.forEach(function(file) {
        var filePath = path.join(url, file);
        var stat = file.statSync(filePath);
        if (stat.isDirectory()) {
            getEntry(filePath);
        }
        if (stat.isFile()) {
            entry[file] = filePath
        }
    })
    return entry;
}

export default getEntry;