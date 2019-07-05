import React from "react";
import "./index.css";
import UploadFileByFormData from "../upload/uploadFile";
import axios from "axios";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayObj: [],
      activityName: ""
    };
  }

  render() {
    return (
      <div className="about">
        <UploadFileByFormData />

        <div className="upload">
          <div className="upload-title">测试提交文件</div>
          <div className="upload-form">
            <div className="upload-form-item">
              <input
                type="text"
                className="form-item-input activityName"
                name="activityName"
                placeholder="请输入图片名称"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="upload-form-item">
              <input
                className="form-item-file"
                name="file"
                onChange={this.handleChange.bind(this)}
                type="file"
                multiple="multiple"
              />
            </div>

            <div className="upload-form-item">
              <button
                className="form-item-submit submit"
                onClick={this.submit.bind(this)}
              >
                提交
              </button>
            </div>
            <div className="upload-form-item">
              <button
                className="form-item-submit"
                onClick={this.getCodeData.bind(this)}
              >
                获取列表
              </button>
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
  handleChange(e) {
    let name = e.target.name;
    let fileList = this.state.arrayObj;
    if (name == "file") {
      fileList.concat(e.target.files);
      let L = e.target.files.length;
      for (let i = 0; i < L; i++) {
        fileList.push(e.target.files[i]);
      }
      this.setState({
        arrayObj: fileList
      });
    } else if (name == "activityName") {
      this.setState({
        activityName: e.target.value
      });
    }
  }
  submit() {
    let formData = new FormData();
    let list = this.state.arrayObj;
    formData.append("activityName", this.state.activityName);
    list.forEach(item => {
      formData.append("arrayObj", item);
    });
    axios
      .post("https://comm.tonglibang.com/communitym/book/addQr.json", formData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
  getCodeData() {
    axios
      .post("https://comm.tonglibang.com/communitym/book/liveCodeList.json", {})
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default About;
