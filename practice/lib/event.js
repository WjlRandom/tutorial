function Event() {
    this.handles = {}
}
Event.prototype = {
    on: function(handle, callback) {
        if (!handles[handle]) {
            handles[handle] = callback;
        }
    },
    emit: function(handle) {
        if (handles[handle]) {
            var callback = handles[handle];
            var args = Array.prototype.slice.call(arguments, 1);
            callback(args);
        }
    }
}
module.exports = Event;