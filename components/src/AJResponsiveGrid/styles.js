/**
 * Stylesheet for the AJResponsiveGrid component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/26/2019
 */

export default {
  ajResponsiveGrid: ({small, medium, large}) => ({
    display: 'grid; display:-ms-grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '20px',
    '-ms-grid-columns': '1fr 1fr 1fr',
    [`@media screen and (max-width: ${large}) and (min-width: ${medium})`]: {
      gridTemplateColumns: '1fr 1fr',
      gridGap: '20px',
      '-ms-grid-columns': '1fr 1fr'
    },
    [`@media screen and (max-width: ${medium}) and (min-width: ${small})`]: {
      gridTemplateColumns: '1fr',
      gridGap: '15px',
      '-ms-grid-columns': '1fr'
    },
    [`@media screen and (max-width: ${small})`]: {
      gridTemplateColumns: '1fr',
      gridGap: '10px',
      '-ms-grid-columns': '1fr'
    }
  })
};
