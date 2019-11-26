/**
 * Reusable text button component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for a button that displays text.
 * @param children The contents of the text button.
 * @param onClick An action that occurs when the button is clicked.
 * @param disabled Whether the button is clickable or not.
 * @return {*} React elements representing a text button.
 */
const AJTextButton = ({children, onClick, disabled=false}) => {
  const className = "aj-text-button";
  const disabledClassName = disabled ? " aj-text-button-disabled" : " aj-text-button-enabled";

  return (
    <div className={`${className}${disabledClassName}`} onClick={onClick}>
      <button type="button" disabled={disabled}>
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
