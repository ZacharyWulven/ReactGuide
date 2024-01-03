import React, { Component } from "react";
import "./index.css";

// {/* defaultChecked 表示一开始是否勾选，后续可改 */}

export default class Item extends Component {
  render() {
    const { name, done } = this.props;
    return (
      <div>
        <li>
          <label>
            <input type="checkbox" defaultChecked={done} />
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{ display: "none" }}>
            删除
          </button>
        </li>
      </div>
    );
  }
}
