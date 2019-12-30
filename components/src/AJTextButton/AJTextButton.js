/**
 * Reusable text button component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

/**
 * Component for a button that displays text.
 * @param children The contents of the text button.
 * @param onClick An action that occurs when the button is clicked.
 * @param disabled Whether the button is clickable or not.
 * @return {*} React elements representing a text button.
 */
const AJTextButton = ({children, onClick, disabled=false}) => {
  const classes = useStyles();

  const className = disabled ?
    classnames(classes.ajTextButton, classes.ajTextButtonDisabled) :
    classnames(classes.ajTextButton, classes.ajTextButtonEnabled);

  const onClickAction = disabled ? null : onClick;

  return (
    <div className={className} onClick={onClickAction}>
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
