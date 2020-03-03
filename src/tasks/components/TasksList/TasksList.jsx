import './TasksList.scss';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../../tasks.actions';
import { sortedTasksListSelector } from '../../tasks.selectors';
import Task from '../Task';
import PropTypes from 'prop-types';

const TasksList = ({ tasks, deleteTask, updateTask, getTasksList }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <Task key={task.id} {...task} onDelete={deleteTask} onToggleDone={updateTask} />
        );
      })}
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

const mapDispatchToProps = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);