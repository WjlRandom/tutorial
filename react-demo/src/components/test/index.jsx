import React from "react";
import "./index.css";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.setState({
      count: this.state.count + 1
    });
    console.log("count", this.state.count);
    this.setState({
      count: this.state.count + 1
    });
    console.log("count", this.state.count);
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      });
      console.log("count", this.state.count);
      this.setState({
        count: this.state.count + 1
      });
      console.log("count", this.state.count);
    }, 100);
  }
  render() {
    return <div>测试哈哈哈</div>;
  }
}

export default Test;
