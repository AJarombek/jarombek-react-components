/**
 * Navigation circle component with text describing where the button navigates to.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import AJNavCircle from '../AJNavCircle/AJNavCircle';

import styles from './styles';

const useStyles = createUseStyles(styles);

/**
 * Component representing a navigational arrow with a text description.
 * @param text Contents of the text label.
 * @param textSide Side of the navigation circle to place the text.  Options are 'left' and 'right'.
 * @param direction The direction that the arrow points.  Options are 'up', 'down', 'left', 'right'.
 * @param height The height of the circle.
 * @param active Whether the circle is active and can be clicked.
 * @param onClick An action which occurs when the circle is clicked.
 * @param className Custom class attribute(s) attached to the component.
 * @return {*} React elements representing a navigational circle with text.
 */
const AJNavTextCircle = ({ text, textSide = 'right', direction, height, active, onClick, className }) => {
  const classes = useStyles();

  let containerClasses;
  if (textSide === 'right') {
    containerClasses = classnames(classes.ajNavTextCircle, classes.textRight, className);
  } else {
    containerClasses = classnames(classes.ajNavTextCircle, classes.textLeft, className);
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
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default AJNavTextCircle;
