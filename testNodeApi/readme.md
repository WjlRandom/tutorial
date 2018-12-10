###项目创建
- 全局安装express生成器 npm install express-generator -g
- 执行 express --view=ejs testNodeApi 创建项目，其中testNodeApi为自定义项目名称
- 执行npm install创建依赖包

### 关于自定义node命令
- package.json中配置bin 
- 在bin 文件首行添加 #!/usr/bin/env node
- npm link
- 执行自定义命令

### 使用nodemon实现修改自动重启
- npm install nodemon --save-dev
- nodemon ../要启动的文件

###ejs模板中引用css js文件路径
- app.js中设置静态文件访问目录
- 在ejs中引用时候文件路径相对于设置的静态文件目录

###本地使用mangodb
- 