import styled from 'styled-components';

export const TodoItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #D2D3E3;
  border-top: 0.5px solid #D2D3E3;
  padding-right: 10px;
`;

export const TodoText = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  
  &:hover {
    border-left: 4px solid #5A5EE7;
  }

  p {
    margin: 0 10px;
  }
`;
