import * as types from './actionTypes';

export const addTask = task => {
  return {
    type: types.ADD_TASK,
    payload: task,
  };
};
export const deleteTask = index => {
  return {
    type: types.DELETE_TASK,
    payload: index,
  };
};
export const editTask = updatedTask => {
  return {
    type: types.EDIT_TASK,
    payload: updatedTask,
  };
};
