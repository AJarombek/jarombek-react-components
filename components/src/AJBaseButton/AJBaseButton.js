/**
 * Generic base button component that other specialized buttons are built upon.
 * @author Andrew Jarombek
 * @since 1/10/2020
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

/**
 * Component for a generic button.
 * @param children The contents of the button.
 * @param onClick An action that occurs when the button is clicked.
 * @param disabled Whether the button is clickable or not.
 * @param enabledClasses Classes applied to the button when it is enabled.
 * @param disabledClasses Classes applied to the button when it is disabled.
 * @param className Custom class attribute(s) attached to the component.
 * @param ref A ref forwarded through the component to the <div> DOM element.
 * @return {*} React elements representing a text button.
 */
const AJBaseButton = forwardRef(
  ({ children, onClick, disabledClasses, enabledClasses, disabled = false, className }, ref) => {
    const classes = useStyles();

    const finalClassNames = disabled
      ? classnames(classes.ajBaseButton, classes.ajBaseButtonDisabled, disabledClasses, className)
      : classnames(classes.ajBaseButton, classes.ajBaseButtonEnabled, enabledClasses, className);

    const onClickAction = disabled ? null : onClick;

    return (
      <div className={finalClassNames} onClick={onClickAction} ref={ref}>
        <button type="button" disabled={disabled}>
          {children}
        </button>
      </div>
    );
  },
);

AJBaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  enabledClasses: PropTypes.array,
  disabledClasses: PropTypes.array,
  className: PropTypes.string,
};

export default AJBaseButton;
