import React from "react";
import "./index.css";
import UploadFileByJson from "../upload/uploadJson";
import UploadFileByMix from "../upload/uploadMix";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>表单中带有字符串和文件</div>
        <UploadFileByJson />
        <UploadFileByMix />
      </div>
    );
  }
}

export default About;
