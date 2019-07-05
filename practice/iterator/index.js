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
            console.log(err)
        }
        if (result.done) {
            console.log("done");
            break;
        }
        console.log(result.value);
    }
}
it1();