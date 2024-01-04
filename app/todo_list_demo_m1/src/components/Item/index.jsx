import React, { Component } from "react";
import "./index.css";

// {/* defaultChecked 表示一开始是否勾选，后续可改 */}

export default class Item extends Component {
  state = { mouse: false };

  // 鼠标移入移出的回调
  handleMouse = (moveIn) => {
    return () => {
      console.log("handleMouse: ", moveIn);
      this.setState({ mouse: moveIn });
    };
  };

  // 勾选、取消勾选回调
  handleCheck = (id) => {
    return (event) => {
      console.log(id, event.target.checked);
      this.props.callbackOfChecked(id, event.target.checked);
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "#white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
