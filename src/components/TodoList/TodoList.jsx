import React from 'react';
import TasksList from '../TasksList';
import CreateTaskInput from '../CreateTaskInput';
import MockApiService from '../../services/mockApiService';
import './TodoList.scss';

class App extends React.Component {
  state = { tasks: [] };
  mockApiService = new MockApiService();

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    this.mockApiService.getResource()
      .then(tasks => {
        this.setState({ tasks });
      });
  }

  onCreate = (text) => {
    this.mockApiService.addTask(text)
      .then(() => this.fetchTasksList());
  }

  onDelete = (taskId) => {
    this.mockApiService.deleteTask(taskId)
      .then(() => this.fetchTasksList());
  }

  onToggleDone = (taskId) => {
    this.mockApiService.setTaskStatus(taskId)
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

export default App;