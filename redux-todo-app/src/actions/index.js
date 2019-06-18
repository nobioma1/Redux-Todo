import uuidV4 from 'uuid/v4';

export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const toggleCompleted = id => {
  return { type: TOGGLE_COMPLETED, payload: id };
};

export const ADD_TODO = 'ADD_TODO';
export const addTodo = title => {
  const payload = { id: uuidV4(), value: title, completed: false };
  return { type: ADD_TODO, payload };
};
