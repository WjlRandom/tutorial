function Event() {
    this.events = {};
}
$.extend(Event, {
    on: function(event, handle) {
        if (!this.events[event]) {
            this.events[event] = handle;
        }
    },
    trigger: function(event) {
        var args = Array.prototype.slice.call(arguments, 1);
        console.log("args", args);
        var handle = this.events[event];
        if (handle && typeof handle == "function") {
            handle(args);
        }
    },
    off: function(event) {
        if (this.events[event]) {
            delete this.events[event];
        }
    }
})
module.exports = Event;