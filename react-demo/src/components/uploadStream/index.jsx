import React from "react";
import "./index.css";
//import UploadFileByFormData from "../upload/uploadFile";
import UploadFileByAjax from "../upload/uploadAjax";
import UploadFileMulti from "../upload/uploadMulti";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>使用文件流的形式上传图片</div>
        <UploadFileByAjax />
        <UploadFileMulti />
      </div>
    );
  }
}

export default About;
