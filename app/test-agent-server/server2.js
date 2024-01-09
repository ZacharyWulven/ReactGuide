const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("有人请求了 server 2");
  next();
});

app.get("/cars", (request, response) => {
  const students = [
    { id: "001", name: "奔驰", price: 1800 },
    { id: "002", name: "宾利", price: 2800 },
    { id: "003", name: "法拉利", price: 3500 },
  ];
  response.send(students);
});

app.listen(5002, (err) => {
  if (!err) {
    console.log(
      "server 2 启动成功了，请求汽车信息地址为 http://localhost:5002/students"
    );
  }
});
