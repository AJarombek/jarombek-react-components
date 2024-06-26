/**
 * Reusable loading component which displays three horizontal dots.
 * @author Andrew Jarombek
 * @since 8/14/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

const useStyles = createUseStyles(styles);

const AJLoadingDots = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={classnames('aj-loading-dots', classes.container, className)}>
      <div className={classnames('aj-loading-circle', classes.circle, classes.first)} />
      <div className={classnames('aj-loading-circle', classes.circle, classes.second)} />
      <div className={classnames('aj-loading-circle', classes.circle, classes.third)} />
    </div>
  );
};

AJLoadingDots.propTypes = {
  className: PropTypes.string,
};

export default AJLoadingDots;
