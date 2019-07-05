var express = require("express");
var app = new express();
class Server {
    constructor() {

    }
    register() {
        app.post("/register", function(req, res) {
            console.log(req.path);
        })
    }
}

export default Server