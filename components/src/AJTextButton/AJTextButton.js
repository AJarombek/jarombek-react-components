/**
 * Reusable text button component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React from 'react';
import PropTypes from 'prop-types';

const AJTextButton = ({children, onClick=() => {}, disabled=false}) => {
  const className = "aj-text-button";
  const disabledClassName = disabled ? " aj-text-button-disabled" : " aj-text-button-enabled";

  return (
    <div className={`${className}${disabledClassName}`} onClick={onClick}>
      <button disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

AJTextButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default AJTextButton;
