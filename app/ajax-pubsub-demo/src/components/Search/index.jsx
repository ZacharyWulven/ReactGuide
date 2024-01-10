import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
  search = () => {
    // 获取用户输入
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

    // 发送请求前告诉 List 更新 state
    PubSub.publish("searchUser", { isFirst: false, isLoading: true });

    /*
      直接请求版本：
    */
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        // console.log("成功了：", response.data);
        PubSub.publish("searchUser", {
          users: response.data["items"],
          isLoading: false,
        });
      },
      (err) => {
        // console.log("失败了：", err);
        PubSub.publish("searchUser", { err: err.message, isLoading: false });
      }
    );
  };

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索 Github 用户: PubsubJS 方式</h3>
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
