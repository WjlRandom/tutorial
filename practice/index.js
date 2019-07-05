var Event = require("./lib/event.js.js.js");

function Index() {
  this.init.apply(this, arguments);
}
Index.prototype = {
  init: function() {
    alert("aaaa");
  }
};
$.extend(Index.prototype, Event);

new Index();
