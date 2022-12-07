import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends Component {
  state = {
    tasks: [
      {
        text: 'Buy nilk',
        done: true,
        id: 1,
      },
      {
        text: 'Get sugar',
        done: false,
        id: 2,
      },
      {
        text: 'Drive car',
        done: true,
        id: 3,
      },
    ],
  };
  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {this.state.tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
