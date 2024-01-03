import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}
