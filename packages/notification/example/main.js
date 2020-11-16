import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let el = document.querySelector('#app');
if (el) {
  ReactDOM.render(<App/>, el);
}
