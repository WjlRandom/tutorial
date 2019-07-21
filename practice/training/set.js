const s = new Set([2, 3, 5, 4, 5, 2, 2]);
const arr = Array.from(s);
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
console.log(s);
console.log(arr);

const map = new Map();

map.set("name", "hello");
console.log(map.get("name"));
