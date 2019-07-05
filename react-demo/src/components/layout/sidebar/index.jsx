import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      linkList: this.props.linklist
    };
  }
  render() {
    let items = this.getLinks(this.state.linkList);
    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-list">{items}</div>
        </div>
      </div>
    );
  }

  getLinks(list) {
    let items = list.map((item, index) => {
      let subItems = [];
      let subLink = "";
      if (item.children && item.children.length > 0) {
        subItems = this.getLinks(item.children);
      }
      if (subItems.length > 0) {
        subLink = (
          <div
            className={
              index === this.state.currentIndex ? "sub-link-active" : "sub-link"
            }
          >
            {subItems}
          </div>
        );
      }
      return (
        <div key={item.id}>
          <NavLink
            onClick={this.toggleSubMenu.bind(this, index)}
            id={item.id}
            activeClassName="sidebar-active"
            to={item.path}
          >
            {item.name}
          </NavLink>
          {subLink}
        </div>
      );
    });
    return items;
  }
  toggleSubMenu(index) {
    this.props.toggleMenu(index);
    setTimeout(() => {
      this.setState({
        currentIndex: index
      });
    }, 10);
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: index => {
      dispatch({
        type: "TOGGLEMENU",
        value: index
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
