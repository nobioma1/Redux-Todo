const initialTodos = [
  {
    id: 'd7ea703b-a013-4107-8c03-7523f0bd4dd1',
    value: 'Walk the dog.',
    completed: false,
  },
  {
    id: 'cb8bc9b0-ffdd-4dc5-9ffd-4428b57c01a2',
    value: 'Read about Redux.',
    completed: true,
  },
  {
    id: '62f9c1f6-7b4f-4e59-816e-4ef183270b34',
    value: 'Eat Food.',
    completed: false,
  },
  {
    id: 'bb4a9214-74ea-4822-b8b3-c863872ee958',
    value: 'Sweep Room.',
    completed: true,
  },
];

const mainReducer = (state = initialTodos, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
