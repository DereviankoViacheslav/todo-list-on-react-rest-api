import React from 'react';
import TasksList from '../TasksList';
import CreateTaskInput from '../CreateTaskInput';
import { addTask, deleteTask, setTaskStatus, getResource } from '../../services/mockApiService';
import './TodoList.scss';

class TodoList extends React.Component {
  state = { tasks: [] };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    getResource()
      .then(tasks => {
        this.setState({ tasks });
      });
  }

  onCreate = (text) => {
    addTask(text)
      .then(() => this.fetchTasksList());
  }

  onDelete = (taskId) => {
    deleteTask(taskId)
      .then(() => this.fetchTasksList());
  }

  onToggleDone = (taskId) => {
    setTaskStatus(taskId)
      .then(() => this.fetchTasksList());
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.onCreate} />
          <TasksList
            tasks={this.state.tasks}
            onDelete={this.onDelete}
            onToggleDone={this.onToggleDone}
          />
        </main>
      </>
    );
  }
}

export default TodoList;