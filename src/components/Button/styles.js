import styled from 'styled-components';

const StyledButton = styled.button`
  height: 25px;
  line-height: 1em;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  user-select: none;
  color: rgb(0, 0, 0);
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-top-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  background: linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240));
  box-shadow: 0 0 3px rgba(0, 0, 0, 0) inset, 0 1px 1px 1px rgba(255, 255, 255, 0.2), 0 -1px 1px 1px rgba(0, 0, 0, 0);
  transition: 0.2s ease-in-out;
  &:hover:not(:active) {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0) inset, 0 1px 1px 1px rgba(0, 255, 255, 0.5),
      0 -1px 1px 1px rgba(0, 255, 255, 0.5);
  }
  &:active {
    background: linear-gradient(rgb(250, 250, 250), rgb(235, 235, 235));
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset, 0 1px 1px 1px rgba(255, 255, 255, 0.4),
      0 -1px 1px 1px rgba(0, 0, 0, 0.1);
  }
`;

export default StyledButton;
