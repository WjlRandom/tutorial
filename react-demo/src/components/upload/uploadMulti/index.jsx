import React from "react";
import "./index.css";
import ImgList from "../preImgList/";
import { uploadMulti } from "../../../server";
class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [], //表单提交
      preImgList: [] //图片预览
    };
  }
  render() {
    return (
      <div className="upload">
        <div className="upload-title">提交多个文件（本地预览再提交）</div>
        <div className="upload-form">
          <div className="upload-form-item">
            <input
              className="form-item-file"
              name="file"
              onChange={this.handleChange.bind(this)}
              type="file"
              multiple="multiple"
            />

            <button
              className="form-item-submit"
              onClick={this.submit.bind(this)}
            >
              提交
            </button>
          </div>

          <ImgList
            imgList={this.state.preImgList}
            deleteImg={this.deleteImg.bind(this)}
          />
        </div>
      </div>
    );
  }
  handleChange(e) {
    let fileArr = this.state.files;
    let files = e.target.files;
    let L = files.length;
    for (let i = 0; i < L; i++) {
      fileArr.push(files[i]);
    }
    fileArr = this.unique(fileArr, "name");
    this.setState({
      files: fileArr
    });
    this.preImg(fileArr);
  }
  unique(array, key) {
    //数组去重
    let temp = {};
    array.forEach((arrItem, index) => {
      let kv = arrItem[key];
      if (temp[kv]) {
        array.splice(index, 1);
      } else {
        temp[kv] = 1;
      }
    });
    return array;
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

  submit() {
    let L = this.state.files.length;
    let formData = new FormData();
    for (let i = 0; i < L; i++) {
      formData.append("file", this.state.files[i]);
    }
    if (L > 0) {
      uploadMulti(formData).then(response => {
        if (response.status == 200) {
          console.log("提交成功");
          this.setState({
            files: [],
            preImgList: []
          });
        }
      });
    } else {
      alert("请选择文件");
    }
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
}

export default UploadFile;
