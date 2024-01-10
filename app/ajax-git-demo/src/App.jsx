import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";

export default class App extends Component {
  /*
    初始化状态
  */
  state = { users: [] };

  saveUsers = (users) => {
    console.log("App users: ", users);
    this.setState({ users });
  };

  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={this.state.users} />
      </div>
    );
  }
}
