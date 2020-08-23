import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = ({ type, name, handler }) => {
  return (
    <StyledButton type={type} onClick={handler}>
      {name}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Button;
