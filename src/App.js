import React, { Component } from "react";
import TodoColumn from "./components/column/todoColumn";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col">
            <TodoColumn
              header="Todo List"
              info="All the stuff you 'must' do -- commitments, obligations, things that have to be done"
            />
          </div>
          <div className="col">
            <TodoColumn
              header="Watch List"
              info="All the stuff going on in your life that you have to follow up on, wait for someone else to get back to you on, remind yourself of in the future, or otherwise remember"
            />
          </div>
          <div className="col">
            <TodoColumn
              header="Later List"
              info="Everything else -- everything you might want to do or will do when you have time or wish you could do"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
