/**
 * 初始化删除dist目录下的文件
 */
let fs = require("fs");
let path = require("path");
class WebpackInitPlugin {
    constructor(config) {
        this.dir = config;
    }
    apply(compiler) {
        let _this = this;
        compiler.hooks.emit.tap(
            'WebpackInitPlugin',
            (compilation, callback) => {
                _this.deleteFileFn(this.dir);

            }
        );
    }
    deleteFileFn(dir) {
        let files = fs.readdirSync(dir);
        files.forEach((file) => {
            let filePath = path.resolve(dir, file);
            let stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                this.deleteFileFn(filePath);
            }
            if (stat.isFile()) {
                fs.unlinkSync(filePath);
            }
        });
        fs.rmdirSync(dir);
    }
}
module.exports = WebpackInitPlugin;