import React, { Component } from "react";
import Messages from "./Messages";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import News from "./News";
import MyNavLink from "../../components/MyNavLink";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是 Home 组件内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/messages">Messages</MyNavLink>
            </li>
          </ul>
          <div>
            {/* 注册路由 */}
            <Switch>
              {/* 人家要的是 /home */}
              <Route path="/home/news" component={News} />
              <Route path="/home/messages" component={Messages} />
              {/* Redirect 可以用来兜底 */}
              <Redirect to="/home/news" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
