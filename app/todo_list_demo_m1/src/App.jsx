import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import List from "./components/List";
import Footer from "./components/Footer";

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

  render() {
    const { todolist } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todolist={todolist} />
          <Footer />
        </div>
      </div>
    );
  }
}
