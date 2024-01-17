import React, { Component } from "react";

const DetailData = [
  { id: "01", content: "Hello，world" },
  { id: "02", content: "Long may the sun shine" },
  { id: "03", content: "Good night" },
];

export default class Detail extends Component {
  render() {
    // 接收 params 参数
    const { id, title } = this.props.match.params;
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id;
    });

    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    );
  }
}
