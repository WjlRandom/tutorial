import React from "react";
import "./index.css";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkList: this.props.linklist
    };
  }

  render() {
    let items = this.getRouters(this.state.linkList);
    return <Switch>{items}</Switch>;
  }

  getRouters(list) {
    let temp = [];
    for (let v of list) {
      temp.push(
        <Route exact key={v.id} path={v.path} component={v.component} />
      );
      if (v.children && v.children.length > 0) {
        let subItems = this.getRouters(v.children);
        temp = temp.concat(subItems);
      }
    }
    // let items=list.map(v => {
    //   let subItems=[];
    //   if(v.children && v.children.length>0){
    //     subItems=v.children.map((cItem)=>{
    //       return <Route key={cItem.id} path={cItem.path} component={cItem.component} />
    //     });
    //   }
    //   return <Route key={v.id} path={v.path} component={v.component} /> {subItems}
    // });
    return temp;
  }
}
export default Main;
