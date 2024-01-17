import React, { Component } from "react";
import Detail from "./Detail";
import { Link, Route, Switch, Redirect } from "react-router-dom";

export default class Messages extends Component {
  state = {
    messages: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((msg) => {
            return (
              <li key={msg.id}>
                {/* 向路由组件传递 params 参数 */}
                <Link to={`/home/messages/detail/${msg.id}/${msg.title}`}>
                  {msg.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <div>
          {/* 注册路由 */}
          {/* 声明接收 params 参数 */}
          <Route path="/home/messages/detail/:id/:title" component={Detail} />
        </div>
      </div>
    );
  }
}
