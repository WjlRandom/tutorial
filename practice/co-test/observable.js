var Rx = require("rx");
var RxJs = require("rxjs");

function a() {
    class DataSource {
        constructor() {
            let i = 0;
            this._id = setInterval(() => this.emit(i++), 200); // 创建定时器
        }

        emit(n) {
            const limit = 10; // 设置数据上限值
            if (this.ondata) {
                this.ondata(n);
            }
            if (n === limit) {
                if (this.oncomplete) {
                    this.oncomplete();
                }
                this.destroy();
            }
        }

        destroy() { // 清除定时器
            clearInterval(this._id);
        }
    }

    function myObservable(observer) {
        let datasource = new DataSource(); // 创建数据源
        datasource.ondata = (e) => observer.next(e); // 处理数据流
        datasource.onerror = (err) => observer.error(err); // 处理异常
        datasource.oncomplete = () => observer.complete(); // 处理数据流终止
        return () => { // 返回一个函数用于，销毁数据源
            datasource.destroy();
        };
    }
    const unsub = myObservable({
        next(x) { console.log(x); },
        error(err) { console.error(err); },
        complete() { console.log('done') }
    });
}

function b() {
    //观察者模式基本实现
    var observer = {
        next(value) {
            console.log("收到" + value);
        },
    };

    function observable(observer) {
        observer.next("aaa")
    }
    observable(observer)
}
// b();

function c() {
    //观察者模式+迭代器模式基本实现
    var observer = {
        next(value) {
            console.log("收到" + value);
        },
        error(error) {
            console.log(error);
        },
        complete() {
            console.log("complete")
        }
    }

    function observable(observer) {
        try {
            [1, 2, 3].map((item) => {
                observer.next(item);
            })
        } catch (err) {
            observer.error(err);
        }
        observer.complete();
    }
    observable(observer);
}
// c();

function d() {
    //使用RX内部创建observable
    var observable = Rx.Observable.create((observer) => {
        [3, 4, 5].map(item => {
            observer.next(item);
        })
        observer.completed();
        return () => {
            console.log("disposed")
        }
    })
    var observer = Rx.Observer.create(
        x => {
            console.log(x);
        },
        err => {
            console.log(err);
        },
        () => {
            console.log("complete");
        }
    );
    // var subscription = observable.subscribe(observer);
    //链式写法
    // Rx.Observable.of(2, 8, 9).subscribe(v => console.log(v));
    Rx.Observable.from([1, 2, 3]).subscribe(v => console.log(v));
    // Rx.Observable.of(2)
    //     .map(v => v * 2) /* <= */
    //     .subscribe(v => console.log(v));
}
d();

function e() {
    //外部创建observable
    var observable = new RxJs.Subject();
    observable.subscribe(v => {
        console.log(v);
    })
    observable.next(1);
    observable.next(3);
}

function f() {
    //外部创建observable
    var observable = new Rx.Subject();
    observable.subscribe(v => {
        console.log(v);
    })
    observable.onNext(4);
    observable.onNext(5);
}

// f();