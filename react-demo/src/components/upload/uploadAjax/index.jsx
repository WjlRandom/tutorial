import React from "react";
import "./index.css";
import ImgList from "../preImgList/";
import { uploadByAjax, deleteImg, upload } from "../../../server/";
class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preImgList: []
    };
  }
  render() {
    return (
      <div className="upload">
        <div className="upload-title">提交单个文件(提交成功之后回显图片)</div>
        <div className="upload-form">
          <div className="upload-form-item">
            <input
              className="form-item-file"
              name="inputFile"
              onChange={this.handleChange.bind(this)}
              type="file"
            />
          </div>
        </div>
        <ImgList
          imgList={this.state.preImgList}
          deleteImg={this.deleteImg.bind(this)}
        />
      </div>
    );
  }
  handleChange(e) {
    this.uploadFile(e.target.files[0]);
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
  uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file);
    upload(formData).then(response => {
      console.log(response);
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
}

export default UploadFile;
