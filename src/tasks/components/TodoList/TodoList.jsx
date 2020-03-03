import './TodoList.scss';
import React from 'react';
import TasksList from '../TasksList';
import CreateTaskInput from '../CreateTaskInput';

const TodoList = () => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput />
        <TasksList />
      </main>
    </>
  );
}

export default TodoList;