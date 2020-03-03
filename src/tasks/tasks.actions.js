import * as tasksGateway from './tasksGateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecieved = (tasksList) => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: { tasksList },
  };
};

export const getTasksList = () => {
  const thunkAction = (dispatch) => {
    tasksGateway.fetchTasks()
      .then(tasksList => {
        dispatch(tasksListRecieved(tasksList))
      });
  };
  return thunkAction;
};

export const updateTask = (taskId) => {
  const thunkAction = (dispatch, getState) => {
    const tasks = tasksListSelector(getState());
    const task = tasks.find(({ id }) => id === taskId);
    const completionDate = !task.done ? new Date().toISOString() : null;
    const newTask = {
      ...task,
      done: !task.done,
      completionDate,
    };
    tasksGateway.updateTask(newTask)
      .then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const addTask = (text) => {
  const thunkAction = (dispatch) => {
    const task = {
      text,
      done: false,
      craetedAt: new Date().toISOString(),
      completionDate: null,
    };
    tasksGateway.addTask(task)
      .then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const deleteTask = (taskId) => {
  const thunkAction = (dispatch) => {
    tasksGateway.deleteTask(taskId)
      .then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};