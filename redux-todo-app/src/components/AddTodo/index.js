import React, { Component } from 'react';
import { AddTodoContainer } from './addTodoStyle';

class AddTodo extends Component {
  render() {
    return (
      <AddTodoContainer>
        <form>
          <input placeholder="Add Todo..." />
          <button>Add</button>
        </form>
      </AddTodoContainer>
    );
  }
}

export default AddTodo;
