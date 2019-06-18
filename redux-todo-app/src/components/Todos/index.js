import React from 'react';
import { TodosContainer, Header } from './todosStyle';
import Todo from '../Todo';
import AddTodo from '../AddTodo';

const Todos = () => (
  <TodosContainer>
    <Header>
      <h1>Todos</h1>
    </Header>
    <Todo />
    <AddTodo />
  </TodosContainer>
);

export default Todos;
