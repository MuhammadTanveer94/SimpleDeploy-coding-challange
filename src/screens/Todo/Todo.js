import React, { Component } from "react";
import Swal from "sweetalert2";

import "./Todo.css";
import { InputText } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
} from "../../service/todoService";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      addLoading: false,
      isLoading: false,
      inputText: "",
      editId: null,
      todoList: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getTodo()
      .then(res => {
        this.setState({ todoList: res });
      })
      .catch(err => {
        //handle error here
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddTodo = () => {
    const { inputText, todoList, editId } = this.state;

    if (inputText.trim().length === 0) {
      Swal.fire("Please enter some text");
      return;
    }

    this.setState({ addLoading: true });

    if (editId) {
      updateTodo(editId, inputText)
        .then(res => {
          let updatedList = todoList.map(todo => {
            if (todo.id === res.id) {
              return {
                ...todo,
                title: res.title
              };
            }
            return todo;
          });
          this.setState({ todoList: updatedList, editId: null, inputText: "" });
        })
        .finally(() => {
          this.setState({ addLoading: false });
        });
    } else {
      addTodo(inputText)
        .then(res => {
          todoList.push(res);
          this.setState({
            inputText: "",
            todoList
          });
        })
        .catch(err => {
          // handle error here
        })
        .finally(() => {
          this.setState({ addLoading: false });
        });
    }
  };

  deleteListItem = id => {
    deleteTodo(id).then(res => {
      const updatedTodo = this.state.todoList.filter(todo => todo.id !== res);
      this.setState({ todoList: updatedTodo });
    });
  };

  editListItem = todo => {
    const { title, id } = todo;

    this.setState({
      editId: id,
      inputText: title
    });
  };

  render() {
    const { inputText, todoList, isLoading, addLoading, editId } = this.state;
    let btnText = editId ? "Update" : "Add";
    return (
      <div>
        <Header />

        <div className="inputContent col-4 col-md-4 col-lg-4">
          <div className="input-group ">
            <InputText
              onChange={this.handleTextChange}
              name="inputText"
              value={inputText}
              placeholder="create your list here"
            />
            <div className="input-group-append">
              <Button
                onClick={this.handleAddTodo}
                disabled={isLoading}
                value={
                  addLoading ? <Loader classes="spinner-border-sm" /> : btnText
                }
              />
            </div>
          </div>
        </div>

        <br />
        <br />
        <ul className="list-group col-8 col-md-8 col-lg-8">
          {isLoading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : todoList.length > 0 ? (
            todoList.map(todo => (
              <li
                className={`list-group-item ${
                  todo.id === editId ? "edit" : ""
                }`}
                key={todo.id}
              >
                {todo.title}
                <Button
                  onClick={() => this.deleteListItem(todo.id)}
                  value="Delete"
                  type="danger"
                />
                <Button
                  onClick={() => this.editListItem(todo)}
                  value="Edit"
                  type="success"
                />
              </li>
            ))
          ) : (
            <div className="no-data-text ">No todos avalable</div>
          )}
        </ul>
      </div>
    );
  }
}

export default Todos;
