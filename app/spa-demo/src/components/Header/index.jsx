import React, { Component } from "react";

// withRouter 不是大写开头，它是一个函数，而不是一个组件
import { withRouter } from "react-router-dom";

class Header extends Component {
  goBack = () => {
    this.props.history.goBack();
  };

  goForward = () => {};

  go = () => {};

  render() {
    // console.log("Header 收到的 props:", this.props);
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        &nbsp;&nbsp;<button onClick={this.goBack}>回退</button>
        &nbsp;&nbsp;<button onClick={this.goForward}>前进</button>
        &nbsp;&nbsp;<button onClick={this.go}>Go</button>
      </div>
    );
  }
}

/*
    这里需要暴露 withRouter 函数调用的返回值
    withRouter 的作用：接收一个一般组件，
    然后再这个组件身上加上路由组件特有的 history、location、match
*/
export default withRouter(Header);
