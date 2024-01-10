import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  // Note: <div key={user.id} className="card"> 要设置 key
  render() {
    const { users } = this.props;
    return (
      <div className="row">
        {users.map((user) => {
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
        })}
      </div>
    );
  }
}
