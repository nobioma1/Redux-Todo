import React from 'react';
import { TodosContainer, Header } from './todosStyle';
import { connect } from 'react-redux';
import Todo from '../Todo';
import AddTodo from '../AddTodo';

const Todos = props => {
  const sortedTodos = props.todos.sort((a, b) => a.completed - b.completed);
  return (
    <TodosContainer>
      <Header>
        <h1>Todos</h1>
      </Header>
      {sortedTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <AddTodo />
    </TodosContainer>
  );
};

const mapStateToProps = state => ({
  todos: state,
});

export default connect(
  mapStateToProps,
  {},
)(Todos);
