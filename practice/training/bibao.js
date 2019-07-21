var arr = [1, 2, [3, 4]];

function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}
// console.log(flatten(arr));

// var a = 10;
// (function(a) {
//   console.log(a);
//   a = 5;
//   console.log(a);
//   //   console.log(global.a);
//   var a = 20;
//   console.log(a);
// })(a);
var arr = [3, 15, 8, 29, 102, 22];

arr.sort(function(a, b) {
  return a > b;
});

var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
// console.log(a.x);
// console.log(b.x);

var obj = {
  1: 222,
  2: 100,
  5: 888
};
var arr = new Array(12);

var arr = [];
for (var i = 0; i < 12; i++) {
  arr[i] = obj[i + 1] ? obj[i + 1] : null;
}
// console.log(arr);

class Lazyman {
  constructor(...args) {
    this.init(...args);
  }
  init(name) {
    console.log("Hi,I am " + name);
    return this;
  }
  eat(dinner) {
    console.log("I am eating " + dinner);
    return this;
  }
}
// var lazyman = new Lazyman("Tom").eat("dinner");

var nums1 = [1, 2, 2];
var nums2 = [2, 2];

const intersect = (nums1, nums2) => {
  const map = {};
  const res = [];
  for (let n of nums1) {
    if (map[n]) {
      map[n]++;
    } else {
      map[n] = 1;
    }
  }
  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n);
      map[n]--;
    }
  }
  return res;
};
var temp = intersect(nums1, nums2);

let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 }
];

function convert(list) {
  var temp = {};
  list.forEach(function(item) {
    item.children = [];
    temp[item.id] = item;
  });
  list.forEach(item => {
    let pId = item.parentId;
    if (temp[pId]) {
      temp[pId].children.push(item);
    }
  });
  return temp;
}
let map = convert(list);
// console.log(map);

function int2str(num) {
  var arr = num
    .toString()
    .split("")
    .reverse();
  var result = arr.reduce(function(total, value) {
    return total + value;
  });
  return result;
}
int2str(1234);

function Foo() {
  Foo.a = function() {
    console.log(1);
  };
  this.a = function() {
    console.log(2);
  };
}
Foo.prototype.a = function() {
  console.log(3);
};
Foo.a = function() {
  console.log(4);
};
Foo.a();
var obj = new Foo();
obj.a();
Foo.a();

function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com";
  o = new Object();
  o.siteUrl = "http://www.google.com";
}
let webSite = new Object();
changeObjProperty(webSite);
// console.log(webSite.siteUrl);
