import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // 获取用户输入

    // 解构赋值的连续写法
    // const {
    //   keyWordElement: { value },
    // } = this;
    // console.log(value);

    /*  
        知识点：
        连续结构赋值，并重命名为 keyWord
        keyWordElement 是 this 的属性
        keyWord 是对 value 的重命名
    */
    const {
      keyWordElement: { value: keyWord },
    } = this;
    console.log(keyWord);

    // 发送网络请求
    /*
        使用代理版本：
        因为 api.github.com 后端用 cors 解决了跨域问题，所以可以直接访问
        但一般很少用 cors 解决跨域，因为一旦用了 cors 那所有人就都能访问了

        Github api 有请求限制，短时间内多次请求可能有 401 问题
        解决方式：即使用代理，比如代理在 5000 端口，
        代理配置见 setupProxy.js 
        
        
        如果网页位置就是发请求的位置，http://localhost:3000 可省略
        `http://localhost:3000/api1/search/users?q=${keyWord}` 改为 `/api1/search/users?q=${keyWord}`
    */
    // axios.get(`/api1/search/users?q=${keyWord}`).then(
    //   (response) => {
    //     console.log("成功了：", response.data);
    //   },
    //   (err) => {
    //     console.log("失败了：", err);
    //   }
    // );

    /*
      直接请求版本：
    */
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        console.log("成功了：", response.data);
        const { saveUsers } = this.props;
        saveUsers(response.data["items"]);
      },
      (err) => {
        console.log("失败了：", err);
      }
    );
  };

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索 Github 用户</h3>
          <div>
            <input
              ref={(c) => (this.keyWordElement = c)}
              type="text"
              placeholder="输入关键词点击搜索"
            />
            &nbsp;<button onClick={this.search}>搜索</button>
          </div>
        </section>
      </div>
    );
  }
}
