import React, { Component } from "react";
/*
  css 模块化
  1 将 css 文件定义为 index.module.css
  2 import welcome from "./index.module.css";
  3 标签中 className={welcome.demo}
*/
import welcome from "./index.module.css";

export default class Welcome extends Component {
  render() {
    return <h2 className={welcome.demo}>Welcome!</h2>;
  }
}
