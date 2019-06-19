import styled from 'styled-components';

export const TodoItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d2d3e3;
  border-top: 0.5px solid #d2d3e3;
  padding-right: 10px;

  text-decoration: ${props => (props.isComplete ? 'line-through' : 'none')};
  opacity: ${props => (props.isComplete ? '.5' : '1')};

  svg {
    &:hover {
      color: crimson;
    }
  }
`;

export const TodoText = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    border-left: 4px solid #5a5ee7;
  }

  p {
    margin: 0 10px;
  }
`;
