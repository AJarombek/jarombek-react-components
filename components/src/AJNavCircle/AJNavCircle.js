/**
 * Reusable navigation circle component which can be used on its own or part of a parent component.
 * @author Andrew Jarombek
 * @since 12/26/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const AJNavCircle = ({direction, height="15px"}) => {
  const classes = useStyles({height});

  let pictureClass = '';
  /*switch (direction) {
    case 'up':

  }*/

  return (
    <div className={classes.ajNavCircle}>
      <figure>
        <img className={pictureClass} src="../assets/arrow.png"/>
      </figure>
    </div>
  );
};

AJNavCircle.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired
};

export default AJNavCircle;
