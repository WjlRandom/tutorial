 var fs = require("fs");
 var path = require("path")
 var rootdir = path.join(__dirname, '../pages');
 var obj = {};
 getFile(rootdir);
 console.log("obj", obj);

 function getFile(dir) {
     var files = fs.readdirSync(dir);
     files.forEach(function(filename) {
         var filepath = path.join(dir, filename);
         var stats = fs.statSync(filepath);
         var isFile = stats.isFile();
         var isDir = stats.isDirectory();
         if (isFile && filepath.indexOf("index.js") > -1) {
             var key = filepath.replace(rootdir, "").replace(".js", "");
             var value = filepath;
             obj[key] = value;
         }
         if (isDir) {
             getFile(filepath);
         }
     })
 }