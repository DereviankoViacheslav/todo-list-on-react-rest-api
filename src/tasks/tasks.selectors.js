import { createSelector } from 'reselect';

export const tasksListSelector = (state) => {
  return state.tasks.tasksList;
};

export const sortedTasksListSelector = createSelector(
  [tasksListSelector],
  tasksList => {
    return tasksList
      .map((task) => {
        return {
          ...task,
          craetedAt: new Date(task.craetedAt),
          completionDate: new Date(task.completionDate),
        };
      })
      .sort((a, b) => b.craetedAt - a.craetedAt)
      .sort((a, b) => b.completionDate - a.completionDate)
      .sort((a, b) => a.done - b.done)
  }
);