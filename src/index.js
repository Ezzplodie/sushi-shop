import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "macro-css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { filterSlice } from "./redux/slices/filterSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
console.log(store);
