import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import List from "./components/List";
import Footer from "./components/Footer";
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";

export default class App extends Component {
  // App 是所有组件的父组件

  // 状态在哪里，操作状态的方法就在哪里
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
    console.log("App: ", todoObj);

    const { todolist } = this.state;

    const newTodos = [todoObj, ...todolist];

    this.setState({ todolist: newTodos });
  };

  // 勾选、取消勾选回调
  callbackOfChecked = (id, checked) => {
    console.log("App: ", id, checked);

    const { todolist } = this.state;
    // 更新 todo list
    const newList = todolist.map((item) => {
      if (item.id === id) return { ...item, done: checked };
      return item;
    });
    this.setState({ todolist: newList });
  };

  // 删除 Item 对象的回调
  callbackOfDelete = (id) => {
    const { todolist } = this.state;
    console.log("App: delete ", id);

    // 更新 todo list
    const newList = todolist.filter((item) => {
      return item.id !== id;
    });

    this.setState({ todolist: newList });
  };

  callbackOfCheckAll = (done) => {
    // 获取原来的 todos
    const { todolist } = this.state;
    // 更新 todo list
    const newList = todolist.map((item) => {
      return { ...item, done: done };
    });
    this.setState({ todolist: newList });
  };

  callbackOfClearAllDone = () => {
    // 获取原来的 todos
    const { todolist } = this.state;
    // 更新 todo list
    const newList = todolist.filter((item) => {
      return item.done === false;
    });
    const doneCount = todolist.length - newList.length;
    if (doneCount === 0) {
      alert("目前没有已完成的");
      return;
    }
    this.setState({ todolist: newList });
  };

  render() {
    const { todolist } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header callbackOfAdd={this.callbackOfAdd} />
          <List
            todolist={todolist}
            callbackOfChecked={this.callbackOfChecked}
            callbackOfDelete={this.callbackOfDelete}
          />
          <Footer
            todolist={todolist}
            callbackOfCheckAll={this.callbackOfCheckAll}
            callbackOfClearAllDone={this.callbackOfClearAllDone}
          />
        </div>
      </div>
    );
  }
}
