import React, { Component } from "react";
import { NavLink } from "react-router-dom/";

export default class MyNavLink extends Component {
  render() {
    console.log("MyNavLink:", this.props);
    /*
        因为标签体是一个特殊的属性 children
        外部会传入标签体到 props 的 children 属性上
        这里通过解构赋值将 children 传给 NavLink 即可显示内容
    */
    return (
      <div>
        <NavLink
          activeClassName="demo"
          className="list-group-item"
          {...this.props}
        />
      </div>
    );
  }
}
