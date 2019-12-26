/**
 * Reusable responsive grid component designed to fill an entire page.
 * @author Andrew Jarombek
 * @since 12/26/2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import AJTextCard from '../AJTextCard/AJTextCard';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  ajResponsiveGrid: {

  },
  desc: {

  }
});

const AJResponsiveGrid = ({items, asc=true}) => {
  const classes = useStyles();
  const gridClass = classes.ajResponsiveGrid;
  const orderClass = asc ? '' : ' desc';
  return (
    <div className={gridClass + orderClass}>
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
  asc: PropTypes.bool
};

export default AJResponsiveGrid;
