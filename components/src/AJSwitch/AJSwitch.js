/**
 * Reusable switch that can be toggled between an 'on' and 'off' state.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJSwitch = ({disabled=false}) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.ajSwitch, 'aj-switch')}>
      <div className={classnames(classes.ajSwitchHead, 'aj-switch-head')}> </div>
      <div className={classnames(classes.ajSwitchTail, 'aj-switch-tail')}> </div>
    </div>
  );
};

AJSwitch.propTypes = {
  disabled: PropTypes.bool
};

export default AJSwitch;
