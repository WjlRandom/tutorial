import React from "react";
import "./index.css";
class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.submit();
  }
  render() {
    return (
      <div className="upload">
        <div>使用form表单提交单个文件</div>
        <form
          action="http://127.0.0.1:3333/uploadByForm"
          encType="multipart/form-data"
          method="post"
        >
          <div>
            <input name="inputFile" type="file" />
          </div>
          <div>
            <input type="submit" value="提交" />
          </div>
        </form>
      </div>
    );
  }
  submit() {
    alert("submit");
  }
}

export default UploadFile;
