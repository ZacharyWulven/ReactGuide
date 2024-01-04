import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
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
