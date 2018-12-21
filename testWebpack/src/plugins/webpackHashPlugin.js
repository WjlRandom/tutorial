/**
 * 打包HTML文件
 */
let fs = require("fs");
let path = require("path");
let cheerio = require("cheerio");
let desDir = path.join(__dirname, "../dist")
class WebpackHashPlugin {
    apply(compiler) {
        let _this = this;
        compiler.hooks.done.tap(
            'WebpackHashPlugin',
            (compilation, callback) => {
                let hash = compilation.hash;
                // let hash = new Date().getTime();
                console.log(hash);
                let viewsUrl = path.join(__dirname, "../pages");
                _this.readFileFn(viewsUrl, hash)
            }
        );
    }
    readFileFn(dir, hash) {
        let files = fs.readdirSync(dir);
        files.forEach(function(file) {
            let filePath = path.resolve(dir, file);
            let stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                readFileFn(filePath, hash);
            }
            if (stat.isFile()) {
                var data = fs.readFileSync(filePath, {
                    encoding: "utf-8"
                });
                data = data.replace("@hash", hash);
                let testPath = path.join(desDir, file);

                fs.writeFileSync(testPath, data);
            }
        });
    }
}
module.exports = WebpackHashPlugin;