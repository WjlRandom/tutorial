//nodejs events module

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

var myEmitter = new MyEmitter();

myEmitter.on("event", function(res) {
    console.log(this);
    console.log("触发事件");
    debugger
    console.log(res);
})
myEmitter.emit("event", {
    name: "sffd"
});