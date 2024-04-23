/**
 * Stylesheet for the AJMobileHamburger component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/30/2019
 */

export default {
  ajMobileHamburger: {
    display: 'inline-block',
    cursor: 'pointer',
    height: '3px',
    width: '25px',
    padding: '10px 2px',

    '& > button': {
      display: 'block',
      padding: 0,
      border: 'none',
      backgroundColor: 'transparent',

      '&:focus': {
        outline: 'none',
      },

      '& > span, & > span:before, & > span:after': {
        height: '3px',
        width: '25px',
        borderRadius: '1px',
        display: 'block',
        cursor: 'pointer',
        backgroundColor: 'black',
        position: 'absolute',
        content: '""',
        transition: 'all 50ms ease',
      },

      '& > span:before': {
        top: '-8px',
      },

      '& > span:after': {
        top: '8px',
      },
    },
  },
  ajMobileHamburgerActive: {
    backgroundColor: 'transparent !important',

    '&:before': {
      top: '0 !important',
      transform: 'rotate(45deg)',
    },

    '&:after': {
      top: '0 !important',
      transform: 'rotate(-45deg)',
    },
  },
  ajMobileHamburgerInactive: {},
};
