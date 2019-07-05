import React from "react";
import "./index.css";
import DataList from "../../datalist";
import { uploadByAjax } from "../../../server";
class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      dataList: {}
    };
  }
  render() {
    return (
      <div className="upload">
        <div className="upload-title">上传Excel文件</div>
        <div className="upload-form">
          <div className="upload-form-item">
            <input
              className="form-item-file"
              name="inputFile"
              onChange={this.handleChange.bind(this)}
              type="file"
            />
          </div>
          <div className="upload-form-item">
            <button
              className="form-item-submit"
              onClick={this.handleSubmit.bind(this)}
            >
              点击上传
            </button>
          </div>
        </div>
        <div className="pre-data">
          <DataList data={this.state.dataList} />
        </div>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      file: e.target.files[0]
    });
    console.log("添加成功");
  }
  handleSubmit() {
    let formData = new FormData();
    formData.append("file", this.state.file);
    uploadByAjax(formData).then(response => {
      console.log(response);
      if (response.status == "200") {
        if (response.data) {
          this.setState({
            dataList: response.data
          });
        }
      }
    });
  }
}

export default UploadFile;
