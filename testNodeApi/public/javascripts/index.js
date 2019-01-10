/* axios.get('/random/11/90')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    }); */

function Index() {
  this.init.apply(this, arguments);
}
Index.prototype = {
  init: function() {
    var _this = this;
    $(".submit").click(function() {
      _this.submitFn();
    });
    $(".query").click(function() {
      _this.query();
    });
    // this.test();
  },
  test: function() {
    axios
      .post("/saveUsers", {})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  submitFn: function() {
    var data = {
      name: $(".username").val(),
      url: $(".site").val()
    };
    axios
      .post("/saveUser", data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  query: function() {
    var name = $(".queryname").val();
    axios
      .get("/findUser?name=" + name)
      .then(function(response) {
        console.log(response);
        if (response.status == 200) {
          var list = response.data.result;
          list.forEach(function(item) {
            $(".list").append(`<div>${item.name}:${item.url}</div>`);
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
new Index();
