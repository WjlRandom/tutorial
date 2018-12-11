class WebpackInitPlugin {
    // 定义 `apply` 方法
    apply(compiler) {
        // 指定要追加的事件钩子函数
        compiler.hooks.done.tap(
            'WebpackInitPlugin',
            (compilation, callback) => {
                console.log('This is an example plugin!');
                // console.log(compilation.assets);
            }
        );
    }
}
module.exports = WebpackInitPlugin;