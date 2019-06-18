import React from 'react';
import { TodosContainer, Header } from './todosStyle';
import { connect } from 'react-redux';
import Todo from '../Todo';
import AddTodo from '../AddTodo';

const Todos = props => (
  <TodosContainer>
    <Header>
      <h1>Todos</h1>
    </Header>
    {props.todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
    <AddTodo />
  </TodosContainer>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(
  mapStateToProps,
  {},
)(Todos);
