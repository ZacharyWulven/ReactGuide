import React, { Component } from "react";
import "./index.css";

// 安装 nanoid，$ yarn add nanoid@4.0.0
import { nanoid } from "nanoid";

export default class Header extends Component {
  // 事件对象就是点击的标签对象，直接用参数就行，无需使用 ref
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

    // 准备好一个 todo 对象
    const { callbackOfAdd } = this.props;

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
