import React from "react";
import "./index.css";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let data = this.props.data;
    let res = [];
    for (let i in data) {
      let list = [];
      data[i].forEach((item, index) => {
        let L = Object.keys(data[i][0]).length;
        let temp = this.getListItem(item, L);
        console.log(temp);
        list.push(<div key={"item" + index}>{temp}</div>);
      });
      res.push(
        <div key={i}>
          <div style={{ color: "#00f" }}>{i}</div>
          {list}
        </div>
      );
    }
    return <div>{res}</div>;
  }
  getListItem(item, length) {
    console.log(item);
    let htmlArr = new Array(length);
    for (let i = 0; i < length; i++) {
      htmlArr[i] = (
        <input
          value={item[i] ? item[i] : "null"}
          onChange={this.handelChange.bind(this)}
        />
      );
    }
    return htmlArr;
  }
  handelChange() {
    console.log("www");
  }
}

export default Index;
