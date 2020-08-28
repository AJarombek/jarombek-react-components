/**
 * Stylesheet for the AJSelect component using JSS.
 * Author: Andrew Jarombek
 * Date: 8/27/2020
 */

import globalStyles from '../globalStyles';

export default {
  ajSelect: {
    display: 'flex'
  },
  ajSelectArrow: {
    ...globalStyles.elegantIcons,
    paddingLeft: 10
  },
  ajSelectLabel: {
    display: 'flex',
    position: 'relative',
    cursor: 'pointer',
    height: 50,
    padding: 10
  },
  ajSelectList: {
    position: 'absolute',
    cursor: 'pointer',

    '& > li': {
      listStyleType: 'none',

      '&:hover': {
        backgroundColor: '#d2d2d2'
      }
    }
  }
};
