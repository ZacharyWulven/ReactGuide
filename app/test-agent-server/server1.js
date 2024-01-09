const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("有人请求了 server 1");
  console.log("请求来自于", request.get("Host"));
  console.log("请求的地址是", request.url);

  next();
});

app.get("/students", (request, response) => {
  const students = [
    { id: "001", name: "tom", age: 18 },
    { id: "002", name: "jerry", age: 28 },
    { id: "003", name: "tony", age: 35 },
  ];
  response.send(students);
});

app.listen(5000, (err) => {
  if (!err) {
    console.log(
      "server 1 启动成功了，请求学生信息地址为 http://localhost:5000/students"
    );
  }
});
