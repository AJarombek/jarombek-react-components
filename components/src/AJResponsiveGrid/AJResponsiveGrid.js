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
import classnames from 'classnames';

const useStyles = createUseStyles(styles);

/**
 * Component representing a responsive grid of cards.  This grid is designed to take up an entire
 * page, although it can be used in other scenarios as well.
 * @param items A list of components which will be displayed in the grid.  These components should
 * be instances of {@link ../AJTextCard/AJTextCard}.
 * @param smallBreakpoint The smallest screen size breakpoint in the responsive grid.
 * @param mediumBreakpoint A medium sized screen breakpoint in the responsive grid.
 * @param largeBreakpoint The largest screen size breakpoint in the responsive grid.
 * @return {*} React elements that represent a responsive grid of cards.
 * @constructor
 */
const AJResponsiveGrid = ({items, smallBreakpoint='600px', mediumBreakpoint='900px',
                            largeBreakpoint='1200px'}) => {
  const breakpoints = {
    small: smallBreakpoint,
    medium: mediumBreakpoint,
    large: largeBreakpoint
  };

  const classes = useStyles(breakpoints);

  return (
    <div className={classnames('aj-responsive-grid', classes.ajResponsiveGrid)}>
      {items}
    </div>
  );
};

AJResponsiveGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  smallBreakpoint: PropTypes.string,
  mediumBreakpoint: PropTypes.string,
  largeBreakpoint: PropTypes.string
};

export default AJResponsiveGrid;
