/**
 * Stylesheet for the AJSwitchIcon component using JSS.
 * Author: Andrew Jarombek
 * Date: 1/1/2020
 */

export default {
  ajSwitchIconContainer: {
    display: 'flex',
    height: '30px',
    alignItems: 'center'
  },
  ajSwitchIcon: {
    height: '25px',
    width: '25px',
    margin: '0 10px',

    '& > img': {
      height: '100%',
      width: '100%'
    }
  },
  ajSwitchIconNotSelected: {
    filter: 'opacity(0.75) grayscale(1)'
  }
};
