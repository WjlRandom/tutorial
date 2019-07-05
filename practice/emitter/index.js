//事件的绑定和触发基本原理
function Emitter() {
    this._listener = {};
}
Emitter.prototype.bind = function(eventName, callback) {
    var listener = this._listener[eventName] || [];
    listener.push(callback);
    this._listener[eventName] = listener;
    return this;
}

Emitter.prototype.trigger = function(eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    var listener = this._listener[eventName];
    if (!Array.isArray(listener)) {
        return;
    }
    listener.forEach(function(callback) {
        try {
            callback.apply(this, args);
        } catch (e) {
            console.error(e)
        }
    })
    console.log(this._listener);
    return this;
}
var emitter = new Emitter();

emitter.bind("aaa", function(args1, args2) {
    console.log(args1);
    console.log(args2);
})
emitter.trigger("aaa", "sdfd", "bsfd");