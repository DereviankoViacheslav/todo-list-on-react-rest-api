import './CreateTaskInput.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as tasksActions from '../../tasks.actions';

const CreateTaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleCreateTask = () => {
    addTask(taskName);
    setTaskName('');
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        type="text"
      />
      <button
        onClick={handleCreateTask}
        className="btn create-task__btn"
      >
        Create
      </button>
    </div>
  );
}

CreateTaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addTask: tasksActions.addTask,
};

export default connect(null, mapDispatchToProps)(CreateTaskInput);