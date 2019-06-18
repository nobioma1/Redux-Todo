import styled from 'styled-components';

export const TodoItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #D2D3E3;
  border-top: 0.5px solid #D2D3E3;
`;

export const TodoText = styled.div`
  width: 90%;
  display: flex;
  align-items: center;

  p {
    margin: 0 10px;
  }
`;
