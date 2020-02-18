/**
 * Navigation list used in mobile drop-downs.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

const useStyles = createUseStyles(styles);

const AJNavList = ({items}) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.ajNavList, 'aj-nav-list')}>

    </div>
  );
};

AJNavList.propTypes = {
  items: PropTypes.arrayOf().isRequired
};

export default AJNavList;
