import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoItem, TodoText } from './todoStyle';
import { FaTrash } from 'react-icons/fa';
import { toggleCompleted, deleteTodo } from '../../actions';

class Todo extends Component {
  changeChecked = id => {
    this.props.toggleCompleted(id);
  };

  render() {
    const { id, value, completed } = this.props.todo;
    return (
      <TodoItem isComplete={completed}>
        <TodoText>
          <input
            type="checkbox"
            checked={completed}
            value={completed}
            onChange={() => this.changeChecked(id)}
          />
          <p>{value}</p>
        </TodoText>
        <FaTrash onClick={() => this.props.deleteTodo(id)} />
      </TodoItem>
    );
  }
}

export default connect(
  null,
  { toggleCompleted, deleteTodo },
)(Todo);
