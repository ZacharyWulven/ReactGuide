import React, { Component } from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // About 是路由组件
import Header from "./components/Header"; // Header 是一般组件

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-offset-2 col-xs-2">
            <div className="list-group">
              {/*原生 html 中，靠 <a> 跳转不同页面*/}
              {/* <a className="list-group-item active" href="./home.html">
                Home
              </a>
              <a className="list-group-item" href="./about.html">
                About
              </a> */}

              {/*在 react 中，靠路由链接切换组件---编写路由链接*/}
              {/* 想要高亮效果不能用 Link，要用 NavLink */}
              {/* activeClassName 用于点击时加哪个样式的类名 */}
              <NavLink
                activeClassName="demo"
                className="list-group-item"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="demo"
                className="list-group-item"
                to="/about"
              >
                About
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
