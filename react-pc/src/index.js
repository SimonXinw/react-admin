import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RouterConfig from "./router";
import "./index.css";

// css
import "antd/dist/antd.css";

const themeReducer = (state, action) => {
  if (!state)
    return {
      themeColor: "red",
    };
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};

const store = createStore(themeReducer);

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>,
  document.getElementById("root")
);
