### 项目说明

- 1 组件说明

  落地页通用注册模块

- 2 使用步骤：

  (1) cnpm config set registry http://registry.shuqudata.com/

  (2) cnpm install @bairong/ldy-form --save

  (3) 在 js 文件中 import Form from @bairong/ldy-form

  (4) 页面初始化 new Form(config);

- 3 config 参数说明

  ele: 放置表单容器（任何 DOM 选择器）

  btnText: 提交表单的按钮文案内容

  isInputTitle: 是否添加输入框头部 默认 true

  items:输入框选项 (数组)

- 4 参考示例：

  ```
    let form =new Form({
        ele:".register",
        btnText:"注册",
        isinputTitle:false,
        items:[
            {
                name:"手机号",
                rel:"phone",
                props:{
                    masLength:11
                },
                rule:/^1[3-9][0-9]{9}$/g
            },
            {
                name:"验证码",
                rel:"smscode",
                props:{
                    id:"smscode"
                },
                rule:/^d{6}$/
            },
            {
                name:"密码",
                rel:"password",
                props:{
                    id:"password"
                }
            }
        ]
    })
  ```
