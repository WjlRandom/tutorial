import React from "react";
import "./index.less";
class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "wwwwwwww",
      isShow: true
    };
    setTimeout(() => {
      this.hideToast();
    }, 2000);
  }
  render() {
    return (
      <div
        className="toast"
        style={{ display: this.state.isShow ? "block" : "none" }}
      >
        {this.state.msg}
      </div>
    );
  }
  hideToast() {
    this.setState({
      isShow: false
    });
  }
}

export default Toast;
