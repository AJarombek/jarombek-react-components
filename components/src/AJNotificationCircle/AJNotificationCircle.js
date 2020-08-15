/**
 * Reusable circle which displays a notification count.
 * @author Andrew Jarombek
 * @since 8/14/2020
 */

import React from 'react';
import PropTypes from "prop-types";
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

const useStyles = createUseStyles(styles);

const AJNotificationCircle = ({ count }) => {
  const classes = useStyles();

  return (
    <div className={classnames('aj-notification-circle', classes.container)}>
      <p className={classes.count}>{count}</p>
    </div>
  );
};

AJNotificationCircle.propTypes = {
  count: PropTypes.number
};

export default AJNotificationCircle;
