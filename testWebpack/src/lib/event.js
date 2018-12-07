module.exports = {
    handles: {},
    on: function(handle, callback) {
        if (!this.handles[handle]) {
            this.handles[handle] = callback;
        }
    },
    emit: function(handle) {
        if (this.handles[handle]) {
            var callback = this.handles[handle];
            var args = Array.prototype.slice.call(arguments, 1);
            callback(args);
        }
    },
    off: function(handle) {
        if (this.handles[handle]) {
            delete this.handles[handle]
        }
    }
};