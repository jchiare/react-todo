import React, { Component } from "react";
import TodoList from "./components/todo/todoComponent";
import Tooltip from "@material-ui/core/Tooltip";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col">
            <div className="header-name">
              <h2 className="list-name">
                Todo List
                <span className="info-icon">
                  <Tooltip
                    title="All the stuff you 'must' do -- commitments, obligations, things that have to be done"
                    placement="right-start"
                  >
                    <i className="material-icons">info</i>
                  </Tooltip>
                </span>
              </h2>
            </div>
            <TodoList />
          </div>
          <div className="col">
            <div className="header-name">
              <h2 className="list-name">
                Watch List
                <span className="info-icon">
                  <Tooltip
                    title="All the stuff going on in your life that you have to follow up on, wait for someone else to get back to you on, remind yourself of in the future, or otherwise remember."
                    placement="right-start"
                  >
                    <i className="material-icons">info</i>
                  </Tooltip>
                </span>
              </h2>
            </div>
            <TodoList />
          </div>
          <div className="col">
            <div className="header-name">
              <h2 className="list-name">
                Later List
                <span className="info-icon">
                  <Tooltip
                    title="Everything else -- everything you might want to do or will do when you have time or wish you could do."
                    placement="right-start"
                  >
                    <i className="material-icons">info</i>
                  </Tooltip>
                </span>
              </h2>
            </div>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
