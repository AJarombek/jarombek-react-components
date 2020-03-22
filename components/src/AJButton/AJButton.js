/**
 * Wrapper component for buttons of multiple different types.  AJButton can be used instead of
 * AJContainedButton, AJOutlinedButton, and AJTextButton.
 * @author Andrew Jarombek
 * @since 1/12/2020
 */

import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {AJContainedButton, AJOutlinedButton, AJTextButton} from '../../src';

/**
 * Component for a button which can be one of many different types.
 * @param type Whether the button is contained, outlined, or only text.
 * @param children The contents of the button.
 * @param onClick An action that occurs when the button is clicked.
 * @param disabled Whether the button is clickable or not.
 * @param ref A ref forwarded through the component to the Button components.
 * @return {*} React elements representing a contained, outlined, or text button.
 */
const AJButton = forwardRef(({type, children, onClick, disabled=false}, ref) => {

  switch (type) {
    case 'contained':
      return (
        <AJContainedButton
          onClick={onClick}
          disabled={disabled}
          ref={ref}>

          {children}
        </AJContainedButton>
      );
    case 'outlined':
      return (
        <AJOutlinedButton
          onClick={onClick}
          disabled={disabled}
          ref={ref}>

          {children}
        </AJOutlinedButton>
      );
    case 'text':
      return (
        <AJTextButton
          onClick={onClick}
          disabled={disabled}
          ref={ref}>

          {children}
        </AJTextButton>
      );
    default:
      return null;
  }
});

AJButton.propTypes = {
  type: PropTypes.oneOf(['contained', 'outlined', 'text']).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default AJButton;
