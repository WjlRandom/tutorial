import React from "react";
import "./index.css";
import axios from "axios";
import ImgList from "../preImgList/";
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
        <div className="upload-title">同时提交文件和字符串</div>
        <div className="upload-form">
          <div className="upload-form-item">
            <input
              type="text"
              className="form-item-input imgName"
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
      let arr = [];
      arr.push(e.target.files[0]);
      this.setState({
        files: arr
      });
      this.preImg(arr);
    } else {
      let data = {};
      data[inputName] = e.target.value;
      this.setState(data);
    }
  }
  preImg(fileArr) {
    var fileLength = 0;
    let reader = new FileReader();
    let tempArr = [];
    reader.readAsDataURL(fileArr[fileLength]);
    let fileName = fileArr[fileLength].name;
    reader.onload = event => {
      let e = event || window.event;
      if (e.target.result) {
        tempArr.push({
          name: fileName,
          imgUrl: e.target.result,
          isShowDel: false
        });
        fileLength++;
        if (fileLength < fileArr.length) {
          reader.readAsDataURL(fileArr[fileLength]);
          fileName = fileArr[fileLength].name;
        } else {
          // console.log(tempArr);
        }
      }
      this.setState({
        preImgList: tempArr
      });
    };
  }
  deleteImg(data) {
    let list = this.state.preImgList.filter(item => {
      return item.imgUrl != data.imgUrl;
    });
    let fileArr = this.state.files.filter(item => {
      return item.name != data.name;
    });
    this.setState({
      preImgList: list,
      files: fileArr
    });
  }

  submit() {
    let data = {
      file: this.state.files[0],
      imgName: this.state.imgName
    };
    let isValidata = this.verifyItem(data);

    if (isValidata) {
      let formData = new FormData();
      formData.append("file", data.file);
      formData.append("imgName", data.imgName);
      axios.post("http://127.0.0.1:3333/uploadMix", formData).then(response => {
        if (response.status == 200) {
          console.log("提交成功");
          this.setState({
            files: [],
            preImgList: [],
            imgName: ""
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
