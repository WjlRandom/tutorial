import React from "react";
import "./index.css";
import DataList from "../datalist/";
import { uploadByAjax } from "../../server/";
class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      preImgUrl: "",
      dataList: {}
    };
  }
  render() {
    return <div className="wrap">wwwwwwww</div>;
  }
  handleChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }
  uploadImg() {
    let formData = new FormData();
    formData.append("file", this.state.file);
    uploadByAjax(formData).then(response => {
      console.log(response);
      if (response.status == "200") {
        if (response.data.imgUrl) {
          this.setState({
            preImgUrl: response.data.imgUrl
          });
        }
        if (response.data.list) {
          this.setState({
            dataList: response.data.list
          });
        }
      }
    });
  }
}

export default UploadFile;
