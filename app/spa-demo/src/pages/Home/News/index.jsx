import React, { Component } from "react";

export default class News extends Component {
  //   componentDidMount() {
  //     // 2s 后自动跳转到 Messages 组件
  //     setTimeout(() => {
  //       this.props.history.push("/home/messages");
  //     }, 2000);
  //   }

  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    );
  }
}
