import React from 'react';
import PropTypes from 'prop-types';
import './Task.scss';

function Task({ id, done, text, onDelete, onToggleDone }) {
  const classes = `list-item${done ? ' list-item_done' : ''}`;

  return (
    <li className={classes}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => onToggleDone(id)}
      />
      <span className="list-item__text" >{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
}

export default Task;