import React, { Component } from "react";
import "./index.css";

/*
    List 模块可能展示：
        1 users
        2 欢迎词
        3 loading
        4 err
*/

export default class List extends Component {
  // Note: <div key={user.id} className="card"> 要设置 key
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用，输入关键字，然后点击搜索按钮</h2>
        ) : isLoading ? (
          <h2>Loading........</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img
                    alt="avatar"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
