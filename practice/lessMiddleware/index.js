// var lessMiddleware = require("less-middleware");
// var express = require("express");
// var app = express()
// app.use(lessMiddleware(__dirname, {
//     preprocess: {
//         path: function(pathname, req) {
//             var _path = path.join(__dirname, '../public');
//             return _path
//         },
//         less: function() {

//         }
//     },
//     //dest: path.join(process.cwd()),
//     debug: true
// }))

var lessMiddleware = require('less-middleware');
var express = require("express");
var app = express();
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));