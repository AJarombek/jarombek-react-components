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
    height: 30,
    padding: 5,
    border: '1px solid #BBB',
    borderRadius: 3,
    alignItems: 'center'
  },
  ajSelectDisabled: {
    backgroundColor: '#EEE',
    cursor: 'not-allowed'
  },
  ajSelectList: {
    position: 'absolute',
    cursor: 'pointer',
    margin: 0,
    padding: 0,
    top: 50,

    '& > li': {
      listStyleType: 'none',
      padding: '10px 6px',
      textAlign: 'center',

      '&:hover': {
        backgroundColor: '#d2d2d2'
      }
    }
  }
};
