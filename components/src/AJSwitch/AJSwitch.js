/**
 * Reusable switch that can be toggled between an 'on' and 'off' state.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

/**
 * Component representing an off and on switch.  The user can plug in custom logic which will occur
 * when the off/on state changes.
 * @param onChange Function that is called when the switch is toggled.  The function takes a single
 * boolean argument, whose value is {@code true} if the switch is on and {@code false} if the
 * switch is off.
 * @param initialState The initial on/off state of the switch.
 * @param disabled Whether clicking on the switch changes its state.
 * @return {*} React elements representing a toggleable switch.
 */
const AJSwitch = ({onChange, initialState=false, disabled=false}) => {
  const classes = useStyles();
  const [state, setState] = useState(initialState);

  const onClick = () => {
    if (!disabled) {
      const newState = !state;
      setState(newState);
      onChange(newState);
    }
  };

  const mainClass = state ?
    disabled ?
      classnames(classes.ajSwitch, classes.ajSwitchActive, classes.ajSwitchDisabled, 'aj-switch'):
      classnames(classes.ajSwitch, classes.ajSwitchActive, 'aj-switch')
    :
    disabled ?
      classnames(classes.ajSwitch, classes.ajSwitchInactive, classes.ajSwitchDisabled, 'aj-switch'):
      classnames(classes.ajSwitch, classes.ajSwitchInactive, 'aj-switch');

  const headClass = state ?
    classnames(classes.ajSwitchHead, classes.ajSwitchHeadActive, 'aj-switch-head') :
    classnames(classes.ajSwitchHead, classes.ajSwitchHeadInactive, 'aj-switch-head');

  const tailClass = state ?
    classnames(classes.ajSwitchTail, classes.ajSwitchTailActive, 'aj-switch-tail') :
    classnames(classes.ajSwitchTail, classes.ajSwitchTailInactive, 'aj-switch-tail');

  return (
    <div className={mainClass} onClick={onClick}>
      <div className={headClass}> </div>
      <div className={tailClass}> </div>
    </div>
  );
};

AJSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialState: PropTypes.bool,
  disabled: PropTypes.bool
};

export default AJSwitch;
