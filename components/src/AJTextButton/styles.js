/**
 * Stylesheet for the AJTextButton component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/30/2019
 */

import globalStyles from '../globalStyles';

export default {
  ajTextButton: {
    padding: '10px',
    transition: 'background-color 0.25s ease',

    '& button': {
      ...globalStyles.robotoRegular,
      display: 'block',
      backgroundColor: 'transparent'
    }
  },
  ajTextButtonEnabled: {
    '&:active': {
      backgroundColor: '#f5f5f5'
    },

    '& button': {
      color: '#555',
      transition: 'color 0.25s ease',

      '&:active': {
        color: '#222'
      }
    }
  },
  ajTextButtonDisabled: {
    '& button': {
      color: '#999'
    }
  }
};
