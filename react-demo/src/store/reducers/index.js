import { combineReducers } from "redux";

function loginState(
  state = {
    loginUser: ""
  },
  action
) {
  switch (action.type) {
    case "TEST":
      return {
        loginUser: action.loginUser
      };
    case "LOGIN":
      return {
        loginUser: action.loginUser
      };
    case "LOGOUT":
      return {
        loginUser: action.loginUser
      };
    default:
      return state;
  }
}

function sidebarToggleState(
  state = {
    toggleIndex: 0
  },
  action
) {
  if (action.type == "TOGGLEMENU") {
    return {
      toggleIndex: action.value
    };
  } else {
    return state;
  }
}

const reducers = combineReducers({
  loginState,
  sidebarToggleState
});

export default reducers;
