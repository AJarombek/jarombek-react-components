/**
 * Grouping of AJButton components.
 * @author Andrew Jarombek
 * @since 10/23/2020
 */

import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles(styles);

const AJButtonGroup = ({ children, className }) => {
  const classes = useStyles();

  return <div className={classnames(classes.buttonGroup, className)}>{children}</div>;
};

AJButtonGroup.propTypes = {
  className: PropTypes.string,
};

export default AJButtonGroup;
