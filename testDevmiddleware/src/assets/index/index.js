import common from "../main/index.js";
import Header from "../../components/header/index.js";
import "./index.less";
class Index {
  constructor() {
    common();
    this.init();
  }
  init() {
    console.log("init");
    this.header = new Header();
  }
}
new Index();
