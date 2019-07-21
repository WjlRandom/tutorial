function* next_id() {
  let current_id = 0;
  while (true) {
    current_id++;
    yield current_id;
  }
}

let g = next_id();
console.log(g.next());
console.log(g.next());

for (var i = 0; i < 10; i++) {
  console.log(g.next().value);
}
