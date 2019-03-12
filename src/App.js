import React, { Component } from "react";
import TodoList from "./components/todo/todoComponent";
import HeaderSection from "./header/header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderSection />
        </header>
        <div className="container">
          <div className="col">
            <h2 className="list-name">Todo List</h2>
            <TodoList />
          </div>
          <div className="col">
            <h2 className="list-name">Watch List</h2>
            <TodoList />
          </div>
          <div className="col">
            <h2 className="list-name">Later List</h2>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
