// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!!!
//         </a>
//       </header>
//     </div>
//   );
// }

/*
    import React, { Component } 这么引入说明 react 中有默认暴露，和部分暴露
    { Component } 将部分暴露的 Component 引入
    React 为默认暴露
 */
import React, { Component } from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome";

// 暴露并定义 App 组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}

// 暴露 App 组件
// export default App;
