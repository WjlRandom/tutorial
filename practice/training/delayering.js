/**
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 */
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
var temp = [];
function delayering(arr) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      delayering(item);
    } else {
      temp.push(item);
    }
  });
}

function arrToStr(arr) {
  var arrStr = arr.toString(arr);
  arrStr.replace(/\[|\]/, "");
  var temp = arrStr.split(",");
  console.log(temp);
}
function reduceArr(arr) {
  arr.reduce(function(total, current) {});
}
