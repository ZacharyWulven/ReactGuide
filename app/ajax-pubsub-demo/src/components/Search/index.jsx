import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
  search = async () => {
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
      使用 axios 发送请求：
    */
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   (response) => {
    //     // console.log("成功了：", response.data);
    //     PubSub.publish("searchUser", {
    //       users: response.data["items"],
    //       isLoading: false,
    //     });
    //   },
    //   (err) => {
    //     // console.log("失败了：", err);
    //     PubSub.publish("searchUser", { err: err.message, isLoading: false });
    //   }
    // );

    // 使用 fetch 发送请求
    /*  
        Promise 回顾
        Promise 才能 .then 调用
        如果 .then 指定的成功回调的返回值是一个 Promise 对象，就会把该 Promise 对象作为该 .then 的返回值了

        如果 .then 指定的成功的回调 (response) {} 或失败的回调 (error) {} 其中之一的返回值
          1 返回是非 Promise 值，那么外层 .then 返回的 Promise 实例状态就为成功的，值就为你返回的非 Promise 值
          2 返回是 Promise 值，就把这个 Promise 值作为外层 .then 的 Promise 实例的值了    
            如果返回是成功的 Promise 实例，数据为 1，则外层 .then 返回的 Promise 状态就为成功，值就为 1
            如果返回 Pending 的 Promise，则外层 .then 返回的也是 Pending 的 Promise
            如果成功回调中抛出了异常，则外层 .then 返回的 Promise 就是失败的，失败的原因就为抛出的异常

    */
    // 未优化版本
    // fetch(`https://api.github.com/search/users?q=${keyWord}`)
    //   .then(
    //     (response) => {
    //       // console.log("联系成功了", response);
    //       /*
    //         response.json() 返回 Promise
    //         如果获取数据成功则 Promise 也变成成功的状态，并保存数据
    //         如果获取数据失败了则 Promise 也变成失败的状态，并保存着失败原因
    //     */
    //       console.log("联系成功了: ");
    //       return response.json();
    //     },
    //     (error) => {
    //       console.log("联系失败了", error);
    //       /*
    //         return new Promise(() => {}); 用于中断 Promise 链
    //         如果断网了就走到这里，如果不 return new Promise(); 会返回 undefined，
    //         此时外层 .then 返回 Promise 但值是 undefined，这样到下一个 .then 就会
    //         走到成功的回调，这不是我们想要看到的
    //         通过 new Promise(() => {}) 这样就中断了 Promise 链使其不会往下走
    //        */
    //       return new Promise(() => {});
    //     }
    //   )
    //   .then(
    //     (response) => {
    //       console.log("获取数据成功了", response);
    //     },
    //     (error) => {
    //       console.log("获取数据失败了", error);
    //     }
    //   );

    // 优化 1 版本
    // fetch(`https://api.github.com/search/users?q=${keyWord}`)
    //   .then((response) => {
    //     console.log("联系成功了: ");
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log("获取数据成功了", response);
    //   })
    //   .catch((error) => {
    //     console.log("请求出错了", error);
    //   });

    // 优化 2 版本
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyWord}`
      );
      const data = await response.json();
      PubSub.publish("searchUser", {
        users: data["items"],
        isLoading: false,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      PubSub.publish("searchUser", { err: error.message, isLoading: false });
    }
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
