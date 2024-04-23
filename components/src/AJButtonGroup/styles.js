/**
 * Stylesheet for the AJButtonGroup component using JSS.
 * Author: Andrew Jarombek
 * Date: 10/23/2020
 */

export default {
  buttonGroup: {
    '& > div:not(:first-child):not(:last-child)': {
      borderRadius: 0,
    },
    '& > div:nth-child(n + 1)': {
      marginLeft: '2px',
    },
    '& > div:first-child': {
      borderRadius: '4px 0 0 4px',
    },
    '& > div:last-child': {
      borderRadius: '0 4px 4px 0',
    },
  },
};
