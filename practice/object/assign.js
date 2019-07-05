function arrayAssign() {
    var arr1 = [1, 2, 3, 4];
    var arr2 = [8, 9];
    var arr = Object.assign(arr1, arr2);
    console.log(arr); //数组对应的index做替换
    console.log(arr1 == arr);
    console.log(arr2);
}

function objectAssign() {
    var obj1 = {
        name: "www",
        age: 11
    };
    var obj2 = {
        name: "qqq",
        school: "aaa"
    };
    var obj = Object.assign(obj1, obj2);
    console.log(obj); //对象对应的属性值做替换做替换
    console.log(obj1 == obj);
    console.log(obj2);
}
// arrayAssign();
objectAssign();