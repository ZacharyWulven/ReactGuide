import React, { Component } from "react";
// yarn add querystring
import qs from "querystring";

let obj = { name: "tom", age: 20 };
let str = qs.stringify(obj); // object => string
console.log("qs.stringify: ", str);

let str1 = "carName=宝马&price=200";
let obj1 = qs.parse(str1);
console.log("qs.parse: ", obj1); // string => object

const DetailData = [
  { id: "01", content: "Hello，world" },
  { id: "02", content: "Long may the sun shine" },
  { id: "03", content: "Good night" },
];

export default class Detail extends Component {
  render() {
    console.log("Detail: ", this.props);
    // 1 接收 params 参数
    // const { id, title } = this.props.match.params;

    // 2 接收 search 参数
    // ?id=01&title=消息1
    console.log("Detail search: ", this.props.location.search);
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.slice(1));

    console.log("id:", id, "title: ", title);

    // find data
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
