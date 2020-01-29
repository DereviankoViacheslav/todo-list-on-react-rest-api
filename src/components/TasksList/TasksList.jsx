import React from 'react';
import Task from '../Task';
import PropTypes from 'prop-types';
import './TasksList.scss';

function TasksList({ tasks, onDelete, onToggleDone }) {
  const tasksList = [...tasks]
    .sort((a, b) => a.done - b.done)
    .map((task) => {
      return (
        <Task key={task.id} {...task} onDelete={onDelete} onToggleDone={onToggleDone} />
      );
    });

  return (
    <ul className="list">
      {tasksList}
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
}

export default TasksList;