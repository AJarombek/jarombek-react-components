/**
 * Navigation circle component with text describing where the button navigates to.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import AJNavCircle from '../AJNavCircle/AJNavCircle';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJNavTextCircle = ({text, textSide='right', direction, height, active, onClick}) => {
  const classes = useStyles();

  let containerClasses;
  if (textSide === 'right') {
    containerClasses = classnames(classes.ajNavTextCircle, classes.textRight);
  } else {
    containerClasses = classnames(classes.ajNavTextCircle, classes.textLeft);
  }

  return (
    <div className={containerClasses}>
      <AJNavCircle direction={direction} height={height} active={active} onClick={onClick} />
      <div className={classes.description}>{text}</div>
    </div>
  );
};

AJNavTextCircle.propTypes = {
  text: PropTypes.string.isRequired,
  textSide: PropTypes.oneOf(['left', 'right']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  height: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default AJNavTextCircle;
