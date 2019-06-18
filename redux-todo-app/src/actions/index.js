export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const toggleCompleted = id => {
  return { type: TOGGLE_COMPLETED, payload: id };
};
