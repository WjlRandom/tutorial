import React from "react";
import "./index.css";
import axios from "axios";
import ImgList from "../preImgList/";
import { uploadByAjax, deleteImg } from "../../../server/";
class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      imgName: "",
      preImgList: []
    };
  }
  render() {
    return (
      <div className="upload">
        <div className="upload-title">先上传图片再提交表单</div>
        <div className="upload-form">
          <div className="upload-form-item">
            <input
              className="form-item-input imgName"
              type="text"
              name="imgName"
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
          <ImgList
            imgList={this.state.preImgList}
            deleteImg={this.deleteImg.bind(this)}
          />
          <div className="upload-form-item">
            <button
              className="form-item-submit submit"
              onClick={this.submit.bind(this)}
            >
              提交
            </button>
          </div>
        </div>
      </div>
    );
  }
  handleChange(e) {
    let inputName = e.target.name;
    if (inputName == "file") {
      this.uploadImg(e.target.files[0]);
    } else {
      let data = {};
      data[inputName] = e.target.value;
      this.setState(data);
    }
  }
  uploadImg(file) {
    let formData = new FormData();
    formData.append("file", file);
    uploadByAjax(formData).then(response => {
      console.log(response);
      if (response.status == "200") {
        if (response.data.imgUrl) {
          let list = [];
          list.push({
            imgUrl: response.data.imgUrl,
            isShowDel: false
          });
          this.setState({
            preImgList: list
          });
        }
      }
    });
  }
  deleteImg(data) {
    let list = this.state.preImgList.filter(item => {
      return item.imgUrl != data.imgUrl;
    });
    deleteImg({
      imgUrl: data.imgUrl
    }).then(response => {
      console.log(response);
      if (response.status == "200") {
        this.setState({
          preImgList: list
        });
      }
    });
  }
  submit() {
    let data = {
      imgName: this.state.imgName,
      imgUrl: this.state.preImgList[0].imgUrl
    };
    let isValidata = this.verifyItem(data);
    if (isValidata) {
      axios.post("http://127.0.0.1:3333/saveImg", data).then(response => {
        if (response.status == 200) {
          console.log("提交成功");
          this.setState({
            files: [],
            imgName: "",
            preImgList: []
          });
        }
      });
    } else {
      alert("请输入完整的参数");
    }
  }
  verifyItem(obj) {
    for (let i in obj) {
      if (!obj[i]) {
        return false;
      }
    }
    return true;
  }
}

export default UploadFile;
