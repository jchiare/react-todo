import React, { Component } from "react";
import TodoList from "./components/todo/todoComponent";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col">
          <TodoList />
        </div>
        <div className="col">
          <TodoList />
        </div>
        <div className="col">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
