function popFn() { //改变原数组
    var arr = [1, 2, 3, 4, 5, 6];
    var popData = arr.pop();
    console.log(popData);
    console.log(arr);
}

function pushFn() {
    var arr = [1, 2, 3, 4, 5, 6]
    var pushData = arr.push(99);
    console.log(pushData); //返回数组长度
    console.log(arr); //改变原数组
}

function shiftFn() {
    var arr = [22, 2, 3, 4, 5, 6]
    var shiftData = arr.shift();
    console.log(shiftData); //返回选出的数据
    console.log(arr); //改变原数组
}

function unshiftFn() {
    var arr = [22, 2, 3, 4, 5, 6]
    var unshiftData = arr.unshift("aaa");
    console.log(unshiftData); //返回数组长度
    console.log(arr); //改变原数组
}