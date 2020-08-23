import React from 'react';
import PropTypes from 'prop-types';
import { InputDescription, StyledInput } from './styles';

const Input = ({ inputValue, inputChangeHandler, descriptionText }) => {
  return (
    <>
      {descriptionText ? <InputDescription>{descriptionText}</InputDescription> : null}
      <StyledInput type="text" value={inputValue} onChange={inputChangeHandler} />
    </>
  );
};

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  descriptionText: PropTypes.string.isRequired,
};

export default Input;
