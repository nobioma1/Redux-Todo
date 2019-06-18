import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoItem, TodoText } from './todoStyle';
import { FaTrash } from 'react-icons/fa';
import { toggleCompleted } from '../../actions';

class Todo extends Component {
  changeChecked = id => {
    this.props.toggleCompleted(id);
  };

  render() {
    const { id, value, completed } = this.props.todo;
    console.log(completed)
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
        <FaTrash />
      </TodoItem>
    );
  }
}

export default connect(
  null,
  { toggleCompleted },
)(Todo);
