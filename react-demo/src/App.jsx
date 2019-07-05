import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import routers from "./router";
import store from "./store/store";
import { Provider } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("state", store.getState());
    let redirect = [];
    let loginUser = store.getState().loginUser;
    redirect = routers.map(item => {
      return (
        <Route key={item.name} path={item.path} component={item.component} />
      );
    });
    if (loginUser) {
      redirect.push(<Redirect key="current" to="/layout" />);
    } else {
      redirect.push(<Redirect key="current" to="/login" />);
    }
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch> {redirect} </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
