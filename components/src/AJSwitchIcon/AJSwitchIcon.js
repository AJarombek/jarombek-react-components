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

const AJSwitchIcon = ({offImageUrl, onImageUrl, onChange, initialState=false, disabled=false}) => {
  const classes = useStyles();

  return (
    <div className={classes.ajSwitchIcon}>
      <figure className={classes.ajSwitchOffImage}>
        <img src={offImageUrl} />
      </figure>
      <AJSwitch onChange={onChange} initialState={initialState} disabled={disabled} />
      <figure className={classes.ajSwitchOnImage}>
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
