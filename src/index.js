import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/scss/global.scss";
import Template from "./components/Templates/Template";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Template />
  </Provider>,
  document.getElementById("root")
);
