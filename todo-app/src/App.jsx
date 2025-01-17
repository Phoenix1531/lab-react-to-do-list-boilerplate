import React from "react";
import "./App.css";
import Todoitems from "../components/todoitems";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }

  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0) {
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input],
      });
    }
  };

  updateItem = (newItem, index) => {
    let arr = this.state.todoList;
    arr.splice(index, 1, newItem);
    this.setState({
      todoList: arr,
    });
  };
  deleteItem = (newItem, index) => {
    let arr = this.state.todoList;
    arr.splice(index, 1);
    this.setState({
      todoList: arr,
    });
  };

  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button>A D D</button>
        </form>

        <div className="todo">
          <h2>⬇😎 L I S T 😎⬇</h2>
          {this.state.todoList.length == 0 ? (
            <h2>list is empty</h2>
          ) : (
            this.state.todoList.map((e, i) => {
              return (
                <Todoitems
                  e={e}
                  i={i}
                  deleteItem={this.deleteItem}
                  updateItem={this.updateItem}
                />
              );
            })
          )}
        </div>
      </>
    );
  }
}
