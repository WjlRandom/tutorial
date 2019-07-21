function it() {
  var iterable = [1, 2];

  var iterator = iterable[Symbol.iterator]();

  console.log(iterator.next()); // => { value: "1", done: false}
  console.log(iterator.next()); // => { value: "2", done: false}
  console.log(iterator.next()); // => { value: undefined, done: true}
}

function it1() {
  var iterable = [1, 2];
  var iterator = iterable[Symbol.iterator]();
  while (true) {
    try {
      var result = iterator.next(); // <= 获取下一个值
    } catch (err) {
      console.log(err);
    }
    if (result.done) {
      console.log("done");
      break;
    }
    console.log(result.value);
  }
}
function iterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      console.log(nextIndex);
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    }
  };
}

// var g = iterator([1, 2, 3, 4]);

function* g(value) {
  yield value + 2;
  yield value;
}

// var b = 10;
// (function b() {
//   b = 20;
//   console.log(b);
// })();

// (function(win) {
//   console.log(win.b);
// })(window);

// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
//1
// function flatten(arr) {
//   return arr.reduce((result, item) => {
//     return result.concat(Array.isArray(item) ? flatten(item) : item);
//   }, []);
// }

//2
// function flatten(arr) {
//   return arr
//     .toString()
//     .split(",")
//     .map(function(item) {
//       return Number(item);
//     });
// }
// var a = flatten(arr);
// var tempArr = [1, 2, [3, 4]];
// console.log(tempArr.join());
// console.log([].concat(...arr));
