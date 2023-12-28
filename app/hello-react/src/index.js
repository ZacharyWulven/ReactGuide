// 引入 React 核心库
import React from "react";
// 引入 ReactDOM 核心库
import ReactDOM from "react-dom";
import "./index.css";
// 引入 App 组件
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 渲染 App 组件到页面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
