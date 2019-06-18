import React from 'react';
import { TodoItem, TodoText } from './todoStyle';
import { FaTrash } from 'react-icons/fa';

const Todo = () => (
    <TodoItem>
      <TodoText>
        <input type="checkbox" />
        <p>Morning Run</p>
      </TodoText>
      <FaTrash />
    </TodoItem>
);

export default Todo;
