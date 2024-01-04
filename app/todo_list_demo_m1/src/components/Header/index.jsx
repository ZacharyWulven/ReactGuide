import React, { Component } from "react";
import "./index.css";
// 安装依赖，$ yarn add prop-types
import PropTypes from "prop-types";

// 安装依赖 nanoid，$ yarn add nanoid@4.0.0
import { nanoid } from "nanoid";

export default class Header extends Component {
  // 对接收 props 进行：类型 必要性的限制
  // Note: 这版本不用加 static
  PropTypes = {
    callbackOfAdd: PropTypes.func.isRequired,
  };

  // 事件对象就是点击的标签对象，直接用参数就行，无需使用 ref
  // 键盘事件回调
  handleKeyUp = (event) => {
    // 13 是回车按钮的号码
    // 按下回车才往下走
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    console.log(target.value, keyCode);

    if (target.value.trim() === "") {
      alert("输入内容不能为空");
      return;
    }

    const { callbackOfAdd } = this.props;

    // 准备好一个 todo 对象
    const todoObj = { id: nanoid(), name: target.value, done: false };

    callbackOfAdd(todoObj);
    // 清空 input
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车确认"
        />
      </div>
    );
  }
}
