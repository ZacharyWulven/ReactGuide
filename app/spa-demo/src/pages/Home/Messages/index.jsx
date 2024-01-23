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

  // 编程式路由导航：push
  pushShow = (id, title) => {
    // 实现跳转到 Detail 组件，并且为 push 跳转

    // 1 编程式路由导航：push 跳转 + 传递 params 参数
    // this.props.history.push(`/home/messages/detail/${id}/${title}`);

    // 2 编程式路由导航：push 跳转 + 传递 query 参数
    // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`);

    // 3 编程式路由导航：push 跳转 + 传递 state 参数，传入的第二个参数就是 state
    this.props.history.push(`/home/messages/detail`, {
      id,
      title,
    });
  };

  // 编程式路由导航：replace
  replaceShow = (id, title) => {
    // 实现跳转到 Detail 组件，并且为 replace 跳转
    console.log("replaceShow: ", id, title);

    // 1 编程式路由导航：replace 跳转 + 传递 params 参数
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`);

    // 2 编程式路由导航：replace 跳转 + 传递 query 参数
    // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}`);

    // 3 编程式路由导航：replace 跳转 + 传递 state 参数，传入的第二个参数就是 state
    this.props.history.replace(`/home/messages/detail`, {
      id,
      title,
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  goForward = () => {
    this.props.history.goForward();
  };
  go = () => {
    // 写死前进 2 步
    this.props.history.go(2);
  };
  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((msg) => {
            return (
              <li key={msg.id}>
                {/* 1 向路由组件传递 params 参数 */}
                {/* <Link to={`/home/messages/detail/${msg.id}/${msg.title}`}>
                  {msg.title}
                </Link> */}
                {/* 2 向路由组件传递 search 参数 */}
                {/* <Link
                  to={`/home/messages/detail/?id=${msg.id}&title=${msg.title}`}
                >
                  {msg.title}
                </Link> */}
                {/* 3 向路由组件传递 state 参数 */}
                <Link
                  replace
                  to={{
                    pathname: "/home/messages/detail",
                    state: { id: msg.id, title: msg.title },
                  }}
                >
                  {msg.title}
                </Link>
                {/* button */}
                &nbsp;&nbsp;
                <button
                  onClick={() => {
                    this.pushShow(msg.id, msg.title);
                  }}
                >
                  push 查看
                </button>
                &nbsp;&nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(msg.id, msg.title);
                  }}
                >
                  replace 查看
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        <div>
          {/* 注册路由 */}
          {/* 1 声明接收 params 参数 */}
          {/* <Route path="/home/messages/detail/:id/:title" component={Detail} /> */}
          {/* 2 search 参数无需声明接收，正常注册路由即可 */}
          {/* <Route path="/home/messages/detail" component={Detail} /> */}
          {/* 3 state 参数无需声明接收，正常注册路由即可 */}
          <Route path="/home/messages/detail" component={Detail} />
          {/* add back and forward button */}
          &nbsp;&nbsp;<button onClick={this.goBack}>回退</button>
          &nbsp;&nbsp;<button onClick={this.goForward}>前进</button>
          &nbsp;&nbsp;<button onClick={this.go}>Go</button>
        </div>
      </div>
    );
  }
}
