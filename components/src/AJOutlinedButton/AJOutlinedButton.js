/**
 * Reusable outlined button component.
 * @author Andrew Jarombek
 * @since 1/6/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';

import styles from './styles';
import AJBaseButton from '../AJBaseButton/AJBaseButton';

const useStyles = createUseStyles(styles);

/**
 * Component for a button that displays text.
 * @param children The contents of the text button.
 * @param onClick An action that occurs when the button is clicked.
 * @param disabled Whether the button is clickable or not.
 * @return {*} React elements representing a text button.
 */
const AJOutlinedButton = ({children, onClick, disabled=false}) => {
  const classes = useStyles();

  const enabledClasses = [
    'aj-outlined-button',
    classes.ajOutlinedButton,
    classes.ajOutlinedButtonEnabled
  ];

  const disabledClasses = [
    'aj-outlined-button',
    classes.ajOutlinedButton,
    classes.ajOutlinedButtonDisabled
  ];

  return (
    <AJBaseButton
      onClick={onClick}
      disabled={disabled}
      enabledClasses={enabledClasses}
      disabledClasses={disabledClasses}>

      {children}
    </AJBaseButton>
  );
};

AJOutlinedButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default AJOutlinedButton;
