/**
 * Reusable contained button component.
 * @author Andrew Jarombek
 * @since 1/12/2020
 */

import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';

import styles from './styles';
import AJBaseButton from '../AJBaseButton/AJBaseButton';

const useStyles = createUseStyles(styles);

/**
 * Component for a button that displays text and is contained within a solid color.
 * @param children The contents of the button.
 * @param onClick An action that occurs when the button is clicked.
 * @param disabled Whether the button is clickable or not.
 * @param className Custom class attribute(s) attached to the component.
 * @param ref A ref forwarded through the component to the AJBaseButton component.
 * @return {*} React elements representing a contained button.
 */
const AJContainedButton = forwardRef(({children, onClick, disabled=false, className}, ref) => {
  const classes = useStyles();

  const enabledClasses = [
    'aj-contained-button',
    classes.ajContainedButton,
    classes.ajContainedButtonEnabled
  ];

  const disabledClasses = [
    'aj-contained-button',
    classes.ajContainedButton,
    classes.ajContainedButtonDisabled
  ];

  return (
    <AJBaseButton
      onClick={onClick}
      disabled={disabled}
      enabledClasses={enabledClasses}
      disabledClasses={disabledClasses}
      className={className}
      ref={ref}>

      {children}
    </AJBaseButton>
  );
});

AJContainedButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default AJContainedButton;
