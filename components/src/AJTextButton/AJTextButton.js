/**
 * Reusable text button component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import styles from './styles';
import AJBaseButton from '../AJBaseButton/AJBaseButton';

const useStyles = createUseStyles(styles);

/**
 * Component for a button that displays text.
 * @param children The contents of the text button.
 * @param onClick An action that occurs when the button is clicked.
 * @param disabled Whether the button is clickable or not.
 * @param ref A ref forwarded through the component to the AJBaseButton component.
 * @param className Custom class attribute(s) attached to the component.
 * @return {*} React elements representing a text button.
 */
const AJTextButton = forwardRef(({ children, onClick, disabled = false, className }, ref) => {
  const classes = useStyles();

  const enabledClasses = ['aj-text-button', classes.ajTextButton, classes.ajTextButtonEnabled];

  const disabledClasses = ['aj-text-button', classes.ajTextButton, classes.ajTextButtonDisabled];

  return (
    <AJBaseButton
      onClick={onClick}
      disabled={disabled}
      enabledClasses={enabledClasses}
      disabledClasses={disabledClasses}
      ref={ref}
      className={className}
    >
      {children}
    </AJBaseButton>
  );
});

AJTextButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default AJTextButton;
