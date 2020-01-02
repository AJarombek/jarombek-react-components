/**
 * Wrapper around the reusable switch component that displays an image for each state.
 * @author Andrew Jarombek
 * @since 1/1/2020
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';
import AJSwitch from '../AJSwitch/AJSwitch';

const useStyles = createUseStyles(styles);

/**
 * Component representing a toggleable switch with icons for each state.
 * @param offImageUrl The image representing the 'off' state of the switch.
 * @param onImageUrl The image representing the 'on' state of the switch.
 * @param onChange Function that is called when the switch is toggled.  The function takes a single
 * boolean argument, whose value is {@code true} if the switch is on and {@code false} if the
 * switch is off.
 * @param initialState The initial on/off state of the switch.
 * @param disabled Whether clicking on the switch changes its state.
 * @return {*} React elements representing a toggleable switch with icons.
 */
const AJSwitchIcon = ({offImageUrl, onImageUrl, onChange, initialState=false, disabled=false}) => {
  const classes = useStyles();

  const getOffIconClasses = (state) => {
    return state ?
      classnames(classes.ajSwitchIcon, classes.ajSwitchIconNotSelected, 'aj-switch-icon-off') :
      classnames(classes.ajSwitchIcon, 'aj-switch-icon-off');
  };

  const getOnIconClasses = (state) => {
    return state ?
      classnames(classes.ajSwitchIcon, 'aj-switch-icon-on') :
      classnames(classes.ajSwitchIcon, classes.ajSwitchIconNotSelected, 'aj-switch-icon-on');
  };

  const [offIconClasses, setOffIconClasses] = useState(getOffIconClasses(initialState));
  const [onIconClasses, setOnIconClasses] = useState(getOnIconClasses(initialState));

  const onSwitchChange = (state) => {
    setOffIconClasses(getOffIconClasses(state));
    setOnIconClasses(getOnIconClasses(state));

    if (typeof onChange === 'function') {
      onChange(state);
    }
  };

  return (
    <div className={classnames(classes.ajSwitchIconContainer, 'aj-switch-icon')}>
      <figure className={offIconClasses}>
        <img src={offImageUrl} />
      </figure>
      <AJSwitch onChange={onSwitchChange} initialState={initialState} disabled={disabled} />
      <figure className={onIconClasses}>
        <img src={onImageUrl} />
      </figure>
    </div>
  );
};

AJSwitchIcon.propTypes = {
  offImageUrl: PropTypes.string.isRequired,
  onImageUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialState: PropTypes.bool,
  disabled: PropTypes.bool
};

export default AJSwitchIcon;
