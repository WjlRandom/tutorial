import "./index.less";
import Event from "../lib/events";
class Index {
    constructor(config) {
        this.data = config;
        this.ele = document.querySelector(config.ele);
        this.items = config.items;
        this.render(this.items);
        this.bind();
    }
    render(list) { //渲染表单
        let formWrap = document.createElement("div");
        formWrap.setAttribute("class", "ldy-form");
        this.ele.append(formWrap);
        list.forEach((item, index) => {
            let el = item.el ? item.el : "input";
            let formItem = document.createElement("div");
            formItem.setAttribute("class", "form-item");
            item.props = item.props || {};
            //添加输入区域
            let formInput = document.createElement("div");
            formInput.setAttribute("class", "item-input");
            formItem.append(formInput);
            if (this.data.isInputTitle) {
                this.renderInputTitle(formItem, item);
            }
            if (el == "input") {
                if (item.type == "radio") { //单选、多选
                    this.renderRadio(formInput, item);
                } else { //文字输入
                    this.renderInput(formInput, item); //渲染输入框
                }
            }
            if (el == "select") { //下拉框
                this.renderSelect(formInput, item)
            }

            if (item.rel == "captcha") { //短信验证码按钮
                let btn = document.createElement("button");
                btn.setAttribute("class", "item-btn");
                btn.setAttribute("id", "captchaBtn");
                btn.innerHTML = "获取验证码";
                formItem.append(btn);
            }
            formWrap.append(formItem);
        })
        let submitBtn = document.createElement("div");
        submitBtn.setAttribute("class", "form-submit");
        submitBtn.innerHTML = `<button class="submit-btn">${this.data.btnText}</button></div>`;
        formWrap.append(submitBtn);
    }
    renderInputTitle(wrap, item) {
        //添加输入头部
        let span = document.createElement("span");
        span.setAttribute("class", "item-rel");
        span.innerHTML = `${item.name}`;
        wrap.prepend(span);
    }
    renderInput(wrap, item) { //输入框
        let inputItem = document.createElement("input");
        inputItem.id = item.rel ? item.rel : "";
        inputItem.type = item.type ? item.type : "text";
        inputItem.setAttribute("class", "in");
        Object.assign(item.props, {
            placeholder: item.props.placeholder ? item.props.placeholder : `请输入${item.name}`
        })
        this.setProps(inputItem, item.props);
        wrap.append(inputItem);
    }
    renderRadio(wrap, item) { //单选框
        item.options.forEach((option, index) => {
            let radioItem = document.createElement("input");
            radioItem.setAttribute("type", "radio");
            radioItem.setAttribute("name", item.rel);
            radioItem.setAttribute("id", `${item.rel}-${index}`);
            this.setProps(radioItem, option);
            wrap.append(radioItem);
        })
    }
    renderSelect(wrap, item) { //下拉框
        let selOptions = "";
        let select = document.createElement("select");
        select.id = item.rel ? item.rel : "";
        select.setAttribute("class", "sel");
        if (item.options) {
            for (let key in item.options) {
                let text = item.options[key].text ? item.options[key].text : item.options[key].value;
                selOptions += `<option value="${item.options[key].value}">${text}</option>`
            }
            select.innerHTML = selOptions;
        };
        wrap.append(select);
    }
    setProps(target, props) { //设置属性
        for (let key in props) {
            target.setAttribute(key, props[key]);
        }
    }
    bind() { //绑定事件
        document.querySelector(".submit-btn") && document.querySelector(".submit-btn").addEventListener("click", () => { //表单提交
            this.trigger("submit");
        });
        document.querySelector("#captchaBtn") && document.querySelector("#captchaBtn").addEventListener("click", () => { //发送验证码
            let checkItems = this.items.filter((item) => {
                return item.rel == "phone"
            })
            if (checkItems.length > 0) {
                let result = this.checkSingle(checkItems[0]);
                this.trigger("codeClick", result);
            } else {
                throw new Error("没有手机号可校验")
            }

        });
        document.addEventListener("keyup", (e) => {
            if (e.target.className == "in") {
                this.trigger("inputKeyup", e)
            }
        });
        document.addEventListener("click", (e) => {
            if (e.target.className == "in") {
                this.trigger("inputClick", e)
            }
        });
    }

    checkAll() { //校验全部输入框
        let L = this.items.length;
        let temp = {};
        for (let i = 0; i < L; i++) {
            let v = this.checkSingle(this.items[i]);
            if (!v) {
                return false;
                break;
            }
            temp[this.items[i].rel] = v;
        }
        return temp;
    }
    checkRequired() {
        let requiredItems = this.items.filter((item) => {
            return item.required == true;
        });
        let L = requiredItems.length;
        let temp = {};
        for (let i = 0; i < L; i++) {
            let v = this.checkSingle(this.items[i]);
            if (!v) {
                break;
            }
            temp[this.items[i].rel] = v;
        }
        return temp;
    }
    checkSingle(singleItem) {
        let value = "";
        switch (singleItem.type) {
            case "radio":
                let radioChecked = document.querySelector(`input[name=${singleItem.rel}]:checked`);
                value = radioChecked ? radioChecked.value : "";
                break;
            default:
                value = document.querySelector(`#${singleItem.rel}`).value;
                break;
        }
        if (!value) {
            this.trigger("errorTip", {
                rel: `${singleItem.rel}`,
                itemName: `${singleItem.name}`,
                msg: `${singleItem.name}不能为空`
            });
            return false;
        }
        if (singleItem.rule != undefined && !new RegExp(singleItem.rule).test(value)) {
            this.trigger("errorTip", {
                rel: `${singleItem.rel}`,
                itemName: `${singleItem.name}`,
                msg: `请输入正确的${singleItem.name}`
            });
            return false;
        }
        return value;
    }

    countDown(options) { //倒计时
        let btn = document.querySelector(".item-btn");
        let second = options.count;
        let timer = setInterval(() => {
            second--;
            if (second < 1) {
                clearInterval(timer);
                btn.innerHTML = "重新获取";
                btn.removeAttribute("disabled");
                btn.removeClass("btn-disabled");
            } else {
                btn.innerHTML = `${second}s`;
                btn.setAttribute("disabled", "disabled"); //不可点击
                btn.addClass("btn-disabled");
            }
        }, 1000);
    }
}
Object.assign(Index.prototype, Event);
export default Index;