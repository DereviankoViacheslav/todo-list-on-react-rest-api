import React from 'react';
import PropTypes from 'prop-types';
import './CreateTaskInput.scss';

class CreateTaskInput extends React.Component {
  state = {
    taskText: '',
  }

  handleChange = (event) => {
    this.setState({ taskText: event.target.value })
  }

  handleCreateTask = () => {
    this.props.onCreate(this.state.taskText);
    this.setState({ taskText: '' })
  }

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          value={this.state.taskText}
          onChange={this.handleChange}
          type="text"
        />
        <button
          onClick={this.handleCreateTask}
          className="btn create-task__btn"
        >
          Create
        </button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default CreateTaskInput;