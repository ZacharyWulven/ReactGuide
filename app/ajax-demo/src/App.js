import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  /*
    请求 Access-Control-Allow-Origin 问题表示跨域问题
    情况如下：
    本来网页位置是 http://localhost:3000，但想给 http://localhost:5000 发请求 
    ajax 库能发送，但数据回不来

    在 react 中通过代理来解决，因为 ajax 不能跨域，但中间代理是没有 ajax 所以可以接收 5000 端口的
    在 react 中有两种方式开始代理：
      方法一：
        1. 编辑 React 项目中 `package.json` 在最后添加 `proxy` 字段，然后重启项目 `yarn start`
          "proxy": "http://localhost:5000/"
          }
        2. 将请求由 http://localhost:5000/students 改为 http://localhost:3000/students
        Note：本方法 3000 下没有的资源才会向 5000 要
        
        "proxy" 字段只能配置一个代理，如果创建多个代理？
          答：1. 在 src 目录下新建文件 setupProxy.js，
                setupProxy.js 中要用 CJS 去写不能用 ES6，因为 react 脚手架会找到 setupProxy.js 文件将其
                添加到 webpack 配置文件中
              

  */

  getStudentData = () => {
    // axios.get("http://localhost:3000/students").then(

    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("成功了：", response.data);
      },
      (err) => {
        console.log("失败了：", err);
      }
    );
  };

  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("成功了：", response.data);
      },
      (err) => {
        console.log("失败了：", err);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    );
  }
}
