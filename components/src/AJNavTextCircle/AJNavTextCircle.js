/**
 * Navigation circle component with text describing where the button navigates to.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJNavTextCircle = () => {
  const classes = useStyles();

  return (
    <div>
    </div>
  );
};

AJNavTextCircle.propTypes = {

};

export default AJNavTextCircle;
