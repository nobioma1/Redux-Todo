import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddTodoContainer } from './addTodoStyle';
import { addTodo } from '../../actions';

class AddTodo extends Component {
  state = {
    title: '',
    err: false,
  };

  addTodo = e => {
    e.preventDefault();
    const title = this.state.title.trim();
    if (title === '') {
      return this.setState({ err: true });
    }
    this.props.addTodo(title);
    return this.setState({ title:'' });
  };

  inputHandler = e => {
    e.preventDefault();
    this.setState({ err: false, title: e.target.value });
  };

  render() {
    return (
      <AddTodoContainer err={this.state.err}>
        <form onSubmit={this.addTodo}>
          <input
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.inputHandler}
          />
          <button>Add</button>
        </form>
      </AddTodoContainer>
    );
  }
}

export default connect(
  null,
  { addTodo },
)(AddTodo);
