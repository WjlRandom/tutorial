##关于本项目的说明
###1 技术栈：webpack-dev-server+webpack+ejs+zepto

- webpack-dev-server 用来创建本地开发服务器
- webpack 用来对 ejs ES6 等浏览器不认识的语法进行转换打包
- ejs 模板 用来渲染数据到 HTML 页面
- zepto 在涉及到 dom 操作等事件的触发，元素的选择的时候使用，类似于 jquery 只不过 zepto 更轻量，更适用于移动端
  ###2 前端开发准备
- （1）安装 node 环境
- 首先在本机安装 node 环境并且配置 node 环境变量 参考如下链接
- https://blog.csdn.net/m0_37896739/article/details/83545890 -（2）在项目根目录下 终端执行 npm install
- (3) 在项目根目录下 终端执行 npm run build
- (4) 在项目根目录下 终端执行 npm run dev 启动本地服务，在浏览器打开http://localhost:8080/查看首页效果
  ###3 注意事项
- node_modules 最好不要提交到 SVN 或者 Git，第一次运行时执行 npm install 初始化 node_nodules

###4 目录结构说明

- node_modules node 相关依赖，因为文件夹内存较大，所以不需要上传到 Git 或者 SVN,在本地开发的时候通过在项目目录执行 npm install 创建
- src 放置所有前端业务代码目录

  - assets 页面 js css 文件放置
  - components 放置组件文件
  - dist webpack 打包后存放打包文件的目录
  - public 放置公共的 js css img 文件或依赖
  - routes 放置请求接口文件
  - views 前端页面

- test 用于放置自己的测试代码，可以根据个人需要来放置，对业务不产生任何影响
- package.json 前端依赖配置文件，其中包括启动 打包操作的配置
- webpack.config.js 本项目的核心文件使用 webpack 的配置文件，本项目中该文件必须放置在根目录下

###5 关于本地服务路径的配置说明

- 在 webpack.config.js 中配置 devServer 中 host 字段
- host ：192.168.10.193 , 其中 192.168.10.193 为本机地址，不配置默认为 localhost

###6 忽略文件

- node_modules

###7 删除生成旧的文件 npm install rimraf –save-dev

- 参考 https://blog.csdn.net/alanfancy/article/details/64444558
- webpack4 https://www.cnblogs.com/helloluckworld/p/9837088.html

###8 接口文档地址
https://github.com/gongmb/gxmr/blob/master/README_WEB.md

###9 关于组件之间传递数据

- 本项目使用自定义事件进行组件之间数据传递，这样有利于组件的复用，自定义文件为 lib 目录中的 event.js 文件
- 具体使用方式：
  子组件 Form 父组件 Page
  （1）在需要使用事件的触发的子组件中 import Event from '@public/lib/event'；
  添加 Object.assign(Index.prototype,Event)代码，为子组件添加事件监听方法 注：Index 为子组件的类；
  在子组件中需要触发事件的地方使用 this.trigger("事件名称 例：submitSuccess"，{
  这里放置需要传递的父组件的数据
  })触发事件，this 指向当前子组件

（2）在父组件中监听子组件传递的数据: - 在父组件中 先使用 var form= new Form（）创建子组件实例 form; - 使用 form.on("子组件触发的事件名"，function(res){
res 为传递的数据对象
}) 监听事件

###10 修改 下载仓库为淘宝镜像（cnpm 安装）
1 npm config set registry https://registry.npm.taobao.org --global

npm config set disturl https://npm.taobao.org/dist --global

2, 如果要发布自己的镜像需要修改回来

npm config set registry https://registry.npmjs.org/

3,  安装 cnpm

npm install -g cnpm --registry=https://registry.npm.taobao.org

4，查看当前地址

npm config list
