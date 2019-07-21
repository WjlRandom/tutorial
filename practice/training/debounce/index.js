/* 
防抖和节流是为了解决持续触发事件时候频繁的执行函数
防抖和节流的实现
*/
// 防抖
function debounce(fn, wait) {
  var timeout = null;
  return function() {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}
// 处理函数
function handle() {
  console.log(Math.random());
}
// 滚动事件
// window.addEventListener("scroll", debounce(handle, 1000));

//节流
var timer = null;
window.addEventListener("scroll", function() {
  if (timer == null) {
    timer = setTimeout(function() {
      console.log("scroll");
      timer = null;
    }, 2000);
  }
});
