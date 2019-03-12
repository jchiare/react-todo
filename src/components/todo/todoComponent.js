import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import "./todo.css";

const buttonStyles = {
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
  addToList = e => {
    e.preventDefault();
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
            {this.state.list.length > 0 ? (
              this.state.list.map((item, index) => (
                <li key={index} className="item-container">
                  <Card className="item-text">{item}</Card>
                </li>
              ))
            ) : (
              <p>Empty list</p>
            )}
          </ul>
        </div>
        <div className="add-section">
          <form className="add-form">
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
              onClick={e => this.addToList(e)}
              type="submit"
              tabIndex="-1"
            >
              Add Item
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
