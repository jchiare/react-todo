import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import "./todo.css";

const buttonStyles = {
  flexShrink: 2,
  margin: "1em"
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      userInput: ""
    };
  }
  changeUserInput = value => {
    this.setState({
      userInput: value
    });
  };
  addToList = () => {
    const updated_list = this.state.list.concat(this.state.userInput);
    this.setState({
      list: updated_list,
      userInput: ""
    });
  };

  render() {
    return (
      <div>
        <div className="todo-list-container">
          <ul className="todo-list-ul">
            {this.state.list.map((item, index) => (
              <li key={index} className="item-container">
                <Card>{item}</Card>
              </li>
            ))}
          </ul>
        </div>
        <div className="add-section">
          <TextField
            value={this.state.userInput}
            label="Task"
            margin="normal"
            variant="outlined"
            onChange={e => this.changeUserInput(e.target.value)}
          />
          <Button
            style={buttonStyles}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => this.addToList()}
          >
            Add Item
          </Button>
        </div>
      </div>
    );
  }
}

export default TodoList;
