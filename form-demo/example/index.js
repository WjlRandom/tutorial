import "../lib/zepto.min";
import Form from "../src/index.js";

class Register {
    constructor() {
        this.init();
        this.events();
    }
    init() {
        this.form = new Form({
            ele: ".register",
            btnText: "注册",
            isInputTitle: false,
            items: [{
                    name: "手机号",
                    rel: "phone",
                    props: {
                        maxLength: 11
                    },
                    type: "tel",
                    rule: /^1[3-9][0-9]{9}$/g,
                },

                {
                    name: "验证码",
                    rel: "captcha",
                    props: {
                        maxLength: 4
                    },
                    rule: /^\d{4}$/g,
                },
                {
                    name: "密码",
                    type: "password",
                    rel: "password",
                    props: {
                        placeholder: "请输入6-12位密码",
                    },
                },
                // {
                //     name: "性别",
                //     type: "radio",
                //     rel: "sex",
                //     props: {
                //         class: "radio",
                //     },
                //     options: [{
                //         value: 1
                //     }, {
                //         value: 2
                //     }, {
                //         value: 3
                //     }]
                // },
                // {
                //     name: "地址",
                //     el: "select",
                //     rel: "address",
                //     options: [{
                //         value: "010",
                //         text: "北京"
                //     }, {
                //         value: "020",
                //         text: "上海"
                //     }, {
                //         value: "021",
                //         text: "广州"
                //     }]
                // }
            ]
        })
        this.form.on("submit", () => {
            let result = this.form.checkAll();
            console.log(result);
        });
        this.form.on("codeClick", (res) => {
            console.log(res);
            if (res) {
                this.form.countDown({
                    count: 10
                });
            }
        });
        this.form.on("errorTip", (res) => {
            console.log(res);
            alert(res.msg);
        });
        this.form.on("inputKeyup", (res) => {
            console.log(res);
        });
        this.form.on("inputClick", (res) => {
            console.log(res);
        })
    }
    events() {

    }
}

new Register();