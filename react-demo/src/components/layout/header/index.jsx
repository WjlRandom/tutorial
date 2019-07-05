import React from "react";
import { connect } from "react-redux";
import "./index.css";
import { logout } from "../../../server";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wwwww"
    };
    Object.assign(this.state, props);
  }
  componentDidMount() {
    this.props.www(this);
  }
  logoutSys() {
    logout().then(response => {
      if (response.status == 200) {
        this.props.logout();
      }
    });
  }
  render() {
    return (
      <div className="page-header">
        <p>欢迎登录管理系统</p>
        <div className="page-header-right">
          <button onClick={this.logoutSys.bind(this)}>退出</button>
        </div>
      </div>
    );
  }
  myName() {
    alert("header");
  }
}
// const mapStateToProps = state => {
//   return {
//     state: state
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {};
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);

export default Header;
