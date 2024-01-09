// Note: 这个文件不能用 ES6 js，要用 CJS 方式

// react 脚手架初始化时候已经下载好 http-proxy-middleware 库
const { createProxyMiddleware } = require("http-proxy-middleware");

/*
    凡是带 /api1 的都会走代理，(下边 /api2 的同理)
    changeOrigin 让服务器知道请求是从哪里发出的
        true 时，
    pathRewrite: { "^/api1": "" } 让 /api1 替换为空字符串
      即 url=http://localhost:3000/api1/students 变为 url=http://localhost:3000/students
*/
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      // 遇见 /api1 前缀的请求，就会触发该代理配置
      target: "http://localhost:5000", // 请求转发给谁
      /*
        控制服务器收到的请求头中 Host 字段的值
        changeOrigin: true 可以欺骗服务器让其认为是来自 localhost:5000，
        否则显示 Host 为 localhost:3000
        可以不写，但最好设置为 true
       */
      changeOrigin: true,
      /*
        重写请求路径，这个必须写
        将 http://localhost:5000/api1/students 改为 http://localhost:5000/students 
      */
      pathRewrite: { "^/api1": "" },
    }),
    createProxyMiddleware("/api2", {
      target: "http://localhost:5002", // 请求转发给谁
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    })
  );
};
