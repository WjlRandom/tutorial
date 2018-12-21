/**
 * 修改dist目录下的文件
 */
let fs = require("fs");
let path = require("path");
class WebpackRenamePlugin {
    apply(compiler) {
        compiler.hooks.done.tap(
            'WebpackRenamePlugin',
            (compilation, callback) => {
                let hash = compilation.hash;
                let distUrl = path.join(__dirname, "../dist");
                console.log("distUrl", distUrl)
                let files = fs.readdirSync(distUrl);
                files.forEach(function(file) {
                    let filePath = path.resolve(distUrl, file);
                    let stat = fs.statSync(filePath);
                    if (stat.isFile()) {
                        fs.renameSync(filePath, filePath + "?v=" + hash)
                    }
                });
            }
        );
    }
}
module.exports = WebpackRenamePlugin;