/**
 * Reusable text button component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React from 'react';
import PropTypes from 'prop-types';

const AJTextButton = ({children, onClick=() => {}, disabled=false}) => {
  return (
    <div className="aj-text-button">
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

AJTextButton.propTypes = {
  children: PropTypes.node.required,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default AJTextButton;
