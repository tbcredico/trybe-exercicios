import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ onClick, children, type = 'button', className = '' }) {
  return (
    <button type={ type } className={ `btn ${className}` } onClick={ onClick }>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
