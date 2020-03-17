/**
 * Reusable navigation circle component which can be used on its own or part of a parent component.
 * @author Andrew Jarombek
 * @since 12/26/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';
import arrow from '../assets/arrow.png';

const useStyles = createUseStyles(styles);

/**
 * Component representing a navigational arrow.
 * @param direction The direction that the arrow points.  Options are 'up', 'down', 'left', 'right'.
 * @param height The height of the circle.
 * @param active Whether the circle is active and can be clicked.
 * @param onClick An action which occurs when the circle is clicked.
 * @return {*} React elements representing a navigational arrow and circle.
 */
const AJNavCircle = ({direction, height="25px", active=true, onClick}) => {
  const classes = useStyles({height});

  let circleClass;
  if (active) {
    circleClass = classnames('aj-nav-circle', classes.ajNavCircle, classes.active);
  } else {
    circleClass = classnames('aj-nav-circle', classes.ajNavCircle, classes.inactive);
    onClick = null;
  }

  let pictureClass = classes.img;
  switch (direction) {
    case 'up':
      pictureClass = classnames('nav-up', classes.up, classes.img);
      break;
    case 'down':
      pictureClass = classnames('nav-down', classes.down, classes.img);
      break;
    case 'left':
      pictureClass = classnames('nav-left', classes.left, classes.img);
      break;
    case 'right':
      pictureClass = classnames('nav-right', classes.right, classes.img);
      break;
  }

  return (
    <div className={circleClass} onClick={onClick}>
      <figure>
        <img className={pictureClass} src={arrow} />
      </figure>
    </div>
  );
};

AJNavCircle.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  height: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default AJNavCircle;
