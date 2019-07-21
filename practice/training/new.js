/**
 * 模拟 new 的实现步骤
 */

function Person() {
  this.name = "www";
}
Person.prototype.age = 111;

function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}

var person = _new(Person);
console.log(person.name);
console.log(person.age);
