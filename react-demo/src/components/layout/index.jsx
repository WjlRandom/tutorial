import React from "react";
import "./index.css";
import Sidebar from "./sidebar";
import Header from "./header";
import MainContent from "./main";
import About from "../about";
import Home from "../home";
import UploadBase from "../upload/uploadBase";
import UploadStream from "../uploadStream";
import UploadForm from "../uploadForm";
import UploadExcel from "../upload/uploadExcel";
import Test from "../test";
import { connect } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "layout module",
      linkList: [
        {
          path: "/layout/home",
          id: "home",
          name: "首页",
          component: Home
        },
        {
          path: "/layout/about",
          id: "about",
          name: "关于我们",
          component: About,
          children: [
            {
              path: "/layout/about/two",
              id: "about-two",
              name: "简介2",
              component: Test
            }
          ]
        },
        {
          path: "/layout/uploadStream",
          id: "uploadStream",
          name: "上传图片",
          component: UploadStream
        },
        {
          path: "/layout/uploadBase",
          id: "uploadByAjax",
          name: "base64上传图片",
          component: UploadBase
        },
        {
          path: "/layout/uploadExcel",
          id: "uploadExcel",
          name: "上传Excel文件",
          component: UploadExcel
        },
        {
          path: "/layout/uploadForm",
          id: "uploadForm",
          name: "表单提交",
          component: UploadForm
        },
        {
          path: "/layout/one",
          id: "one",
          name: "hashchange",
          component: Test
        }
        // {
        //   path: "/layout/crud",
        //   id: "crud",
        //   name: "增删改查",
        //   component: DataCRUD
        // }
      ]
    };
  }

  componentDidMount() {
    // console.log("componentDidMount");
    // let dom = document.getElementById("test");
    // let val = dom.innerHTML;
    // let refVal = this.refs.test.innerHTML;
  }

  render() {
    return (
      <div className="layout">
        <div ref="test" id="test" onClick={this.click.bind(this)}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <Header logout={() => this.logout()} www={this.aa} />
        <section className="main">
          <Router>
            <div className="sidebar-wrap">
              <Sidebar linklist={this.state.linkList} />
            </div>
            <div className="main-content">
              <MainContent linklist={this.state.linkList} />
            </div>
          </Router>
        </section>
      </div>
    );
  }
  aa = ref => {
    console.log("ref", ref);
    this.child = ref;
  };
  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  click = e => {
    this.child.myName();
    this.setState({
      name: "wwwwww"
    });
  };

  logout() {
    //退出登录
    const { history } = this.props;
    history.push("/login");
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    changeLogin: () =>
      dispatch({
        type: "LOGIN",
        loginUser: "qwer"
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
