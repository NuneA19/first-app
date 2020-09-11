import React, { Component } from "react";
import Task from "./Task";

class ToDo extends Component {
  state = {
    task: "",
    tasks: [],
  };

  changeTask = (e) => {
    let task = e.target.value;
    this.setState(() => ({ task }));
  };

  addTask = () => {
    let { tasks } = this.state;
    this.state.tasks.push(this.state.task);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeTask}></input>
        <button onClick={this.addTask}>Add</button>
        <Task tasks={this.state.tasks} />
      </div>
    );
  }
}

export default ToDo;
