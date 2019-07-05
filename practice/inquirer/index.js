const inquirer = require('inquirer');

var promptList = [{
    type: 'input',
    message: '设置一个用户名:',
    name: 'name',
    default: "test_user" // 默认值
}, {
    type: 'input',
    message: '请输入手机号:',
    name: 'phone',
}, {
    type: 'rawlist',
    message: '请选择一种水果:',
    name: 'fruit',
    choices: [
        "Apple",
        "Pear",
        "Banana"
    ],
}];

var ques1 = {
    type: 'input',
    message: '设置一个用户名:',
    name: 'name',
    default: "test_user" // 默认值
}
var ques2 = {
    type: 'input',
    message: '请输入手机号:',
    name: 'phone',
    default: "13522774939" // 默认值
}
inquirer.prompt(promptList).then((answers) => {
        console.log(answers); // 返回的结果
    })
    .then((res) => {
        inquirer.prompt(ques2).then(answers => {
            console.log(answers);
        })
    })