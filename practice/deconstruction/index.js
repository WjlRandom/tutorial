//数组解构
function testArr() {
    let students = ["zhangsan", "lisi", "wangwu"]
    let [a, b, c] = students;
    console.log(a);
    console.log(b);
}

function testObj() {
    let obj = {
        name: "weijinlong",
        age: 99
    }
    let { name, age } = obj;
    console.log(name);
    console.log(age);
}
testObj();