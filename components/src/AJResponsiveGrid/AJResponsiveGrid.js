/**
 * Reusable responsive grid component designed to fill an entire page.
 * @author Andrew Jarombek
 * @since 12/26/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import AJTextCard from '../AJTextCard/AJTextCard';
import {createUseStyles} from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const AJResponsiveGrid = ({items, smallBreakpoint='900px', mediumBreakpoint='1200px',
                            largeBreakpoint='2000px'}) => {
  const breakpoints = {
    small: smallBreakpoint,
    medium: mediumBreakpoint,
    large: largeBreakpoint
  };

  const classes = useStyles(breakpoints);

  return (
    <div className={classes.ajResponsiveGrid}>
      {items}
    </div>
  );
};

AJResponsiveGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.instanceOf(AJTextCard)
    ])
  ).isRequired,
  smallBreakpoint: PropTypes.string,
  mediumBreakpoint: PropTypes.string,
  largeBreakpoint: PropTypes.string
};

export default AJResponsiveGrid;
