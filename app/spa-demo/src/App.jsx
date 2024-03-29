import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // About 是路由组件
import Header from "./components/Header"; // Header 是一般组件
import MyNavLink from "./components/MyNavLink";

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

              {/* 自定义的 NavLink 路由组件 */}
              <MyNavLink to="/dagon/about" a={1} b={2} c={3}>
                About
              </MyNavLink>
              {/* 你给的是 /home/a/b */}
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 如果没有 Switch 匹配过后还会继续往下匹配 */}
                {/* 注册的路由在一个以上才需要用 Switch 包裹 */}
                <Switch>
                  {/* 人家要的是 /home */}
                  <Route path="/home" component={Home} />
                  <Route path="/dagon/about" component={About} />
                  {/* <Route path="/about" component={Test} /> */}

                  {/* Redirect 可以用来兜底 */}
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
