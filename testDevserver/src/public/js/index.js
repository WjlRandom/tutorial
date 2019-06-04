import common from "./common.js.js";
import moduleJs from "../../components/c1.js";
class Index {
  constructor() {
    this.msg = "hello world www";
    moduleJs();
    alert(this.msg);
    common();
    this.init();
  }
  init() {
    console.log("init");
    $.ajax({
      url: "http://127.0.0.1:3000/random/1/9",
      success: function(response) {
        console.log(response);
        $(".content").html(response.result);
      }
    });
    $.ajax({
      url: "http://127.0.0.1:3000/saveUser",
      type: "post",
      data: {
        name: "wwwwwww",
        age: "1111"
      },
      success: function(response) {
        console.log(response);
        $(".content1").html(response.result);
      }
    });
  }
}
new Index();
