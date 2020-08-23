import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  border: 1px solid #cccc;
  min-width: 30%;
  border-radius: 5px;
  min-height: 18px;
  margin: 15px 10px 15px 0;
  outline: none;
  &:focus {
    border: 1px solid #29b0d9;
  }
`;

export const InputDescription = styled.p`
  margin-right: 10px;
`;
