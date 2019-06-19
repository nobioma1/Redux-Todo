export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todo-redux');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch  {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todo-redux', serializedState)
  } catch {
    return undefined;
  }
};
