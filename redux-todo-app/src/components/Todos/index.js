import React from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { TodosContainer, Header, Scrollable } from './todosStyle';
import Todo from '../Todo';
import AddTodo from '../AddTodo';

const now = Moment().format('MMMM Do YYYY');

const Todos = props => {
  const sortedTodos = props.todos.sort((a, b) => a.completed - b.completed);
  return (
    <TodosContainer>
      <Header>
        <h1>Todos</h1>
        <div>
          <p><strong>Today:</strong> {now}</p>
        </div>
      </Header>
      <Scrollable>
        {sortedTodos.length > 0 ? sortedTodos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        )) : <p>No todo, Add a Todo...</p>}
      </Scrollable>
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
