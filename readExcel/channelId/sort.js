var array = [1, 2, 6, 3, 5, 0];
var array1 = [{
    id: "1",
    name: "aaa"
}, {
    id: "5",
    name: "bbb"
}, {
    id: "3",
    name: "ccc"
}]

function sortJson() {
    array1.sort(function(a, b) {
        return a.id - b.id;
    })
    console.log(array1);
}
sortJson();