import React, { Component } from "react";
import Item from "../Item";
import "./index.css";
// 安装依赖，$ yarn add prop-types
import PropTypes from "prop-types";

export default class List extends Component {
  // 对接收 props 进行：类型 必要性的限制
  PropTypes = {
    todolist: PropTypes.array.isRequired,
    callbackOfChecked: PropTypes.func.isRequired,
  };
  render() {
    const { todolist, callbackOfChecked } = this.props;
    console.log("List ", todolist);
    return (
      <ul className="todo-main">
        {todolist.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              callbackOfChecked={callbackOfChecked}
            />
          );
        })}
      </ul>
    );
  }
}
