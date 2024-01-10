import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";

export default class App extends Component {
  /*
    初始化状态
  */
  state = {
    isFirst: true, // 是否第一次打开页面
    users: [], // 搜索的用户为数组
    isLoading: false, // 是否正在加载数据
    err: "", // 存储请求相关的错误信息
  };

  // 更新 app 的 state
  updateState = (stateObj) => {
    console.log("App stateObj: ", stateObj);
    this.setState(stateObj);
  };

  // {...this.state} 将 state 所有字段传入 List
  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    );
  }
}
