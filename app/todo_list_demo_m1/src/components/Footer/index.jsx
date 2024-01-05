import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  /*
    <input
            checked={doneCount === totalCout ? true : false}
            onChange={this.handleCheckAll}
          />
    input 中用了 checked 就必须加 onChange
    */
  handleCheckAll = (event) => {
    console.log("footer check all", event.target.checked);
    const { callbackOfCheckAll } = this.props;
    callbackOfCheckAll(event.target.checked);
  };

  handleClearAllDone = () => {
    this.props.callbackOfClearAllDone();
  };

  render() {
    const { todolist } = this.props;

    const totalCout = todolist.length;
    // const doneCount = todolist.filter((item) => {
    //   return item.done;
    // }).length;

    const doneCount = todolist.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    );

    // const doneCount = todolist.reduce((pre, current) => {
    //   return pre + (current.done ? 1 : 0);
    // }, 0);

    // input defaultChecked={done} 只有第一次才生效

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={totalCout > 0 && doneCount === totalCout ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成 {doneCount} </span> / 全部 {totalCout}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
