import { ADD, REMOVE, TOGGLE } from './constants';

export const addAction = (task) => ({
  type: ADD,
  payload: task
});

export const removeAction = (taskId) => ({
  type: REMOVE,
  payload: taskId
});

export const toggleAction = (taskId) => ({
  type: TOGGLE,
  payload: taskId
});