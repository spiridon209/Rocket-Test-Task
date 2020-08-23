import styled from 'styled-components';

export const StyledPostsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 15px;
  flex-wrap: wrap;
  border: 1px solid #cccc;
  margin-bottom: 20px;
  width: 100%;
  min-height: 150px;
  background-color: #bb40ff;
  cursor: pointer;
`;
