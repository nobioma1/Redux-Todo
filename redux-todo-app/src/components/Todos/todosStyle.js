import styled from 'styled-components';

export const TodosContainer = styled.div`
  position: absolute;
  background-color: #fefeff;
  width: 450px;
  height: 600px;
  min-height: 550px;
  border-radius: 5px;
  box-shadow: 3px 4px 5px -3px rgba(0, 0, 0, 0.75);
`;

export const Header = styled.header`
  background-color: #e5e5ff;
  height: 80px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom: 1px solid #d2d3e3;
  padding: 10px;
  color: #5a5ee7;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    font-size: 30px;
    text-decoration: underline;
    color: #F57173;
  }
`;

export const Scrollable = styled.div`
  overflow-y: auto;
  height: 475px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
