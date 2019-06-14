import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import Router from "./router";
import storeConfig from "./redux/store/storeConfig";
import { Provider } from "react-redux";
// Redux Store对象 管理所有redux状态
const store = storeConfig();
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);