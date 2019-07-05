import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { login } from "../../server/";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        userName: "www",
        password: "111"
      }
    };
  }
  getInitialState() {
    console.log(this.state);
  }

  loginSubmit() {
    const name = this.state.formData.userName;
    this.props.loginSys(name);
    // login(this.state.formData).then(function(res) {
    //   if (res.status == 200 && res.data.msg == "success") {
    //     console.log("登录成功");
    //     history.push("/layout/home");
    //   } else {
    //     alert("您还未注册");
    //   }
    // });
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    if (nextProps.loginState && nextProps.loginState.loginUser) {
      // todo
      const { history } = this.props;
      history.push("/layout/home");
    }
  }
  handleChange(key, e) {
    //双向绑定数据
    let formData = this.state.formData;
    let value = e.target.value;
    for (let v in formData) {
      if (v === key) {
        formData[v] = value;
        this.setState({
          formData: formData
        });
      }
    }
  }
  render() {
    return (
      <div className="form">
        <div>
          <div className="form-item">
            <span className="form-item-label">用户名</span>
            <input
              className="form-item-input"
              ref="userName"
              type="text"
              placeholder="请输入用户名"
              defaultValue={this.state.formData.userName}
              onChange={this.handleChange.bind(this, "userName")}
            />
          </div>
          <div className="form-item">
            <span className="form-item-label">密码</span>
            <input
              className="form-item-input"
              ref="password"
              type="password"
              placeholder="请输入密码"
              defaultValue={this.state.formData.password}
              onChange={this.handleChange.bind(this, "password")}
            />
          </div>
          <div className="form-item">
            <button
              className="form-item-submit"
              onClick={this.loginSubmit.bind(this)}
            >
              登 录
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    loginSys: name => {
      dispatch({
        type: "LOGIN",
        loginUser: name
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
