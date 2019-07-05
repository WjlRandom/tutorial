var co = require("./co.js");

var value = co(function*() {
    var a = yield getA();
    var b = yield Promise.resolve(22222);
    var c = yield Promise.resolve("dffsff");
    // return a;
})
value.then(function(res) {
    console.log("==========");
    console.log(res)
})

function getA() {
    return { val: 11111 };
}