import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
