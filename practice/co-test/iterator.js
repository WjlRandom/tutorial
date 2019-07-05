/**
 * ES5迭代器实现
 */
function selfIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true }
        }
    }
}
var arr = ["www", "aaa", "bbb"];
var it = selfIterator(arr);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

/**
 * ES6迭代器实现
 */
let arr1 = ['a', 'b', 'c'];
let iter = arr1[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());