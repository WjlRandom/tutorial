// let GitTools = require("git-tools");
// let Repo = new GitTools(process.cwd());

var Repo = require("git-tools");

Repo.clone(
  {
    repo: "http://gitlab.100credit.cn/fed/rongshuweb.git",
    dir: "../tmp/"
  },
  function(error, repo) {
    console.log(repo);
  }
);
// repo.isRepo("https://github.com/scottgonzalez/node-git-tools.git", function(
//   error,
//   isRepo
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("isRepo", isRepo);
//   }
// });
// class Index {
//   constructor() {
//     this.clone();
//   }
//   clone() {
//     Repo.clone(
//       {
//         repo: "http://gitlab.100credit.cn/fed/rongshuweb.git",
//         dir: "/tmp/git-tools",
//         bare: true
//       },
//       (error, repo) => {
//         console.log(error);
//       }
//     );
//   }
// }
// new Index();
