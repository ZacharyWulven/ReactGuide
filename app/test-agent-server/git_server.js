const express = require("express");
const app = express();
const axios = require("axios");

// 请求地址 http://localhost:3000/search/users?q=??

app.use((request, response, next) => {
  console.log("有人请求了 server 1");
  console.log("请求来自于", request.get("Host"));
  console.log("请求的地址是", request.url);

  next();
});

// 请求路径为 /search/users
app.get("/search/users", (request, res) => {
  const { q } = request.query;
  axios({
    url: "https://api.github.com/search/users",
    params: { q },
  }).then((response) => {
    res.json(response.data);
  });
  // response.send(students);
});

app.listen(5000, (err) => {
  if (!err) {
    console.log(
      "server 启动成功了，请求 git 用户信息地址为 http://localhost:5000/search/users?q=??"
    );
  }
});
