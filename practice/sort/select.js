function sort(arr) {
    var l = arr.length;
    var min = 0;
    for (var i = 0; i < l; i++) {
        min = arr[i];
        if (arr[i + 1] < min) {
            min = arr[i + 1];
        }
    }
    arr[0] = min;
    return arr;
}
var arr = [2, 4, 5, 1, 3]
var arr1 = sort(arr);
console.log(arr1)