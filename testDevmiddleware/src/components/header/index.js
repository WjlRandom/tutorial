import tpl from "./index.ejs";

class Header {
  constructor() {
    this.render();
  }
  render() {
    let html = tpl({
      name: "wwwww"
    });
    document.getElementById("header").innerHTML = html;
  }
}
export default Header;
