/**
 * Stylesheet for the AJTextButton component using JSS.
 * Author: Andrew Jarombek
 * Date: 12/30/2019
 */

import globalStyles from '../globalStyles';

export default {
  ajTextButton: {
    padding: '10px',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'background-color 0.25s ease',

    '& button': {
      ...globalStyles.robotoRegular,
      display: 'block',
      border: 'none',
      backgroundColor: 'transparent',

      '&:focus': {
        outline: 'none'
      }
    }
  },
  ajTextButtonEnabled: {
    cursor: 'pointer',

    '&:active': {
      backgroundColor: '#f5f5f5'
    },

    '& button': {
      cursor: 'pointer',
      color: '#555',
      transition: 'color 0.25s ease',

      '&:active': {
        color: '#222'
      }
    }
  },
  ajTextButtonDisabled: {
    cursor: 'not-allowed',

    '& button': {
      cursor: 'not-allowed',
      color: '#999'
    }
  }
};
