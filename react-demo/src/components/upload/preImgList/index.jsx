import React from "react";
import "./index.css";
class ImgList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: this.props.imgList
    };
  }

  render() {
    let renderList = this.props.imgList;
    if (renderList.length > 0) {
      let imgList = renderList.map((item, index) => {
        return (
          <div
            key={index}
            className="upload-pre-item"
            onMouseOver={this.handleMouse.bind(this, item, true)}
            onMouseOut={this.handleMouse.bind(this, item, false)}
          >
            <img className="pre-item-img" src={item.imgUrl} alt="" />
            <div
              style={{ display: item.isShowDel ? "flex" : "none" }}
              className="pre-item-delete"
              onClick={this.handelDeleteImg.bind(this, item)}
            >
              删除
            </div>
          </div>
        );
      });
      return <div className="upload-pre">{imgList}</div>;
    } else {
      return null;
    }
  }
  handleMouse(item, bool) {
    let list = this.props.imgList;
    list.forEach((ele, index) => {
      if (ele.imgUrl === item.imgUrl) {
        ele.isShowDel = bool;
      }
    });
    this.setState({
      imgList: list
    });
  }

  handelDeleteImg(item) {
    this.props.deleteImg(item);
  }
  handleChange(e) {
    this.uploadImg(e.target.files[0]);
  }
}

export default ImgList;
