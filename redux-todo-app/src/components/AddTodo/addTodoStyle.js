import styled from 'styled-components';

export const AddTodoContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  border-top: 0.5px solid #d2d3e3;

  form {
    width: 100%;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-around;

    input {
      height: 80%;
      border: ${props => (props.err ? '1px solid red' : '1px solid #d2d3e3')};
      border-radius: 3px;
      font-size: 12px;
      padding: 0 10px;
      width: 80%;

      &:focus {
        outline: none;
      }
    }

    button {
      border: 1px solid green;
      width: 13%;
      padding: 5px;
      border-radius: 3px;
      transition: 0.3s ease-in-out;

      &:focus {
        outline: none;
      }

      &:hover {
        border: 1px solid #5a5ee7;
        color: #fefeff;
        background-color: #5a5ee7;
      }
    }
  }
`;
