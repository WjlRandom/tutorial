var path = require("path");
var gitTools = require("git-tools");
var instance = new gitTools(path.resolve(process.cwd(), "gitDes"));

function clone() {
    console.log(path.resolve(process.cwd()));
    gitTools.clone({
        repo: "http://gitlab.100credit.cn/fed/rongshuweb.git",
        dir: path.resolve(process.cwd(), "gitDes")
    }, function(error, repo) {
        console.log(repo)
    })
}
// clone();
function isRepo() {
    gitTools.isRepo(path.resolve(process.cwd()), function(a, result) {
        console.log(result);
    });
}

function age() {
    instance.age(function(error, age) {
        console.log(age)
    })
}

function currentBranch() {
    instance.currentBranch(function(error, res) {
        console.log(res)
    })
}

function remotes() {
    instance.remotes(function(error, remotes) {
        console.log(remotes);
    })
}

function tags() {
    instance.tags(function(error, tags) {
        console.log(tags)
    })
}
tags();