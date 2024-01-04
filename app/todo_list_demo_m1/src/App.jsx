import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import List from "./components/List";
import Footer from "./components/Footer";
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";

export default class App extends Component {
  // App 是所有组件的父组件

  // 初始化状态
  state = {
    todolist: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打游戏", done: false },
    ],
  };

  /*
     知识点：子组件如何给父组件传递数据？
     1. 首先父组件传递一个函数给子组件，这里是 callbackOfAdd
     2. 子组件在需要传递数据时调用这个函数
  */
  callbackOfAdd = (todoObj) => {
    console.log("App", todoObj);

    const { todolist } = this.state;

    const newTodos = [todoObj, ...todolist];

    this.setState({ todolist: newTodos });
  };

  render() {
    const { todolist } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header callbackOfAdd={this.callbackOfAdd} />
          <List todolist={todolist} />
          <Footer />
        </div>
      </div>
    );
  }
}
