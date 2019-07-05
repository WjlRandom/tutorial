import React from "react";
import "./index.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="index">
        <img
          src={require("../../assets/images/1.jpg")}
          alt=""
          className="img"
        />
      </div>
    );
  }
}

export default Index;
